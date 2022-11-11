import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message)
      fetch(`http://localhost:5000/chatbot/${message}`)
        .then((res) => res.json())
        .then((json) => actions.handle(json.response));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
