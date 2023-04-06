// const { Configuration, OpenAIApi } = require("openai");
// import {usermessage}

// const configuration = new Configuration({
//   apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);

// async function chat () {
// const completion = await openai.createCompletion({
//   model: "text-davinci-001",
//   prompt: usermessage,
// });
// console.log(completion.data.choices[0].text);
// }

// export default chat;

import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./Chatbot.css";
require('dotenv').config();
const {REACT_APP_OPENAI_API_KEY} = process.env

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

let lastRequestTime = 0;

async function getBotResponse(usermessage) {
  const currentTime = Date.now();
  const elapsedTime = currentTime - lastRequestTime;
  const timeRemaining = Math.max(0, 60000 - elapsedTime); // 60 seconds in milliseconds

  await new Promise((resolve) => setTimeout(resolve, timeRemaining));

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-001",
      prompt: usermessage,
    });

    lastRequestTime = Date.now();

    return completion.data.choices[0].text;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      throw new Error("API rate limit exceeded. Please try again later.");
    } else {
      throw error;
    }
  }
}

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userMessage = input.trim();
    if (!userMessage) {
      return;
    }
    setInput("");
    setMessages((prevMessages) => [...prevMessages, { text: userMessage, isBot: false }]);
    try {
      const botMessage = await getBotResponse(userMessage);
      setMessages((prevMessages) => [...prevMessages, { text: botMessage, isBot: true }]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: error.message, isBot: true, isError: true },
      ]);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h1>I Will help you studying!</h1>
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot-message ${message.isBot ? "bot-message" : "user-message"} ${
              message.isError ? "error-message" : ""
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message here"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

function PopUpWindow() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div>
      <button onClick={toggleChatbot}>Toggle Chatbot</button>
      {showChatbot && (
        <div className="chatbot-popup">
          <Chatbot />
        </div>
      )}
    </div>
  );
}

export default PopUpWindow;