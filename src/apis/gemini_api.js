// Thay đổi file: src/apis/gemini_api.js

// SERVER_URL là địa chỉ của Server Node.js (Express) mà bạn vừa chạy
// Khi deploy, bạn cần thay đổi nó thành domain thực tế của server
const SERVER_URL = "https://gemini-server-m8bq.onrender.com";

/**
 * Gửi câu hỏi đến Server Node.js (Endpoint: /api/chat) để xử lý bằng Gemini API
 * @param {string} userQuestion - Câu hỏi của người dùng
 * @returns {Promise<string>} - Câu trả lời từ Chatbot
 */
export async function getChatbotResponse(userQuestion) {
  try {
    // 1. GỌI API ENDPOINT CỦA SERVER
    const response = await fetch(`${SERVER_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, // Gửi câu hỏi dưới dạng JSON
      body: JSON.stringify({ question: userQuestion }),
    });

    if (!response.ok) {
      // Xử lý lỗi từ Server Node.js (ví dụ: lỗi 500)
      throw new Error(`Lỗi HTTP: ${response.status}`);
    } // 2. Đọc kết quả JSON từ Server

    const data = await response.json(); // Server Node.js trả về: { answer: "..." }

    return data.answer;
  } catch (error) {
    console.error("Lỗi khi giao tiếp với Server Backend:", error);
    return "Xin lỗi, không thể kết nối đến dịch vụ chatbot.";
  }
}
