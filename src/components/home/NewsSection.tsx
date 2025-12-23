import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Eye, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const news = [
  {
    id: 1,
    title: "Thông báo tuyển sinh năm học 2025-2026",
    excerpt: "Trường Cao đẳng Gia Lai thông báo tuyển sinh các ngành cao đẳng, trung cấp năm học 2025-2026 với nhiều chính sách ưu đãi hấp dẫn...",
    date: "20/12/2024",
    views: 1250,
    category: "Tuyển sinh",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
    isHot: true,
  },
  {
    id: 2,
    title: "Lễ tốt nghiệp và trao bằng khóa 2024",
    excerpt: "Hơn 500 sinh viên đã vinh dự nhận bằng tốt nghiệp trong buổi lễ long trọng được tổ chức tại hội trường lớn của trường...",
    date: "15/12/2024",
    views: 890,
    category: "Sự kiện",
    image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=400&h=250&fit=crop",
    isHot: false,
  },
  {
    id: 3,
    title: "Ký kết hợp tác đào tạo với doanh nghiệp",
    excerpt: "Nhà trường ký kết thỏa thuận hợp tác với 10 doanh nghiệp lớn trong khu vực, cam kết tiếp nhận 100% sinh viên tốt nghiệp...",
    date: "10/12/2024",
    views: 720,
    category: "Hợp tác",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop",
    isHot: false,
  },
];

export function NewsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30" />
      
      {/* Decorative elements - Tây Nguyên inspired geometric */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,0 100,100 0,100" fill="currentColor" className="text-primary" />
          <polygon points="50,30 80,100 20,100" fill="currentColor" className="text-secondary" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-5 rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,0 100,100 0,100" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4"
            >
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Tin tức & Sự kiện</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Tin tức <span className="text-gradient">mới nhất</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Cập nhật thông tin mới nhất về hoạt động đào tạo, sự kiện và cơ hội nghề nghiệp
            </p>
          </div>
          <Link to="/tin-tuc">
            <Button 
              variant="outline" 
              className="self-start md:self-auto group border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Xem tất cả tin tức
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50 hover:border-primary/30 hover-lift"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold rounded-full shadow-lg">
                    {item.category}
                  </span>
                </div>

                {/* Hot badge */}
                {item.isHot && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full animate-pulse">
                      🔥 HOT
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full">
                    <Eye className="h-3.5 w-3.5" />
                    {item.views.toLocaleString()}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-5">
                  {item.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300"
                >
                  Đọc tiếp
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Decorative corner - ethnic inspired */}
              <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/10 rotate-45 translate-x-16 translate-y-16" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
