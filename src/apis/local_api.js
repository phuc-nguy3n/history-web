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
          "https://images.unsplash.com/photo-1761839258605-d1b118266ccc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        date: "2024-08-15",
        title: "Văn Miếu - Quốc Tử Giám (Hà Nội): Trường đại học đầu tiên của Việt Nam.",
        author: "Nguyễn Thụy Mộc Nhiên",
        excerpt:
          "Từ thời xưa, đây là nơi được rất nhiều học sinh, sinh viên từ khắp nơi đến cầu thi cử, đỗ đạt.",
        content:
          "Nội dung chi tiết về nền văn minh Lưỡng Hà. Đây là nơi các thành tựu đầu tiên về chữ viết (chữ hình nêm), các bộ luật (Bộ luật Hammurabi), và các thành phố có tổ chức đầu tiên trên thế giới đã ra đời. Nền văn minh này phát triển rực rỡ dọc theo hai con sông Tigris và Euphrates.",
        img1: "https://ik.imagekit.io/tvlk/blog/2022/11/go-and-share-van-mieu-quoc-tu-giam-ha-noi-1.jpg?tr=q-70,c-at_max,w-500,h-250,dpr-2",
        img2: "https://ik.imagekit.io/tvlk/blog/2022/11/go-and-share-van-mieu-quoc-tu-giam-ha-noi-1-1024x683.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2",
        content2: "Văn Miếu – Quốc Tử Giám không chỉ là một di tích lịch sử mà còn là biểu tượng của nền giáo dục và văn hóa lâu đời của Việt Nam. Được xây dựng vào năm 1070 dưới thời vua Lý Thánh Tông, ban đầu là nơi thờ các bậc hiền triết, đạo sĩ của Nho giáo. Năm 1076, Quốc Tử Giám được thành lập ngay trong khuôn viên Văn Miếu, trở thành trường đại học đầu tiên của Việt Nam, chuyên đào tạo con em hoàng tộc và các gia đình quý tộc. Sau này, trường mở rộng cửa cho những học trò tài năng từ khắp nơi trong cả nước, trở thành trung tâm giáo dục quan trọng nhất của quốc gia trong suốt nhiều thế kỷ. Các bia đá tại đây, ghi danh các tiến sĩ đã đỗ đạt trong các kỳ thi, là một minh chứng sống động cho truyền thống hiếu học và tôn sư trọng đạo của dân tộc Việt Nam.",
      },
      {
        id: 102,
        href: "#",
        thumbnail:
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=1200",
        date: "2024-07-20",
        title: "Ai Cập cổ đại và sông Nile",
        author: "Gemini",
        excerpt:
          "Câu chuyện về các pharaoh, kim tự tháp và nền nông nghiệp ven sông Nile.",
        content:
          "Ai Cập cổ đại là một trong những nền văn minh vĩ đại nhất, phát triển xung quanh dòng sông Nile màu mỡ. Các Pharaoh cai trị với quyền lực tối cao, cho xây dựng những kim tự tháp vĩ đại làm lăng mộ. Tôn giáo và tín ngưỡng về thế giới bên kia đóng một vai trò cực kỳ quan trọng trong đời sống của họ.",
        img1: "",
        img2: "",
        content2: "",
      },
      {
        id: 103,
        href: "#",
        thumbnail:
          "https://images.unsplash.com/photo-1761872936220-1531e97a158a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
        date: "2024-06-02",
        title: "Hy Lạp cổ đại: cái nôi dân chủ",
        author: "Gemini",
        excerpt:
          "Tư tưởng triết học, khoa học và nghệ thuật đặt nền móng cho văn minh phương Tây.",
        content:
          "Từ Athens, khái niệm 'dân chủ' đã ra đời. Các nhà triết học vĩ đại như Socrates, Plato, và Aristotle đã đặt ra những câu hỏi nền tảng về sự tồn tại và đạo đức. Nền văn minh Hy Lạp cổ đại cũng để lại di sản đồ sộ về nghệ thuật, kiến trúc (đền Parthenon), và khoa học.",
        img1: "",
        img2: "",
        content2: "",
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
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=1200",
        date: "2024-05-10",
        title: "Đế chế Byzantine và di sản",
        author: "Gemini",
        excerpt:
          "Cầu nối giữa cổ đại và hiện đại, lưu giữ tri thức và nghệ thuật phương Đông - phương Tây.",
        content:
          "Sau sự sụp đổ của Đế chế La Mã phía Tây, Đế chế Byzantine (Đông La Mã) với thủ đô Constantinople đã tiếp tục tồn tại thêm một thiên niên kỷ. Nó không chỉ là một trung tâm thương mại sầm uất mà còn là nơi lưu giữ và phát triển di sản của Hy Lạp và La Mã, đóng vai trò là cầu nối quan trọng giữa các nền văn minh.",
        img1: "",
        img2: "",
        content2: "",
      },
      {
        id: 202,
        href: "#",
        thumbnail:
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200",
        date: "2024-04-18",
        title: "Châu Âu thời phong kiến",
        author: "Gemini",
        excerpt:
          "Cấu trúc xã hội phong kiến và mối quan hệ lãnh chúa - nông nô trong nhiều thế kỷ.",
        content:
          "Xã hội châu Âu thời Trung cổ được đặc trưng bởi hệ thống phong kiến, nơi các lãnh chúa sở hữu đất đai và bảo vệ các nông nô. Đổi lại, nông nô làm việc trên đất của lãnh chúa. Nhà thờ Công giáo có ảnh hưởng sâu rộng đến mọi mặt của đời sống.",
        img1: "",
        img2: "",
        content2: "",
      },
      {
        id: 203,
        href: "#",
        thumbnail:
          "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=1200",
        date: "2024-03-22",
        title: "Các cuộc Thập tự chinh",
        author: "Gemini",
        excerpt:
          "Xung đột tôn giáo, thương mại và giao lưu văn hóa giữa Đông và Tây.",
        content:
          "Các cuộc Thập tự chinh là một loạt các cuộc chiến tranh tôn giáo do Giáo hội Công giáo ở châu Âu phát động, với mục tiêu chính là giành lại Đất Thánh từ tay người Hồi giáo. Dù mục tiêu tôn giáo không hoàn toàn đạt được, chúng đã thúc đẩy mạnh mẽ thương mại và trao đổi văn hóa giữa phương Đông và phương Tây.",
        img1: "",
        img2: "",
        content2: "",
      },
    ],
  },
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
        title: "Cách mạng công nghiệp",
        author: "Gemini",
        excerpt:
          "Sự bùng nổ công nghệ, đô thị hóa và những thay đổi sâu rộng về kinh tế - xã hội.",
        content:
          "Bắt đầu ở Anh vào thế kỷ 18, Cách mạng Công nghiệp đã thay đổi hoàn toàn bộ mặt thế giới với các phát minh như máy hơi nước và máy dệt. Sản xuất hàng loạt ra đời, các thành phố phát triển nhanh chóng, và một trật tự xã hội mới được hình thành.",
        img1: "",
        img2: "",
        content2: "",
      },
      {
        id: 302,
        href: "#",
        thumbnail:
          "https://images.unsplash.com/photo-1472437774355-71ab6752b434?auto=format&fit=crop&q=80&w=1200",
        date: "2024-01-12",
        title: "Thế chiến thứ nhất",
        author: "Gemini",
        excerpt:
          "Nguyên nhân, diễn biến và hệ quả địa chính trị của cuộc chiến toàn cầu đầu tiên.",
        content:
          "Thế chiến thứ nhất (1914-1918) là một cuộc xung đột toàn cầu thảm khốc, lôi kéo các cường quốc trên thế giới vào hai phe đối đầu. Cuộc chiến này không chỉ gây ra tổn thất nhân mạng khủng khiếp mà còn vẽ lại bản đồ chính trị thế giới, dẫn đến sự sụp đổ của nhiều đế chế.",
        img1: "",
        img2: "",
        content2: "",
      },
      {
        id: 303,
        href: "#",
        thumbnail:
          "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&q=80&w=1200",
        date: "2023-12-09",
        title: "Kỷ nguyên thông tin",
        author: "Gemini",
        excerpt:
          "Internet, toàn cầu hóa và sự chuyển dịch sang nền kinh tế tri thức.",
        content:
          "Sự ra đời của máy tính cá nhân và Internet đã mở ra Kỷ nguyên Thông tin. Toàn cầu hóa được thúc đẩy mạnh mẽ, và nền kinh tế thế giới dần chuyển dịch từ sản xuất công nghiệp sang dịch vụ và tri thức. Thông tin trở thành tài sản quý giá nhất.",
        img1: "",
        img2: "",
        content2: "",
      },
    ],
  },
};

// Renaming for clarity and backward compatibility if needed.
export const categoryPosts = postsData;

// Helpers to simulate async fetching of post data
export function fetchCategoryPosts(slug, delay = 400) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = postsData[slug]?.posts ?? [];
      resolve([...data]);
    }, delay);
  });
}

export function fetchHomepageSections(delay = 400) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Object.values(postsData).map((c) => ({
          title: c.title,
          posts: [...c.posts],
        })),
      );
    }, delay);
  });
}

// New function to fetch a single post by its ID
export function fetchPostById(id, delay = 300) {
  return new Promise((resolve) => {
    const postId = parseInt(id, 10);
    let foundPost = null;
    for (const categoryKey in postsData) {
      const category = postsData[categoryKey];
      const post = category.posts.find((p) => p.id === postId);
      if (post) {
        foundPost = {
          ...post,
          _category: category.title,
          _categorySlug: category.slug,
        };
        break;
      }
    }
    setTimeout(() => {
      resolve(foundPost);
    }, delay);
  });
}
