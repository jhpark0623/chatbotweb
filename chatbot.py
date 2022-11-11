from flask import Flask  # 서버 구현을 위한 Flask 객체 import
from flask import request
from flask_restx import Api, Resource  # Api 구현을 위한 Api 객체 import
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sentence_transformers import SentenceTransformer
import json
from flask_cors import CORS

app = Flask(__name__)  # Flask 객체 선언, 파라미터로 어플리케이션 패키지의 이름을 넣어줌.
api = Api(app)  # Flask 객체에 Api 객체 등록
CORS(app)

def cached_model():
    model = SentenceTransformer('jhgan/ko-sroberta-multitask')
    return model

def get_dataset():
    df = pd.read_csv('wellness_dataset.csv')
    df['embedding'] = df['embedding'].apply(json.loads)
    return df

model = cached_model()
df = get_dataset()

        
@api.route('/chatbot/<string:user_input>')
class chatbot(Resource):
    def get(self, user_input):  # GET 요청시 리턴 값에 해당 하는 dict를 JSON 형태로 반환
        embedding = model.encode(user_input)

        df['distance'] = df['embedding'].map(lambda x: cosine_similarity([embedding], [x]).squeeze())
        answer = df.loc[df['distance'].idxmax()]

        return {"response":answer['챗봇']}


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)