import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./Chatbot.css";

let API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

let lastRequestTime = 0;

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [specialty, setSpecialty] = useState("general");

  async function getBotResponse(usermessage) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastRequestTime;
    const timeRemaining = Math.max(0, 60000 - elapsedTime); // 60 seconds in milliseconds

    await new Promise((resolve) => setTimeout(resolve, timeRemaining));

    const systemMessage = `You are a helpful tutor specialized in ${specialty}. Your primary and only objective is to answer students' questions related to ${specialty}. Do not provide guidance or answers for topics outside of ${specialty}.`;

    const userMessageWithFocus = `As a ${specialty} tutor, ${usermessage}`;

    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: systemMessage,
          },
          {
            role: "user",
            content: userMessageWithFocus,
          },
        ],
        max_tokens: 150,
        n: 1,
        temperature: 0.2,
      });

      lastRequestTime = Date.now();

      const botMessage = completion.data.choices[0].message.content.trim();
      return botMessage;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        throw new Error("API rate limit exceeded. Please try again later.");
      } else {
        throw error;
      }
    }
  }

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
      <div className="chatbot-container">
        <div className="chatbot-specialty">
          <label htmlFor="specialty">Select Tutor Specialty: </label>
          <select
            id="specialty"
            value={specialty}
            onChange={(event) => setSpecialty(event.target.value)}
          >
            <option value="general">General</option>
            <option value="software development">Software Development</option>
            <option value="psychologyy">Psychology</option>
            <option value="mathematic">Mathematic</option>
            <option value="chemistry">Chemistry</option>
            <option value="history">History</option>
            <option value="geography">Geography</option>
            
          </select>
        </div>
      </div>
      <div className="chatbot-header">
        <h1>I will help you studying!</h1>
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot-message ${message.isBot ? "bot-message" : "user-message"} ${message.isError ? "error-message" : ""
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
        <button type="submit" disabled={!input.trim()}>Send</button>
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