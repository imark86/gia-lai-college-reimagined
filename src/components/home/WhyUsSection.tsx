import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, GraduationCap, Users, Building, Trophy, Star } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Đào tạo chất lượng cao",
    description: "Chương trình đào tạo chuẩn quốc gia, 70% thực hành - 30% lý thuyết",
    color: "from-primary to-primary/70",
  },
  {
    icon: Briefcase,
    title: "Cam kết việc làm 100%",
    description: "Liên kết chặt chẽ với doanh nghiệp, hỗ trợ việc làm sau tốt nghiệp",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: Users,
    title: "Đội ngũ giảng viên giỏi",
    description: "Giảng viên có kinh nghiệm thực tế, tâm huyết với nghề",
    color: "from-primary to-secondary",
  },
  {
    icon: Building,
    title: "Cơ sở vật chất hiện đại",
    description: "Phòng thực hành, xưởng thực tập được đầu tư trang thiết bị mới",
    color: "from-accent to-accent/70",
  },
  {
    icon: Trophy,
    title: "Nhiều chính sách ưu đãi",
    description: "Hỗ trợ học phí lên đến 100%, học bổng cho sinh viên xuất sắc",
    color: "from-secondary to-primary",
  },
  {
    icon: CheckCircle2,
    title: "Bằng cấp được công nhận",
    description: "Văn bằng do Bộ Lao động - Thương binh và Xã hội cấp",
    color: "from-primary to-primary/70",
  },
];

const stats = [
  { value: "30+", label: "Năm kinh nghiệm" },
  { value: "10K+", label: "Sinh viên tốt nghiệp" },
  { value: "98%", label: "Có việc làm" },
  { value: "50+", label: "Doanh nghiệp đối tác" },
];

export function WhyUsSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-muted/30 via-card to-muted/30">
      {/* Decorative Tây Nguyên elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />
      
      {/* Ethnic pattern background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <pattern id="ethnic-bg" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            <circle cx="30" cy="30" r="5" fill="currentColor" className="text-secondary" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#ethnic-bg)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full mb-6"
            >
              <Star className="h-4 w-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Tại sao chọn chúng tôi</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Đầu tư cho tương lai với{" "}
              <span className="text-gradient">nền tảng vững chắc</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Với hơn 30 năm kinh nghiệm đào tạo nghề, chúng tôi tự hào là địa chỉ tin cậy 
              của hàng nghìn sinh viên và doanh nghiệp trong khu vực Tây Nguyên.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50"
                >
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Benefits badges */}
            <div className="flex flex-wrap gap-3">
              {["Miễn 100% học phí", "Ký túc xá", "Thực tập có lương", "Việc làm ổn định"].map((badge, index) => (
                <motion.span 
                  key={badge}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-primary/20 text-foreground rounded-full text-sm font-medium shadow-card hover:shadow-glow hover:border-primary/50 transition-all cursor-default"
                >
                  <CheckCircle2 className="h-4 w-4 text-secondary" />
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 shadow-card hover:shadow-elevated transition-all duration-300 hover-lift"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
