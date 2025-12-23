import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Eye, Search, TrendingUp, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface NewsItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  views: number;
  category: string;
  image: string;
  isHot: boolean;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    slug: "thong-bao-tuyen-sinh-2025-2026",
    title: "Thông báo tuyển sinh năm học 2025-2026",
    excerpt: "Trường Cao đẳng Gia Lai thông báo tuyển sinh các ngành cao đẳng, trung cấp năm học 2025-2026 với nhiều chính sách ưu đãi hấp dẫn...",
    content: `<p>Trường Cao đẳng Gia Lai trân trọng thông báo kế hoạch tuyển sinh năm học 2025-2026 với nhiều điểm mới hấp dẫn:</p>
    <h3>Thời gian tuyển sinh</h3>
    <ul>
      <li>Đợt 1: Từ 01/03/2025 đến 30/06/2025</li>
      <li>Đợt 2: Từ 01/07/2025 đến 30/09/2025</li>
    </ul>
    <h3>Các ngành tuyển sinh</h3>
    <p>Trường tuyển sinh hơn 15 ngành cao đẳng và trung cấp thuộc các lĩnh vực: Y tế, Công nghệ thông tin, Cơ khí, Điện - Điện tử, Du lịch, Nông nghiệp...</p>
    <h3>Chính sách ưu đãi</h3>
    <ul>
      <li>Miễn 100% học phí cho sinh viên hộ nghèo</li>
      <li>Giảm 50% học phí cho sinh viên hộ cận nghèo</li>
      <li>Học bổng khuyến học lên đến 10 triệu đồng</li>
      <li>Hỗ trợ ký túc xá cho sinh viên xa nhà</li>
    </ul>`,
    date: "20/12/2024",
    views: 1250,
    category: "Tuyển sinh",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
    isHot: true,
  },
  {
    id: 2,
    slug: "le-tot-nghiep-2024",
    title: "Lễ tốt nghiệp và trao bằng khóa 2024",
    excerpt: "Hơn 500 sinh viên đã vinh dự nhận bằng tốt nghiệp trong buổi lễ long trọng được tổ chức tại hội trường lớn của trường...",
    content: `<p>Sáng ngày 15/12/2024, Trường Cao đẳng Gia Lai đã long trọng tổ chức Lễ tốt nghiệp và trao bằng cho hơn 500 sinh viên khóa 2021-2024.</p>
    <h3>Những con số ấn tượng</h3>
    <ul>
      <li>520 sinh viên được trao bằng tốt nghiệp</li>
      <li>85% sinh viên có việc làm ngay sau khi tốt nghiệp</li>
      <li>45 sinh viên đạt loại xuất sắc và giỏi</li>
    </ul>
    <p>Tham dự buổi lễ có đại diện lãnh đạo UBND tỉnh, Sở LĐTBXH, các doanh nghiệp đối tác và phụ huynh sinh viên.</p>`,
    date: "15/12/2024",
    views: 890,
    category: "Sự kiện",
    image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=800&h=500&fit=crop",
    isHot: false,
  },
  {
    id: 3,
    slug: "ky-ket-hop-tac-doanh-nghiep",
    title: "Ký kết hợp tác đào tạo với doanh nghiệp",
    excerpt: "Nhà trường ký kết thỏa thuận hợp tác với 10 doanh nghiệp lớn trong khu vực, cam kết tiếp nhận 100% sinh viên tốt nghiệp...",
    content: `<p>Ngày 10/12/2024, Trường Cao đẳng Gia Lai đã tổ chức Lễ ký kết hợp tác đào tạo với 10 doanh nghiệp hàng đầu trong khu vực Tây Nguyên.</p>
    <h3>Các doanh nghiệp đối tác</h3>
    <ul>
      <li>Toyota Gia Lai - Ngành ô tô</li>
      <li>Bệnh viện Đa khoa tỉnh - Ngành điều dưỡng</li>
      <li>FPT Software - Ngành CNTT</li>
      <li>Resort Kon Klor - Ngành du lịch</li>
    </ul>
    <h3>Nội dung hợp tác</h3>
    <p>Các doanh nghiệp cam kết tiếp nhận 100% sinh viên thực tập và ưu tiên tuyển dụng sinh viên tốt nghiệp của trường.</p>`,
    date: "10/12/2024",
    views: 720,
    category: "Hợp tác",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop",
    isHot: false,
  },
  {
    id: 4,
    slug: "hoi-thao-huong-nghiep-2024",
    title: "Hội thảo hướng nghiệp cho học sinh THPT",
    excerpt: "Hơn 1000 học sinh từ các trường THPT trong tỉnh tham gia chương trình tư vấn hướng nghiệp tại trường...",
    content: `<p>Trường Cao đẳng Gia Lai phối hợp với Sở GD&ĐT tổ chức Hội thảo hướng nghiệp cho học sinh THPT toàn tỉnh.</p>
    <h3>Nội dung chương trình</h3>
    <ul>
      <li>Tư vấn chọn ngành nghề phù hợp</li>
      <li>Giới thiệu các ngành đào tạo</li>
      <li>Giao lưu với cựu sinh viên thành đạt</li>
      <li>Tham quan cơ sở vật chất</li>
    </ul>`,
    date: "05/12/2024",
    views: 650,
    category: "Sự kiện",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
    isHot: false,
  },
  {
    id: 5,
    slug: "sinh-vien-dat-giai-tay-nguyen",
    title: "Sinh viên đạt giải cao tại cuộc thi tay nghề khu vực",
    excerpt: "3 sinh viên của trường xuất sắc giành giải nhất, nhì tại cuộc thi tay nghề khu vực Tây Nguyên năm 2024...",
    content: `<p>Đoàn sinh viên Trường Cao đẳng Gia Lai đã đạt thành tích xuất sắc tại Cuộc thi tay nghề khu vực Tây Nguyên 2024.</p>
    <h3>Thành tích</h3>
    <ul>
      <li>1 Giải Nhất - Nghề Điều dưỡng</li>
      <li>1 Giải Nhì - Nghề Công nghệ ô tô</li>
      <li>1 Giải Ba - Nghề Nấu ăn</li>
    </ul>`,
    date: "28/11/2024",
    views: 580,
    category: "Thành tích",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    isHot: true,
  },
  {
    id: 6,
    slug: "khai-giang-nam-hoc-2024-2025",
    title: "Khai giảng năm học 2024-2025",
    excerpt: "Trường Cao đẳng Gia Lai long trọng tổ chức Lễ khai giảng năm học mới với hơn 2000 tân sinh viên...",
    content: `<p>Ngày 05/09/2024, Trường Cao đẳng Gia Lai đã tổ chức Lễ khai giảng năm học 2024-2025.</p>
    <h3>Điểm nhấn</h3>
    <ul>
      <li>Chào đón 2.100 tân sinh viên</li>
      <li>Ra mắt 3 ngành đào tạo mới</li>
      <li>Trao học bổng cho sinh viên xuất sắc</li>
    </ul>`,
    date: "05/09/2024",
    views: 1100,
    category: "Sự kiện",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop",
    isHot: false,
  },
];

const categories = ["Tất cả", "Tuyển sinh", "Sự kiện", "Hợp tác", "Thành tích", "Thông báo"];

export default function TinTuc() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = newsData.filter((item) => {
    const matchCategory = selectedCategory === "Tất cả" || item.category === selectedCategory;
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Tin tức & Sự kiện</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Tin tức <span className="text-gradient">mới nhất</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Cập nhật thông tin mới nhất về hoạt động đào tạo, sự kiện và cơ hội nghề nghiệp
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border/50 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Tìm kiếm tin tức..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Categories */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                <Filter className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full whitespace-nowrap ${
                      selectedCategory === cat 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-primary/10"
                    }`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredNews.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">Không tìm thấy tin tức nào phù hợp</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((item, index) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50 hover:border-primary/30 hover-lift"
                  >
                    <Link to={`/tin-tuc/${item.slug}`}>
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-1.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold rounded-full shadow-lg">
                            {item.category}
                          </span>
                        </div>

                        {/* Hot badge */}
                        {item.isHot && (
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full animate-pulse">
                              🔥 HOT
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full">
                            <Calendar className="h-3.5 w-3.5" />
                            {item.date}
                          </span>
                          <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full">
                            <Eye className="h-3.5 w-3.5" />
                            {item.views.toLocaleString()}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {item.title}
                        </h3>

                        <p className="text-sm text-muted-foreground line-clamp-2 mb-5">
                          {item.excerpt}
                        </p>

                        <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                          Đọc tiếp
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}