import { motion } from "framer-motion";
import { Megaphone, Sparkles } from "lucide-react";

const announcements = [
  {
    title: "Trường Cao đẳng Gia Lai Thông báo Tuyển sinh và Đào tạo Giấy phép lái xe ô tô các hạng B, C1",
    link: "https://cdgl.edu.vn/thong-bao-tuyen-sinh-va-dao-tao-giay-phep-lai-xe-o-to-cac-hang-b-c1/",
    isNew: true,
  },
  {
    title: "Trường Cao đẳng Gia Lai thông báo tuyển sinh năm 2025",
    link: "https://cdgl.edu.vn/thong-bao-tuyen-sinh-nam-2024/",
    isNew: true,
  },
  {
    title: "TRƯỜNG CAO ĐẲNG GIA LAI CHÍNH THỨC THAM GIA HỆ THỐNG TUYỂN SINH CHUNG CỦA BỘ GIÁO DỤC VÀ ĐÀO TẠO",
    link: "https://cdgl.edu.vn/truong-cao-dang-gia-lai-chinh-thuc-tham-gia-he-thong-tuyen-sinh-chung-cua-bo-giao-duc-va-dao-tao/",
    isNew: true,
  },
];

export function MarqueeNews() {
  return (
    <div className="relative bg-gradient-to-r from-primary via-primary/90 to-secondary overflow-hidden">
      {/* Decorative ethnic pattern - Tây Nguyên inspired */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
          <pattern id="ethnic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 10 L5 0 L10 10 L5 20 Z" fill="currentColor" className="text-primary-foreground" />
            <circle cx="15" cy="10" r="2" fill="currentColor" className="text-primary-foreground" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#ethnic-pattern)" />
        </svg>
      </div>

      <div className="relative flex items-center">
        {/* Label */}
        <div className="hidden md:flex items-center gap-2 px-6 py-3 bg-secondary/30 backdrop-blur-sm border-r border-primary-foreground/20">
          <Megaphone className="h-4 w-4 text-primary-foreground" />
          <span className="text-sm font-semibold text-primary-foreground whitespace-nowrap">
            Tin nổi bật
          </span>
        </div>

        {/* Marquee */}
        <div className="flex-1 py-3 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...announcements, ...announcements].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mx-8 text-primary-foreground hover:text-secondary-foreground transition-colors group"
              >
                <Sparkles className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-medium">{item.title}</span>
                {item.isNew && (
                  <span className="ml-3 text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full animate-pulse font-semibold">
                    HOT
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
