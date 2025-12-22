import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Car, Laptop, Wrench, ChefHat, Palette, Cog, BookOpen, Pill, Baby, Map, Building, Briefcase, Music, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Stethoscope,
    title: "Điều dưỡng",
    slug: "dieu-duong",
    description: "Đào tạo nhân lực y tế chất lượng cao, thực hành tại các bệnh viện lớn",
    duration: "3 năm",
    tuition: "12 triệu/năm",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Pill,
    title: "Dược",
    slug: "duoc",
    description: "Đào tạo dược sĩ tư vấn, bán thuốc và quản lý nhà thuốc",
    duration: "3 năm",
    tuition: "14 triệu/năm",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Car,
    title: "Công nghệ Ô tô",
    slug: "cong-nghe-o-to",
    description: "Sửa chữa, bảo dưỡng ô tô hiện đại với trang thiết bị tiên tiến",
    duration: "3 năm",
    tuition: "11 triệu/năm",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Laptop,
    title: "Công nghệ Thông tin",
    slug: "cong-nghe-thong-tin",
    description: "Lập trình, thiết kế web, quản trị mạng và an ninh mạng",
    duration: "3 năm",
    tuition: "12.5 triệu/năm",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Wrench,
    title: "Điện công nghiệp",
    slug: "dien-cong-nghiep",
    description: "Vận hành, sửa chữa hệ thống điện trong nhà máy, xí nghiệp",
    duration: "3 năm",
    tuition: "10.5 triệu/năm",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: ChefHat,
    title: "Kỹ thuật Chế biến",
    slug: "ky-thuat-che-bien",
    description: "Chế biến món ăn, quản lý nhà hàng khách sạn chuyên nghiệp",
    duration: "2.5 năm",
    tuition: "11.5 triệu/năm",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Palette,
    title: "Thiết kế Đồ họa",
    slug: "thiet-ke-do-hoa",
    description: "Thiết kế sáng tạo, đa phương tiện và truyền thông số",
    duration: "2.5 năm",
    tuition: "13 triệu/năm",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Cog,
    title: "Cơ khí chế tạo",
    slug: "co-khi-che-tao",
    description: "Gia công, chế tạo các sản phẩm cơ khí công nghiệp",
    duration: "3 năm",
    tuition: "10 triệu/năm",
    color: "bg-slate-500/10 text-slate-600",
  },
  {
    icon: BookOpen,
    title: "Kế toán Doanh nghiệp",
    slug: "ke-toan-doanh-nghiep",
    description: "Quản lý tài chính, kế toán cho các loại hình doanh nghiệp",
    duration: "2.5 năm",
    tuition: "10.5 triệu/năm",
    color: "bg-teal-500/10 text-teal-600",
  },
  {
    icon: Baby,
    title: "Hộ sinh",
    slug: "ho-sinh",
    description: "Chăm sóc sức khỏe sinh sản, thai sản và trẻ sơ sinh",
    duration: "3 năm",
    tuition: "12 triệu/năm",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: Map,
    title: "Hướng dẫn Du lịch",
    slug: "huong-dan-du-lich",
    description: "Hướng dẫn viên chuyên nghiệp, am hiểu văn hóa Tây Nguyên",
    duration: "2.5 năm",
    tuition: "10 triệu/năm",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: Building,
    title: "Quản trị Khách sạn",
    slug: "quan-tri-khach-san",
    description: "Nhân viên và quản lý chuyên nghiệp trong lĩnh vực hospitality",
    duration: "2.5 năm",
    tuition: "11 triệu/năm",
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    icon: Briefcase,
    title: "Quản trị Kinh doanh",
    slug: "quan-tri-kinh-doanh",
    description: "Đào tạo nhà quản lý, doanh nhân với tư duy khởi nghiệp",
    duration: "2.5 năm",
    tuition: "11.5 triệu/năm",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: Music,
    title: "Văn hóa Nghệ thuật",
    slug: "van-hoa-nghe-thuat",
    description: "Nghệ sĩ, diễn viên và cán bộ văn hóa Tây Nguyên",
    duration: "3 năm",
    tuition: "9.5 triệu/năm",
    color: "bg-fuchsia-500/10 text-fuchsia-600",
  },
  {
    icon: Leaf,
    title: "Nông Lâm nghiệp",
    slug: "nong-lam-nghiep",
    description: "Kỹ thuật viên nông nghiệp, lâm nghiệp phục vụ Tây Nguyên",
    duration: "2.5 năm",
    tuition: "9 triệu/năm",
    color: "bg-lime-500/10 text-lime-600",
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Chương trình đào tạo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ngành nghề đào tạo chất lượng cao
          </h2>
          <p className="text-lg text-muted-foreground">
            15 ngành đào tạo đa dạng đáp ứng nhu cầu thị trường lao động, 
            cam kết hỗ trợ việc làm sau tốt nghiệp
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link 
                to={`/nganh/${program.slug}`}
                className="block h-full bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-primary/20 group"
              >
                <div className={`inline-flex p-3 rounded-xl ${program.color} mb-4`}>
                  <program.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {program.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="space-y-1">
                    <span className="block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {program.duration}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground">Học phí</span>
                    <p className="text-sm font-medium text-foreground">{program.tuition}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-end mt-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Xem chi tiết</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="https://cdgl.edu.vn/dang-ky-truc-tuyen/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Đăng ký tư vấn ngành học
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}