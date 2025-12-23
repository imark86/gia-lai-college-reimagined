import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  Car, 
  Cpu, 
  ChefHat, 
  Palette, 
  Building, 
  Leaf, 
  ArrowRight,
  Users,
  TrendingUp
} from "lucide-react";

const careerGroups = [
  {
    id: "y-te",
    name: "Nhóm ngành Y tế - Sức khỏe",
    description: "Đào tạo nhân lực y tế chất lượng cao, chăm sóc sức khỏe cộng đồng",
    icon: Stethoscope,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
    programs: [
      { name: "Điều dưỡng", slug: "dieu-duong", hot: true },
      { name: "Dược", slug: "duoc", hot: true },
      { name: "Hộ sinh", slug: "ho-sinh", hot: false }
    ],
    stats: { jobs: "1000+", salary: "8-18 triệu" }
  },
  {
    id: "cong-nghe",
    name: "Nhóm ngành Công nghệ - Kỹ thuật",
    description: "Đào tạo kỹ sư, kỹ thuật viên trong lĩnh vực công nghệ cao",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    programs: [
      { name: "Công nghệ Thông tin", slug: "cong-nghe-thong-tin", hot: true },
      { name: "Điện công nghiệp", slug: "dien-cong-nghiep", hot: false },
      { name: "Điện tử công nghiệp", slug: "dien-tu-cong-nghiep", hot: false }
    ],
    stats: { jobs: "2000+", salary: "10-25 triệu" }
  },
  {
    id: "o-to",
    name: "Nhóm ngành Ô tô - Động lực",
    description: "Đào tạo kỹ thuật viên sửa chữa, bảo dưỡng ô tô và máy nông nghiệp",
    icon: Car,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    programs: [
      { name: "Công nghệ Ô tô", slug: "cong-nghe-o-to", hot: true },
      { name: "Máy nông nghiệp", slug: "may-nong-nghiep", hot: false }
    ],
    stats: { jobs: "800+", salary: "8-20 triệu" }
  },
  {
    id: "du-lich",
    name: "Nhóm ngành Du lịch - Dịch vụ",
    description: "Đào tạo nhân lực cho ngành du lịch, nhà hàng khách sạn",
    icon: ChefHat,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    programs: [
      { name: "Kỹ thuật Chế biến món ăn", slug: "ky-thuat-che-bien", hot: true },
      { name: "Quản trị khách sạn", slug: "quan-tri-khach-san", hot: false },
      { name: "Hướng dẫn du lịch", slug: "huong-dan-du-lich", hot: false }
    ],
    stats: { jobs: "1500+", salary: "8-25 triệu" }
  },
  {
    id: "thiet-ke",
    name: "Nhóm ngành Thiết kế - Sáng tạo",
    description: "Đào tạo nhà thiết kế, nghệ sĩ trong lĩnh vực đa phương tiện",
    icon: Palette,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/10",
    programs: [
      { name: "Thiết kế Đồ họa", slug: "thiet-ke-do-hoa", hot: true },
      { name: "Mỹ thuật tạo hình", slug: "my-thuat-tao-hinh", hot: false }
    ],
    stats: { jobs: "500+", salary: "10-30 triệu" }
  },
  {
    id: "co-khi",
    name: "Nhóm ngành Cơ khí - Xây dựng",
    description: "Đào tạo kỹ thuật viên gia công cơ khí, hàn và xây dựng",
    icon: Building,
    color: "from-gray-600 to-slate-600",
    bgColor: "bg-gray-500/10",
    programs: [
      { name: "Cơ khí chế tạo", slug: "co-khi-che-tao", hot: false },
      { name: "Hàn công nghiệp", slug: "han-cong-nghiep", hot: true },
      { name: "Xây dựng dân dụng", slug: "xay-dung-dan-dung", hot: false }
    ],
    stats: { jobs: "1200+", salary: "10-22 triệu" }
  },
  {
    id: "nong-lam",
    name: "Nhóm ngành Nông - Lâm nghiệp",
    description: "Đào tạo kỹ thuật viên nông nghiệp, phục vụ phát triển bền vững",
    icon: Leaf,
    color: "from-green-500 to-lime-500",
    bgColor: "bg-green-500/10",
    programs: [
      { name: "Trồng trọt", slug: "trong-trot", hot: false },
      { name: "Chăn nuôi", slug: "chan-nuoi", hot: false },
      { name: "Lâm nghiệp", slug: "lam-nghiep", hot: false }
    ],
    stats: { jobs: "600+", salary: "7-15 triệu" }
  }
];

export function CareerGroupsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Tây Nguyên inspired pattern */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Định hướng nghề nghiệp</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nhóm ngành <span className="text-gradient">đào tạo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá các nhóm ngành nghề phù hợp với đam mê và năng lực của bạn
          </p>
        </motion.div>

        {/* Career Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {careerGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50 hover:border-primary/30 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${group.bgColor} mb-4`}>
                <group.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {group.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {group.description}
              </p>

              {/* Programs list */}
              <div className="space-y-2 mb-4">
                {group.programs.slice(0, 3).map((program) => (
                  <Link
                    key={program.slug}
                    to={`/nganh/${program.slug}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    <span className="truncate">{program.name}</span>
                    {program.hot && (
                      <span className="px-1.5 py-0.5 bg-accent/20 text-accent text-xs rounded-full">HOT</span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Users className="h-3.5 w-3.5" />
                  <span>{group.stats.jobs} việc làm</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span>{group.stats.salary}</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="https://cdgl.edu.vn/tuyen-sinh-2025/"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg"
          >
            Đăng ký tư vấn ngay
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}