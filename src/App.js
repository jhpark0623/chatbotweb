import "./App.css";
import config from "./component/config";
import MessageParser from "./component/MessageParser";
import ActionProvider from "./component/ActionProvider";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

function App() {
  return (
    <div className="relative h-[100vh]">
      <button
        className="rounded-full w-12 h-12 bg-black text-red-500 absolute bottom-5 right-5 text-xl"
        onClick={() =>
          document.querySelector("#chatbot")?.classList.toggle("hidden")
        }
      >
        ❤
      </button>
      <div id="chatbot" className="absolute bottom-20 right-5 hidden">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
}

export default App;
