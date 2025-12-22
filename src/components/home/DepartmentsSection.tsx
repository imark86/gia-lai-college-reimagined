import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const departments = [
  {
    name: "Ban Giám Hiệu",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/ban-giam-hieu/",
  },
  {
    name: "Khoa Điện - Điện tử - Tin học",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/khoa-dien-dien-tu-tin-hoc/",
  },
  {
    name: "Khoa Động lực - Máy nông nghiệp",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/khoa-dong-luc-may-nong-nghiep/",
  },
  {
    name: "Khoa Cơ khí - Xây dựng",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/khoa-co-khi-xay-dung/",
  },
  {
    name: "Khoa Văn hóa - Nghệ thuật",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/khoa-van-hoa-nghe-thuat/",
  },
  {
    name: "Khoa Nông Lâm",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/khoa-nong-lam/",
  },
  {
    name: "Khoa Nghiệp vụ - Du lịch",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/khoa-nghiep-vu-du-lich/",
  },
  {
    name: "Khoa Y - Dược",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/khoa-y-duoc/",
  },
  {
    name: "Phòng Đào tạo - NCKH&HTQT",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/phong-dao-tao-nckhhtqt/",
  },
  {
    name: "Phòng Tổ chức - Hành chính",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/phong-to-chuc-hanh-chinh/",
  },
];

export function DepartmentsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Đơn vị trực thuộc
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Các Khoa & Phòng ban
            </h2>
          </div>
          
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Slider */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {departments.map((dept, index) => (
            <motion.a
              key={dept.name}
              href={dept.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex-shrink-0 w-[280px]"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-primary-foreground font-semibold text-center group-hover:text-secondary transition-colors">
                    {dept.name}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
