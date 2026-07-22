"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages([
      ...messages,
      { role: "user", text: userMessage }
    ]);

    setMessage("");

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: userMessage
      })
    });

    const data = await response.json();

    setMessages(prev => [
      ...prev,
      {
        role: "ai",
        text: data.response
      }
    ]);
  }

  return (
    <main style={{
      minHeight: "100vh",
      padding: "30px",
      fontFamily: "Arial"
    }}>

      <h1>
        🤖 Mon IA
      </h1>

      <div style={{
        height: "500px",
        overflowY: "auto",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px"
      }}>

        {messages.map((msg, index) => (
          <p key={index}>
            <b>
              {msg.role === "user" ? "Toi : " : "IA : "}
            </b>
            {msg.text}
          </p>
        ))}

      </div>


      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Écris un message..."
        style={{
          width: "70%",
          padding: "15px"
        }}
      />

      <button
        onClick={sendMessage}
        style={{
          padding: "15px",
          marginLeft: "10px"
        }}
      >
        Envoyer
      </button>

    </main>
  );
}
