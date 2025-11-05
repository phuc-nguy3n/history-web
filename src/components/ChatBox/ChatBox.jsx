import React, { useState } from "react";
import { getChatbotResponse } from "../../apis/gemini_api"; // Điều chỉnh đường dẫn nếu cần
import "./ChatBox.css";

function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Xin chào! Tôi có thể giúp gì cho bạn?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Đảm bảo hàm là 'async'
  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const userMessage = { id: Date.now(), text: inputValue, sender: "user" };
      const userQuestion = inputValue;

      // 1. Hiển thị tin nhắn người dùng
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputValue("");

      // 2. Thêm placeholder 'Bot đang trả lời'
      const botPlaceholderId = Date.now() + 1;
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: botPlaceholderId,
          text: "🤖 Đang tìm kiếm thông tin...",
          sender: "bot",
          loading: true,
        },
      ]);

      try {
        // 3. GỌI API AN TOÀN ĐẾN SERVER NODE.JS
        const botAnswer = await getChatbotResponse(userQuestion);

        // 4. Cập nhật placeholder bằng câu trả lời thực
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === botPlaceholderId
              ? { ...msg, text: botAnswer, loading: false }
              : msg,
          ),
        );
      } catch (error) {
        console.error("Lỗi khi gửi tin nhắn:", error);
        // Cập nhật placeholder thành thông báo lỗi
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === botPlaceholderId
              ? {
                  ...msg,
                  text: "Xin lỗi, không thể kết nối đến chatbot.",
                  loading: false,
                }
              : msg,
          ),
        );
      }
    }
  };

  return (
    <div className="chatbox-container">
      {!isOpen && (
        <button className="chatbox-toggle" onClick={toggleChatBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}
      {isOpen && (
        <div className="chatbox">
          <div className="chatbox-header">
            <h3>Chat với Gemini</h3>
            <button className="chatbox-close" onClick={toggleChatBox}>
              &times;
            </button>
          </div>
          <div className="chatbox-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === "user" ? "user-message" : "bot-message"}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Gửi</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
