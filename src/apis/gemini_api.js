// src/apis/gemini_api.js

const SERVER_URL = "https://gemini-server-m8bq.onrender.com";

/**
 * Gửi câu hỏi và xử lý luồng phản hồi
 * @param {string} userQuestion - Câu hỏi của người dùng
 * @param {function} onChunk - Hàm callback được gọi với mỗi đoạn văn bản mới
 */
export async function getChatbotResponseStream(userQuestion, onChunk) {
  try {
    const response = await fetch(`${SERVER_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: userQuestion }),
    });

    if (!response.ok) {
      // Đã thay đổi: Server gửi lỗi dưới dạng plain text, không phải JSON
      const errorText = await response.text();
      throw new Error(`Lỗi Server: ${response.status} - ${errorText}`);
    }

    // BẮT ĐẦU XỬ LÝ STREAM
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8"); // Dùng để chuyển bytes thành văn bản

    let done = false;

    while (!done) {
      // Bước quan trọng: Đọc một đoạn dữ liệu từ stream
      const { value, done: readerDone } = await reader.read();

      done = readerDone;

      if (value) {
        // Chuyển đổi bytes thành văn bản
        const chunk = decoder.decode(value, { stream: true });

        // 🎯 GỌI HÀM CALLBACK VỀ COMPONENT REACT
        onChunk(chunk);
      }
    }
  } catch (error) {
    console.error("Lỗi khi giao tiếp với Server Backend:", error);
    throw new Error("Không thể kết nối hoặc xử lý stream từ server.");
  }
}
