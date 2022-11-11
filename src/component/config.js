import { createChatBotMessage } from "react-chatbot-kit";

const botName = "chatbot";

const config = {
  initialMessages: [createChatBotMessage(`${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
