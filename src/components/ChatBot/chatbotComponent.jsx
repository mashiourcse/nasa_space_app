"use client";
import { ChatBOT } from "../../redux/Api/chatbot";
import { useState } from "react";
import { Card, Input, Button } from "antd";
import "tailwindcss/tailwind.css"; // Assuming Tailwind is already configured

export default function ChatbotComponent() {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setuserInput] = useState("");

  async function buttonHandler() {
    setChatHistory([...chatHistory, { user: userInput, bot: "..." }]);

    const chatbotdata = await ChatBOT(userInput);
    setChatHistory((prevChatHistory) => {
      const newChatHistory = [...prevChatHistory];
      newChatHistory[newChatHistory.length - 1] = {
        user: userInput,
        bot: chatbotdata,
      };
      return newChatHistory;
    });

    setuserInput("");
  }

  function handleChange(event) {
    setuserInput(event.target.value);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-lg">
        <Card
          title="Chatbot"
          className="shadow-lg rounded-lg mb-6"
          headStyle={{ backgroundColor: "#1890ff", color: "white" }}
          bodyStyle={{ backgroundColor: "#f5f5f5" }}
        >
          <div className="space-y-4">
            {chatHistory.map((chat, index) => (
              <Card key={index} className="bg-white shadow-md">
                <p>
                  <strong className="text-blue-600">User:</strong> {chat.user}
                </p>
                <p>
                  <strong className="text-green-600">Bot:</strong> {chat.bot}
                </p>
              </Card>
            ))}
          </div>
        </Card>
        <div className="flex flex-col items-center">
          <Input
            type="text"
            value={userInput}
            onChange={handleChange}
            placeholder="Ask your questions here..."
            className="w-full mb-4"
            required
          />
          <Button
            type="primary"
            onClick={buttonHandler}
            className="w-full bg-blue-500 hover:bg-blue-600"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
