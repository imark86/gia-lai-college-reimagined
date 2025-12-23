import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Users, BookOpen, Award, MapPin, Phone, Mail, GraduationCap, Target, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface KhoaInfo {
  id: string;
  name: string;
  description: string;
  history: string;
  mission: string;
  vision: string;
  image: string;
  staff: {
    total: number;
    professors: number;
    masters: number;
  };
  facilities: string[];
  achievements: string[];
  contact: {
    address: string;
    phone: string;
    email: string;
  };
  nganhList: {
    slug: string;
    name: string;
    degree: string;
    duration: string;
    image: string;
  }[];
}

const khoaData: Record<string, KhoaInfo> = {
  "dien-dien-tu-tin-hoc": {
    id: "dien-dien-tu-tin-hoc",
    name: "Khoa Điện - Điện tử - Tin học",
    description: "Khoa Điện - Điện tử - Tin học là một trong những khoa đào tạo mũi nhọn của Trường Cao đẳng Gia Lai, chuyên đào tạo nguồn nhân lực chất lượng cao trong lĩnh vực công nghệ điện, điện tử và công nghệ thông tin.",
    history: "Được thành lập từ năm 2000, Khoa đã có hơn 20 năm kinh nghiệm đào tạo với hàng ngàn sinh viên tốt nghiệp đang làm việc tại các doanh nghiệp trong và ngoài tỉnh.",
    mission: "Đào tạo nguồn nhân lực chất lượng cao, có kỹ năng thực hành tốt, đáp ứng nhu cầu của thị trường lao động trong lĩnh vực công nghệ.",
    vision: "Trở thành khoa đào tạo hàng đầu khu vực Tây Nguyên trong lĩnh vực điện - điện tử - tin học.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
    staff: { total: 35, professors: 5, masters: 18 },
    facilities: [
      "Phòng thực hành điện công nghiệp",
      "Phòng thực hành PLC & tự động hóa",
      "Phòng Lab máy tính hiện đại",
      "Xưởng thực hành điện tử",
      "Phòng thực hành mạng máy tính"
    ],
    achievements: [
      "Giải nhất cuộc thi tay nghề khu vực 2023",
      "100% sinh viên có việc làm sau tốt nghiệp",
      "Hợp tác đào tạo với FPT Software",
      "Chứng nhận ISO 9001:2015"
    ],
    contact: {
      address: "Khu Đô Thị Diên Phú-Diên Hồng, TP. Pleiku, Gia Lai",
      phone: "02696.296.999",
      email: "khoaddtth@cdgl.edu.vn"
    },
    nganhList: [
      { slug: "cong-nghe-thong-tin", name: "Công nghệ Thông tin", degree: "Cao đẳng", duration: "3 năm", image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/cntt.jpg" },
      { slug: "dien-cong-nghiep", name: "Điện công nghiệp", degree: "Cao đẳng", duration: "3 năm", image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/dien.jpg" },
      { slug: "dien-tu-cong-nghiep", name: "Điện tử công nghiệp", degree: "Cao đẳng", duration: "3 năm", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop" }
    ]
  },
  "dong-luc-may-nong-nghiep": {
    id: "dong-luc-may-nong-nghiep",
    name: "Khoa Động lực - Máy nông nghiệp",
    description: "Khoa Động lực - Máy nông nghiệp đào tạo kỹ thuật viên chuyên ngành ô tô, máy nông nghiệp đáp ứng nhu cầu phát triển nông nghiệp và công nghiệp của tỉnh Gia Lai.",
    history: "Tiền thân là Khoa Cơ khí động lực, được thành lập từ ngày đầu thành lập trường, có bề dày kinh nghiệm hơn 25 năm đào tạo.",
    mission: "Đào tạo kỹ thuật viên có tay nghề cao trong lĩnh vực sửa chữa, bảo dưỡng ô tô và máy nông nghiệp.",
    vision: "Là địa chỉ đào tạo uy tín hàng đầu khu vực Tây Nguyên trong lĩnh vực công nghệ ô tô và máy nông nghiệp.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=600&fit=crop",
    staff: { total: 28, professors: 3, masters: 12 },
    facilities: [
      "Xưởng thực hành ô tô đạt chuẩn Toyota",
      "Xưởng sửa chữa máy nông nghiệp",
      "Phòng chẩn đoán kỹ thuật hiện đại",
      "Bãi thực hành lái xe",
      "Phòng mô phỏng 3D"
    ],
    achievements: [
      "Đối tác đào tạo của Toyota Việt Nam",
      "Giải nhì nghề Công nghệ ô tô toàn quốc",
      "95% sinh viên có việc làm ngay sau tốt nghiệp",
      "Liên kết với 20+ doanh nghiệp ô tô"
    ],
    contact: {
      address: "Khu Đô Thị Diên Phú-Diên Hồng, TP. Pleiku, Gia Lai",
      phone: "02696.296.999",
      email: "khoadlmnn@cdgl.edu.vn"
    },
    nganhList: [
      { slug: "cong-nghe-o-to", name: "Công nghệ Ô tô", degree: "Cao đẳng", duration: "3 năm", image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/oto.jpg" },
      { slug: "may-nong-nghiep", name: "Máy nông nghiệp", degree: "Trung cấp", duration: "2 năm", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop" }
    ]
  },
  "co-khi-xay-dung": {
    id: "co-khi-xay-dung",
    name: "Khoa Cơ khí - Xây dựng",
    description: "Khoa Cơ khí - Xây dựng đào tạo kỹ thuật viên có tay nghề cao trong lĩnh vực gia công cơ khí, hàn công nghiệp và xây dựng dân dụng.",
    history: "Được thành lập từ năm 1998, Khoa đã đào tạo hàng nghìn kỹ thuật viên phục vụ cho các công trình xây dựng và nhà máy công nghiệp trong khu vực.",
    mission: "Đào tạo nguồn nhân lực cơ khí - xây dựng chất lượng cao, đáp ứng nhu cầu phát triển hạ tầng và công nghiệp.",
    vision: "Trở thành khoa đào tạo cơ khí - xây dựng uy tín nhất khu vực Tây Nguyên.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=600&fit=crop",
    staff: { total: 25, professors: 2, masters: 10 },
    facilities: [
      "Xưởng cơ khí với máy CNC hiện đại",
      "Xưởng hàn đạt tiêu chuẩn AWS",
      "Công trường thực hành xây dựng",
      "Phòng CAD/CAM",
      "Phòng đo lường kỹ thuật"
    ],
    achievements: [
      "Chứng chỉ hàn quốc tế AWS",
      "Hợp tác với các nhà thầu lớn",
      "Cơ hội xuất khẩu lao động Nhật Bản",
      "Giải nhất thi tay nghề hàn khu vực"
    ],
    contact: {
      address: "Khu Đô Thị Diên Phú-Diên Hồng, TP. Pleiku, Gia Lai",
      phone: "02696.296.999",
      email: "khoackkxd@cdgl.edu.vn"
    },
    nganhList: [
      { slug: "co-khi-che-tao", name: "Cơ khí chế tạo", degree: "Cao đẳng", duration: "3 năm", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop" },
      { slug: "han-cong-nghiep", name: "Hàn công nghiệp", degree: "Trung cấp", duration: "2 năm", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" },
      { slug: "xay-dung-dan-dung", name: "Xây dựng dân dụng", degree: "Cao đẳng", duration: "3 năm", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop" }
    ]
  },
  "y-duoc": {
    id: "y-duoc",
    name: "Khoa Y - Dược",
    description: "Khoa Y - Dược là một trong những khoa trọng điểm của trường, chuyên đào tạo nhân lực y tế chất lượng cao phục vụ cho ngành y tế khu vực Tây Nguyên.",
    history: "Được thành lập năm 2005, Khoa Y - Dược đã đào tạo hàng nghìn điều dưỡng viên, dược sĩ đang công tác tại các cơ sở y tế trong và ngoài tỉnh.",
    mission: "Đào tạo nhân lực y tế có đạo đức nghề nghiệp, tay nghề vững vàng, đáp ứng nhu cầu chăm sóc sức khỏe cộng đồng.",
    vision: "Là địa chỉ đào tạo y dược uy tín nhất khu vực Tây Nguyên.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
    staff: { total: 40, professors: 8, masters: 20 },
    facilities: [
      "Phòng thực hành điều dưỡng mô phỏng",
      "Phòng thực hành bào chế dược",
      "Phòng thí nghiệm sinh hóa",
      "Mô hình giải phẫu người",
      "Liên kết thực tập với 15+ bệnh viện"
    ],
    achievements: [
      "Giải nhất nghề Điều dưỡng toàn quốc 2023",
      "100% sinh viên có việc làm sau tốt nghiệp",
      "Hợp tác với Bệnh viện Đa khoa tỉnh",
      "Chương trình đào tạo đạt chuẩn Bộ Y tế"
    ],
    contact: {
      address: "Khu Đô Thị Diên Phú-Diên Hồng, TP. Pleiku, Gia Lai",
      phone: "02696.296.999",
      email: "khoayduoc@cdgl.edu.vn"
    },
    nganhList: [
      { slug: "dieu-duong", name: "Điều dưỡng", degree: "Cao đẳng", duration: "3 năm", image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/z4275741756974_52cb1c24b8a2d3e5c0bce7b8b5a4c3d2.jpg" },
      { slug: "duoc", name: "Dược", degree: "Cao đẳng", duration: "3 năm", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop" },
      { slug: "ho-sinh", name: "Hộ sinh", degree: "Cao đẳng", duration: "3 năm", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop" }
    ]
  },
  "nghiep-vu-du-lich": {
    id: "nghiep-vu-du-lich",
    name: "Khoa Nghiệp vụ - Du lịch",
    description: "Khoa Nghiệp vụ - Du lịch đào tạo nhân lực chất lượng cao cho ngành du lịch, nhà hàng khách sạn - một trong những ngành kinh tế mũi nhọn của tỉnh Gia Lai.",
    history: "Được thành lập năm 2010 để đáp ứng nhu cầu phát triển du lịch của tỉnh, Khoa đã đào tạo nhiều thế hệ nhân viên du lịch - khách sạn chuyên nghiệp.",
    mission: "Đào tạo nguồn nhân lực du lịch - khách sạn có kỹ năng nghề nghiệp cao, giao tiếp tốt, đáp ứng tiêu chuẩn quốc tế.",
    vision: "Trở thành địa chỉ đào tạo du lịch - khách sạn hàng đầu khu vực Tây Nguyên.",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1200&h=600&fit=crop",
    staff: { total: 22, professors: 2, masters: 10 },
    facilities: [
      "Phòng thực hành bếp đạt chuẩn quốc tế",
      "Phòng mô phỏng lễ tân khách sạn",
      "Phòng thực hành pha chế",
      "Phòng thực hành buồng phòng",
      "Liên kết thực tập với resort 4-5 sao"
    ],
    achievements: [
      "Giải ba nghề Nấu ăn toàn quốc",
      "Hợp tác với chuỗi khách sạn Mường Thanh",
      "90% sinh viên làm đúng ngành sau tốt nghiệp",
      "Chương trình đào tạo theo chuẩn VTOS"
    ],
    contact: {
      address: "Khu Đô Thị Diên Phú-Diên Hồng, TP. Pleiku, Gia Lai",
      phone: "02696.296.999",
      email: "khoanvdl@cdgl.edu.vn"
    },
    nganhList: [
      { slug: "ky-thuat-che-bien", name: "Kỹ thuật Chế biến món ăn", degree: "Cao đẳng", duration: "2.5 năm", image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/bep.jpg" },
      { slug: "quan-tri-khach-san", name: "Quản trị khách sạn", degree: "Cao đẳng", duration: "3 năm", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop" },
      { slug: "huong-dan-du-lich", name: "Hướng dẫn du lịch", degree: "Cao đẳng", duration: "3 năm", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop" }
    ]
  },
  "van-hoa-nghe-thuat": {
    id: "van-hoa-nghe-thuat",
    name: "Khoa Văn hóa - Nghệ thuật",
    description: "Khoa Văn hóa - Nghệ thuật đào tạo nhân lực trong lĩnh vực thiết kế đồ họa, mỹ thuật và văn hóa dân tộc, góp phần bảo tồn và phát huy văn hóa Tây Nguyên.",
    history: "Được thành lập năm 2008, Khoa luôn chú trọng kết hợp đào tạo chuyên môn với việc gìn giữ bản sắc văn hóa dân tộc Tây Nguyên.",
    mission: "Đào tạo nhân lực sáng tạo, có năng lực thẩm mỹ cao, đồng thời bảo tồn và phát huy giá trị văn hóa Tây Nguyên.",
    vision: "Là trung tâm đào tạo văn hóa - nghệ thuật và bảo tồn di sản văn hóa Tây Nguyên.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&h=600&fit=crop",
    staff: { total: 18, professors: 2, masters: 8 },
    facilities: [
      "Phòng thiết kế đồ họa máy tính",
      "Xưởng mỹ thuật tạo hình",
      "Studio chụp ảnh chuyên nghiệp",
      "Phòng biểu diễn nghệ thuật",
      "Bảo tàng mini văn hóa Tây Nguyên"
    ],
    achievements: [
      "Nhiều tác phẩm đạt giải tại Festival nghệ thuật",
      "Tham gia bảo tồn Di sản Cồng Chiêng",
      "Hợp tác với các agency thiết kế",
      "Sinh viên làm freelancer từ năm 2"
    ],
    contact: {
      address: "Khu Đô Thị Diên Phú-Diên Hồng, TP. Pleiku, Gia Lai",
      phone: "02696.296.999",
      email: "khoavhnt@cdgl.edu.vn"
    },
    nganhList: [
      { slug: "thiet-ke-do-hoa", name: "Thiết kế Đồ họa", degree: "Cao đẳng", duration: "2.5 năm", image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/thietke.jpg" },
      { slug: "my-thuat-tao-hinh", name: "Mỹ thuật tạo hình", degree: "Trung cấp", duration: "2 năm", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop" }
    ]
  },
  "nong-lam": {
    id: "nong-lam",
    name: "Khoa Nông Lâm",
    description: "Khoa Nông Lâm đào tạo kỹ thuật viên nông nghiệp, lâm nghiệp phục vụ cho sự phát triển nông nghiệp bền vững của tỉnh Gia Lai - một trong những vùng nông nghiệp trọng điểm của cả nước.",
    history: "Là một trong những khoa đầu tiên của trường, Khoa Nông Lâm có hơn 25 năm kinh nghiệm đào tạo nhân lực nông nghiệp.",
    mission: "Đào tạo kỹ thuật viên nông lâm nghiệp có kiến thức vững, kỹ năng thực hành tốt, góp phần phát triển nông nghiệp bền vững.",
    vision: "Là địa chỉ đào tạo nông lâm nghiệp uy tín nhất Tây Nguyên.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=600&fit=crop",
    staff: { total: 20, professors: 3, masters: 10 },
    facilities: [
      "Vườn thực nghiệm 5 hecta",
      "Trang trại chăn nuôi",
      "Phòng thí nghiệm sinh học",
      "Vườn ươm cây giống",
      "Hệ thống tưới tiêu hiện đại"
    ],
    achievements: [
      "Hợp tác với các công ty cà phê lớn",
      "Nghiên cứu giống cây trồng mới",
      "95% sinh viên có việc làm",
      "Chương trình thực tập tại trang trại"
    ],
    contact: {
      address: "Khu Đô Thị Diên Phú-Diên Hồng, TP. Pleiku, Gia Lai",
      phone: "02696.296.999",
      email: "khoanonglam@cdgl.edu.vn"
    },
    nganhList: [
      { slug: "trong-trot", name: "Trồng trọt", degree: "Cao đẳng", duration: "3 năm", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop" },
      { slug: "chan-nuoi", name: "Chăn nuôi", degree: "Trung cấp", duration: "2 năm", image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop" },
      { slug: "lam-nghiep", name: "Lâm nghiệp", degree: "Cao đẳng", duration: "3 năm", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop" }
    ]
  },
  "co-ban": {
    id: "co-ban",
    name: "Khoa Cơ bản",
    description: "Khoa Cơ bản phụ trách giảng dạy các môn học đại cương, ngoại ngữ, giáo dục thể chất cho toàn bộ sinh viên trong trường.",
    history: "Được thành lập cùng với trường, Khoa Cơ bản có vai trò quan trọng trong việc trang bị kiến thức nền tảng cho sinh viên.",
    mission: "Trang bị kiến thức cơ bản vững chắc, ngoại ngữ và kỹ năng mềm cho sinh viên.",
    vision: "Là nền tảng vững chắc cho sự phát triển toàn diện của sinh viên.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
    staff: { total: 30, professors: 5, masters: 15 },
    facilities: [
      "Phòng học ngoại ngữ multimedia",
      "Sân bãi thể dục thể thao",
      "Thư viện điện tử",
      "Phòng tin học đại cương",
      "Hội trường tổ chức sự kiện"
    ],
    achievements: [
      "Giải nhất Olympic Tiếng Anh cấp tỉnh",
      "Đội tuyển thể thao đạt nhiều giải cao",
      "Tổ chức thành công nhiều CLB sinh viên",
      "Chứng chỉ Tiếng Anh theo chuẩn TOEIC"
    ],
    contact: {
      address: "Khu Đô Thị Diên Phú-Diên Hồng, TP. Pleiku, Gia Lai",
      phone: "02696.296.999",
      email: "khoacoban@cdgl.edu.vn"
    },
    nganhList: []
  }
};

export default function KhoaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const khoa = slug ? khoaData[slug] : null;

  if (!khoa) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16 md:pt-20">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Không tìm thấy Khoa</h1>
            <p className="text-muted-foreground mb-8">Khoa bạn đang tìm kiếm không tồn tại.</p>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại trang chủ
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden">
          <img
            src={khoa.image}
            alt={khoa.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container mx-auto">
              <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại trang chủ
              </Link>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
              >
                {khoa.name}
              </motion.h1>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Giới thiệu</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{khoa.description}</p>
                  <p className="text-muted-foreground leading-relaxed">{khoa.history}</p>
                </div>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-2xl shadow-card border border-border/50">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="h-6 w-6 text-primary" />
                      <h3 className="font-bold text-foreground">Sứ mệnh</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{khoa.mission}</p>
                  </div>
                  <div className="bg-card p-6 rounded-2xl shadow-card border border-border/50">
                    <div className="flex items-center gap-3 mb-3">
                      <Building2 className="h-6 w-6 text-secondary" />
                      <h3 className="font-bold text-foreground">Tầm nhìn</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{khoa.vision}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl"
              >
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground">{khoa.staff.total}</p>
                <p className="text-sm text-muted-foreground">Giảng viên</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl"
              >
                <GraduationCap className="h-8 w-8 text-secondary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground">{khoa.staff.masters}</p>
                <p className="text-sm text-muted-foreground">Thạc sĩ</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl"
              >
                <BookOpen className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground">{khoa.nganhList.length}</p>
                <p className="text-sm text-muted-foreground">Ngành đào tạo</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl"
              >
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground">{khoa.achievements.length}</p>
                <p className="text-sm text-muted-foreground">Thành tích</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programs */}
        {khoa.nganhList.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Các ngành <span className="text-gradient">đào tạo</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Khám phá các ngành đào tạo của {khoa.name}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {khoa.nganhList.map((nganh, index) => (
                  <motion.div
                    key={nganh.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/nganh/${nganh.slug}`}
                      className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-primary/30"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={nganh.image}
                          alt={nganh.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {nganh.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="px-3 py-1 bg-primary/10 rounded-full text-primary font-medium">
                            {nganh.degree}
                          </span>
                          <span>{nganh.duration}</span>
                        </div>
                        <span className="inline-flex items-center text-sm font-semibold text-primary">
                          Xem chi tiết
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Facilities & Achievements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Facilities */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-3xl shadow-card border border-border/50"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-primary" />
                  Cơ sở vật chất
                </h3>
                <ul className="space-y-3">
                  {khoa.facilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-3xl shadow-card border border-border/50"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Award className="h-6 w-6 text-secondary" />
                  Thành tích nổi bật
                </h3>
                <ul className="space-y-3">
                  {khoa.achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">Liên hệ</h2>
              <div className="bg-card p-8 rounded-3xl shadow-card border border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{khoa.contact.address}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-muted-foreground">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>{khoa.contact.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>{khoa.contact.email}</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="https://cdgl.edu.vn/tuyen-sinh-2025/" target="_blank">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                      Đăng ký tư vấn ngay
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}