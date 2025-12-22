import { motion } from "framer-motion";
import { Building2, GraduationCap, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const phongTrungTam = [
  { name: "Phòng Tổ chức - Hành chính", link: "https://cdgl.edu.vn/khoa/phong-to-chuc-hanh-chinh/" },
  { name: "Phòng Đào tạo - Nghiên cứu khoa học & Hợp tác Quốc tế", link: "https://cdgl.edu.vn/khoa/phong-dao-tao-nckhhtqt/" },
  { name: "Phòng Kế hoạch - Tài chính", link: "https://cdgl.edu.vn/khoa/phong-ke-hoach-tai-chinh/" },
  { name: "Phòng Quản trị - Vật tư thiết bị", link: "https://cdgl.edu.vn/khoa/phong-quan-tri-vat-tu-thiet-bi/" },
  { name: "Phòng Công tác Học sinh - Sinh viên", link: "https://cdgl.edu.vn/khoa/phong-cong-tac-hssv/" },
  { name: "Phòng Đảm bảo chất lượng", link: "https://cdgl.edu.vn/khoa/phong-dam-bao-chat-luong/" },
  { name: "Trung tâm Tuyển sinh và hỗ trợ Học sinh - Sinh viên", link: "https://cdgl.edu.vn/khoa/trung-tam-tuyen-sinh/" },
  { name: "Trung tâm Tin học - Ngoại ngữ và Đào tạo Lái xe", link: "https://cdgl.edu.vn/khoa/trung-tam-tin-hoc-ngoai-ngu/" },
];

const khoaChuyenMon = [
  { 
    name: "Khoa Điện - Điện tử - Tin học", 
    link: "https://cdgl.edu.vn/khoa/khoa-dien-dien-tu-tin-hoc/",
    internalLink: "/nganh/dien-dien-tu-tin-hoc"
  },
  { 
    name: "Khoa Động lực - Máy nông nghiệp", 
    link: "https://cdgl.edu.vn/khoa/khoa-dong-luc-may-nong-nghiep/",
    internalLink: "/nganh/dong-luc-may-nong-nghiep"
  },
  { 
    name: "Khoa Cơ khí - Xây dựng", 
    link: "https://cdgl.edu.vn/khoa/khoa-co-khi-xay-dung/",
    internalLink: "/nganh/co-khi-xay-dung"
  },
  { 
    name: "Khoa Văn hóa - Nghệ thuật", 
    link: "https://cdgl.edu.vn/khoa/khoa-van-hoa-nghe-thuat/",
    internalLink: "/nganh/van-hoa-nghe-thuat"
  },
  { 
    name: "Khoa Nông Lâm", 
    link: "https://cdgl.edu.vn/khoa/khoa-nong-lam/",
    internalLink: "/nganh/nong-lam"
  },
  { 
    name: "Khoa Nghiệp vụ - Du lịch", 
    link: "https://cdgl.edu.vn/khoa/khoa-nghiep-vu-du-lich/",
    internalLink: "/nganh/nghiep-vu-du-lich"
  },
  { 
    name: "Khoa Y - Dược", 
    link: "https://cdgl.edu.vn/khoa/khoa-y-duoc/",
    internalLink: "/nganh/y-duoc"
  },
  { 
    name: "Khoa Cơ bản", 
    link: "https://cdgl.edu.vn/khoa/khoa-co-ban/",
    internalLink: "/nganh/co-ban"
  },
];

export function DepartmentsSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Đơn vị trực thuộc
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Các Khoa & Phòng ban
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Phòng - Trung tâm */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-6 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">PHÒNG - TRUNG TÂM</h3>
            </div>
            <ul className="space-y-3">
              {phongTrungTam.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <ChevronRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    <span className="text-foreground/80 group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Khoa chuyên môn */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-6 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="h-12 w-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">KHOA CHUYÊN MÔN</h3>
            </div>
            <ul className="space-y-3">
              {khoaChuyenMon.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.internalLink}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <ChevronRight className="h-4 w-4 text-secondary group-hover:translate-x-1 transition-transform" />
                    <span className="text-foreground/80 group-hover:text-secondary transition-colors">
                      {item.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
