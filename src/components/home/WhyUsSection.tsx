import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, GraduationCap, Users, Building, Trophy } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Đào tạo chất lượng cao",
    description: "Chương trình đào tạo chuẩn quốc gia, 70% thực hành - 30% lý thuyết",
  },
  {
    icon: Briefcase,
    title: "Cam kết việc làm 100%",
    description: "Liên kết chặt chẽ với doanh nghiệp, hỗ trợ việc làm sau tốt nghiệp",
  },
  {
    icon: Users,
    title: "Đội ngũ giảng viên giỏi",
    description: "Giảng viên có kinh nghiệm thực tế, tâm huyết với nghề",
  },
  {
    icon: Building,
    title: "Cơ sở vật chất hiện đại",
    description: "Phòng thực hành, xưởng thực tập được đầu tư trang thiết bị mới",
  },
  {
    icon: Trophy,
    title: "Nhiều chính sách ưu đãi",
    description: "Hỗ trợ học phí lên đến 100%, học bổng cho sinh viên xuất sắc",
  },
  {
    icon: CheckCircle2,
    title: "Bằng cấp được công nhận",
    description: "Văn bằng do Bộ Lao động - Thương binh và Xã hội cấp",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              Tại sao chọn chúng tôi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Đầu tư cho tương lai với 
              <span className="text-primary"> nền tảng vững chắc</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Với hơn 30 năm kinh nghiệm đào tạo nghề, chúng tôi tự hào là địa chỉ tin cậy 
              của hàng nghìn sinh viên và doanh nghiệp trong khu vực.
            </p>

            {/* Benefits badges */}
            <div className="flex flex-wrap gap-3">
              {["Miễn 100% học phí", "Ký túc xá", "Thực tập có lương", "Việc làm ổn định"].map((badge) => (
                <span 
                  key={badge}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-xl bg-gradient-subtle border border-border/50 hover:border-primary/20 hover:shadow-card transition-all group"
              >
                <feature.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}