import { Phone, Mail, MapPin, Facebook, Youtube, Globe } from "lucide-react";

const trainingLocations = [
  "Cơ sở 1: 126 Lê Thánh Tôn, TP. Pleiku",
  "Cơ sở 2: 17 Quang Trung, TP. Pleiku", 
  "Cơ sở 3: Tổ 7, Thống Nhất, TP. Pleiku",
  "Cơ sở 4: Huyện Chư Sê, Gia Lai",
  "Cơ sở 5: Huyện An Khê, Gia Lai",
];

const quickLinks = [
  { label: "Đăng ký tuyển sinh", href: "https://cdgl.edu.vn/dang-ky-truc-tuyen/" },
  { label: "Tra cứu văn bằng", href: "http://vanbang.gdnn.gov.vn/" },
  { label: "Thư viện điện tử", href: "https://cdgl.edu.vn/category/thu-vien-dien-tu/" },
  { label: "Ngân hàng việc làm", href: "https://cdgl.edu.vn/tong-hop-thong-tin-viec-lam/" },
  { label: "Văn bản pháp quy", href: "https://cdgl.edu.vn/category/van-ban-bieu-mau/van-ban-phap-quy/" },
  { label: "Kiểm định chất lượng", href: "https://cdgl.edu.vn/kiem-dinh/" },
];

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
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-4">
              Trường Cao đẳng Gia Lai - Cơ sở giáo dục nghề nghiệp công lập đào tạo nguồn nhân lực chất lượng cao cho tỉnh Gia Lai và khu vực Tây Nguyên.
            </p>
            <p className="text-xs text-primary-foreground/60 italic">
              Vững nghề nghiệp - Sáng tương lai
            </p>
          </div>

          {/* Địa điểm đào tạo */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">5 Địa điểm đào tạo</h4>
            <ul className="space-y-2 text-sm">
              {trainingLocations.map((location, index) => (
                <li key={index} className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-secondary" />
                  <span className="text-primary-foreground/80">{location}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Liên hệ</h4>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <div>
                  <a href="tel:02696296999" className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium">
                    0269 629 6999
                  </a>
                  <p className="text-xs text-primary-foreground/60">Tư vấn tuyển sinh</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:info@cdgl.edu.vn" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  info@cdgl.edu.vn
                </a>
              </li>
            </ul>
            
            <h4 className="font-semibold text-lg mb-3 text-secondary">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Working Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Kết nối với chúng tôi</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.facebook.com/truongcaodanggialai"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@gialaicollege"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://cdgl.edu.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="Website"
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
            <a href="https://cdgl.edu.vn/category/van-ban-bieu-mau/quy-che-quy-dinh-quan-ly/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Quy chế quy định</a>
            <a href="https://cdgl.edu.vn/kiem-dinh/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Kiểm định</a>
          </div>
        </div>
      </div>
    </footer>
  );
}