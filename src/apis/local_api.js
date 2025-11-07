// Local mocked API for app data
// - Carousel slides data
// - Category posts data for CategorySection component

// =====================
// Carousel
// =====================
export const carouselSlides = [
  {
    src: "https://images.unsplash.com/photo-1494200483035-db7bc6aa5739?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    alt: "Vite",
    caption: "Vite Logo",
  },
  {
    src: "https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    alt: "React",
    caption: "React Logo",
  },
  {
    src: "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    alt: "Unsplash Sample",
    caption: "Sample photo from Unsplash",
  },
  {
    src: "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    alt: "History Landscape",
    caption: "Historic landscapes through time",
  },
];

// Simulate async API call for carousel
export function fetchCarouselSlides(delay = 400) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...carouselSlides]), delay);
  });
}

// =====================
// Posts API
// =====================
// Structure: { id, href, thumbnail, date, title, author, excerpt, content }
export const postsData = {
  north: {
    slug: "north",
    title: "Lịch sử Miền Bắc",
    posts: [
      {
        id: 101,
        href: "#",
        thumbnail:
          "https://images.unsplash.com/photo-1575986933833-5a7e0a2d48a5?auto=format&fit=crop&q=80&w=1200",
        date: "2024-07-04",
        title: "Nền văn minh sông Hồng",
        author: "Gemini",
        excerpt:
          "Sự hình thành và phát triển của các nhà nước đầu tiên trên châu thổ sông Hồng.",
        content:
          "Nền văn minh sông Hồng là một trong những cái nôi của dân tộc Việt Nam, với các nền văn hóa nổi tiếng như Phùng Nguyên, Đồng Đậu, Gò Mun và Đông Sơn. Đây là thời kỳ hình thành các nhà nước sơ khai, với trống đồng Đông Sơn là biểu tượng cho quyền lực và sự phát triển kỹ thuật luyện kim.",
      },
      {
        id: 102,
        href: "#",
        thumbnail:
          "https://images.unsplash.com/photo-1610622328493-54b3896545b6?auto=format&fit=crop&q=80&w=1200",
        date: "2024-06-15",
        title: "Chiến thắng Bạch Đằng",
        author: "Gemini",
        excerpt:
          "Những trận thủy chiến đi vào huyền thoại trên sông Bạch Đằng.",
        content:
          "Sông Bạch Đằng đã chứng kiến ba trận thủy chiến lẫy lừng của dân tộc Việt Nam chống lại quân xâm lược phương Bắc. Các chiến công của Ngô Quyền (938), Lê Hoàn (981) và Trần Hưng Đạo (1288) đều thể hiện tài trí và tinh thần dũng cảm của người Việt, tận dụng địa thế và cọc gỗ để làm nên những chiến thắng vĩ đại.",
      },
      {
        id: 103,
        href: "#",
        thumbnail:
          "https://images.unsplash.com/photo-1542317189-809516301323?auto=format&fit=crop&q=80&w=1200",
        date: "2024-05-20",
        title: "Văn hóa Thăng Long - Hà Nội",
        author: "Gemini",
        excerpt:
          "Nghìn năm văn hiến với những di sản văn hóa vật thể và phi vật thể.",
        content:
          "Thăng Long - Hà Nội, thủ đô của Việt Nam, là trung tâm chính trị, kinh tế và văn hóa của cả nước trong hơn một nghìn năm. Nơi đây lưu giữ những giá trị văn hóa độc đáo, từ Văn Miếu - Quốc Tử Giám, khu phố cổ, đến các loại hình nghệ thuật truyền thống như ca trù, múa rối nước. Đây là mảnh đất hội tụ và lan tỏa tinh hoa văn hóa dân tộc.",
      },
    ],
  },

  central: {
    slug: "central",
    title: "Lịch sử Miền Trung",
    posts: [
      {
        id: 201,
        href: "#",
        thumbnail:
          "https://images.unsplash.com/photo-1589255379542-1c2a106e2417?auto=format&fit=crop&q=80&w=1200",
        date: "2024-04-18",
        title: "Vương quốc Chăm Pa",
        author: "Gemini",
        excerpt:
          "Di sản kiến trúc và điêu khắc độc đáo của một nền văn minh ven biển.",
        content:
          "Vương quốc Chăm Pa từng là một quốc gia hùng mạnh ở miền Trung Việt Nam, với nền văn hóa ảnh hưởng sâu sắc từ Ấn Độ. Các di tích còn lại như thánh địa Mỹ Sơn và các tháp Chăm dọc bờ biển là minh chứng cho một nền nghệ thuật kiến trúc và điêu khắc phát triển rực rỡ, đặc biệt là kỹ thuật xây dựng bằng gạch và các bức tượng sa thạch tinh xảo.",
      },
      {
        id: 202,
        href: "#",
        thumbnail:
          "https://images.unsplash.com/photo-1599596249334-110753fb69ab?auto=format&fit=crop&q=80&w=1200",
        date: "2024-03-29",
        title: "Cố đô Huế",
        author: "Gemini",
        excerpt:
          "Trung tâm chính trị và văn hóa của triều Nguyễn, triều đại phong kiến cuối cùng của Việt Nam.",
        content:
          "Cố đô Huế là nơi triều Nguyễn đặt kinh đô, xây dựng nên một quần thể kiến trúc cung đình tráng lệ gồm Hoàng thành, Tử cấm thành và các lăng tẩm. Huế không chỉ nổi tiếng với các công trình kiến trúc mà còn là một trung tâm văn hóa với nhã nhạc cung đình, ẩm thực tinh tế và một lối sống thanh lịch, nhẹ nhàng.",
      },
      {
        id: 203,
        href: "#",
        thumbnail:
          "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=1200",
        date: "2024-03-22",
        title: "Con đường di sản Miền Trung",
        author: "Gemini",
        excerpt:
          "Hành trình kết nối các di sản thế giới được UNESCO công nhận.",
        content:
          "Miền Trung Việt Nam là nơi tập trung nhiều di sản thế giới nhất cả nước. 'Con đường di sản' là một hành trình du lịch văn hóa nối liền các địa danh nổi tiếng như Cố đô Huế, Phố cổ Hội An, Thánh địa Mỹ Sơn và Vườn quốc gia Phong Nha - Kẻ Bàng, mang đến cho du khách những trải nghiệm sâu sắc về lịch sử, văn hóa và thiên nhiên.",
      },
    ],
  },
  southern: {
    slug: "southern",
    title: "Lịch sử Miền Nam",
    southern: {
      slug: "southern",
      title: "Lịch sử Miền Nam",
      posts: [
        {
          id: 301,
          href: "#",
          thumbnail:
            "https://images.unsplash.com/photo-1465326117523-6450112b60b2?auto=format&fit=crop&q=80&w=1200",
          date: "2024-02-05",
          title: "Văn hóa Óc Eo",
          author: "Gemini",
          excerpt:
            "Dấu ấn của vương quốc Phù Nam và mạng lưới thương mại quốc tế sầm uất.",
          content:
            "Văn hóa Óc Eo là một nền văn hóa khảo cổ ở đồng bằng sông Cửu Long, được cho là thuộc vương quốc Phù Nam. Các di vật tìm thấy cho thấy một xã hội phát triển, với các ngành nghề thủ công tinh xảo và mối quan hệ giao thương rộng rãi với La Mã, Ấn Độ và Trung Quốc qua con đường tơ lụa trên biển.",
        },
        {
          id: 302,
          href: "#",
          thumbnail:
            "https://images.unsplash.com/photo-1472437774355-71ab6752b434?auto=format&fit=crop&q=80&w=1200",
          date: "2024-01-12",
          title: "Quá trình khai phá và định cư",
          author: "Gemini",
          excerpt:
            "Cuộc Nam tiến của người Việt và sự hình thành vùng đất trù phú.",
          content:
            "Lịch sử miền Nam gắn liền với cuộc Nam tiến của người Việt từ thế kỷ 17. Qua nhiều thế hệ, vùng đất hoang sơ đã được khai phá, trở thành vựa lúa và trung tâm kinh tế năng động của cả nước. Quá trình này cũng tạo nên một nền văn hóa đa dạng, phóng khoáng, là sự giao thoa của nhiều dân tộc khác nhau.",
        },
        {
          id: 303,
          href: "#",
          thumbnail:
            "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&q=80&w=1200",
          date: "2023-12-09",
          title: "Sài Gòn - Hòn ngọc Viễn Đông",
          author: "Gemini",
          excerpt:
            "Lịch sử phát triển và vai trò trung tâm kinh tế của Sài Gòn (nay là TP.HCM).",
          content:
            "Từng được mệnh danh là 'Hòn ngọc Viễn Đông', Sài Gòn đã trải qua một lịch sử phát triển đầy biến động. Từ một thành phố thuộc địa của Pháp, Sài Gòn đã trở thành thủ đô của Việt Nam Cộng hòa và nay là trung tâm kinh tế lớn nhất, năng động nhất của Việt Nam, thể hiện sự hội nhập mạnh mẽ với thế giới.",
        },
      ],
    },
  },
};
