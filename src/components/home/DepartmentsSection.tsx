import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Building2, GraduationCap, ExternalLink } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const phongTrungTam = [
  {
    name: "Phòng Tổ chức - Hành chính",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/phong-to-chuc-hanh-chinh/",
  },
  {
    name: "Phòng Đào tạo - NCKH & HTQT",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/phong-dao-tao-nckhhtqt/",
  },
  {
    name: "Phòng Kế hoạch - Tài chính",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/phong-ke-hoach-tai-chinh/",
  },
  {
    name: "Phòng Quản trị - Vật tư thiết bị",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/phong-quan-tri-vat-tu-thiet-bi/",
  },
  {
    name: "Phòng Công tác HSSV",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/phong-cong-tac-hssv/",
  },
  {
    name: "Phòng Đảm bảo chất lượng",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/phong-dam-bao-chat-luong/",
  },
  {
    name: "TT Tuyển sinh & hỗ trợ HSSV",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/trung-tam-tuyen-sinh/",
  },
  {
    name: "TT Tin học - Ngoại ngữ & ĐTLX",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    link: "https://cdgl.edu.vn/khoa/trung-tam-tin-hoc-ngoai-ngu/",
  },
];

const khoaChuyenMon = [
  {
    name: "Khoa Điện - Điện tử - Tin học",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    link: "/nganh/dien-dien-tu-tin-hoc",
    internal: true,
    tag: "HOT",
  },
  {
    name: "Khoa Động lực - Máy nông nghiệp",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
    link: "/nganh/dong-luc-may-nong-nghiep",
    internal: true,
  },
  {
    name: "Khoa Cơ khí - Xây dựng",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop",
    link: "/nganh/co-khi-xay-dung",
    internal: true,
  },
  {
    name: "Khoa Văn hóa - Nghệ thuật",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
    link: "/nganh/van-hoa-nghe-thuat",
    internal: true,
  },
  {
    name: "Khoa Nông Lâm",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    link: "/nganh/nong-lam",
    internal: true,
  },
  {
    name: "Khoa Nghiệp vụ - Du lịch",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop",
    link: "/nganh/nghiep-vu-du-lich",
    internal: true,
    tag: "NEW",
  },
  {
    name: "Khoa Y - Dược",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
    link: "/nganh/y-duoc",
    internal: true,
    tag: "HOT",
  },
  {
    name: "Khoa Cơ bản",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    link: "/nganh/co-ban",
    internal: true,
  },
];

interface SliderProps {
  items: Array<{ name: string; image: string; link: string; internal?: boolean; tag?: string }>;
  title: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

function DepartmentSlider({ items, title, icon, gradientFrom, gradientTo }: SliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
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
    <div className="mb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-6"
      >
        <div className="flex items-center gap-3">
          <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center shadow-lg`}>
            {icon}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground font-display">
            {title}
          </h3>
        </div>
        
        <div className="hidden md:flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="rounded-xl glass border-border/50 hover:bg-primary/10 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="rounded-xl glass border-border/50 hover:bg-primary/10 disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </motion.div>

      {/* Slider */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
      >
        {items.map((item, index) => {
          const CardContent = (
            <div className="relative overflow-hidden rounded-2xl glass border border-border/30 hover:border-primary/50 transition-all duration-300 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              
              {/* Tag */}
              {item.tag && (
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
                  item.tag === 'HOT' ? 'bg-accent text-accent-foreground' : 'bg-secondary text-secondary-foreground'
                }`}>
                  {item.tag}
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-foreground font-semibold text-sm md:text-base group-hover:text-primary transition-colors flex items-center gap-2">
                  {item.name}
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
              </div>
            </div>
          );

          return item.internal ? (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex-shrink-0 w-[260px] hover-lift cursor-pointer"
            >
              <Link to={item.link}>
                {CardContent}
              </Link>
            </motion.div>
          ) : (
            <motion.a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group flex-shrink-0 w-[260px] hover-lift"
            >
              {CardContent}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

export function DepartmentsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-4">
            Đơn vị trực thuộc
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display">
            <span className="text-foreground">Khám Phá </span>
            <span className="text-gradient">Các Khoa & Phòng Ban</span>
          </h2>
        </motion.div>

        {/* Phòng - Trung tâm Slider */}
        <DepartmentSlider
          items={phongTrungTam}
          title="Phòng - Trung Tâm"
          icon={<Building2 className="h-6 w-6 text-primary-foreground" />}
          gradientFrom="from-primary"
          gradientTo="to-accent"
        />

        {/* Khoa chuyên môn Slider */}
        <DepartmentSlider
          items={khoaChuyenMon}
          title="Khoa Chuyên Môn"
          icon={<GraduationCap className="h-6 w-6 text-primary-foreground" />}
          gradientFrom="from-secondary"
          gradientTo="to-primary"
        />
      </div>
    </section>
  );
}
