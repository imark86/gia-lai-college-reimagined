import { Phone, Mail, MapPin, Facebook, Youtube, Globe } from "lucide-react";

const trainingLocations = [
  "Cách Mạng Tháng 8, P. Pleiku, Gia Lai",
  "140 Nguyễn Chí Thanh, P. Hội Phú, Gia Lai",
  "282 Hoàng Hoa Thám, P. An Khê, Gia Lai",
  "69 Nguyễn Huệ, P. Ayun Pa, Gia Lai",
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
          {/* About & Trụ sở chính */}
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
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-secondary mb-1">Trụ sở chính:</p>
                <p className="text-primary-foreground/80">Đường Trần Nhật Duật - P. Diên Hồng - Tỉnh Gia Lai</p>
              </div>
              <div>
                <p className="font-semibold text-secondary mb-1">Địa chỉ liên hệ:</p>
                <p className="text-primary-foreground/80">Khu Đô Thị Diên Phú - Diên Hồng - Tỉnh Gia Lai</p>
              </div>
            </div>
            <p className="text-xs text-primary-foreground/60 italic mt-4">
              Vững nghề nghiệp - Sáng tương lai
            </p>
          </div>

          {/* Địa điểm đào tạo */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">4 Địa điểm đào tạo</h4>
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
                  <a href="tel:02693825001" className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium">
                    02693.825001
                  </a>
                  <p className="text-xs text-primary-foreground/60">Điện thoại chính</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-5 w-5 text-secondary text-center">Fax</span>
                <span className="text-primary-foreground/80">02693.867739</span>
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
                href="https://www.fb.com/truongcaodanggialai/"
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
