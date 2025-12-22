import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop"
                alt="Trường Cao đẳng Gia Lai"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-elevated hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 ml-1" fill="currentColor" />
                </button>
              </div>
              
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-primary-foreground">TRƯỜNG CAO ĐẲNG GIA LAI</h3>
                <p className="text-primary-foreground/90 text-sm mt-1">Vững nghề nghiệp - Sáng tương lai</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Giới thiệu
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trường Cao Đẳng Gia Lai
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Trường Cao đẳng Gia Lai thành lập theo Quyết định số 627/QĐ – LĐTBXH ngày 05 tháng 6 năm 2020 
                của Bộ trưởng Bộ Lao động – Thương binh và Xã hội về việc sáp nhập trường Trung cấp Y tế Gia Lai, 
                Trường Trung cấp văn hóa – Nghệ thuật Gia Lai, Trường Trung cấp Kinh tế – Kỹ thuật Nam Gia Lai, 
                Trường Trung cấp Kinh tế – Kỹ thuật Đông Gia Lai vào Trường Cao đẳng nghề Gia Lai.
              </p>
              <p>
                Nhà trường là đơn vị công lập duy nhất trên địa bàn tỉnh đào tạo nguồn nhân lực chất lượng cao 
                phục vụ phát triển kinh tế - xã hội của tỉnh Gia Lai và khu vực Tây Nguyên.
              </p>
            </div>
            
            <Button 
              className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Xem thêm
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
