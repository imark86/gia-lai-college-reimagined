import { motion } from "framer-motion";
import { ArrowRight, Stethoscope, Car, Laptop, Wrench, ChefHat, Palette, Cog, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Stethoscope,
    title: "Điều dưỡng",
    description: "Đào tạo nhân lực y tế chất lượng cao, thực hành tại các bệnh viện lớn",
    duration: "3 năm",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Car,
    title: "Công nghệ Ô tô",
    description: "Sửa chữa, bảo dưỡng ô tô hiện đại với trang thiết bị tiên tiến",
    duration: "3 năm",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Laptop,
    title: "Công nghệ Thông tin",
    description: "Lập trình, thiết kế web, quản trị mạng và an ninh mạng",
    duration: "3 năm",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Wrench,
    title: "Điện công nghiệp",
    description: "Vận hành, sửa chữa hệ thống điện trong nhà máy, xí nghiệp",
    duration: "3 năm",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: ChefHat,
    title: "Kỹ thuật Chế biến",
    description: "Chế biến món ăn, quản lý nhà hàng khách sạn chuyên nghiệp",
    duration: "2.5 năm",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Palette,
    title: "Thiết kế Đồ họa",
    description: "Thiết kế sáng tạo, đa phương tiện và truyền thông số",
    duration: "2.5 năm",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Cog,
    title: "Cơ khí chế tạo",
    description: "Gia công, chế tạo các sản phẩm cơ khí công nghiệp",
    duration: "3 năm",
    color: "bg-slate-500/10 text-slate-600",
  },
  {
    icon: BookOpen,
    title: "Kế toán Doanh nghiệp",
    description: "Quản lý tài chính, kế toán cho các loại hình doanh nghiệp",
    duration: "2.5 năm",
    color: "bg-teal-500/10 text-teal-600",
  },
];

export function ProgramsSection() {
  return (
    <section className="py-20 bg-gradient-subtle">
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
            Đa dạng ngành nghề đáp ứng nhu cầu thị trường lao động, 
            cam kết hỗ trợ việc làm sau tốt nghiệp
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-primary/20"
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
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                  {program.duration}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
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
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Xem tất cả ngành đào tạo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}