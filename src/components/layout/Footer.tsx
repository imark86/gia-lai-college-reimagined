import { Phone, Mail, MapPin, Facebook, Youtube, Globe, Send, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const trainingLocations = [
  "Cách Mạng Tháng 8, P. Hội Thương, TP. Pleiku",
  "140 Nguyễn Chí Thanh, P. Hội Phú, TP. Pleiku",
  "282 Hoàng Hoa Thám, P. An Bình, TX. An Khê",
  "69 Nguyễn Huệ, P. Đoàn Kết, TX. Ayun Pa",
];

const quickLinks = [
  { label: "Đăng ký tuyển sinh", href: "https://cdgl.edu.vn/dang-ky-truc-tuyen/" },
  { label: "Tra cứu văn bằng", href: "http://vanbang.gdnn.gov.vn/" },
  { label: "Thư viện điện tử", href: "https://cdgl.edu.vn/category/thu-vien-dien-tu/" },
  { label: "Ngân hàng việc làm", href: "https://cdgl.edu.vn/tong-hop-thong-tin-viec-lam/" },
  { label: "Văn bản pháp quy", href: "https://cdgl.edu.vn/category/van-ban-bieu-mau/van-ban-phap-quy/" },
];

const khoaLinks = [
  { label: "Điện - Điện tử - Tin học", href: "/nganh/dien-dien-tu-tin-hoc" },
  { label: "Y - Dược", href: "/nganh/y-duoc" },
  { label: "Nghiệp vụ - Du lịch", href: "/nganh/nghiep-vu-du-lich" },
  { label: "Cơ khí - Xây dựng", href: "/nganh/co-khi-xay-dung" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-muted/50">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-primary" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl font-display">GL</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground font-display">CAO ĐẲNG GIA LAI</h3>
                <p className="text-xs text-muted-foreground">Vững nghề nghiệp - Sáng tương lai</p>
              </div>
            </Link>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground/80">Đường Trần Nhật Duật - P. Diên Hồng</p>
                  <p className="text-muted-foreground">Tỉnh Gia Lai</p>
                </div>
              </div>
              <a href="tel:02696296999" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                02696.296.999
              </a>
              <a href="mailto:info@cdgl.edu.vn" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                <Mail className="h-5 w-5 text-primary" />
                info@cdgl.edu.vn
              </a>
            </div>
          </div>

          {/* Địa điểm đào tạo */}
          <div>
            <h4 className="font-bold text-foreground mb-6 font-display">Địa Điểm Đào Tạo</h4>
            <ul className="space-y-3 text-sm">
              {trainingLocations.map((location, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-gradient-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">{location}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6 font-display">Liên Kết Nhanh</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <Send className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ngành hot */}
          <div>
            <h4 className="font-bold text-foreground mb-6 font-display">Ngành Hot 🔥</h4>
            <ul className="space-y-3 text-sm mb-6">
              {khoaLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.fb.com/truongcaodanggialai/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@gialaicollege"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://cdgl.edu.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors group"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            © 2025 Trường Cao đẳng Gia Lai. Made with <Heart className="h-4 w-4 text-accent" /> in Vietnam
          </p>
          <div className="flex gap-6">
            <a href="https://cdgl.edu.vn/category/van-ban-bieu-mau/quy-che-quy-dinh-quan-ly/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Quy chế</a>
            <a href="https://cdgl.edu.vn/kiem-dinh/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Kiểm định</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
