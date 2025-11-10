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
          "https://ik.imagekit.io/tvlk/blog/2022/11/go-and-share-van-mieu-quoc-tu-giam-ha-noi-1.jpg?tr=q-70,c-at_max,w-500,h-250,dpr-2",
        date: "2024-08-15",
        title:
          "Văn Miếu - Quốc Tử Giám (Hà Nội): Trường đại học đầu tiên của Việt Nam.",
        //author: "Nguyễn Thụy Mộc Nhiên",

        content:
          "Nội dung chi tiết về nền văn minh Lưỡng Hà. Đây là nơi các thành tựu đầu tiên về chữ viết (chữ hình nêm), các bộ luật (Bộ luật Hammurabi), và các thành phố có tổ chức đầu tiên trên thế giới đã ra đời. Nền văn minh này phát triển rực rỡ dọc theo hai con sông Tigris và Euphrates.",
        img1: "https://ik.imagekit.io/tvlk/blog/2022/11/go-and-share-van-mieu-quoc-tu-giam-ha-noi-1.jpg?tr=q-70,c-at_max,w-500,h-250,dpr-2",
        img2: "https://ik.imagekit.io/tvlk/blog/2022/11/go-and-share-van-mieu-quoc-tu-giam-ha-noi-1-1024x683.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2",
        content2:
          "Văn Miếu – Quốc Tử Giám không chỉ là một di tích lịch sử mà còn là biểu tượng của nền giáo dục và văn hóa lâu đời của Việt Nam. Được xây dựng vào năm 1070 dưới thời vua Lý Thánh Tông, ban đầu là nơi thờ các bậc hiền triết, đạo sĩ của Nho giáo. Năm 1076, Quốc Tử Giám được thành lập ngay trong khuôn viên Văn Miếu, trở thành trường đại học đầu tiên của Việt Nam, chuyên đào tạo con em hoàng tộc và các gia đình quý tộc. Sau này, trường mở rộng cửa cho những học trò tài năng từ khắp nơi trong cả nước, trở thành trung tâm giáo dục quan trọng nhất của quốc gia trong suốt nhiều thế kỷ. Các bia đá tại đây, ghi danh các tiến sĩ đã đỗ đạt trong các kỳ thi, là một minh chứng sống động cho truyền thống hiếu học và tôn sư trọng đạo của dân tộc Việt Nam.",
      },
      {
        id: 102,
        href: "#",
        thumbnail:
          "https://www.vietnamairlines.com/~/media/SEO-images/2025%20SEO/Traffic%20TV/co-do-hoa-lu/co-do-hoa-lu.jpg",
        date: "2024-07-20",
        title:
          "Cố đô Hoa Lư (Ninh Bình): Cố đô xưa của Việt Nam thời nhà Đinh và nhà Tiền Lê",
        //author: "Gemini",
        content:
          "Cố đô Hoa Lư là đế đô đầu tiên của nước ta, tồn tại trong 42 năm. Mảnh đất này là nơi đã chứng kiến sự nghiệp dựng nước và giữ nước oai hùng của 12 năm triều Đinh (968 – 980), 29 năm triều Tiền Lê (980 – 1009) và đầu nhà Lý (1009 – 1010).Với địa thế đồi núi trùng điệp bao bọc xung quanh vành đai kinh đô như tấm bình phong vững chãi, cùng dòng Hoàng Long uốn khúc và cánh đồng Nho Quan, Gia Viễn với hào sâu, Hoa Lư là vùng đất có giá trị cao về mặt quân sự. Chính tại vùng đất này, năm 968, Đinh Bộ Lĩnh đã dẹp loạn 12 sứ quân, lên ngôi hoàng đế, lập ra nước Đại Cồ Việt oai hùng, và Hoa Lư trở thành trung tâm chính trị, đồng thời là đế đô đầu tiên của nước ta.Đến thời vua Lý Thái Tổ, ông đã đưa ra quyết định dời dô lịch sử, và Hoàng thành Thăng Long chính là nơi được lựa chọn khi nhận ra kinh đô Hoa Lư chật hẹp, khó mở mang thành đô và không phù hợp với vị thế đất nước lúc bấy giờ.",
        img1: "https://mia.vn/media/uploads/blog-du-lich/co-do-hoa-lu-dau-an-vang-son-cua-mot-thoi-dan-toc-oai-hung-7-1640596092.jpg",
        img2: "https://mia.vn/media/uploads/blog-du-lich/co-do-hoa-lu-dau-an-vang-son-cua-mot-thoi-dan-toc-oai-hung-2-1640595875.jpg",
        content2: "Chính quyết định mang tính chất lịch sử này đã kết thúc những tháng ngày Hoa Lư là vùng đất cố đô của nước ta. Tuy nhiên, hệ thống triều đình và cơ sở vật chất của Hoàng thành Thăng Long lúc bấy giờ đều thừa hưởng từ kinh đô Hoa Lư ngày trước. Tuy sau này các vua không sinh sống tại đây nữa, nhưng Cố đô Hoa Lư vẫn tiếp tục được xây dựng những công trình kiến trúc kiên cố với đền, chùa, đền thờ và được bảo tồn cho đến tận ngày nay.",
      },
      {
        id: 103,
        href: "#",
        thumbnail:
          "https://image.vietgoing.com/destination/large/vietgoing_roc2101114012.webp",
        date: "2024-06-02",
        title:
          "Đền Hùng (Phú Thọ): Nơi thờ các vị vua Hùng, tổ tiên của dân tộc",
        //author: "Gemini",
        content:
          "Khu Di tích lịch sử Đền Hùng thuộc thôn Cổ Tích, xã Hy Cương, tỉnh Phú Thọ; là nơi thờ các vua Hùng có công dựng nước, Tổ Tiên của dân tộc Việt Nam. Ngày xa xưa vùng đất này là khu vực trung tâm của nước Văn Lang, nằm giữa hai dòng sông giống như hai dãy hào thiên nhiên khổng lồ bao bọc lấy cố đô xưa của các vua Hùng. Phía đông với các dãy núi non trung điệp. Vùng đất này có nhiều sông ngòi ao hồ, đồi núi, lại có những cánh đồng màu mỡ phì nhiêu do phù xa của ba con sông bồi đắp, vừa thuận lợi cho cuộc sống định canh định cư, vừa thuận lợi cho việc phòng thủ hay rút lui khi xảy ra các cuộc xung đột bộ lạc.Hiện nay dấu vết cư trú của dân cư thời đại các vua Hùng còn để lại trong hàng chục di chỉ khảo cổ học, được phân bố dày đặc từ huyện Lâm Thao tới ngã ba Bạch Hạc - Việt Trì. Những di chỉ khảo cổ học đo là minh chứng một thời đại, với nghề luyện kim đồng thau và trồng lúa nước của một nền văn minh nông nghiệp, đã từng tồn tại trược công nguyên hàng nghìn năm.Đền Hùng là trung tâm, là tiêu điểm về thời đại các vua Hùng, các ngôi đền thờ vua Hùng nằm trên núi Nghĩa Lĩnh (còn gọi là núi Cả theo địa phương hay các tên khác: núi Hùng, núi Hy Cương), có độ cao 175 mét so với mặt nước biển. Trước kia khu vực này là cánh rừng già nhiệt đới. Ngày nay núi Hùng vẫn giữ dáng vẻ của rừng tự nhiên với nhiều thế hệ cây tầng khác nhau, gồm 150 loài thảo mộc, thuộc 35 họ, trong đó còn lại một số cây đại thụ lớn như: đa, thông, thiên tuế, trò v.v...",
        img1: "https://denhung.phutho.gov.vn/cdn/salt/media/bef877015afb7522eb7480ffbe222fe9.png",
        img2: "https://denhung.phutho.gov.vn/cdn/salt/media/6fe90b9d381c21115cd681fc0e19ea53.png",
        content2:
          "Núi Hùng trông xa giống như đầu của một con rồng lớn hướng về Nam, mình rồng uốn lượn thành núi Trọc, núi Vặn, núi Pheo. Phía sau núi Hùng có những quả đồi lớn san sát nối liền dài tới 10km giống như đàn voi chầu về Đất Tổ, phía trước là ngã ba Bạch Hạc với sự hợp lưu của ba dòng sông lớn nhất miền Bắc: sông Hồng, sông Lô, sông Đà tạo ra một vùng nước lớn mênh mông, từ đó có những quả đồi thấp lô nhô giống như một đàn rùa nước bò lên trầu về Nghĩa Lĩnh. Phía Đông xa mờ là dãy Tam Đảo trùng điệp (núi mẹ), xa về phía nam là dãy Ba Vì cao ngất (núi cha) tụ lại. Sát núi Hùng còn có những quả đồi như phượng cặp như (Tiên Kiên), hổ phục (Khang Phụ - Chu Hoá). Cảnh thế ngoạn mục hùng vĩ, đất đầy khí thiêng của sơn thuỷ tụ hội. Đứng trên đỉnh cao Nghĩa Lĩnh ta có thể bao quát toàn bộ một vùng rộng lớn với cảnh đẹp của sơn thuỷ hữu tình. Tương truyền vua Hùng đã đi khắp mọi miền, về đây chọn làm đất đóng đô.",
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
          "https://lophocnguvan.com/wp-content/uploads/thuyet-minh-di-tich-ngo-mon-hoang-thanh-hue.jpg",
        date: "2024-05-10",
        title:
          "Quần thể di tích Cố đô Huế (Thừa Thiên Huế): Di sản văn hóa thế giới, kinh đô của triều Nguyễn",
        //author: "Gemini",
        content:
          "Từ năm 1306, sau cuộc hôn phối giữa công chúa Huyền Trân (Nhà Trần) với vua Chàm là Chế Mân, vùng đất Châu Ô, Châu Lý (gồm Quảng Trị, Thừa Thiên Huế và một phần của Bắc Quảng Nam ngày nay) được lấy tên là Thuận Hoá. Vào nửa cuối thế kỷ 15, thời vua Lê Thánh Tông, địa danh Huế lần đầu tiên xuất hiện. Năm 1636 phủ Chúa Nguyễn đặt ở Kim Long (Huế), tới năm 1687 dời về Phú Xuân – thành Nội Huế ngày nay. Vào những năm đầu của thế kỷ 18, Phú Xuân là trung tâm chính trị, kinh tế, văn hoá của xứ “Đàng Trong”. Từ năm 1788 đến 1801, Phú Xuân trở thành kinh đô của triều đại Tây Sơn.Từ 1802 đến 1945, Huế là kinh đô của nước Việt Nam thống nhất dưới sự trị vì của 13 đời vua nhà Nguyễn. Cũng vào thời gian này, tại đây đã hình thành các công trình kiến trúc lịch sử văn hoá có giá trị mà tiêu biểu là kinh thành Huế, đặc biệt là khu Đại Nội (có 253 công trình), 7 cụm lăng tẩm của 9 vị vua Nguyễn, đàn Nam Giao, Hổ Quyền, điện Hòn Chén.",
        img1: "https://hoangthanhthanglong.vn/wp-content/uploads/2023/05/codohue.jpg",
        img2: "https://hoangthanhthanglong.vn/wp-content/uploads/2023/05/codohue2.jpg",
        content2:
          "Bên bờ Bắc của con sông Hương, hệ thống kiến trúc biểu thị cho quyền uy của chế độ trung ương tập quyền Nguyễn là ba tòa thành: Kinh thành Huế, Hoàng thành Huế, Tử cấm thành Huế, lồng vào nhau được bố trí đăng đối trên một trục dọc xuyên suốt từ mặt Nam ra mặt Bắc. Hệ thống thành quách ở đây là một mẫu mực của sự kết hợp hài hòa nhuần nhuyễn giữa tinh hoa kiến trúc Đông và Tây, được đặt trong một khung cảnh thiên nhiên kỳ tú với nhiều yếu tố biểu tượng sẵn có tự nhiên đến mức người ta mặc nhiên xem đó là những bộ phận của Kinh thành Huế – đó là núi Ngự Bình, dòng Hương Giang, cồn Giã Viên, cồn Bộc Thanh…Hoàng thành giới hạn bởi một vòng tường thành gần vuông với mỗi chiều xấp xỉ 600m với 4 cổng ra vào mà độc đáo nhất thường được lấy làm biểu tượng của Cố đô: Ngọ Môn, chính là khu vực hành chính tối cao của triều đình Nguyễn. Bên trong Hoàng thành, hơi dịch về phía sau, là Tử cấm thành – nơi ăn ở sinh hoạt của Hoàng gia.",
      },
      {
        id: 202,
        href: "#",
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/commons/0/07/2024_-_M%E1%BB%B9_S%C6%A1n_Group_B%2C_C_and_D_-_img_23.jpg",
        date: "2024-04-18",
        title:
          "Thánh địa Mỹ Sơn (Quảng Nam): Thánh địa Hindu cổ của vương quốc Chăm Pa",
        //author: "Gemini",
        content:
          "Thánh địa Mỹ Sơn là quần thể đền tháp Chăm Pa cổ kính nằm sâu trong thung lũng xanh mát thuộc xã Duy Phú, huyện Duy Xuyên, tỉnh Quảng Nam. Nơi đây được xây dựng từ thế kỷ IV đến thế kỷ XIII với đường kính rộng khoảng 2km bao gồm 70 ngôi đền tháp khác nhau. Thánh địa Mỹ Sơn nổi bật với kiến trúc độc đáo, hoa văn tinh xảo và kỹ thuật xây dựng đến nay vẫn còn nhiều điều bí ẩn.Vẻ đẹp cổ kính pha lẫn huyền bí đã đưa Mỹ Sơn trở thành điểm đến thu hút du khách trong và ngoài nước. Năm 1995, khu di tích chính thức được UNESCO công nhận là Di sản Văn hóa Thế giới, góp phần khẳng định giá trị to lớn của nền văn minh Chăm trong dòng chảy lịch sử Việt Nam.",
        img1: "https://s3-ap-southeast-1.amazonaws.com/cntatr-assets-ap-southeast-1-250226768838-55a62c9399d4d8a6/2023/09/thanh-dia-my-son-31.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2",
        img2: "https://lins.com.vn/wp-content/uploads/2025/06/di-san-van-hoa-thanh-dia-my-son-7.jpg",
        content2:
          "Một trong những điều khiến nhiều người tò mò khi tìm hiểu Thánh địa Mỹ Sơn có gì đặc biệt chính là quần thể hơn 70 ngôi đền tháp cổ mang đậm dấu ấn Chăm Pa. Mỗi đền tháp được chạm khắc công phu với các họa tiết tôn giáo, tượng thần linh và bia ký khắc bằng tiếng Phạn lẫn tiếng Chăm cổ.Khu di tích từng bị vùi lấp trong rừng sâu và bị thế giới lãng quên cho đến năm 1898, khi một nhà khảo cổ người Pháp cùng cộng sự của ông tình cờ phát hiện ra nơi này nằm ẩn mình giữa lòng thung lũng, được bao bọc bởi hai dãy núi xanh thẳm.Một điều kỳ diệu khác khiến thánh địa Mỹ Sơn trở thành công trình kiến trúc độc nhất vô nhị là kỹ thuật xây dựng đền tháp bằng gạch cổ. Những viên gạch được nung, cắt và xếp khít lên nhau một cách hoàn hảo, mà không cần dùng vôi vữa hay bất kỳ chất kết dính nào. Dù đã trải qua hàng nghìn năm, phần lớn các tháp vẫn kiên cố, chỉ xuất hiện một vài vết nứt nhỏ, chứng minh sự tài tình của người Chăm cổ trong việc xây dựng và bảo tồn kiến trúc.",
      },
      {
        id: 203,
        href: "#",
        thumbnail:
          "https://cdn3.ivivu.com/2012/06/thanh-nha-ho-thanh-hoa-1.jpg",
        date: "2024-03-22",
        title:
          "Thành nhà Hồ (Thanh Hóa): Công trình kiến trúc độc đáo thời nhà Trần",
        //author: "Gemini",
        content:
          "Nhà Hồ do Hồ Quý Ly, một đại quý tộc và đại thần nhà Trần thành lập. Từ năm 1371, Hồ Quý Ly, khi đó mang họ Lê, được tham gia triều chính nhà Trần, được vua Trần Nghệ Tông đưa ông lên làm Khu mật đại sứ, lại gả em gái là công chúa Huy Ninh. Thời hậu kỳ nhà Trần, mọi việc chính sự do Thượng hoàng Trần Nghệ Tông quyết định. Trần Nghệ Tông lại rất trọng dụng Hồ Quý Ly nên khi về già thường ủy thác mọi việc cho Quý Ly quyết định. Dần dần binh quyền của Quý Ly ngày một lớn. Năm 1394 Trần Nghệ Tông mất, Hồ Quý Ly được phong làm Phụ chính Thái sư nhiếp chính, nắm trọn quyền hành trong nước.",
        img1: "https://r2.nucuoimekong.com/wp-content/uploads/thanh-nha-ho-vinh-loc.jpg",
        img2: "https://r2.nucuoimekong.com/wp-content/uploads/gioi-thieu-ve-thanh-nha-ho.jpg",
        content2:
          "Sau khi vua Trần dời đô từ Thăng Long vào Thanh Hóa và giết hàng loạt quần thần trung thành với nhà Trần, tháng 2 năm 1400, Hồ Quý Ly truất ngôi của cháu ngoại là Trần Thiếu Đế, tự lên làm vua lấy quốc hiệu là Đại Ngu (Ngu có nghĩa Yên Vui), lập nên nhà Hồ.Hổ Quý Ly từ khi nắm quyền lực của triều Trần cho đến khi sáng lập vương triều mới đã ban hành và thực thi một loạt chính sách cải cách về các mặt chính trị, kinh tế, tài chính, văn hóa, giáo dục nhằm khắc phục cuộc khủng hoảng của chế độ quân chủ cuối triều Trần, củng cố chính quyền trung ương và chuẩn bị cho cuộc kháng chiến chống Minh. Trong lịch sử chế độ quân chủ Việt Nam, Hồ Quý Ly là một nhà cải cách lớn với một hệ thống chính sách và biện pháp khá toàn diện, táo bạo.",
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
          "https://ik.imagekit.io/tvlk/blog/2025/04/dinh-doc-lap.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2",
        date: "2024-02-05",
        title:
          "Dinh Độc Lập (TP.HCM): Biểu tượng của miền Nam Việt Nam, nơi chấm dứt chiến tranh năm 1975",
        //author: "Gemini",

        content:
          "Công trình do viên thống đốc Pháp tại miền Nam Việt Nam là La Grandière đặt viên đá đầu tiên khởi công xây dựng ngày 23/2/1868 và hoàn tất vào năm 1871. Từ 1887 – 1945, nhiều đời toàn quyền Pháp đã sử dụng dinh thự này làm nơi ở và làm việc trong suốt thời kỳ xâm lược Ðông Dương.",
        img1: "",
        img2: "",
        content2: "",
      },
      {
        id: 302,
        href: "#",
        thumbnail:
          "https://tphcm.cdnchinhphu.vn/zoom/600_315/Uploads/images/2017/B%E1%BA%A3o%20t%C3%A0ng%20ch%E1%BB%A9ng%20t%C3%ADch%20chi%E1%BA%BFn%20tranh.jpg",
        date: "2024-01-12",
        title:
          "Bảo tàng Chứng tích chiến tranh (TP.HCM): Nơi trưng bày những chứng tích đau thương của chiến tranh",
        //author: "Gemini",
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
          "https://vetaucondao.vn/wp-content/uploads/2019/09/30-nam-hoat-dong-bi-mat-cua-chuong-cop-tai-nha-tu-con-dao.jpg",
        date: "2023-12-09",
        title:
          "Nhà tù Côn Đảo (Bà Rịa - Vũng Tàu): Một trong những nhà tù khắc nghiệt nhất thời Pháp thuộc và Mỹ",
        //author: "Gemini",
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
