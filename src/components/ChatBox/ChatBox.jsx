import React, { useState } from "react";
import { getChatbotResponseStream } from "../../apis/gemini_api"; // Điều chỉnh đường dẫn nếu cần
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

      // 2. Thêm placeholder và lấy ID tin nhắn mới
      const botMessageId = Date.now() + 1;
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: botMessageId,
          text: "🤖",
          sender: "bot",
          loading: true,
          isStreaming: true,
        },
      ]);

      try {
        // 3. GỌI API VÀ CUNG CẤP HÀM CALLBACK (onChunk)
        await getChatbotResponseStream(userQuestion, (chunk) => {
          // HÀM CALLBACK: Cập nhật tin nhắn mỗi khi có một đoạn văn bản mới
          setMessages((prevMessages) =>
            prevMessages.map((msg) =>
              msg.id === botMessageId
                ? { ...msg, text: msg.text + chunk } // 👈 NỐI THÊM CHUNK VÀO VĂN BẢN HIỆN TẠI
                : msg,
            ),
          );
        });

        // 4. KẾT THÚC STREAMING: Tắt trạng thái loading
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === botMessageId
              ? { ...msg, loading: false, isStreaming: false }
              : msg,
          ),
        );
      } catch (error) {
        console.error("Lỗi khi gửi tin nhắn:", error);
        // Xử lý lỗi
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === botMessageId
              ? {
                  ...msg,
                  text: "Xin lỗi, không thể xử lý yêu cầu.",
                  loading: false,
                  isStreaming: false,
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
            <h3>Chat với AI EDU</h3>
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
