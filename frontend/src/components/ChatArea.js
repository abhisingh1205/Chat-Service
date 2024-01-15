import React from "react";
import ChatMessage from "./ChatMessage";
import ChatMessageInput from "./ChatMessageInput";
import withAuthentication from '../utils/withAuthentications'

function ChatArea() {
  return (
    <div className="chat-area">
      <div className="chat-header"></div>
      <div className="messages">
        <ChatMessage text="Hello Whatsupp!" sent />
        <ChatMessage text="Hi!" recieved />
      </div>
      <ChatMessageInput />
    </div>
  );
}


export default withAuthentication(ChatArea)