// import './App.css';
// import logo from './logo2.svg';
import React from 'react';
import Chatbot from './Chatbot';

function App() {
  return (
    <div className="App">
      <head>
        <title>Digital tutor Demonstration</title>
        <link rel="icon" type="image/x-icon" href='logo.jpg'></link>
      </head>
      <header className="App-header">
        <h1>Digital Tutor Demo</h1>
      </header>
      <main>
        <Chatbot />
      </main>
    </div>
  );
}

export default App;