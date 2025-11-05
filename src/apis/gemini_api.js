import { GoogleGenAI } from "@google/genai";

// 1. THIẾT LẬP API KEY
// TỐT NHẤT là đọc từ biến môi trường (Environment Variable) để bảo mật
// eslint-disable-next-line no-undef
const GEMINI_API_KEY = import.meta.env.GEMINI_API_KEY;

// Khởi tạo client
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function getChatbotResponse(userQuestion) {
  try {
    const modelName = "gemini-2.5-flash";

    console.log(`Đang gửi yêu cầu với câu hỏi: ${userQuestion}`);

    // 2. GỌI API (API CALL)
    const response = await ai.models.generateContent({
      model: modelName,
      contents: userQuestion,
    });

    // 3. TRẢ VỀ KẾT QUẢ
    return response.text;
  } catch (error) {
    console.error("Lỗi khi gọi API Gemini:", error);
    return "Xin lỗi, đã xảy ra lỗi trong quá trình xử lý.";
  }
}

// Ví dụ về cách sử dụng hàm này trên server của bạn
// getChatbotResponse("Giải thích RAG trong 3 câu.")
//   .then(answer => console.log("Phản hồi:", answer));
