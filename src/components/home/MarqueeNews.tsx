import { motion } from "framer-motion";

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
    <div className="bg-gradient-to-r from-primary via-primary/90 to-secondary/30 py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...announcements, ...announcements].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mx-8 text-primary-foreground hover:text-secondary transition-colors"
          >
            <span className="text-sm font-medium">{item.title}</span>
            {item.isNew && (
              <span className="ml-2 text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full animate-pulse">
                Mới
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
