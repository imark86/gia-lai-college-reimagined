import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const phongTrungTam = [
  { label: "Phòng Tổ chức - Hành chính", href: "https://cdgl.edu.vn/khoa/phong-to-chuc-hanh-chinh/" },
  { label: "Phòng Đào tạo - NCKH & HTQT", href: "https://cdgl.edu.vn/khoa/phong-dao-tao-nckhhtqt/" },
  { label: "Phòng Kế hoạch - Tài chính", href: "https://cdgl.edu.vn/khoa/phong-ke-hoach-tai-chinh/" },
  { label: "Phòng Quản trị - Vật tư thiết bị", href: "https://cdgl.edu.vn/khoa/phong-quan-tri-vat-tu-thiet-bi/" },
  { label: "Phòng Công tác HSSV", href: "https://cdgl.edu.vn/khoa/phong-cong-tac-hssv/" },
  { label: "Phòng Đảm bảo chất lượng", href: "https://cdgl.edu.vn/khoa/phong-dam-bao-chat-luong/" },
  { label: "TT Tuyển sinh & hỗ trợ HSSV", href: "https://cdgl.edu.vn/khoa/trung-tam-tuyen-sinh/" },
  { label: "TT Tin học - Ngoại ngữ & ĐTLX", href: "https://cdgl.edu.vn/khoa/trung-tam-tin-hoc-ngoai-ngu/" },
];

const khoaChuyenMon = [
  { label: "Khoa Điện - Điện tử - Tin học", href: "/nganh/dien-dien-tu-tin-hoc", internal: true },
  { label: "Khoa Động lực - Máy nông nghiệp", href: "/nganh/dong-luc-may-nong-nghiep", internal: true },
  { label: "Khoa Cơ khí - Xây dựng", href: "/nganh/co-khi-xay-dung", internal: true },
  { label: "Khoa Văn hóa - Nghệ thuật", href: "/nganh/van-hoa-nghe-thuat", internal: true },
  { label: "Khoa Nông Lâm", href: "/nganh/nong-lam", internal: true },
  { label: "Khoa Nghiệp vụ - Du lịch", href: "/nganh/nghiep-vu-du-lich", internal: true },
  { label: "Khoa Y - Dược", href: "/nganh/y-duoc", internal: true },
  { label: "Khoa Cơ bản", href: "/nganh/co-ban", internal: true },
];

const navItems = [
  { label: "Trang chủ", href: "/", internal: true },
  {
    label: "Giới thiệu",
    href: "https://cdgl.edu.vn/block_categories/gioi-thieu/",
    children: [
      { label: "Tổng quan", href: "https://cdgl.edu.vn/khoa/tong-quan/" },
      { label: "Sơ đồ tổ chức", href: "https://cdgl.edu.vn/khoa/so-do-to-chuc/" },
      { label: "Đảng bộ Cơ sở", href: "https://cdgl.edu.vn/khoa/dang-bo-co-so/" },
      { label: "Ban giám hiệu", href: "https://cdgl.edu.vn/khoa/ban-giam-hieu/" },
      { label: "Công đoàn", href: "https://cdgl.edu.vn/category/co-cau-to-chuc/cong-doan/" },
      { label: "Đoàn thanh niên", href: "https://cdgl.edu.vn/category/co-cau-to-chuc/doan-thanh-nien/" },
    ],
  },
  {
    label: "Các đơn vị",
    href: "https://cdgl.edu.vn/block_categories/cac-don-vi/",
    hasTwoColumns: true,
    columns: [
      { title: "PHÒNG - TRUNG TÂM", items: phongTrungTam },
      { title: "KHOA CHUYÊN MÔN", items: khoaChuyenMon },
    ],
  },
  {
    label: "Tuyển sinh",
    href: "https://cdgl.edu.vn/category/tuyen-sinh/",
    children: [
      { label: "Đăng ký trực tuyến", href: "https://cdgl.edu.vn/dang-ky-truc-tuyen/" },
      { label: "Cẩm nang hướng nghiệp", href: "https://cdgl.edu.vn/?post_type=blocks&p=2054&preview=true#flipbook-df_2005/1/" },
      { label: "Video tuyển sinh", href: "https://cdgl.edu.vn/category/tuyen-sinh/video-tuyen-sinh/" },
    ],
  },
  {
    label: "Văn bản",
    href: "https://cdgl.edu.vn/category/van-ban-bieu-mau/",
    children: [
      { label: "Biểu mẫu", href: "https://cdgl.edu.vn/category/van-ban-bieu-mau/bieu-mau/" },
      { label: "Quy chế & Quy định", href: "https://cdgl.edu.vn/category/van-ban-bieu-mau/quy-che-quy-dinh-quan-ly/" },
      { label: "Văn bản pháp quy", href: "https://cdgl.edu.vn/category/van-ban-bieu-mau/van-ban-phap-quy/" },
      { label: "Kiểm định", href: "https://cdgl.edu.vn/kiem-dinh/" },
    ],
  },
  {
    label: "Việc làm",
    href: "https://cdgl.edu.vn/category/tuyen-dung-viec-lam/",
    children: [
      { label: "Tuyển dụng viên chức", href: "https://cdgl.edu.vn/category/tuyen-dung-viec-lam/tuyen-dung-vien-chuc/" },
      { label: "Ngân hàng việc làm", href: "https://cdgl.edu.vn/tong-hop-thong-tin-viec-lam/" },
    ],
  },
  { label: "Thư viện", href: "https://cdgl.edu.vn/category/thu-vien-dien-tu/" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const renderNavLink = (item: { label: string; href: string; internal?: boolean }) => {
    if (item.internal) {
      return (
        <Link
          to={item.href}
          className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      );
    }
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:02693825001" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">02693.825001</span>
            </a>
            <a href="mailto:info@cdgl.edu.vn" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@cdgl.edu.vn</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-primary-foreground/80">Tư vấn tuyển sinh: 02693.825001</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-card shadow-card">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative h-14 w-14 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <span className="text-primary-foreground font-bold text-xl">GL</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-primary leading-tight">TRƯỜNG CAO ĐẲNG</h1>
                <p className="text-sm font-semibold text-secondary">GIA LAI</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.internal ? (
                    <Link
                      to={item.href}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
                    >
                      {item.label}
                      {(item.children || item.hasTwoColumns) && <ChevronDown className="h-4 w-4" />}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
                    >
                      {item.label}
                      {(item.children || item.hasTwoColumns) && <ChevronDown className="h-4 w-4" />}
                    </a>
                  )}

                  {/* Two Column Dropdown for "Các đơn vị" */}
                  <AnimatePresence>
                    {item.hasTwoColumns && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-[600px] rounded-lg bg-card shadow-elevated border border-border overflow-hidden"
                      >
                        <div className="grid grid-cols-2 divide-x divide-border">
                          {item.columns?.map((column) => (
                            <div key={column.title} className="p-4">
                              <h4 className="font-bold text-sm text-primary mb-3 pb-2 border-b border-border">
                                {column.title}
                              </h4>
                              <ul className="space-y-1">
                                {column.items.map((subItem) => (
                                  <li key={subItem.label}>
                                    {renderNavLink(subItem)}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Single Column Dropdown */}
                  <AnimatePresence>
                    {item.children && !item.hasTwoColumns && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 rounded-lg bg-card shadow-elevated border border-border overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Search & Mobile Menu */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Search className="h-5 w-5" />
              </Button>
              <a href="https://cdgl.edu.vn/dang-ky-truc-tuyen/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="default"
                  className="hidden md:flex bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Đăng ký tuyển sinh
                </Button>
              </a>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-card"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  item.internal ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-4 py-3 text-foreground hover:bg-muted rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {item.label}
                    </a>
                  )
                ))}
                <a href="https://cdgl.edu.vn/dang-ky-truc-tuyen/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Đăng ký tuyển sinh
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
