import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Stethoscope, 
  Car, 
  Cpu, 
  ChefHat, 
  Leaf, 
  ArrowRight,
  Users,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Music,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";

const careerGroups = [
  {
    id: "cong-nghe-ky-thuat",
    name: "Nhóm ngành Công nghệ - Kỹ thuật",
    description: "Đào tạo kỹ sư, kỹ thuật viên trong lĩnh vực điện, cơ khí, ô tô, CNTT, xây dựng",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    level: "Cao đẳng & Trung cấp",
    programs: [
      { name: "Điện công nghiệp", slug: "dien-cong-nghiep", code: "6520227", hot: true },
      { name: "Vận hành, sửa chữa thiết bị lạnh", slug: "thiet-bi-lanh", code: "6520255", hot: false },
      { name: "Công nghệ kỹ thuật cơ khí", slug: "cong-nghe-co-khi", code: "6510201", hot: false },
      { name: "Công nghệ ô tô", slug: "cong-nghe-o-to", code: "6510216", hot: true },
      { name: "Công nghệ thông tin (ƯDPM)", slug: "cong-nghe-thong-tin", code: "6480202", hot: true },
      { name: "Công nghệ hàn", slug: "cong-nghe-han", code: "6520123", hot: false },
      { name: "Kỹ thuật xây dựng", slug: "ky-thuat-xay-dung", code: "6580201", hot: false }
    ],
    stats: { duration: "2.5 năm", tuition: "768.200 - 801.550đ/tháng" }
  },
  {
    id: "y-duoc",
    name: "Nhóm ngành Y - Dược",
    description: "Đào tạo nhân lực y tế chất lượng cao, chăm sóc sức khỏe cộng đồng",
    icon: Stethoscope,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
    level: "Cao đẳng",
    programs: [
      { name: "Dược", slug: "duoc", code: "6720201", hot: true },
      { name: "Điều dưỡng", slug: "dieu-duong", code: "6720301", hot: true }
    ],
    stats: { duration: "3 năm", tuition: "934.950đ/tháng" }
  },
  {
    id: "nghiep-vu-du-lich",
    name: "Nhóm ngành Nghiệp vụ - Du lịch",
    description: "Đào tạo nhân lực cho ngành du lịch, khách sạn, kế toán, công tác xã hội",
    icon: ChefHat,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    level: "Cao đẳng & Trung cấp",
    programs: [
      { name: "Công tác xã hội", slug: "cong-tac-xa-hoi", code: "6760101", hot: false },
      { name: "Quản trị khách sạn", slug: "quan-tri-khach-san", code: "6810201", hot: true },
      { name: "Kế toán doanh nghiệp", slug: "ke-toan-doanh-nghiep", code: "6340302", hot: false },
      { name: "Kỹ thuật chế biến món ăn", slug: "ky-thuat-che-bien", code: "5810207", hot: true },
      { name: "May thời trang", slug: "may-thoi-trang", code: "5540205", hot: false }
    ],
    stats: { duration: "2 - 2.5 năm", tuition: "534.750 - 668.150đ/tháng" }
  },
  {
    id: "nong-lam-nghiep",
    name: "Nhóm ngành Nông - Lâm nghiệp",
    description: "Đào tạo kỹ thuật viên nông nghiệp, thú y phục vụ phát triển bền vững Tây Nguyên",
    icon: Leaf,
    color: "from-green-500 to-lime-500",
    bgColor: "bg-green-500/10",
    level: "Cao đẳng & Trung cấp",
    programs: [
      { name: "Bảo vệ thực vật", slug: "bao-ve-thuc-vat", code: "6620116", hot: false },
      { name: "Thú y (Trung cấp)", slug: "thu-y", code: "5640101", hot: false }
    ],
    stats: { duration: "2 - 2.5 năm", tuition: "552.000đ/tháng" }
  },
  {
    id: "van-hoa-nghe-thuat",
    name: "Nhóm ngành Văn hoá Nghệ thuật",
    description: "Đào tạo nghệ sĩ, diễn viên và cán bộ văn hóa phục vụ bản sắc Tây Nguyên",
    icon: Music,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10",
    level: "Trung cấp",
    programs: [
      { name: "Biểu diễn nhạc cụ PT (Guitar)", slug: "bieu-dien-guitar", code: "5210217", hot: false },
      { name: "Biểu diễn nhạc cụ TT (T'Rưng)", slug: "bieu-dien-trung", code: "5210216", hot: true },
      { name: "Organ", slug: "organ", code: "5210224", hot: false },
      { name: "Thanh nhạc", slug: "thanh-nhac", code: "5210225", hot: false },
      { name: "Nghệ thuật biểu diễn múa", slug: "nghe-thuat-mua", code: "5210207", hot: false }
    ],
    stats: { duration: "2 - 3 năm", tuition: "534.750đ/tháng" }
  },
  {
    id: "trung-cap-ky-thuat",
    name: "Trung cấp Kỹ thuật - Máy nông nghiệp",
    description: "Đào tạo kỹ thuật viên điện, ô tô, hàn, máy nông nghiệp, CNTT trình độ trung cấp",
    icon: Car,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    level: "Trung cấp",
    programs: [
      { name: "Điện công nghiệp", slug: "tc-dien-cong-nghiep", code: "5520227", hot: false },
      { name: "Công nghệ ô tô", slug: "tc-cong-nghe-o-to", code: "5510216", hot: true },
      { name: "Công nghệ hàn", slug: "tc-cong-nghe-han", code: "5520123", hot: false },
      { name: "Kỹ thuật máy nông nghiệp", slug: "ky-thuat-may-nong-nghiep", code: "5520102", hot: false },
      { name: "Công nghệ thông tin", slug: "tc-cong-nghe-thong-tin", code: "5480202", hot: false },
      { name: "Kỹ thuật xây dựng", slug: "tc-ky-thuat-xay-dung", code: "5580201", hot: false }
    ],
    stats: { duration: "2 năm", tuition: "Theo nhóm ngành" }
  }
];

export function CareerGroupsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Tây Nguyên inspired pattern */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Tuyển sinh năm 2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nhóm ngành <span className="text-gradient">đào tạo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            13 ngành Cao đẳng + 14 ngành Trung cấp. Xét tuyển học bạ hoặc điểm thi tốt nghiệp THPT/THCS
          </p>
          
          {/* Toggle Button */}
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="gap-2 px-6 py-3 rounded-full border-primary/30 hover:bg-primary/10"
          >
            {isExpanded ? (
              <>
                <span>Thu gọn</span>
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                <span>Xem 6 nhóm ngành đào tạo</span>
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </Button>
        </motion.div>

        {/* Career Groups Grid - Collapsible */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {careerGroups.map((group, index) => (
                  <motion.div
                    key={group.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative bg-card rounded-3xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50 hover:border-primary/30 overflow-hidden"
                  >
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${group.bgColor} mb-4`}>
                      <group.icon className="h-7 w-7 text-primary" />
                    </div>

                    {/* Level badge */}
                    <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full mb-2">
                      {group.level}
                    </span>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {group.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {group.description}
                    </p>

                    {/* Programs list */}
                    <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
                      {group.programs.map((program) => (
                        <Link
                          key={program.slug}
                          to={`/nganh/${program.slug}`}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                          <span className="truncate">{program.name}</span>
                          {program.hot && (
                            <span className="px-1.5 py-0.5 bg-accent/20 text-accent text-xs rounded-full flex-shrink-0">HOT</span>
                          )}
                        </Link>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Users className="h-3.5 w-3.5" />
                        <span>Thời gian: {group.stats.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <TrendingUp className="h-3.5 w-3.5" />
                        <span>Học phí: {group.stats.tuition}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 p-6 bg-muted/50 rounded-2xl border border-border/50"
              >
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Thông tin tuyển sinh 2026
                </h4>
                <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Cao đẳng:</strong> Tốt nghiệp THPT, xét điểm thi TN THPT hoặc học bạ lớp 12</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Trung cấp:</strong> Tốt nghiệp THCS/THPT hoặc tương đương</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Thời gian nhận hồ sơ:</strong> Từ 01/3/2026 đến 30/11/2026</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Nhập học dự kiến:</strong> Tháng 9/2026</span>
                  </li>
                </ul>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center mt-8"
              >
                <Link
                  to="https://cdgl.edu.vn/tuyen-sinh-2025/"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg"
                >
                  Đăng ký tư vấn ngay
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <p className="mt-4 text-sm text-muted-foreground">
                  Hotline: <a href="tel:02696296999" className="text-primary font-medium">0269.6296.999</a> | 
                  Liên kết đào tạo ĐH: <a href="tel:02693501047" className="text-primary font-medium">0269.3501.047</a>
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
