import { Phone, Mail, MapPin, Facebook, Youtube, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">GL</span>
              </div>
              <div>
                <h3 className="font-bold">TRƯỜNG CAO ĐẲNG</h3>
                <p className="text-sm text-secondary">GIA LAI</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Trường Cao đẳng Gia Lai - Cơ sở giáo dục nghề nghiệp công lập đào tạo nguồn nhân lực chất lượng cao cho tỉnh Gia Lai và khu vực Tây Nguyên.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Liên hệ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-secondary" />
                <span className="text-primary-foreground/80">126 Lê Thánh Tôn, TP. Pleiku, Gia Lai</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:02693825001" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  02693 825 001
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:info@cdgl.edu.vn" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  info@cdgl.edu.vn
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Tuyển sinh 2025",
                "Tra cứu điểm",
                "Thư viện",
                "Việc làm sinh viên",
                "Hỏi đáp",
                "Văn bản pháp quy",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Map */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Kết nối với chúng tôi</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-3">
              <p className="text-xs text-primary-foreground/60 mb-2">Giờ làm việc</p>
              <p className="text-sm">Thứ 2 - Thứ 6: 7:00 - 17:00</p>
              <p className="text-sm">Thứ 7: 7:00 - 11:30</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© 2025 Trường Cao đẳng Gia Lai. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-secondary transition-colors">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}