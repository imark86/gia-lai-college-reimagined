import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Users, Award, Briefcase, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface NganhInfo {
  id: string;
  name: string;
  khoaName: string;
  description: string;
  duration: string;
  degree: string;
  careers: string[];
  subjects: string[];
  highlights: string[];
  relatedNganhs: string[];
}

const nganhData: Record<string, NganhInfo> = {
  "dien-dien-tu-tin-hoc": {
    id: "dien-dien-tu-tin-hoc",
    name: "Khoa Điện - Điện tử - Tin học",
    khoaName: "Khoa Điện - Điện tử - Tin học",
    description: "Khoa Điện - Điện tử - Tin học đào tạo nguồn nhân lực chất lượng cao trong các lĩnh vực điện công nghiệp, điện tử, và công nghệ thông tin. Sinh viên được trang bị kiến thức chuyên sâu và kỹ năng thực hành để đáp ứng nhu cầu của thị trường lao động.",
    duration: "2-3 năm",
    degree: "Cao đẳng",
    careers: [
      "Kỹ thuật viên điện công nghiệp",
      "Kỹ thuật viên điện tử",
      "Lập trình viên phần mềm",
      "Quản trị mạng máy tính",
      "Kỹ thuật viên bảo trì hệ thống",
      "Chuyên viên IT doanh nghiệp"
    ],
    subjects: [
      "Điện công nghiệp",
      "Điện tử công nghiệp",
      "Công nghệ thông tin",
      "Kỹ thuật máy tính",
      "Lập trình ứng dụng"
    ],
    highlights: [
      "Trang bị phòng thực hành hiện đại",
      "Đội ngũ giảng viên giàu kinh nghiệm",
      "Liên kết doanh nghiệp, cơ hội việc làm cao",
      "Chương trình đào tạo cập nhật theo công nghệ mới"
    ],
    relatedNganhs: ["co-khi-xay-dung", "dong-luc-may-nong-nghiep"]
  },
  "dong-luc-may-nong-nghiep": {
    id: "dong-luc-may-nong-nghiep",
    name: "Khoa Động lực - Máy nông nghiệp",
    khoaName: "Khoa Động lực - Máy nông nghiệp",
    description: "Khoa Động lực - Máy nông nghiệp đào tạo kỹ thuật viên chuyên về sửa chữa, bảo dưỡng các loại động cơ, máy móc nông nghiệp. Đây là ngành học có nhu cầu cao tại khu vực Tây Nguyên với nền nông nghiệp phát triển.",
    duration: "2-3 năm",
    degree: "Cao đẳng",
    careers: [
      "Kỹ thuật viên sửa chữa ô tô",
      "Kỹ thuật viên máy nông nghiệp",
      "Kỹ thuật viên máy xây dựng",
      "Quản lý gara ô tô",
      "Tư vấn kỹ thuật xe máy, ô tô"
    ],
    subjects: [
      "Công nghệ ô tô",
      "Sửa chữa máy nông nghiệp",
      "Kỹ thuật động cơ đốt trong",
      "Điện ô tô",
      "Bảo dưỡng phương tiện"
    ],
    highlights: [
      "Xưởng thực hành đầy đủ thiết bị",
      "Hợp tác với các garage, đại lý xe lớn",
      "Cơ hội việc làm ngay sau tốt nghiệp",
      "Phù hợp với nhu cầu khu vực Tây Nguyên"
    ],
    relatedNganhs: ["co-khi-xay-dung", "dien-dien-tu-tin-hoc"]
  },
  "co-khi-xay-dung": {
    id: "co-khi-xay-dung",
    name: "Khoa Cơ khí - Xây dựng",
    khoaName: "Khoa Cơ khí - Xây dựng",
    description: "Khoa Cơ khí - Xây dựng đào tạo nguồn nhân lực trong lĩnh vực cơ khí chế tạo, gia công kim loại và xây dựng dân dụng. Sinh viên được đào tạo kỹ năng vận hành máy móc, thiết kế và thi công công trình.",
    duration: "2-3 năm",
    degree: "Cao đẳng",
    careers: [
      "Kỹ thuật viên cơ khí",
      "Kỹ thuật viên xây dựng",
      "Thợ hàn công nghiệp",
      "Giám sát công trình",
      "Quản lý xưởng cơ khí"
    ],
    subjects: [
      "Hàn công nghiệp",
      "Cơ khí chế tạo",
      "Xây dựng dân dụng",
      "Thiết kế công trình",
      "Vật liệu xây dựng"
    ],
    highlights: [
      "Nhu cầu nhân lực cao",
      "Thu nhập ổn định sau tốt nghiệp",
      "Trang bị kỹ năng thực hành chuyên sâu",
      "Cơ hội làm việc tại các công trình lớn"
    ],
    relatedNganhs: ["dong-luc-may-nong-nghiep", "dien-dien-tu-tin-hoc"]
  },
  "van-hoa-nghe-thuat": {
    id: "van-hoa-nghe-thuat",
    name: "Khoa Văn hóa - Nghệ thuật",
    khoaName: "Khoa Văn hóa - Nghệ thuật",
    description: "Khoa Văn hóa - Nghệ thuật đào tạo nguồn nhân lực trong lĩnh vực nghệ thuật biểu diễn, âm nhạc, múa dân tộc và quản lý văn hóa. Bảo tồn và phát huy bản sắc văn hóa các dân tộc Tây Nguyên.",
    duration: "2-3 năm",
    degree: "Cao đẳng/Trung cấp",
    careers: [
      "Nghệ sĩ biểu diễn",
      "Giáo viên âm nhạc",
      "Biên đạo múa",
      "Quản lý văn hóa cơ sở",
      "Hướng dẫn viên du lịch văn hóa"
    ],
    subjects: [
      "Nghệ thuật biểu diễn",
      "Âm nhạc truyền thống",
      "Múa dân tộc",
      "Quản lý văn hóa",
      "Di sản văn hóa Tây Nguyên"
    ],
    highlights: [
      "Bảo tồn văn hóa dân tộc",
      "Cơ hội biểu diễn thực tế",
      "Đội ngũ nghệ sĩ, nghệ nhân giảng dạy",
      "Gắn kết du lịch và văn hóa địa phương"
    ],
    relatedNganhs: ["nghiep-vu-du-lich", "nong-lam"]
  },
  "nong-lam": {
    id: "nong-lam",
    name: "Khoa Nông Lâm",
    khoaName: "Khoa Nông Lâm",
    description: "Khoa Nông Lâm đào tạo kỹ thuật viên trong lĩnh vực nông nghiệp, lâm nghiệp và bảo vệ thực vật. Phù hợp với đặc thù kinh tế nông nghiệp của tỉnh Gia Lai và khu vực Tây Nguyên.",
    duration: "2-3 năm",
    degree: "Cao đẳng/Trung cấp",
    careers: [
      "Kỹ thuật viên nông nghiệp",
      "Kỹ thuật viên lâm nghiệp",
      "Chuyên viên bảo vệ thực vật",
      "Quản lý trang trại",
      "Khuyến nông viên"
    ],
    subjects: [
      "Trồng trọt",
      "Chăn nuôi",
      "Bảo vệ thực vật",
      "Kỹ thuật lâm sinh",
      "Nông nghiệp công nghệ cao"
    ],
    highlights: [
      "Gắn liền với kinh tế địa phương",
      "Thực hành tại các trang trại, vườn cây",
      "Hỗ trợ khởi nghiệp nông nghiệp",
      "Ứng dụng công nghệ trong nông nghiệp"
    ],
    relatedNganhs: ["dong-luc-may-nong-nghiep", "nghiep-vu-du-lich"]
  },
  "nghiep-vu-du-lich": {
    id: "nghiep-vu-du-lich",
    name: "Khoa Nghiệp vụ - Du lịch",
    khoaName: "Khoa Nghiệp vụ - Du lịch",
    description: "Khoa Nghiệp vụ - Du lịch đào tạo nguồn nhân lực trong lĩnh vực du lịch, nhà hàng khách sạn và kế toán doanh nghiệp. Đáp ứng nhu cầu phát triển du lịch của tỉnh Gia Lai.",
    duration: "2-3 năm",
    degree: "Cao đẳng",
    careers: [
      "Hướng dẫn viên du lịch",
      "Lễ tân khách sạn",
      "Quản lý nhà hàng",
      "Kế toán doanh nghiệp",
      "Chuyên viên kinh doanh du lịch"
    ],
    subjects: [
      "Nghiệp vụ hướng dẫn du lịch",
      "Quản trị khách sạn",
      "Kế toán doanh nghiệp",
      "Marketing du lịch",
      "Ngoại ngữ chuyên ngành"
    ],
    highlights: [
      "Tiềm năng du lịch Tây Nguyên lớn",
      "Thực tập tại các resort, khách sạn",
      "Đào tạo ngoại ngữ chuyên sâu",
      "Cơ hội việc làm đa dạng"
    ],
    relatedNganhs: ["van-hoa-nghe-thuat", "y-duoc"]
  },
  "y-duoc": {
    id: "y-duoc",
    name: "Khoa Y - Dược",
    khoaName: "Khoa Y - Dược",
    description: "Khoa Y - Dược đào tạo nguồn nhân lực y tế chất lượng cao, bao gồm điều dưỡng, dược sĩ và các chuyên ngành y tế khác. Đáp ứng nhu cầu chăm sóc sức khỏe của người dân địa phương.",
    duration: "2-3 năm",
    degree: "Cao đẳng",
    careers: [
      "Điều dưỡng viên",
      "Dược sĩ",
      "Kỹ thuật viên y tế",
      "Nhân viên nhà thuốc",
      "Chăm sóc sức khỏe cộng đồng"
    ],
    subjects: [
      "Điều dưỡng",
      "Dược học",
      "Giải phẫu sinh lý",
      "Chăm sóc bệnh nhân",
      "Dược lý học"
    ],
    highlights: [
      "Nhu cầu nhân lực y tế cao",
      "Thực tập tại các bệnh viện, phòng khám",
      "Đảm bảo việc làm sau tốt nghiệp",
      "Đóng góp cho sức khỏe cộng đồng"
    ],
    relatedNganhs: ["nghiep-vu-du-lich", "nong-lam"]
  },
  "co-ban": {
    id: "co-ban",
    name: "Khoa Cơ bản",
    khoaName: "Khoa Cơ bản",
    description: "Khoa Cơ bản đảm nhiệm giảng dạy các môn học đại cương, kiến thức nền tảng cho tất cả các ngành đào tạo trong trường. Xây dựng nền tảng vững chắc cho sinh viên.",
    duration: "Theo chương trình",
    degree: "Đại cương",
    careers: [
      "Nền tảng cho các ngành chuyên môn",
      "Tiếp tục học chuyên ngành"
    ],
    subjects: [
      "Toán cao cấp",
      "Vật lý đại cương",
      "Hóa học đại cương",
      "Tin học cơ bản",
      "Giáo dục thể chất",
      "Giáo dục quốc phòng"
    ],
    highlights: [
      "Xây dựng nền tảng kiến thức",
      "Phát triển tư duy logic",
      "Rèn luyện kỹ năng mềm",
      "Chuẩn bị cho học chuyên ngành"
    ],
    relatedNganhs: ["dien-dien-tu-tin-hoc", "y-duoc"]
  }
};

const allNganhs = Object.values(nganhData);

export default function NganhDetail() {
  const { slug } = useParams<{ slug: string }>();
  const nganh = slug ? nganhData[slug] : null;

  if (!nganh) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Không tìm thấy ngành học</h1>
            <Link to="/" className="text-primary hover:underline">Quay về trang chủ</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedNganhs = nganh.relatedNganhs
    .map(id => nganhData[id])
    .filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Quay lại trang chủ
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {nganh.name}
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                {nganh.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-12 -mt-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-elevated text-center"
              >
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Thời gian đào tạo</p>
                <p className="text-xl font-bold text-foreground">{nganh.duration}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl p-6 shadow-elevated text-center"
              >
                <Award className="h-8 w-8 text-secondary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Bằng cấp</p>
                <p className="text-xl font-bold text-foreground">{nganh.degree}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl p-6 shadow-elevated text-center"
              >
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">Hình thức</p>
                <p className="text-xl font-bold text-foreground">Chính quy</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Ngành đào tạo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 shadow-card"
                >
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Ngành đào tạo
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {nganh.subjects.map((subject, index) => (
                      <li key={index} className="flex items-center gap-2 text-foreground/80">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Cơ hội nghề nghiệp */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 shadow-card"
                >
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-secondary" />
                    Cơ hội nghề nghiệp
                  </h2>
                  <ul className="space-y-3">
                    {nganh.careers.map((career, index) => (
                      <li key={index} className="flex items-center gap-3 text-foreground/80">
                        <div className="h-2 w-2 rounded-full bg-secondary" />
                        {career}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Điểm nổi bật */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground"
                >
                  <h2 className="text-xl font-bold mb-4">Điểm nổi bật</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {nganh.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm font-bold">
                          ✓
                        </div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-secondary/10 rounded-2xl p-6 border border-secondary/20"
                >
                  <h3 className="text-lg font-bold text-foreground mb-4">Đăng ký tuyển sinh</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Đăng ký ngay để được tư vấn miễn phí về ngành học phù hợp với bạn.
                  </p>
                  <a
                    href="https://cdgl.edu.vn/dang-ky-truc-tuyen/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      Đăng ký ngay
                    </Button>
                  </a>
                  <div className="mt-4 pt-4 border-t border-border">
                    <a
                      href="tel:02693825001"
                      className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="font-medium">02693.825001</span>
                    </a>
                  </div>
                </motion.div>

                {/* Ngành liên quan */}
                {relatedNganhs.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-2xl p-6 shadow-card"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-4">Ngành học liên quan</h3>
                    <ul className="space-y-3">
                      {relatedNganhs.map((related) => (
                        <li key={related.id}>
                          <Link
                            to={`/nganh/${related.id}`}
                            className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                          >
                            <ChevronRight className="h-4 w-4" />
                            {related.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
