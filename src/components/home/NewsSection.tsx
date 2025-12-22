import { motion } from "framer-motion";
import { ArrowRight, Calendar, Eye } from "lucide-react";
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
  },
  {
    id: 2,
    title: "Lễ tốt nghiệp và trao bằng khóa 2024",
    excerpt: "Hơn 500 sinh viên đã vinh dự nhận bằng tốt nghiệp trong buổi lễ long trọng được tổ chức tại hội trường lớn của trường...",
    date: "15/12/2024",
    views: 890,
    category: "Sự kiện",
    image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Ký kết hợp tác đào tạo với doanh nghiệp",
    excerpt: "Nhà trường ký kết thỏa thuận hợp tác với 10 doanh nghiệp lớn trong khu vực, cam kết tiếp nhận 100% sinh viên tốt nghiệp...",
    date: "10/12/2024",
    views: 720,
    category: "Hợp tác",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop",
  },
];

export function NewsSection() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Tin tức & Sự kiện
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tin tức mới nhất
            </h2>
          </div>
          <Button variant="outline" className="self-start md:self-auto">
            Xem tất cả tin tức
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {item.views}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {item.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  Đọc tiếp
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}