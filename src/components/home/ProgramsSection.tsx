import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Car, Laptop, Wrench, Snowflake, Cog, BookOpen, Pill, Building, Briefcase, Leaf, Users, Hammer, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  // Nhóm ngành Công nghệ - Kỹ thuật
  {
    icon: Wrench,
    title: "Điện công nghiệp",
    slug: "dien-cong-nghiep",
    code: "6520227",
    description: "Vận hành, sửa chữa hệ thống điện trong nhà máy, xí nghiệp công nghiệp",
    duration: "2.5 năm",
    tuition: "801.550đ/tháng",
    color: "bg-amber-500/10 text-amber-600",
    group: "Công nghệ - Kỹ thuật"
  },
  {
    icon: Snowflake,
    title: "Vận hành, sửa chữa thiết bị lạnh",
    slug: "thiet-bi-lanh",
    code: "6520255",
    description: "Vận hành, bảo trì hệ thống điều hòa không khí và thiết bị lạnh công nghiệp",
    duration: "2.5 năm",
    tuition: "801.550đ/tháng",
    color: "bg-cyan-500/10 text-cyan-600",
    group: "Công nghệ - Kỹ thuật"
  },
  {
    icon: Cog,
    title: "Công nghệ kỹ thuật cơ khí",
    slug: "cong-nghe-co-khi",
    code: "6510201",
    description: "Gia công, chế tạo các sản phẩm cơ khí công nghiệp hiện đại",
    duration: "2.5 năm",
    tuition: "801.550đ/tháng",
    color: "bg-slate-500/10 text-slate-600",
    group: "Công nghệ - Kỹ thuật"
  },
  {
    icon: Car,
    title: "Công nghệ ô tô",
    slug: "cong-nghe-o-to",
    code: "6510216",
    description: "Sửa chữa, bảo dưỡng ô tô hiện đại với trang thiết bị tiên tiến",
    duration: "2.5 năm",
    tuition: "801.550đ/tháng",
    color: "bg-blue-500/10 text-blue-600",
    group: "Công nghệ - Kỹ thuật"
  },
  {
    icon: Laptop,
    title: "Công nghệ thông tin (ƯDPM)",
    slug: "cong-nghe-thong-tin",
    code: "6480202",
    description: "Lập trình, thiết kế web, ứng dụng phần mềm và quản trị mạng",
    duration: "2.5 năm",
    tuition: "801.550đ/tháng",
    color: "bg-emerald-500/10 text-emerald-600",
    group: "Công nghệ - Kỹ thuật"
  },
  {
    icon: Hammer,
    title: "Công nghệ hàn",
    slug: "cong-nghe-han",
    code: "6520123",
    description: "Kỹ thuật hàn công nghiệp, hàn điện, hàn MIG/MAG/TIG chuyên nghiệp",
    duration: "2.5 năm",
    tuition: "801.550đ/tháng",
    color: "bg-orange-500/10 text-orange-600",
    group: "Công nghệ - Kỹ thuật"
  },
  {
    icon: HardHat,
    title: "Kỹ thuật xây dựng",
    slug: "ky-thuat-xay-dung",
    code: "6580201",
    description: "Thi công, giám sát các công trình xây dựng dân dụng và công nghiệp",
    duration: "2.5 năm",
    tuition: "768.200đ/tháng",
    color: "bg-stone-500/10 text-stone-600",
    group: "Công nghệ - Kỹ thuật"
  },
  // Nhóm ngành Y - Dược (3 năm)
  {
    icon: Pill,
    title: "Dược",
    slug: "duoc",
    code: "6720201",
    description: "Đào tạo dược sĩ tư vấn, bán thuốc và quản lý nhà thuốc chuyên nghiệp",
    duration: "3 năm",
    tuition: "934.950đ/tháng",
    color: "bg-pink-500/10 text-pink-600",
    group: "Y - Dược"
  },
  {
    icon: Stethoscope,
    title: "Điều dưỡng",
    slug: "dieu-duong",
    code: "6720301",
    description: "Đào tạo nhân lực y tế chất lượng cao, thực hành tại các bệnh viện lớn",
    duration: "3 năm",
    tuition: "934.950đ/tháng",
    color: "bg-rose-500/10 text-rose-600",
    group: "Y - Dược"
  },
  // Nhóm ngành Nghiệp vụ - Du lịch
  {
    icon: Users,
    title: "Công tác xã hội",
    slug: "cong-tac-xa-hoi",
    code: "6760101",
    description: "Hỗ trợ, tư vấn và giải quyết các vấn đề xã hội cho cộng đồng",
    duration: "2.5 năm",
    tuition: "534.750đ/tháng",
    color: "bg-violet-500/10 text-violet-600",
    group: "Nghiệp vụ - Du lịch"
  },
  {
    icon: Building,
    title: "Quản trị khách sạn",
    slug: "quan-tri-khach-san",
    code: "6810201",
    description: "Nhân viên và quản lý chuyên nghiệp trong lĩnh vực hospitality",
    duration: "2.5 năm",
    tuition: "668.150đ/tháng",
    color: "bg-indigo-500/10 text-indigo-600",
    group: "Nghiệp vụ - Du lịch"
  },
  {
    icon: BookOpen,
    title: "Kế toán doanh nghiệp",
    slug: "ke-toan-doanh-nghiep",
    code: "6340302",
    description: "Quản lý tài chính, kế toán cho các loại hình doanh nghiệp",
    duration: "2.5 năm",
    tuition: "534.750đ/tháng",
    color: "bg-teal-500/10 text-teal-600",
    group: "Nghiệp vụ - Du lịch"
  },
  // Nhóm ngành Nông - Lâm nghiệp
  {
    icon: Leaf,
    title: "Bảo vệ thực vật",
    slug: "bao-ve-thuc-vat",
    code: "6620116",
    description: "Kỹ thuật viên bảo vệ thực vật, phòng trừ sâu bệnh cho cây trồng",
    duration: "2.5 năm",
    tuition: "552.000đ/tháng",
    color: "bg-lime-500/10 text-lime-600",
    group: "Nông - Lâm nghiệp"
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
            Chương trình đào tạo Cao đẳng
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            13 ngành đào tạo trình độ Cao đẳng
          </h2>
          <p className="text-lg text-muted-foreground">
            Thời gian đào tạo: 2.5 năm (riêng ngành Y - Dược: 3 năm). 
            Xét tuyển kết quả thi tốt nghiệp THPT hoặc điểm học bạ lớp 12.
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
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                </div>
                
                <p className="text-xs text-muted-foreground mb-1">Mã ngành: {program.code}</p>
                <p className="text-xs text-primary/80 bg-primary/5 px-2 py-0.5 rounded inline-block mb-3">{program.group}</p>
                
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

        {/* Note about tuition reduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-xl text-center"
        >
          <p className="text-sm text-muted-foreground">
            <strong className="text-accent">Lưu ý:</strong> Giảm 70% học phí cho các ngành/nghề nặng nhọc, độc hại, nguy hiểm 
            (trừ các ngành đánh dấu *). Xem chi tiết tại mục quyền lợi người học.
          </p>
        </motion.div>

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
