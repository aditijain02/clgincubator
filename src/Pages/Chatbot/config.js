 import { createChatBotMessage } from "react-chatbot-kit";
 import React from "react";
 import Options from "./Chatbotcomponents/Options/Options"
const config = {
  initialMessages: [createChatBotMessage(`Hello how may I help you?`
  ),
],
  botName:"collegebot",

  widgets:[
    {
    widgetName:"options",
    widgetFunc:(props)=><Options{...props}/>,
    },
  ],


};
 
export default config;