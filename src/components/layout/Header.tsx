import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Giới thiệu",
    href: "#",
    children: [
      { label: "Lịch sử phát triển", href: "#" },
      { label: "Sứ mệnh & Tầm nhìn", href: "#" },
      { label: "Cơ cấu tổ chức", href: "#" },
      { label: "Ban giám hiệu", href: "#" },
    ],
  },
  {
    label: "Đào tạo",
    href: "#",
    children: [
      { label: "Cao đẳng chính quy", href: "#" },
      { label: "Trung cấp", href: "#" },
      { label: "Đào tạo ngắn hạn", href: "#" },
      { label: "Liên kết đào tạo", href: "#" },
    ],
  },
  { label: "Tuyển sinh", href: "#" },
  { label: "Sinh viên", href: "#" },
  { label: "Tin tức", href: "#" },
  { label: "Liên hệ", href: "#" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:02693825001" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">02693 825 001</span>
            </a>
            <a href="mailto:info@cdgl.edu.vn" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@cdgl.edu.vn</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-primary-foreground/80">Đường dây nóng: 02693 825 001</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-card shadow-card">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative h-14 w-14 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <span className="text-primary-foreground font-bold text-xl">GL</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-primary leading-tight">TRƯỜNG CAO ĐẲNG</h1>
                <p className="text-sm font-semibold text-secondary">GIA LAI</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
                  >
                    {item.label}
                    {item.children && <ChevronDown className="h-4 w-4" />}
                  </a>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
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
              <Button
                variant="default"
                className="hidden md:flex bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Đăng ký tuyển sinh
              </Button>
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
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="w-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Đăng ký tuyển sinh
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}