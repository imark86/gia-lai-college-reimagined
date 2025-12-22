import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Users, Award, Briefcase, ChevronRight, Phone, GraduationCap, DollarSign, BookOpen, Target, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface NganhInfo {
  id: string;
  name: string;
  khoaName: string;
  description: string;
  duration: string;
  degree: string;
  tuitionFee: string;
  admissionRequirements: string[];
  careers: string[];
  subjects: string[];
  highlights: string[];
  curriculum: {
    semester: string;
    subjects: string[];
  }[];
  jobOpportunities: {
    position: string;
    salary: string;
    companies: string[];
  }[];
  relatedNganhs: string[];
  image: string;
}

const nganhData: Record<string, NganhInfo> = {
  "dieu-duong": {
    id: "dieu-duong",
    name: "Điều dưỡng",
    khoaName: "Khoa Y - Dược",
    description: "Ngành Điều dưỡng đào tạo nhân lực y tế chất lượng cao, có khả năng chăm sóc sức khỏe toàn diện cho bệnh nhân. Sinh viên được thực hành tại các bệnh viện lớn trong khu vực Tây Nguyên.",
    duration: "3 năm",
    degree: "Cao đẳng",
    tuitionFee: "12.000.000 VNĐ/năm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Sức khỏe tốt, không mắc bệnh truyền nhiễm",
      "Điểm thi tốt nghiệp từ 18 điểm trở lên"
    ],
    careers: [
      "Điều dưỡng viên bệnh viện",
      "Điều dưỡng phòng khám",
      "Điều dưỡng cộng đồng",
      "Chăm sóc sức khỏe tại gia",
      "Điều dưỡng trường học"
    ],
    subjects: [
      "Giải phẫu sinh lý người",
      "Điều dưỡng cơ bản",
      "Điều dưỡng nội khoa",
      "Điều dưỡng ngoại khoa",
      "Điều dưỡng nhi khoa"
    ],
    highlights: [
      "Thực tập tại bệnh viện Đa khoa tỉnh Gia Lai",
      "Cơ hội việc làm 100% sau tốt nghiệp",
      "Được miễn giảm học phí theo chính sách",
      "Phòng thực hành mô phỏng hiện đại"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Giải phẫu sinh lý", "Sinh học di truyền", "Hóa sinh", "Tin học cơ bản", "Tiếng Anh 1"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Vi sinh ký sinh", "Dược lý học", "Điều dưỡng cơ bản 1", "Giao tiếp trong y tế"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Điều dưỡng cơ bản 2", "Điều dưỡng nội khoa", "Điều dưỡng ngoại khoa", "Sức khỏe cộng đồng"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Điều dưỡng nhi khoa", "Điều dưỡng sản phụ", "Điều dưỡng lão khoa", "Thực tập lâm sàng 1"] },
      { semester: "Năm 3", subjects: ["Thực tập lâm sàng 2", "Thực tập tốt nghiệp", "Luận văn tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Điều dưỡng viên", salary: "8-12 triệu/tháng", companies: ["Bệnh viện Đa khoa Gia Lai", "Bệnh viện Hùng Vương", "Phòng khám đa khoa"] },
      { position: "Điều dưỡng trưởng", salary: "12-18 triệu/tháng", companies: ["Bệnh viện tư nhân", "Trung tâm y tế"] },
      { position: "Chăm sóc tại gia", salary: "10-15 triệu/tháng", companies: ["Công ty chăm sóc sức khỏe", "Làm việc độc lập"] }
    ],
    relatedNganhs: ["duoc", "ho-sinh"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/z4275741756974_52cb1c24b8a2d3e5c0bce7b8b5a4c3d2.jpg"
  },
  "cong-nghe-o-to": {
    id: "cong-nghe-o-to",
    name: "Công nghệ Ô tô",
    khoaName: "Khoa Động lực - Máy nông nghiệp",
    description: "Ngành Công nghệ Ô tô đào tạo kỹ thuật viên có khả năng sửa chữa, bảo dưỡng các loại xe ô tô hiện đại với trang thiết bị tiên tiến nhất.",
    duration: "3 năm",
    degree: "Cao đẳng",
    tuitionFee: "11.000.000 VNĐ/năm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Nam/Nữ từ 18-25 tuổi",
      "Có đam mê với ngành ô tô"
    ],
    careers: [
      "Kỹ thuật viên sửa chữa ô tô",
      "Kỹ thuật viên chẩn đoán",
      "Tư vấn bán hàng ô tô",
      "Quản lý gara",
      "Kỹ thuật viên bảo hành"
    ],
    subjects: [
      "Cơ sở kỹ thuật ô tô",
      "Động cơ đốt trong",
      "Hệ thống truyền lực",
      "Điện - Điện tử ô tô",
      "Chẩn đoán kỹ thuật"
    ],
    highlights: [
      "Xưởng thực hành đạt chuẩn Toyota",
      "Liên kết với các đại lý ô tô lớn",
      "100% sinh viên có việc làm sau tốt nghiệp",
      "Được cấp chứng chỉ nghề quốc tế"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Vẽ kỹ thuật", "Cơ kỹ thuật", "Vật liệu học", "Tin học ứng dụng"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Điện kỹ thuật", "Kỹ thuật đo lường", "Cấu tạo động cơ", "An toàn lao động"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Sửa chữa động cơ xăng", "Sửa chữa động cơ diesel", "Hệ thống phanh", "Hệ thống lái"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Điện ô tô", "Hệ thống gầm", "Điều hòa không khí", "Thực tập cơ sở"] },
      { semester: "Năm 3", subjects: ["Chẩn đoán kỹ thuật", "Thực tập sản xuất", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Kỹ thuật viên", salary: "8-15 triệu/tháng", companies: ["Toyota Gia Lai", "Hyundai Gia Lai", "Honda Gia Lai"] },
      { position: "Kỹ thuật viên chẩn đoán", salary: "12-20 triệu/tháng", companies: ["Các đại lý ô tô chính hãng"] },
      { position: "Quản lý xưởng", salary: "15-25 triệu/tháng", companies: ["Gara tư nhân", "Đại lý ủy quyền"] }
    ],
    relatedNganhs: ["dien-cong-nghiep", "co-khi-che-tao"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/oto.jpg"
  },
  "cong-nghe-thong-tin": {
    id: "cong-nghe-thong-tin",
    name: "Công nghệ Thông tin",
    khoaName: "Khoa Điện - Điện tử - Tin học",
    description: "Ngành Công nghệ Thông tin đào tạo lập trình viên, thiết kế web, quản trị mạng và an ninh mạng. Chương trình cập nhật theo xu hướng công nghệ mới nhất.",
    duration: "3 năm",
    degree: "Cao đẳng",
    tuitionFee: "12.500.000 VNĐ/năm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Có tư duy logic tốt",
      "Đam mê công nghệ"
    ],
    careers: [
      "Lập trình viên phần mềm",
      "Thiết kế website",
      "Quản trị mạng",
      "Chuyên viên an ninh mạng",
      "Kỹ thuật viên IT"
    ],
    subjects: [
      "Lập trình căn bản",
      "Cơ sở dữ liệu",
      "Thiết kế web",
      "Mạng máy tính",
      "An toàn thông tin"
    ],
    highlights: [
      "Phòng máy tính hiện đại",
      "Hợp tác với FPT Software",
      "Chương trình đào tạo quốc tế",
      "Cơ hội làm việc từ xa"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Nhập môn lập trình", "Toán rời rạc", "Tin học đại cương", "Tiếng Anh chuyên ngành"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Cấu trúc dữ liệu", "Lập trình hướng đối tượng", "Cơ sở dữ liệu", "Thiết kế giao diện"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Lập trình web", "Mạng máy tính", "Phân tích thiết kế hệ thống", "Lập trình di động"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["An toàn thông tin", "Quản trị hệ thống", "Dự án phần mềm", "Thực tập cơ sở"] },
      { semester: "Năm 3", subjects: ["Cloud Computing", "DevOps", "Thực tập doanh nghiệp", "Đồ án tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Lập trình viên Junior", salary: "10-15 triệu/tháng", companies: ["FPT Software", "Viettel", "VNG"] },
      { position: "Web Developer", salary: "12-20 triệu/tháng", companies: ["Công ty phần mềm", "Agency"] },
      { position: "System Admin", salary: "10-18 triệu/tháng", companies: ["Doanh nghiệp lớn", "Ngân hàng"] }
    ],
    relatedNganhs: ["dien-cong-nghiep", "thiet-ke-do-hoa"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/cntt.jpg"
  },
  "dien-cong-nghiep": {
    id: "dien-cong-nghiep",
    name: "Điện công nghiệp",
    khoaName: "Khoa Điện - Điện tử - Tin học",
    description: "Ngành Điện công nghiệp đào tạo kỹ thuật viên vận hành, sửa chữa hệ thống điện trong nhà máy, xí nghiệp. Đáp ứng nhu cầu công nghiệp hóa của tỉnh Gia Lai.",
    duration: "3 năm",
    degree: "Cao đẳng",
    tuitionFee: "10.500.000 VNĐ/năm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Sức khỏe tốt",
      "Nam ưu tiên"
    ],
    careers: [
      "Kỹ thuật viên điện",
      "Thợ điện công nghiệp",
      "Kỹ thuật viên tự động hóa",
      "Giám sát kỹ thuật",
      "Kỹ thuật viên bảo trì"
    ],
    subjects: [
      "Điện kỹ thuật",
      "Máy điện",
      "PLC cơ bản",
      "Điện tử công suất",
      "Tự động hóa"
    ],
    highlights: [
      "Xưởng thực hành đầy đủ thiết bị",
      "Liên kết với các KCN Gia Lai",
      "Thu nhập ổn định sau tốt nghiệp",
      "Được cấp chứng chỉ an toàn điện"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Điện kỹ thuật", "Vẽ kỹ thuật điện", "An toàn điện", "Vật liệu điện"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Máy điện", "Đo lường điện", "Khí cụ điện", "Điện tử cơ bản"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Cung cấp điện", "Truyền động điện", "PLC cơ bản", "Điện tử công suất"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Tự động hóa", "Điều khiển lập trình", "Thực tập cơ sở", "Bảo trì thiết bị điện"] },
      { semester: "Năm 3", subjects: ["Hệ thống SCADA", "Thực tập sản xuất", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Kỹ thuật viên điện", salary: "8-12 triệu/tháng", companies: ["Nhà máy thủy điện", "KCN Trà Đa"] },
      { position: "Kỹ thuật viên tự động hóa", salary: "12-18 triệu/tháng", companies: ["Nhà máy sản xuất", "Công ty điện lực"] },
      { position: "Giám sát kỹ thuật", salary: "15-22 triệu/tháng", companies: ["Nhà thầu điện", "Công ty xây lắp"] }
    ],
    relatedNganhs: ["cong-nghe-thong-tin", "co-khi-che-tao"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/dien.jpg"
  },
  "ky-thuat-che-bien": {
    id: "ky-thuat-che-bien",
    name: "Kỹ thuật Chế biến món ăn",
    khoaName: "Khoa Nghiệp vụ - Du lịch",
    description: "Ngành Kỹ thuật Chế biến món ăn đào tạo đầu bếp chuyên nghiệp, quản lý nhà hàng khách sạn. Thực hành tại các resort 4-5 sao.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "11.500.000 VNĐ/năm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Sức khỏe tốt, không mắc bệnh truyền nhiễm",
      "Đam mê ẩm thực"
    ],
    careers: [
      "Đầu bếp nhà hàng",
      "Bếp trưởng",
      "Quản lý bếp",
      "Tư vấn ẩm thực",
      "Kinh doanh ẩm thực"
    ],
    subjects: [
      "Kỹ thuật nấu ăn cơ bản",
      "Ẩm thực Á - Âu",
      "Làm bánh Tây",
      "Quản lý bếp",
      "Vệ sinh an toàn thực phẩm"
    ],
    highlights: [
      "Thực tập tại resort 5 sao",
      "Học từ các chef nổi tiếng",
      "Cơ hội làm việc nước ngoài",
      "Phòng thực hành đạt chuẩn quốc tế"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Kỹ thuật cắt thái", "Chế biến món Việt", "Vệ sinh an toàn thực phẩm", "Nguyên liệu thực phẩm"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Ẩm thực Á", "Ẩm thực Âu", "Làm bánh cơ bản", "Nghiệp vụ bàn bar"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Chế biến hải sản", "Món ăn chay", "Làm bánh nâng cao", "Quản lý bếp"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Pha chế đồ uống", "Thực tập cơ sở", "Khởi nghiệp ẩm thực"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Thực tập sản xuất", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Phụ bếp", salary: "6-10 triệu/tháng", companies: ["Nhà hàng địa phương", "Khách sạn 3 sao"] },
      { position: "Đầu bếp chính", salary: "10-18 triệu/tháng", companies: ["Resort Kon Tum", "Khách sạn 4-5 sao"] },
      { position: "Bếp trưởng", salary: "18-30 triệu/tháng", companies: ["Resort cao cấp", "Chuỗi nhà hàng lớn"] }
    ],
    relatedNganhs: ["quan-tri-khach-san", "huong-dan-du-lich"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/bep.jpg"
  },
  "thiet-ke-do-hoa": {
    id: "thiet-ke-do-hoa",
    name: "Thiết kế Đồ họa",
    khoaName: "Khoa Văn hóa - Nghệ thuật",
    description: "Ngành Thiết kế Đồ họa đào tạo nhà thiết kế sáng tạo trong lĩnh vực đa phương tiện và truyền thông số. Chương trình cập nhật theo xu hướng thiết kế mới nhất.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "13.000.000 VNĐ/năm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Có năng khiếu mỹ thuật",
      "Đam mê sáng tạo"
    ],
    careers: [
      "Nhà thiết kế đồ họa",
      "Designer UI/UX",
      "Motion designer",
      "Art director",
      "Freelancer thiết kế"
    ],
    subjects: [
      "Nguyên lý thiết kế",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "After Effects",
      "Thiết kế UI/UX"
    ],
    highlights: [
      "Phòng máy cấu hình cao",
      "Học phần mềm bản quyền",
      "Kết nối agency lớn",
      "Cơ hội làm việc từ xa"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Nguyên lý tạo hình", "Lý thuyết màu sắc", "Vẽ căn bản", "Đồ họa vector"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Photoshop nâng cao", "Illustrator nâng cao", "Typography", "Thiết kế nhận diện"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Thiết kế UI/UX", "Motion graphics", "3D căn bản", "Thiết kế web"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Video production", "Portfolio cá nhân", "Thực tập cơ sở"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Dự án thiết kế", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Graphic Designer Junior", salary: "8-12 triệu/tháng", companies: ["Agency quảng cáo", "Công ty truyền thông"] },
      { position: "UI/UX Designer", salary: "12-20 triệu/tháng", companies: ["Startup công nghệ", "Công ty phần mềm"] },
      { position: "Art Director", salary: "18-30 triệu/tháng", companies: ["Agency lớn", "Tập đoàn đa quốc gia"] }
    ],
    relatedNganhs: ["cong-nghe-thong-tin", "van-hoa-nghe-thuat"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/thietke.jpg"
  },
  "co-khi-che-tao": {
    id: "co-khi-che-tao",
    name: "Cơ khí chế tạo",
    khoaName: "Khoa Cơ khí - Xây dựng",
    description: "Ngành Cơ khí chế tạo đào tạo kỹ thuật viên gia công, chế tạo các sản phẩm cơ khí công nghiệp. Đáp ứng nhu cầu phát triển công nghiệp của khu vực.",
    duration: "3 năm",
    degree: "Cao đẳng",
    tuitionFee: "10.000.000 VNĐ/năm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Sức khỏe tốt",
      "Nam ưu tiên"
    ],
    careers: [
      "Kỹ thuật viên cơ khí",
      "Thợ hàn công nghiệp",
      "Vận hành máy CNC",
      "Giám sát sản xuất",
      "Quản đốc xưởng"
    ],
    subjects: [
      "Vẽ kỹ thuật cơ khí",
      "Công nghệ kim loại",
      "Hàn công nghiệp",
      "Tiện phay CNC",
      "Thiết kế CAD/CAM"
    ],
    highlights: [
      "Xưởng thực hành hiện đại",
      "Máy CNC mới nhất",
      "Thu nhập cao sau tốt nghiệp",
      "Cơ hội xuất khẩu lao động"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Vẽ kỹ thuật", "Cơ học kỹ thuật", "Vật liệu cơ khí", "An toàn lao động"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Dung sai đo lường", "Công nghệ kim loại", "Nguyên lý cắt gọt", "CAD 2D"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Tiện cơ bản", "Phay cơ bản", "Hàn điện hồ quang", "CAD/CAM"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Tiện CNC", "Phay CNC", "Hàn MIG/MAG", "Thực tập cơ sở"] },
      { semester: "Năm 3", subjects: ["Thiết kế khuôn mẫu", "Thực tập sản xuất", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Thợ cơ khí", salary: "8-12 triệu/tháng", companies: ["Xưởng cơ khí địa phương", "KCN Trà Đa"] },
      { position: "Kỹ thuật viên CNC", salary: "12-18 triệu/tháng", companies: ["Nhà máy sản xuất", "Công ty gia công"] },
      { position: "Giám sát sản xuất", salary: "15-25 triệu/tháng", companies: ["Công ty FDI", "Nhà máy lớn"] }
    ],
    relatedNganhs: ["dien-cong-nghiep", "cong-nghe-o-to"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/cokhi.jpg"
  },
  "ke-toan-doanh-nghiep": {
    id: "ke-toan-doanh-nghiep",
    name: "Kế toán Doanh nghiệp",
    khoaName: "Khoa Nghiệp vụ - Du lịch",
    description: "Ngành Kế toán Doanh nghiệp đào tạo kế toán viên chuyên nghiệp, có khả năng quản lý tài chính cho các loại hình doanh nghiệp.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "10.500.000 VNĐ/năm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Có tư duy logic, cẩn thận",
      "Yêu thích công việc văn phòng"
    ],
    careers: [
      "Kế toán viên",
      "Kế toán thuế",
      "Kế toán ngân hàng",
      "Kiểm toán nội bộ",
      "Kế toán trưởng"
    ],
    subjects: [
      "Nguyên lý kế toán",
      "Kế toán tài chính",
      "Kế toán quản trị",
      "Thuế và khai báo thuế",
      "Phần mềm kế toán"
    ],
    highlights: [
      "Phần mềm MISA bản quyền",
      "Thực tập tại doanh nghiệp",
      "Cơ hội việc làm cao",
      "Thu nhập ổn định"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Nguyên lý kế toán", "Kinh tế vi mô", "Tin học văn phòng", "Pháp luật kinh doanh"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Kế toán tài chính 1", "Thống kê doanh nghiệp", "Tài chính tiền tệ", "Tiếng Anh chuyên ngành"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Kế toán tài chính 2", "Kế toán quản trị", "Thuế", "Phần mềm MISA"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Kiểm toán", "Phân tích tài chính", "Thực tập cơ sở"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Kế toán thuế", "Thực tập doanh nghiệp", "Khóa luận tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Kế toán viên", salary: "7-12 triệu/tháng", companies: ["Doanh nghiệp vừa và nhỏ", "Công ty TNHH"] },
      { position: "Kế toán thuế", salary: "10-15 triệu/tháng", companies: ["Công ty dịch vụ kế toán", "Doanh nghiệp lớn"] },
      { position: "Kế toán trưởng", salary: "15-25 triệu/tháng", companies: ["Doanh nghiệp lớn", "Công ty cổ phần"] }
    ],
    relatedNganhs: ["quan-tri-kinh-doanh", "huong-dan-du-lich"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/ketoan.jpg"
  },
  "duoc": {
    id: "duoc",
    name: "Dược",
    khoaName: "Khoa Y - Dược",
    description: "Ngành Dược đào tạo dược sĩ có khả năng tư vấn, bán thuốc và quản lý nhà thuốc. Đáp ứng nhu cầu chăm sóc sức khỏe của người dân.",
    duration: "3 năm",
    degree: "Cao đẳng",
    tuitionFee: "14.000.000 VNĐ/năm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Điểm thi tốt nghiệp từ 18 điểm trở lên",
      "Sức khỏe tốt"
    ],
    careers: [
      "Dược sĩ nhà thuốc",
      "Dược sĩ bệnh viện",
      "Trình dược viên",
      "Quản lý nhà thuốc",
      "Kiểm nghiệm thuốc"
    ],
    subjects: [
      "Hóa dược",
      "Dược lý học",
      "Bào chế học",
      "Dược liệu",
      "Quản lý dược"
    ],
    highlights: [
      "Nhu cầu nhân lực cao",
      "Thu nhập ổn định",
      "Cơ hội mở nhà thuốc riêng",
      "Thực tập tại nhà thuốc lớn"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Hóa đại cương", "Sinh học", "Giải phẫu sinh lý", "Tiếng Anh chuyên ngành"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Hóa phân tích", "Hóa hữu cơ", "Vi sinh ký sinh", "Dược liệu 1"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Hóa dược 1", "Dược lý học 1", "Bào chế 1", "Dược liệu 2"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Hóa dược 2", "Dược lý học 2", "Bào chế 2", "Thực tập cơ sở"] },
      { semester: "Năm 3", subjects: ["Quản lý dược", "Dược lâm sàng", "Thực tập nhà thuốc", "Khóa luận tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Dược sĩ nhà thuốc", salary: "8-12 triệu/tháng", companies: ["Nhà thuốc tư nhân", "Chuỗi nhà thuốc"] },
      { position: "Trình dược viên", salary: "10-18 triệu/tháng", companies: ["Công ty dược phẩm", "Hãng dược nước ngoài"] },
      { position: "Quản lý nhà thuốc", salary: "12-20 triệu/tháng", companies: ["Chuỗi nhà thuốc lớn", "Nhà thuốc riêng"] }
    ],
    relatedNganhs: ["dieu-duong", "ho-sinh"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/duoc.jpg"
  },
  "ho-sinh": {
    id: "ho-sinh",
    name: "Hộ sinh",
    khoaName: "Khoa Y - Dược",
    description: "Ngành Hộ sinh đào tạo nhân viên y tế chuyên về chăm sóc sức khỏe sinh sản, thai sản và trẻ sơ sinh.",
    duration: "3 năm",
    degree: "Cao đẳng",
    tuitionFee: "12.000.000 VNĐ/năm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Nữ ưu tiên",
      "Sức khỏe tốt"
    ],
    careers: [
      "Hộ sinh bệnh viện",
      "Hộ sinh trạm y tế",
      "Tư vấn sức khỏe sinh sản",
      "Chăm sóc trước sinh",
      "Đào tạo sức khỏe cộng đồng"
    ],
    subjects: [
      "Giải phẫu sinh lý",
      "Sản phụ khoa",
      "Chăm sóc trẻ sơ sinh",
      "Kế hoạch hóa gia đình",
      "Thực hành hộ sinh"
    ],
    highlights: [
      "Nhu cầu nhân lực cao",
      "Công việc ý nghĩa",
      "Thực tập tại bệnh viện phụ sản",
      "Cơ hội việc làm 100%"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Giải phẫu sinh lý", "Sinh học di truyền", "Hóa sinh", "Tiếng Anh 1"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Vi sinh ký sinh", "Điều dưỡng cơ bản", "Giao tiếp trong y tế", "Dinh dưỡng"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Sản phụ khoa 1", "Chăm sóc trước sinh", "Hộ sinh cơ bản", "Nhi khoa"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Sản phụ khoa 2", "Chăm sóc trẻ sơ sinh", "Kế hoạch hóa gia đình", "Thực tập lâm sàng 1"] },
      { semester: "Năm 3", subjects: ["Thực tập lâm sàng 2", "Thực tập tốt nghiệp", "Khóa luận tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Hộ sinh viên", salary: "7-10 triệu/tháng", companies: ["Bệnh viện phụ sản", "Trạm y tế xã"] },
      { position: "Hộ sinh trưởng", salary: "10-15 triệu/tháng", companies: ["Bệnh viện tuyến huyện", "Trung tâm y tế"] },
      { position: "Tư vấn sức khỏe sinh sản", salary: "8-12 triệu/tháng", companies: ["Phòng khám tư", "Trung tâm KHHGĐ"] }
    ],
    relatedNganhs: ["dieu-duong", "duoc"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/hosinh.jpg"
  },
  "huong-dan-du-lich": {
    id: "huong-dan-du-lich",
    name: "Hướng dẫn Du lịch",
    khoaName: "Khoa Nghiệp vụ - Du lịch",
    description: "Ngành Hướng dẫn Du lịch đào tạo hướng dẫn viên chuyên nghiệp, am hiểu văn hóa Tây Nguyên và có khả năng giao tiếp ngoại ngữ tốt.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "10.000.000 VNĐ/năm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Khả năng giao tiếp tốt",
      "Đam mê du lịch"
    ],
    careers: [
      "Hướng dẫn viên du lịch",
      "Điều hành tour",
      "Tư vấn du lịch",
      "Quản lý công ty lữ hành",
      "Marketing du lịch"
    ],
    subjects: [
      "Nghiệp vụ hướng dẫn",
      "Địa lý du lịch",
      "Văn hóa Tây Nguyên",
      "Tiếng Anh du lịch",
      "Quản trị lữ hành"
    ],
    highlights: [
      "Tiềm năng du lịch Tây Nguyên lớn",
      "Thực tập tại các điểm du lịch nổi tiếng",
      "Học ngoại ngữ chuyên sâu",
      "Cơ hội việc làm đa dạng"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Nhập môn du lịch", "Địa lý du lịch Việt Nam", "Tiếng Anh giao tiếp", "Tin học văn phòng"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Văn hóa các dân tộc Tây Nguyên", "Nghiệp vụ hướng dẫn 1", "Tiếng Anh du lịch 1", "Lịch sử Việt Nam"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Nghiệp vụ hướng dẫn 2", "Tiếng Anh du lịch 2", "Marketing du lịch", "Quản trị lữ hành"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Thiết kế tour", "Kỹ năng giao tiếp", "Thực tập cơ sở"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Thực tập điều hành", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Hướng dẫn viên nội địa", salary: "8-15 triệu/tháng", companies: ["Công ty du lịch Gia Lai", "Saigontourist"] },
      { position: "Điều hành tour", salary: "10-18 triệu/tháng", companies: ["Công ty lữ hành", "OTA như Booking, Agoda"] },
      { position: "Quản lý du lịch", salary: "15-25 triệu/tháng", companies: ["Sở Du lịch", "Công ty lữ hành lớn"] }
    ],
    relatedNganhs: ["ky-thuat-che-bien", "quan-tri-khach-san"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/dulich.jpg"
  },
  "quan-tri-khach-san": {
    id: "quan-tri-khach-san",
    name: "Quản trị Khách sạn",
    khoaName: "Khoa Nghiệp vụ - Du lịch",
    description: "Ngành Quản trị Khách sạn đào tạo nhân viên và quản lý chuyên nghiệp trong lĩnh vực nhà hàng, khách sạn và resort.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "11.000.000 VNĐ/năm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Ngoại hình ưa nhìn",
      "Khả năng giao tiếp tốt"
    ],
    careers: [
      "Lễ tân khách sạn",
      "Quản lý buồng phòng",
      "Quản lý nhà hàng",
      "Giám đốc khách sạn",
      "Nhân viên chăm sóc khách hàng"
    ],
    subjects: [
      "Nghiệp vụ lễ tân",
      "Nghiệp vụ buồng phòng",
      "Quản trị khách sạn",
      "Tiếng Anh khách sạn",
      "Marketing dịch vụ"
    ],
    highlights: [
      "Thực tập tại resort 4-5 sao",
      "Cơ hội làm việc nước ngoài",
      "Thu nhập hấp dẫn + tips",
      "Môi trường làm việc chuyên nghiệp"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Nhập môn khách sạn", "Tiếng Anh giao tiếp", "Tin học văn phòng", "Tâm lý khách hàng"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Nghiệp vụ lễ tân", "Nghiệp vụ buồng phòng", "Tiếng Anh khách sạn 1", "Nghiệp vụ bàn bar"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Quản trị khách sạn", "Quản trị nhà hàng", "Tiếng Anh khách sạn 2", "Marketing dịch vụ"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Quản lý chất lượng dịch vụ", "Kỹ năng giải quyết xung đột", "Thực tập cơ sở"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Thực tập khách sạn", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Lễ tân", salary: "6-10 triệu/tháng + tips", companies: ["Khách sạn 3-4 sao", "Resort Gia Lai"] },
      { position: "Supervisor buồng phòng", salary: "10-15 triệu/tháng", companies: ["Khách sạn 4-5 sao", "Resort cao cấp"] },
      { position: "Quản lý khách sạn", salary: "18-30 triệu/tháng", companies: ["Chuỗi khách sạn lớn", "Resort quốc tế"] }
    ],
    relatedNganhs: ["huong-dan-du-lich", "ky-thuat-che-bien"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/khachsan.jpg"
  },
  "quan-tri-kinh-doanh": {
    id: "quan-tri-kinh-doanh",
    name: "Quản trị Kinh doanh",
    khoaName: "Khoa Nghiệp vụ - Du lịch",
    description: "Ngành Quản trị Kinh doanh đào tạo nhà quản lý, doanh nhân có khả năng điều hành và phát triển doanh nghiệp.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "11.500.000 VNĐ/năm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Có tinh thần khởi nghiệp",
      "Tư duy logic tốt"
    ],
    careers: [
      "Quản lý doanh nghiệp",
      "Nhân viên kinh doanh",
      "Marketing manager",
      "Khởi nghiệp",
      "Tư vấn kinh doanh"
    ],
    subjects: [
      "Quản trị học",
      "Marketing căn bản",
      "Quản trị nhân sự",
      "Quản trị tài chính",
      "Khởi nghiệp"
    ],
    highlights: [
      "Đào tạo tư duy kinh doanh",
      "Hỗ trợ khởi nghiệp",
      "Kết nối doanh nghiệp",
      "Thực tập thực tế"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Quản trị học", "Kinh tế vi mô", "Tin học văn phòng", "Tiếng Anh giao tiếp"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Kinh tế vĩ mô", "Marketing căn bản", "Pháp luật kinh doanh", "Thống kê doanh nghiệp"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Quản trị nhân sự", "Quản trị tài chính", "Quản trị bán hàng", "Tiếng Anh thương mại"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Khởi nghiệp", "Quản trị chiến lược", "Thực tập cơ sở"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Dự án kinh doanh", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Nhân viên kinh doanh", salary: "7-12 triệu/tháng + hoa hồng", companies: ["Doanh nghiệp địa phương", "Công ty TNHH"] },
      { position: "Quản lý kinh doanh", salary: "12-20 triệu/tháng", companies: ["Doanh nghiệp vừa", "Startup"] },
      { position: "Giám đốc kinh doanh", salary: "20-35 triệu/tháng", companies: ["Doanh nghiệp lớn", "Tập đoàn"] }
    ],
    relatedNganhs: ["ke-toan-doanh-nghiep", "huong-dan-du-lich"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/kinhdoanh.jpg"
  },
  "van-hoa-nghe-thuat": {
    id: "van-hoa-nghe-thuat",
    name: "Văn hóa Nghệ thuật",
    khoaName: "Khoa Văn hóa - Nghệ thuật",
    description: "Ngành Văn hóa Nghệ thuật đào tạo nghệ sĩ, diễn viên và cán bộ văn hóa, bảo tồn và phát huy văn hóa Tây Nguyên.",
    duration: "3 năm",
    degree: "Cao đẳng",
    tuitionFee: "9.500.000 VNĐ/năm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Có năng khiếu nghệ thuật",
      "Đam mê văn hóa dân tộc"
    ],
    careers: [
      "Nghệ sĩ biểu diễn",
      "Cán bộ văn hóa",
      "Giáo viên nghệ thuật",
      "Biên đạo múa",
      "Quản lý văn hóa cơ sở"
    ],
    subjects: [
      "Âm nhạc truyền thống",
      "Múa dân gian",
      "Nghệ thuật biểu diễn",
      "Văn hóa Tây Nguyên",
      "Tổ chức sự kiện"
    ],
    highlights: [
      "Bảo tồn văn hóa dân tộc",
      "Biểu diễn thực tế",
      "Nghệ nhân truyền dạy",
      "Cơ hội đi biểu diễn trong và ngoài nước"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Nhạc lý cơ bản", "Múa dân gian 1", "Văn hóa Tây Nguyên", "Thanh nhạc 1"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Múa dân gian 2", "Nhạc cụ truyền thống", "Kịch bản sân khấu", "Thanh nhạc 2"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Biểu diễn 1", "Biên đạo múa", "Tổ chức sự kiện", "Quản lý văn hóa"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Biểu diễn 2", "Thực tập cơ sở", "Sáng tác nghệ thuật"] },
      { semester: "Năm 3", subjects: ["Biểu diễn tốt nghiệp", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Nghệ sĩ biểu diễn", salary: "6-12 triệu/tháng", companies: ["Đoàn nghệ thuật tỉnh", "Nhà văn hóa"] },
      { position: "Cán bộ văn hóa", salary: "7-10 triệu/tháng", companies: ["UBND xã/phường", "Trung tâm văn hóa"] },
      { position: "Giáo viên nghệ thuật", salary: "8-15 triệu/tháng", companies: ["Trường học", "Trung tâm nghệ thuật"] }
    ],
    relatedNganhs: ["thiet-ke-do-hoa", "huong-dan-du-lich"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/vanhoa.jpg"
  },
  "nong-lam-nghiep": {
    id: "nong-lam-nghiep",
    name: "Nông Lâm nghiệp",
    khoaName: "Khoa Nông Lâm",
    description: "Ngành Nông Lâm nghiệp đào tạo kỹ thuật viên nông nghiệp, lâm nghiệp phục vụ phát triển kinh tế Tây Nguyên.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "9.000.000 VNĐ/năm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Yêu thích nông nghiệp",
      "Sức khỏe tốt"
    ],
    careers: [
      "Kỹ thuật viên nông nghiệp",
      "Kỹ thuật viên lâm nghiệp",
      "Khuyến nông viên",
      "Quản lý trang trại",
      "Kinh doanh nông sản"
    ],
    subjects: [
      "Trồng trọt",
      "Bảo vệ thực vật",
      "Kỹ thuật lâm sinh",
      "Chăn nuôi",
      "Nông nghiệp công nghệ cao"
    ],
    highlights: [
      "Phù hợp kinh tế địa phương",
      "Thực tập tại trang trại lớn",
      "Hỗ trợ khởi nghiệp nông nghiệp",
      "Nhu cầu nhân lực cao"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Thổ nhưỡng", "Sinh lý thực vật", "Tin học ứng dụng", "Tiếng Anh 1"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Kỹ thuật trồng trọt", "Bảo vệ thực vật", "Chăn nuôi đại cương", "Lâm sinh"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Cây công nghiệp", "Cây ăn quả", "Nông nghiệp công nghệ cao", "Quản lý trang trại"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Khuyến nông", "Thực tập cơ sở", "Kinh doanh nông sản"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Thực tập sản xuất", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Kỹ thuật viên", salary: "6-10 triệu/tháng", companies: ["Trang trại cà phê", "Công ty nông nghiệp"] },
      { position: "Khuyến nông viên", salary: "7-12 triệu/tháng", companies: ["Trạm khuyến nông", "Sở NN&PTNT"] },
      { position: "Quản lý trang trại", salary: "12-20 triệu/tháng", companies: ["Trang trại lớn", "Công ty FDI nông nghiệp"] }
    ],
    relatedNganhs: ["co-khi-che-tao", "cong-nghe-o-to"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/nonglam.jpg"
  }
};

const allNganhs = Object.values(nganhData);

export default function NganhDetail() {
  const { slug } = useParams<{ slug: string }>();
  const nganh = slug ? nganhData[slug] : null;

  if (!nganh) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-foreground mb-4">Không tìm thấy ngành học</h1>
            <p className="text-muted-foreground mb-6">Ngành học bạn tìm kiếm không tồn tại hoặc đã được di chuyển.</p>
            <Link to="/">
              <Button>Quay về trang chủ</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedNganhs = nganh.relatedNganhs
    .map(id => nganhData[id])
    .filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Image */}
        <section className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 py-20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <Link 
                to="/#programs" 
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors mb-6 group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Quay lại danh sách ngành
              </Link>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                  {nganh.khoaName}
                </span>
                <span className="px-3 py-1 bg-white/10 text-primary-foreground rounded-full text-sm">
                  {nganh.degree}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {nganh.name}
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-3xl">
                {nganh.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-12 -mt-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl p-5 shadow-elevated text-center border border-border/50"
              >
                <Clock className="h-7 w-7 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">Thời gian</p>
                <p className="text-lg font-bold text-foreground">{nganh.duration}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl p-5 shadow-elevated text-center border border-border/50"
              >
                <GraduationCap className="h-7 w-7 text-secondary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">Bằng cấp</p>
                <p className="text-lg font-bold text-foreground">{nganh.degree}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl p-5 shadow-elevated text-center border border-border/50"
              >
                <DollarSign className="h-7 w-7 text-green-500 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">Học phí</p>
                <p className="text-lg font-bold text-foreground">{nganh.tuitionFee}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card rounded-2xl p-5 shadow-elevated text-center border border-border/50"
              >
                <Users className="h-7 w-7 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">Hình thức</p>
                <p className="text-lg font-bold text-foreground">Chính quy</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Điều kiện tuyển sinh */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
                >
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Điều kiện tuyển sinh
                  </h2>
                  <ul className="space-y-3">
                    {nganh.admissionRequirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground/80">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Chương trình đào tạo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
                >
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Chương trình đào tạo
                  </h2>
                  <div className="space-y-4">
                    {nganh.curriculum.map((sem, index) => (
                      <div key={index} className="border-l-2 border-primary/30 pl-4">
                        <h3 className="font-semibold text-primary mb-2">{sem.semester}</h3>
                        <div className="flex flex-wrap gap-2">
                          {sem.subjects.map((subject, idx) => (
                            <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm text-foreground/80">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Cơ hội việc làm */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
                >
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-secondary" />
                    Cơ hội việc làm & Mức lương
                  </h2>
                  <div className="space-y-4">
                    {nganh.jobOpportunities.map((job, index) => (
                      <div key={index} className="p-4 bg-muted/50 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-foreground">{job.position}</h3>
                          <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                            {job.salary}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {job.companies.map((company, idx) => (
                            <span key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                              <Building2 className="h-3 w-3" />
                              {company}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Điểm nổi bật */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground"
                >
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-secondary" />
                    Điểm nổi bật của ngành
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {nganh.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm font-bold flex-shrink-0">
                          ✓
                        </div>
                        <span className="text-primary-foreground/90">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 border border-secondary/20 sticky top-24"
                >
                  <h3 className="text-lg font-bold text-foreground mb-4">🎓 Đăng ký tuyển sinh</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Đăng ký ngay để được tư vấn miễn phí về ngành <strong>{nganh.name}</strong> và các chính sách hỗ trợ học phí.
                  </p>
                  <a
                    href="https://cdgl.edu.vn/dang-ky-truc-tuyen/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 mb-3">
                      Đăng ký trực tuyến
                    </Button>
                  </a>
                  <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    Hotline: <a href="tel:02693825001" className="text-primary font-medium hover:underline">02693.825001</a>
                  </div>
                </motion.div>

                {/* Vị trí việc làm */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
                >
                  <h3 className="text-lg font-bold text-foreground mb-4">Vị trí việc làm</h3>
                  <ul className="space-y-2">
                    {nganh.careers.map((career, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        {career}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Ngành liên quan */}
                {relatedNganhs.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-2xl p-6 shadow-card border border-border/50"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-4">Ngành liên quan</h3>
                    <div className="space-y-3">
                      {relatedNganhs.map((related) => (
                        <Link
                          key={related.id}
                          to={`/nganh/${related.id}`}
                          className="block p-3 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {related.name}
                              </p>
                              <p className="text-xs text-muted-foreground">{related.duration}</p>
                            </div>
                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}