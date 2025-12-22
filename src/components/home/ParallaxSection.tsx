import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MapPin, Users, Award, Calendar } from "lucide-react";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function CountUpNumber({ end, suffix = "", duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(end * easeOutQuart));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const highlights = [
  { icon: Calendar, value: 1992, label: "Năm thành lập", suffix: "" },
  { icon: Users, value: 15000, label: "Sinh viên đã đào tạo", suffix: "+" },
  { icon: Award, value: 12, label: "Ngành đào tạo", suffix: "" },
  { icon: MapPin, value: 4, label: "Cơ sở đào tạo", suffix: "" },
];

export function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={ref} className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Parallax Background Image - Using image from CDGL website */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src="https://cdgl.edu.vn/wp-content/uploads/2024/03/toan-canh-truong-1.jpg"
          alt="Trường Cao đẳng Gia Lai toàn cảnh"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&h=1080&fit=crop";
          }}
        />
      </motion.div>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      
      {/* Ethnic pattern overlay - Tây Nguyên inspired */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="text-primary-foreground">
          <pattern id="parallax-ethnic" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            {/* Tây Nguyên inspired geometric patterns - Cồng chiêng và nhà rông */}
            <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M40 15 L65 40 L40 65 L15 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="40" cy="40" r="8" fill="currentColor" />
            {/* Drum pattern inspired */}
            <circle cx="40" cy="40" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
            {/* Additional ethnic elements */}
            <line x1="20" y1="20" x2="25" y2="25" stroke="currentColor" strokeWidth="1" />
            <line x1="55" y1="55" x2="60" y2="60" stroke="currentColor" strokeWidth="1" />
            <line x1="55" y1="20" x2="60" y2="25" stroke="currentColor" strokeWidth="1" />
            <line x1="20" y1="55" x2="25" y2="60" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#parallax-ethnic)" />
        </svg>
      </div>

      {/* Floating decorative images */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        className="absolute top-20 left-10 w-24 h-24 rounded-full overflow-hidden border-2 border-secondary/30 hidden lg:block"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
      >
        <img
          src="https://cdgl.edu.vn/wp-content/uploads/2024/03/sinh-vien-1.jpg"
          alt="Sinh viên"
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        className="absolute bottom-32 right-16 w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30 hidden lg:block"
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
      >
        <img
          src="https://cdgl.edu.vn/wp-content/uploads/2024/03/hoat-dong-1.jpg"
          alt="Hoạt động"
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div 
          style={{ opacity, scale }}
          className="container mx-auto px-4 text-center"
        >
          {/* Decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-8 rounded-full"
          />
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-primary/20 backdrop-blur-sm text-primary-foreground rounded-full text-sm font-medium mb-6 border border-primary-foreground/20"
          >
            🏔️ Cao nguyên Gia Lai
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Nơi ươm mầm
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              tài năng Tây Nguyên
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Gắn bó với vùng đất bazan hùng vĩ, chúng tôi tự hào đào tạo thế hệ trẻ 
            với tinh thần cống hiến, kiến thức vững vàng và kỹ năng thực tế
          </motion.p>

          {/* Stats with animated counting */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <item.icon className="h-8 w-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  <CountUpNumber 
                    end={item.value} 
                    suffix={item.suffix} 
                    duration={2500} 
                  />
                </div>
                <div className="text-sm text-primary-foreground/70">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mt-12 rounded-full"
          />
        </motion.div>
      </div>

      {/* Decorative corners - Tây Nguyên inspired */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-4 border-t-4 border-secondary/50 rounded-tl-3xl" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-4 border-t-4 border-secondary/50 rounded-tr-3xl" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-4 border-b-4 border-secondary/50 rounded-bl-3xl" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-4 border-b-4 border-secondary/50 rounded-br-3xl" />
    </section>
  );
}
