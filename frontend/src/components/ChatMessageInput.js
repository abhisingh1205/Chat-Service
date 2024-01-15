import React, {useState} from "react";

export default function ChatMessageInput() {
    const [inputValue, SetInputValue] = useState("")

    const HandleInputChange = (e) => {
        SetInputValue(e.target.value)
    }

    const handleSentMessage = () => {
        console.log("Message sent")
    }
  return (
    <div className="message-input">
      <textarea placeholder="Type your message" value={inputValue} onChange={HandleInputChange} />
      <button onClick={handleSentMessage}>Send</button>
    </div>
  );
}
