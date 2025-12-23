import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Users, Award, Briefcase, ChevronRight, Phone, GraduationCap, DollarSign, BookOpen, Target, Building2, CheckCircle2, Code, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface NganhInfo {
  id: string;
  name: string;
  code: string;
  khoaName: string;
  group: string;
  description: string;
  duration: string;
  degree: string;
  tuitionFee: string;
  tuitionNote?: string;
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
  // === TRÌNH ĐỘ CAO ĐẲNG ===
  // Nhóm ngành Công nghệ - Kỹ thuật
  "dien-cong-nghiep": {
    id: "dien-cong-nghiep",
    name: "Điện công nghiệp",
    code: "6520227",
    khoaName: "Khoa Điện - Điện tử - Tin học",
    group: "Công nghệ - Kỹ thuật",
    description: "Ngành Điện công nghiệp đào tạo kỹ thuật viên vận hành, sửa chữa hệ thống điện trong nhà máy, xí nghiệp. Đáp ứng nhu cầu công nghiệp hóa của tỉnh Gia Lai và khu vực Tây Nguyên.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "801.550 đ/tháng",
    tuitionNote: "Được giảm 70% học phí theo chính sách ngành nặng nhọc, độc hại",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Xét tuyển điểm thi tốt nghiệp THPT hoặc học bạ lớp 12",
      "Sức khỏe tốt, phù hợp với ngành nghề"
    ],
    careers: [
      "Kỹ thuật viên điện công nghiệp",
      "Thợ điện nhà máy, xí nghiệp",
      "Kỹ thuật viên tự động hóa",
      "Giám sát kỹ thuật điện",
      "Kỹ thuật viên bảo trì điện"
    ],
    subjects: [
      "Điện kỹ thuật",
      "Máy điện",
      "PLC cơ bản",
      "Điện tử công suất",
      "Tự động hóa"
    ],
    highlights: [
      "Xưởng thực hành đầy đủ thiết bị hiện đại",
      "Liên kết với các KCN Gia Lai",
      "Thu nhập ổn định sau tốt nghiệp",
      "Được cấp chứng chỉ an toàn điện"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Điện kỹ thuật", "Vẽ kỹ thuật điện", "An toàn điện", "Vật liệu điện"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Máy điện", "Đo lường điện", "Khí cụ điện", "Điện tử cơ bản"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Cung cấp điện", "Truyền động điện", "PLC cơ bản", "Điện tử công suất"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Tự động hóa", "Điều khiển lập trình", "Thực tập cơ sở", "Bảo trì thiết bị điện"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Hệ thống SCADA", "Thực tập sản xuất", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Kỹ thuật viên điện", salary: "8-12 triệu/tháng", companies: ["Nhà máy thủy điện", "KCN Trà Đa", "Điện lực Gia Lai"] },
      { position: "Kỹ thuật viên tự động hóa", salary: "12-18 triệu/tháng", companies: ["Nhà máy sản xuất", "Công ty điện lực"] },
      { position: "Giám sát kỹ thuật", salary: "15-22 triệu/tháng", companies: ["Nhà thầu điện", "Công ty xây lắp"] }
    ],
    relatedNganhs: ["thiet-bi-lanh", "cong-nghe-thong-tin", "cong-nghe-han"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/dien.jpg"
  },
  "thiet-bi-lanh": {
    id: "thiet-bi-lanh",
    name: "Vận hành, sửa chữa thiết bị lạnh",
    code: "6520255",
    khoaName: "Khoa Điện - Điện tử - Tin học",
    group: "Công nghệ - Kỹ thuật",
    description: "Đào tạo kỹ thuật viên chuyên vận hành, bảo trì, sửa chữa hệ thống điều hòa không khí và thiết bị lạnh công nghiệp cho các tòa nhà, nhà máy, kho lạnh.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "801.550 đ/tháng",
    tuitionNote: "Được giảm 70% học phí theo chính sách ngành nặng nhọc, độc hại",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Xét tuyển điểm thi tốt nghiệp THPT hoặc học bạ lớp 12",
      "Sức khỏe tốt"
    ],
    careers: [
      "Kỹ thuật viên điện lạnh",
      "Thợ sửa chữa điều hòa",
      "Kỹ thuật viên kho lạnh công nghiệp",
      "Kỹ thuật viên bảo trì hệ thống HVAC",
      "Giám sát kỹ thuật điện lạnh"
    ],
    subjects: [
      "Kỹ thuật nhiệt",
      "Máy lạnh cơ bản",
      "Điều hòa không khí",
      "Kho lạnh công nghiệp",
      "Bảo trì hệ thống lạnh"
    ],
    highlights: [
      "Nhu cầu nhân lực cao trong thời tiết nóng",
      "Thu nhập tốt và ổn định",
      "Có thể làm việc độc lập",
      "Xưởng thực hành hiện đại"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Điện kỹ thuật", "Vẽ kỹ thuật", "Kỹ thuật nhiệt", "An toàn lao động"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Máy lạnh cơ bản", "Điều hòa không khí gia dụng", "Đo lường nhiệt"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Điều hòa không khí công nghiệp", "Kho lạnh", "Hệ thống HVAC"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Bảo trì sửa chữa", "Thực tập cơ sở", "Lắp đặt hệ thống"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Thực tập sản xuất", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Kỹ thuật viên điện lạnh", salary: "8-14 triệu/tháng", companies: ["Công ty điện lạnh", "Siêu thị, TTTM"] },
      { position: "Thợ sửa điều hòa", salary: "10-18 triệu/tháng", companies: ["Dịch vụ điện lạnh", "Làm việc độc lập"] },
      { position: "Kỹ thuật viên kho lạnh", salary: "12-20 triệu/tháng", companies: ["Nhà máy thực phẩm", "Công ty logistics lạnh"] }
    ],
    relatedNganhs: ["dien-cong-nghiep", "cong-nghe-o-to"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/dien.jpg"
  },
  "cong-nghe-co-khi": {
    id: "cong-nghe-co-khi",
    name: "Công nghệ kỹ thuật cơ khí",
    code: "6510201",
    khoaName: "Khoa Cơ khí - Xây dựng",
    group: "Công nghệ - Kỹ thuật",
    description: "Đào tạo kỹ thuật viên gia công, chế tạo các sản phẩm cơ khí công nghiệp. Đáp ứng nhu cầu phát triển công nghiệp của khu vực Tây Nguyên.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "801.550 đ/tháng",
    tuitionNote: "Được giảm 70% học phí theo chính sách ngành nặng nhọc, độc hại",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Xét tuyển điểm thi tốt nghiệp THPT hoặc học bạ lớp 12",
      "Sức khỏe tốt, phù hợp ngành nghề"
    ],
    careers: [
      "Kỹ thuật viên cơ khí",
      "Vận hành máy CNC",
      "Kỹ thuật viên gia công",
      "Giám sát sản xuất",
      "Quản đốc xưởng cơ khí"
    ],
    subjects: [
      "Vẽ kỹ thuật cơ khí",
      "Công nghệ kim loại",
      "Tiện phay CNC",
      "Thiết kế CAD/CAM",
      "Gia công cơ khí"
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
      { semester: "Năm 2 - Kỳ 1", subjects: ["Tiện cơ bản", "Phay cơ bản", "Gia công tia lửa điện", "CAD/CAM"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Tiện CNC", "Phay CNC", "Thực tập cơ sở"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Thiết kế khuôn mẫu", "Thực tập sản xuất", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Thợ cơ khí", salary: "8-12 triệu/tháng", companies: ["Xưởng cơ khí địa phương", "KCN Trà Đa"] },
      { position: "Kỹ thuật viên CNC", salary: "12-18 triệu/tháng", companies: ["Nhà máy sản xuất", "Công ty gia công"] },
      { position: "Giám sát sản xuất", salary: "15-25 triệu/tháng", companies: ["Công ty FDI", "Nhà máy lớn"] }
    ],
    relatedNganhs: ["cong-nghe-han", "cong-nghe-o-to", "ky-thuat-xay-dung"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/cokhi.jpg"
  },
  "cong-nghe-o-to": {
    id: "cong-nghe-o-to",
    name: "Công nghệ ô tô",
    code: "6510216",
    khoaName: "Khoa Động lực - Máy nông nghiệp",
    group: "Công nghệ - Kỹ thuật",
    description: "Đào tạo kỹ thuật viên có khả năng sửa chữa, bảo dưỡng các loại xe ô tô hiện đại với trang thiết bị tiên tiến nhất. Đáp ứng nhu cầu thị trường ô tô đang phát triển mạnh.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "801.550 đ/tháng",
    tuitionNote: "Được giảm 70% học phí theo chính sách",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Xét tuyển điểm thi tốt nghiệp THPT hoặc học bạ lớp 12",
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
      { semester: "Năm 2 - Kỳ 2", subjects: ["Điện ô tô", "Hệ thống gầm", "Điều hòa không khí ô tô", "Thực tập cơ sở"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Chẩn đoán kỹ thuật", "Thực tập sản xuất", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Kỹ thuật viên", salary: "8-15 triệu/tháng", companies: ["Toyota Gia Lai", "Hyundai Gia Lai", "Honda Gia Lai"] },
      { position: "Kỹ thuật viên chẩn đoán", salary: "12-20 triệu/tháng", companies: ["Các đại lý ô tô chính hãng"] },
      { position: "Quản lý xưởng", salary: "15-25 triệu/tháng", companies: ["Gara tư nhân", "Đại lý ủy quyền"] }
    ],
    relatedNganhs: ["dien-cong-nghiep", "cong-nghe-co-khi", "cong-nghe-han"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/oto.jpg"
  },
  "cong-nghe-thong-tin": {
    id: "cong-nghe-thong-tin",
    name: "Công nghệ thông tin (Ứng dụng phần mềm)",
    code: "6480202",
    khoaName: "Khoa Điện - Điện tử - Tin học",
    group: "Công nghệ - Kỹ thuật",
    description: "Đào tạo lập trình viên, thiết kế web, ứng dụng phần mềm và quản trị mạng. Chương trình cập nhật theo xu hướng công nghệ mới nhất.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "801.550 đ/tháng",
    tuitionNote: "Không được giảm học phí (ngành đánh dấu *)",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Xét tuyển điểm thi tốt nghiệp THPT hoặc học bạ lớp 12",
      "Có tư duy logic tốt, đam mê công nghệ"
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
      "Phòng máy tính cấu hình cao",
      "Hợp tác với FPT Software",
      "Chương trình đào tạo theo chuẩn quốc tế",
      "Cơ hội làm việc từ xa, thu nhập cao"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Nhập môn lập trình", "Toán rời rạc", "Tin học đại cương", "Tiếng Anh chuyên ngành"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Cấu trúc dữ liệu", "Lập trình hướng đối tượng", "Cơ sở dữ liệu", "Thiết kế giao diện"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Lập trình web", "Mạng máy tính", "Phân tích thiết kế hệ thống", "Lập trình di động"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["An toàn thông tin", "Quản trị hệ thống", "Dự án phần mềm", "Thực tập cơ sở"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Cloud Computing", "DevOps", "Thực tập doanh nghiệp", "Đồ án tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Lập trình viên Junior", salary: "10-15 triệu/tháng", companies: ["FPT Software", "Viettel", "VNG"] },
      { position: "Web Developer", salary: "12-20 triệu/tháng", companies: ["Công ty phần mềm", "Agency"] },
      { position: "System Admin", salary: "10-18 triệu/tháng", companies: ["Doanh nghiệp lớn", "Ngân hàng"] }
    ],
    relatedNganhs: ["dien-cong-nghiep", "ky-thuat-xay-dung"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/cntt.jpg"
  },
  "cong-nghe-han": {
    id: "cong-nghe-han",
    name: "Công nghệ hàn",
    code: "6520123",
    khoaName: "Khoa Cơ khí - Xây dựng",
    group: "Công nghệ - Kỹ thuật",
    description: "Đào tạo kỹ thuật viên hàn công nghiệp chuyên nghiệp với các kỹ thuật hàn điện hồ quang, hàn MIG, MAG, TIG. Đáp ứng nhu cầu nhân lực ngành cơ khí và xây dựng.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "801.550 đ/tháng",
    tuitionNote: "Được giảm 70% học phí theo chính sách ngành nặng nhọc, độc hại, nguy hiểm",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Xét tuyển điểm thi tốt nghiệp THPT hoặc học bạ lớp 12",
      "Sức khỏe tốt, phù hợp ngành nghề"
    ],
    careers: [
      "Thợ hàn công nghiệp",
      "Kỹ thuật viên hàn",
      "Giám sát hàn",
      "Kiểm tra chất lượng mối hàn",
      "Quản đốc xưởng hàn"
    ],
    subjects: [
      "Hàn điện hồ quang tay",
      "Hàn MIG/MAG",
      "Hàn TIG",
      "Đọc bản vẽ hàn",
      "Kiểm tra chất lượng mối hàn"
    ],
    highlights: [
      "Ngành nghề nhu cầu cao",
      "Thu nhập tốt, cơ hội XKLĐ",
      "Giảm 70% học phí",
      "Xưởng thực hành đầy đủ thiết bị"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Vẽ kỹ thuật", "Vật liệu hàn", "An toàn lao động", "Hàn điện cơ bản"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Hàn điện hồ quang tay", "Cắt kim loại", "Đọc bản vẽ hàn"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Hàn MIG/MAG", "Hàn TIG", "Hàn ống", "Kiểm tra mối hàn"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Hàn nâng cao", "Thực tập cơ sở"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Thực tập sản xuất", "Thực tập tốt nghiệp", "Thi chứng chỉ nghề"] }
    ],
    jobOpportunities: [
      { position: "Thợ hàn", salary: "10-15 triệu/tháng", companies: ["Xưởng cơ khí", "Công ty đóng tàu"] },
      { position: "Kỹ thuật viên hàn", salary: "12-20 triệu/tháng", companies: ["Nhà máy", "Công trình xây dựng"] },
      { position: "Xuất khẩu lao động", salary: "25-40 triệu/tháng", companies: ["Nhật Bản", "Hàn Quốc", "Đài Loan"] }
    ],
    relatedNganhs: ["cong-nghe-co-khi", "ky-thuat-xay-dung", "cong-nghe-o-to"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/cokhi.jpg"
  },
  "ky-thuat-xay-dung": {
    id: "ky-thuat-xay-dung",
    name: "Kỹ thuật xây dựng",
    code: "6580201",
    khoaName: "Khoa Cơ khí - Xây dựng",
    group: "Công nghệ - Kỹ thuật",
    description: "Đào tạo kỹ thuật viên thi công, giám sát các công trình xây dựng dân dụng và công nghiệp. Đáp ứng nhu cầu xây dựng hạ tầng của khu vực Tây Nguyên.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "768.200 đ/tháng",
    tuitionNote: "Nhóm ngành sản xuất chế biến và xây dựng",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Xét tuyển điểm thi tốt nghiệp THPT hoặc học bạ lớp 12",
      "Sức khỏe tốt"
    ],
    careers: [
      "Kỹ thuật viên xây dựng",
      "Giám sát công trình",
      "Đo bóc khối lượng",
      "Quản lý dự án xây dựng",
      "Tư vấn thiết kế"
    ],
    subjects: [
      "Vẽ kỹ thuật xây dựng",
      "Vật liệu xây dựng",
      "Kỹ thuật thi công",
      "Dự toán công trình",
      "AutoCAD xây dựng"
    ],
    highlights: [
      "Ngành nghề ổn định, nhu cầu cao",
      "Thực tập tại công trình thực tế",
      "Cơ hội thăng tiến nhanh",
      "Phần mềm bản quyền"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Vẽ kỹ thuật xây dựng", "Cơ học công trình", "Vật liệu xây dựng", "An toàn lao động"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Trắc địa", "AutoCAD 2D", "Nền móng", "Kết cấu bê tông"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Kỹ thuật thi công", "Dự toán công trình", "AutoCAD 3D", "Quản lý dự án"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Hoàn thiện công trình", "Thực tập cơ sở"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Thực tập sản xuất", "Thực tập tốt nghiệp", "Đồ án tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Kỹ thuật viên xây dựng", salary: "8-12 triệu/tháng", companies: ["Công ty xây dựng", "Nhà thầu"] },
      { position: "Giám sát công trình", salary: "12-18 triệu/tháng", companies: ["Công ty giám sát", "Ban QLDA"] },
      { position: "Quản lý dự án", salary: "18-30 triệu/tháng", companies: ["Tổng công ty xây dựng", "Chủ đầu tư"] }
    ],
    relatedNganhs: ["cong-nghe-co-khi", "cong-nghe-han"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/cokhi.jpg"
  },
  // Nhóm ngành Y - Dược (3 năm)
  "duoc": {
    id: "duoc",
    name: "Dược",
    code: "6720201",
    khoaName: "Khoa Y - Dược",
    group: "Y - Dược",
    description: "Đào tạo dược sĩ có khả năng tư vấn, bán thuốc và quản lý nhà thuốc. Đáp ứng nhu cầu chăm sóc sức khỏe của người dân trong khu vực.",
    duration: "3 năm",
    degree: "Cao đẳng",
    tuitionFee: "934.950 đ/tháng",
    tuitionNote: "Nhóm ngành sức khỏe - Học phí cao nhất",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Xét tuyển điểm thi tốt nghiệp THPT hoặc học bạ lớp 12",
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
      "Thực tập tại nhà thuốc, bệnh viện lớn"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Hóa đại cương", "Sinh học", "Giải phẫu sinh lý", "Tiếng Anh chuyên ngành"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Hóa phân tích", "Hóa hữu cơ", "Vi sinh ký sinh", "Dược liệu 1"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Hóa dược 1", "Dược lý học 1", "Bào chế 1", "Dược liệu 2"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Hóa dược 2", "Dược lý học 2", "Bào chế 2", "Thực tập cơ sở"] },
      { semester: "Năm 3", subjects: ["Quản lý dược", "Dược lâm sàng", "Thực tập nhà thuốc", "Khóa luận tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Dược sĩ nhà thuốc", salary: "8-12 triệu/tháng", companies: ["Nhà thuốc tư nhân", "Chuỗi nhà thuốc An Khang, Long Châu"] },
      { position: "Trình dược viên", salary: "10-18 triệu/tháng", companies: ["Công ty dược phẩm", "Hãng dược nước ngoài"] },
      { position: "Quản lý nhà thuốc", salary: "12-20 triệu/tháng", companies: ["Chuỗi nhà thuốc lớn", "Nhà thuốc riêng"] }
    ],
    relatedNganhs: ["dieu-duong"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/duoc.jpg"
  },
  "dieu-duong": {
    id: "dieu-duong",
    name: "Điều dưỡng",
    code: "6720301",
    khoaName: "Khoa Y - Dược",
    group: "Y - Dược",
    description: "Đào tạo nhân lực y tế chất lượng cao, có khả năng chăm sóc sức khỏe toàn diện cho bệnh nhân. Sinh viên được thực hành tại các bệnh viện lớn trong khu vực Tây Nguyên.",
    duration: "3 năm",
    degree: "Cao đẳng",
    tuitionFee: "934.950 đ/tháng",
    tuitionNote: "Nhóm ngành sức khỏe",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Xét tuyển điểm thi tốt nghiệp THPT hoặc học bạ lớp 12",
      "Sức khỏe tốt, không mắc bệnh truyền nhiễm"
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
      "Nhu cầu nhân lực y tế rất cao",
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
    relatedNganhs: ["duoc"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/z4275741756974_52cb1c24b8a2d3e5c0bce7b8b5a4c3d2.jpg"
  },
  // Nhóm ngành Nghiệp vụ - Du lịch
  "cong-tac-xa-hoi": {
    id: "cong-tac-xa-hoi",
    name: "Công tác xã hội",
    code: "6760101",
    khoaName: "Khoa Nghiệp vụ - Du lịch",
    group: "Nghiệp vụ - Du lịch",
    description: "Đào tạo nhân lực hỗ trợ, tư vấn và giải quyết các vấn đề xã hội cho cộng đồng, đặc biệt là các nhóm yếu thế trong xã hội.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "534.750 đ/tháng",
    tuitionNote: "Nhóm ngành Khoa học xã hội - Không được giảm học phí (ngành đánh dấu *)",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Xét tuyển điểm thi tốt nghiệp THPT hoặc học bạ lớp 12",
      "Có tâm huyết với công tác xã hội"
    ],
    careers: [
      "Nhân viên công tác xã hội",
      "Cán bộ xã hội cơ sở",
      "Tư vấn viên",
      "Quản lý dự án xã hội",
      "Cán bộ tổ chức phi chính phủ"
    ],
    subjects: [
      "Nhập môn công tác xã hội",
      "Tâm lý học xã hội",
      "Công tác xã hội với cá nhân",
      "Công tác xã hội với nhóm",
      "Phát triển cộng đồng"
    ],
    highlights: [
      "Ngành nghề ý nghĩa, phục vụ cộng đồng",
      "Nhu cầu nhân lực tăng cao",
      "Liên kết với các tổ chức xã hội",
      "Cơ hội làm việc tại NGO"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Nhập môn CTXH", "Tâm lý học đại cương", "Xã hội học", "Tiếng Anh"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["CTXH với cá nhân", "Tâm lý học xã hội", "Kỹ năng giao tiếp"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["CTXH với nhóm", "CTXH với cộng đồng", "Quản lý dự án"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Phát triển cộng đồng", "Thực tập cơ sở"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Thực tập chuyên môn", "Khóa luận tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Nhân viên CTXH", salary: "6-10 triệu/tháng", companies: ["UBND xã/phường", "Trung tâm bảo trợ"] },
      { position: "Cán bộ dự án", salary: "8-15 triệu/tháng", companies: ["Tổ chức phi chính phủ", "Quỹ từ thiện"] },
      { position: "Quản lý dự án", salary: "12-20 triệu/tháng", companies: ["NGO quốc tế", "Tổ chức xã hội"] }
    ],
    relatedNganhs: ["quan-tri-khach-san", "ke-toan-doanh-nghiep"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/kinhdoanh.jpg"
  },
  "quan-tri-khach-san": {
    id: "quan-tri-khach-san",
    name: "Quản trị khách sạn",
    code: "6810201",
    khoaName: "Khoa Nghiệp vụ - Du lịch",
    group: "Nghiệp vụ - Du lịch",
    description: "Đào tạo nhân viên và quản lý chuyên nghiệp trong lĩnh vực nhà hàng, khách sạn và resort. Đáp ứng nhu cầu du lịch đang phát triển mạnh tại Tây Nguyên.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "668.150 đ/tháng",
    tuitionNote: "Nhóm ngành Dịch vụ, du lịch và môi trường - Không được giảm học phí (ngành đánh dấu *)",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Xét tuyển điểm thi tốt nghiệp THPT hoặc học bạ lớp 12",
      "Khả năng giao tiếp tốt, ngoại hình ưa nhìn"
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
    relatedNganhs: ["cong-tac-xa-hoi", "ke-toan-doanh-nghiep"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/khachsan.jpg"
  },
  "ke-toan-doanh-nghiep": {
    id: "ke-toan-doanh-nghiep",
    name: "Kế toán doanh nghiệp",
    code: "6340302",
    khoaName: "Khoa Nghiệp vụ - Du lịch",
    group: "Nghiệp vụ - Du lịch",
    description: "Đào tạo kế toán viên chuyên nghiệp, có khả năng quản lý tài chính cho các loại hình doanh nghiệp.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "534.750 đ/tháng",
    tuitionNote: "Nhóm ngành Khoa học xã hội - Không được giảm học phí (ngành đánh dấu *)",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Xét tuyển điểm thi tốt nghiệp THPT hoặc học bạ lớp 12",
      "Có tư duy logic, cẩn thận"
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
      "Phần mềm kế toán MISA"
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
    relatedNganhs: ["quan-tri-khach-san", "cong-tac-xa-hoi"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/ketoan.jpg"
  },
  // Nhóm ngành Nông - Lâm nghiệp
  "bao-ve-thuc-vat": {
    id: "bao-ve-thuc-vat",
    name: "Bảo vệ thực vật",
    code: "6620116",
    khoaName: "Khoa Nông Lâm",
    group: "Nông - Lâm nghiệp",
    description: "Đào tạo kỹ thuật viên bảo vệ thực vật, phòng trừ sâu bệnh cho cây trồng. Phục vụ nền nông nghiệp Tây Nguyên với các loại cây công nghiệp quan trọng như cà phê, hồ tiêu, cao su.",
    duration: "2.5 năm",
    degree: "Cao đẳng",
    tuitionFee: "552.000 đ/tháng",
    tuitionNote: "Nhóm ngành Nông, Lâm, Ngư nghiệp - Học phí thấp nhất, được giảm 70%",
    admissionRequirements: [
      "Tốt nghiệp THPT hoặc tương đương",
      "Xét tuyển điểm thi tốt nghiệp THPT hoặc học bạ lớp 12",
      "Yêu thích nông nghiệp"
    ],
    careers: [
      "Kỹ thuật viên bảo vệ thực vật",
      "Nhân viên kiểm dịch thực vật",
      "Tư vấn viên nông nghiệp",
      "Quản lý trang trại",
      "Kinh doanh vật tư nông nghiệp"
    ],
    subjects: [
      "Sinh lý thực vật",
      "Côn trùng học đại cương",
      "Bệnh cây học đại cương",
      "Thuốc bảo vệ thực vật",
      "Phòng trừ dịch hại tổng hợp"
    ],
    highlights: [
      "Phù hợp kinh tế nông nghiệp Tây Nguyên",
      "Học phí thấp nhất, được giảm 70%",
      "Thực tập tại trang trại lớn",
      "Hỗ trợ khởi nghiệp nông nghiệp"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Thổ nhưỡng", "Sinh lý thực vật", "Sinh thái học", "Tiếng Anh 1"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Côn trùng học", "Bệnh cây", "Hóa bảo vệ thực vật"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Thuốc BVTV", "IPM cây công nghiệp", "BVTV cây ăn quả"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Kiểm dịch thực vật", "Thực tập cơ sở"] },
      { semester: "Năm 3 - Kỳ 1", subjects: ["Thực tập sản xuất", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Kỹ thuật viên BVTV", salary: "6-10 triệu/tháng", companies: ["Trang trại cà phê", "Chi cục BVTV"] },
      { position: "Tư vấn nông nghiệp", salary: "8-14 triệu/tháng", companies: ["Công ty vật tư nông nghiệp", "Trạm khuyến nông"] },
      { position: "Quản lý trang trại", salary: "12-20 triệu/tháng", companies: ["Trang trại lớn", "Công ty FDI nông nghiệp"] }
    ],
    relatedNganhs: ["dien-cong-nghiep", "cong-nghe-o-to"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/nonglam.jpg"
  },
  // === TRÌNH ĐỘ TRUNG CẤP ===
  "ky-thuat-che-bien": {
    id: "ky-thuat-che-bien",
    name: "Kỹ thuật chế biến món ăn",
    code: "5810207",
    khoaName: "Khoa Nghiệp vụ - Du lịch",
    group: "Nghiệp vụ - Du lịch (Trung cấp)",
    description: "Đào tạo đầu bếp chuyên nghiệp, có khả năng chế biến các món ăn Á - Âu và quản lý nhà bếp nhà hàng, khách sạn.",
    duration: "2 năm",
    degree: "Trung cấp",
    tuitionFee: "768.200 đ/tháng",
    tuitionNote: "Nhóm ngành sản xuất chế biến",
    admissionRequirements: [
      "Tốt nghiệp THCS hoặc THPT",
      "Xét tuyển học bạ",
      "Sức khỏe tốt, không mắc bệnh truyền nhiễm"
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
      "Thực tập tại resort 4-5 sao",
      "Học từ các chef nổi tiếng",
      "Cơ hội làm việc nước ngoài",
      "Phòng thực hành đạt chuẩn quốc tế"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Kỹ thuật cắt thái", "Chế biến món Việt", "Vệ sinh an toàn thực phẩm", "Nguyên liệu thực phẩm"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Ẩm thực Á", "Ẩm thực Âu", "Làm bánh cơ bản", "Nghiệp vụ bàn bar"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Chế biến hải sản", "Món ăn chay", "Làm bánh nâng cao", "Quản lý bếp"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Thực tập sản xuất", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Phụ bếp", salary: "6-10 triệu/tháng", companies: ["Nhà hàng địa phương", "Khách sạn 3 sao"] },
      { position: "Đầu bếp chính", salary: "10-18 triệu/tháng", companies: ["Resort Kon Tum", "Khách sạn 4-5 sao"] },
      { position: "Bếp trưởng", salary: "18-30 triệu/tháng", companies: ["Resort cao cấp", "Chuỗi nhà hàng lớn"] }
    ],
    relatedNganhs: ["quan-tri-khach-san", "may-thoi-trang"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/bep.jpg"
  },
  "may-thoi-trang": {
    id: "may-thoi-trang",
    name: "May thời trang",
    code: "5540205",
    khoaName: "Khoa Nghiệp vụ - Du lịch",
    group: "Nghiệp vụ - Du lịch (Trung cấp)",
    description: "Đào tạo kỹ thuật viên may thời trang có khả năng thiết kế, cắt may các sản phẩm thời trang. Đáp ứng nhu cầu nhân lực ngành dệt may.",
    duration: "2 năm",
    degree: "Trung cấp",
    tuitionFee: "801.550 đ/tháng",
    tuitionNote: "Nhóm ngành kỹ thuật, công nghệ",
    admissionRequirements: [
      "Tốt nghiệp THCS hoặc THPT",
      "Xét tuyển học bạ",
      "Có đam mê thời trang"
    ],
    careers: [
      "Thợ may",
      "Nhà thiết kế thời trang",
      "Kỹ thuật viên may",
      "Quản lý xưởng may",
      "Kinh doanh thời trang"
    ],
    subjects: [
      "Vẽ kỹ thuật thời trang",
      "Công nghệ may",
      "Thiết kế trang phục",
      "Cắt may công nghiệp",
      "Quản lý chất lượng may"
    ],
    highlights: [
      "Ngành nghề nhu cầu cao",
      "Có thể làm việc tự do",
      "Cơ hội xuất khẩu lao động",
      "Xưởng thực hành hiện đại"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Vẽ kỹ thuật may", "Vật liệu may", "May cơ bản", "An toàn lao động"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Thiết kế trang phục", "Cắt may áo sơ mi", "Cắt may quần"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["May công nghiệp", "May đầm váy", "Quản lý chất lượng"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Thực tập sản xuất", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Thợ may", salary: "6-10 triệu/tháng", companies: ["Xưởng may", "Cửa hàng thời trang"] },
      { position: "Kỹ thuật viên may", salary: "8-14 triệu/tháng", companies: ["Công ty may mặc", "Nhà máy dệt may"] },
      { position: "Quản lý xưởng", salary: "12-20 triệu/tháng", companies: ["Công ty may lớn", "XKLĐ Nhật Bản, Đài Loan"] }
    ],
    relatedNganhs: ["ky-thuat-che-bien", "quan-tri-khach-san"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/may.jpg"
  },
  "thu-y": {
    id: "thu-y",
    name: "Thú y",
    code: "5640101",
    khoaName: "Khoa Nông Lâm",
    group: "Nông - Lâm nghiệp (Trung cấp)",
    description: "Đào tạo kỹ thuật viên thú y có khả năng phòng và chữa bệnh cho vật nuôi, đáp ứng nhu cầu chăn nuôi của khu vực Tây Nguyên.",
    duration: "2 năm",
    degree: "Trung cấp",
    tuitionFee: "552.000 đ/tháng",
    tuitionNote: "Nhóm ngành Nông, Lâm, Ngư nghiệp - Học phí thấp nhất",
    admissionRequirements: [
      "Tốt nghiệp THCS hoặc THPT",
      "Xét tuyển học bạ",
      "Yêu thích động vật"
    ],
    careers: [
      "Kỹ thuật viên thú y",
      "Nhân viên thú y cơ sở",
      "Kinh doanh thuốc thú y",
      "Quản lý trang trại chăn nuôi",
      "Tư vấn chăn nuôi"
    ],
    subjects: [
      "Giải phẫu động vật",
      "Bệnh truyền nhiễm",
      "Dược lý thú y",
      "Phẫu thuật thú y",
      "Vệ sinh thú y"
    ],
    highlights: [
      "Học phí thấp, được giảm 70%",
      "Nhu cầu nhân lực cao tại địa phương",
      "Thực tập tại trang trại chăn nuôi lớn",
      "Có thể mở cửa hàng thú y riêng"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Giải phẫu động vật", "Sinh lý học động vật", "Dinh dưỡng vật nuôi"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Bệnh truyền nhiễm", "Dược lý thú y", "Vệ sinh thú y"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Phẫu thuật thú y", "Bệnh nội khoa", "Sản khoa thú y"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Thực tập sản xuất", "Thực tập tốt nghiệp"] }
    ],
    jobOpportunities: [
      { position: "Kỹ thuật viên thú y", salary: "6-10 triệu/tháng", companies: ["Trạm thú y", "Trang trại chăn nuôi"] },
      { position: "Kinh doanh thuốc thú y", salary: "8-15 triệu/tháng", companies: ["Đại lý thuốc thú y", "Công ty thú y"] },
      { position: "Quản lý trang trại", salary: "10-18 triệu/tháng", companies: ["Trang trại lợn, gà", "Công ty chăn nuôi lớn"] }
    ],
    relatedNganhs: ["bao-ve-thuc-vat"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/nonglam.jpg"
  },
  // Nhóm ngành Văn hóa nghệ thuật (Trung cấp)
  "bieu-dien-guitar": {
    id: "bieu-dien-guitar",
    name: "Biểu diễn nhạc cụ phương Tây (Guitar)",
    code: "5210217",
    khoaName: "Khoa Văn hóa - Nghệ thuật",
    group: "Văn hóa Nghệ thuật (Trung cấp)",
    description: "Đào tạo nghệ sĩ biểu diễn guitar chuyên nghiệp, có khả năng biểu diễn độc tấu và hòa tấu trong các chương trình nghệ thuật.",
    duration: "2 năm",
    degree: "Trung cấp",
    tuitionFee: "534.750 đ/tháng",
    tuitionNote: "Nhóm ngành nghệ thuật - Được giảm 70% học phí",
    admissionRequirements: [
      "Tốt nghiệp THCS hoặc THPT",
      "Xét tuyển năng khiếu",
      "Có đam mê âm nhạc"
    ],
    careers: [
      "Nghệ sĩ biểu diễn guitar",
      "Giáo viên dạy guitar",
      "Nhạc công nhà hàng, khách sạn",
      "Nhạc công ban nhạc",
      "Thu âm, hòa âm"
    ],
    subjects: [
      "Nhạc lý cơ bản",
      "Guitar cổ điển",
      "Guitar đệm hát",
      "Hòa âm",
      "Biểu diễn sân khấu"
    ],
    highlights: [
      "Được giảm 70% học phí",
      "Được biểu diễn thực tế",
      "Nghệ sĩ nổi tiếng giảng dạy",
      "Cơ hội tham gia các sự kiện văn hóa"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Nhạc lý cơ bản", "Guitar căn bản", "Thẩm âm", "Tiếng Anh"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Guitar nâng cao", "Hòa âm cơ bản", "Biểu diễn sân khấu 1"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Guitar chuyên sâu", "Hòa tấu", "Biểu diễn sân khấu 2"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Thực tập biểu diễn", "Tốt nghiệp biểu diễn"] }
    ],
    jobOpportunities: [
      { position: "Nhạc công", salary: "5-10 triệu/tháng", companies: ["Nhà hàng, khách sạn", "Quán cà phê"] },
      { position: "Giáo viên guitar", salary: "8-15 triệu/tháng", companies: ["Trung tâm âm nhạc", "Dạy kèm"] },
      { position: "Nghệ sĩ biểu diễn", salary: "10-20 triệu/tháng", companies: ["Đoàn nghệ thuật", "Sự kiện"] }
    ],
    relatedNganhs: ["bieu-dien-trung", "organ", "thanh-nhac"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/vanhoa.jpg"
  },
  "bieu-dien-trung": {
    id: "bieu-dien-trung",
    name: "Biểu diễn nhạc cụ truyền thống (T'Rưng)",
    code: "5210216",
    khoaName: "Khoa Văn hóa - Nghệ thuật",
    group: "Văn hóa Nghệ thuật (Trung cấp)",
    description: "Đào tạo nghệ sĩ biểu diễn nhạc cụ T'Rưng - nhạc cụ đặc trưng của văn hóa Tây Nguyên. Bảo tồn và phát huy giá trị văn hóa dân tộc.",
    duration: "2 năm",
    degree: "Trung cấp",
    tuitionFee: "534.750 đ/tháng",
    tuitionNote: "Nhóm ngành nghệ thuật - Được giảm 70% học phí",
    admissionRequirements: [
      "Tốt nghiệp THCS hoặc THPT",
      "Xét tuyển năng khiếu",
      "Có đam mê văn hóa dân tộc"
    ],
    careers: [
      "Nghệ sĩ biểu diễn T'Rưng",
      "Nghệ nhân truyền dạy",
      "Cán bộ văn hóa",
      "Biểu diễn du lịch văn hóa",
      "Giáo viên âm nhạc dân tộc"
    ],
    subjects: [
      "Nhạc lý dân tộc",
      "T'Rưng căn bản",
      "T'Rưng nâng cao",
      "Văn hóa các dân tộc Tây Nguyên",
      "Biểu diễn sân khấu"
    ],
    highlights: [
      "Bảo tồn văn hóa dân tộc Tây Nguyên",
      "Nghệ nhân dân gian truyền dạy",
      "Được giảm 70% học phí",
      "Cơ hội biểu diễn trong và ngoài nước"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Nhạc lý dân tộc", "T'Rưng căn bản", "Văn hóa Tây Nguyên"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["T'Rưng nâng cao", "Biểu diễn sân khấu 1", "Hòa tấu cơ bản"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["T'Rưng chuyên sâu", "Hòa tấu dân tộc", "Biểu diễn sân khấu 2"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Thực tập biểu diễn", "Tốt nghiệp biểu diễn"] }
    ],
    jobOpportunities: [
      { position: "Nghệ sĩ biểu diễn", salary: "6-12 triệu/tháng", companies: ["Đoàn nghệ thuật tỉnh", "Resort văn hóa"] },
      { position: "Cán bộ văn hóa", salary: "7-10 triệu/tháng", companies: ["Nhà văn hóa", "Trung tâm văn hóa"] },
      { position: "Biểu diễn du lịch", salary: "8-15 triệu/tháng", companies: ["Khu du lịch", "Làng văn hóa"] }
    ],
    relatedNganhs: ["bieu-dien-guitar", "nghe-thuat-mua", "thanh-nhac"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/vanhoa.jpg"
  },
  "organ": {
    id: "organ",
    name: "Organ",
    code: "5210224",
    khoaName: "Khoa Văn hóa - Nghệ thuật",
    group: "Văn hóa Nghệ thuật (Trung cấp)",
    description: "Đào tạo nghệ sĩ biểu diễn organ chuyên nghiệp, có khả năng đệm hát và hòa tấu trong các chương trình nghệ thuật.",
    duration: "2 năm",
    degree: "Trung cấp",
    tuitionFee: "534.750 đ/tháng",
    tuitionNote: "Nhóm ngành nghệ thuật - Được giảm 70% học phí",
    admissionRequirements: [
      "Tốt nghiệp THCS hoặc THPT",
      "Xét tuyển năng khiếu",
      "Có đam mê âm nhạc"
    ],
    careers: [
      "Nghệ sĩ biểu diễn organ",
      "Giáo viên dạy organ",
      "Nhạc công sự kiện",
      "Thu âm, hòa âm",
      "Nhạc công nhà hàng"
    ],
    subjects: [
      "Nhạc lý",
      "Organ căn bản",
      "Organ nâng cao",
      "Hòa âm",
      "Biểu diễn sân khấu"
    ],
    highlights: [
      "Được giảm 70% học phí",
      "Phòng thực hành đầy đủ nhạc cụ",
      "Cơ hội biểu diễn thực tế",
      "Thu nhập tốt từ nghề"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Nhạc lý cơ bản", "Organ căn bản", "Thẩm âm", "Tiếng Anh"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Organ nâng cao", "Hòa âm cơ bản", "Đệm hát"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Organ chuyên sâu", "Hòa tấu", "Biểu diễn sân khấu"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Thực tập biểu diễn", "Tốt nghiệp biểu diễn"] }
    ],
    jobOpportunities: [
      { position: "Nhạc công", salary: "6-12 triệu/tháng", companies: ["Sự kiện cưới hỏi", "Nhà hàng tiệc cưới"] },
      { position: "Giáo viên organ", salary: "8-15 triệu/tháng", companies: ["Trung tâm âm nhạc", "Dạy kèm"] },
      { position: "Nghệ sĩ biểu diễn", salary: "10-20 triệu/tháng", companies: ["Đoàn nghệ thuật", "Show ca nhạc"] }
    ],
    relatedNganhs: ["bieu-dien-guitar", "thanh-nhac", "bieu-dien-trung"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/vanhoa.jpg"
  },
  "thanh-nhac": {
    id: "thanh-nhac",
    name: "Thanh nhạc",
    code: "5210225",
    khoaName: "Khoa Văn hóa - Nghệ thuật",
    group: "Văn hóa Nghệ thuật (Trung cấp)",
    description: "Đào tạo ca sĩ, nghệ sĩ thanh nhạc chuyên nghiệp với kỹ thuật thanh nhạc bài bản. Phát triển tài năng âm nhạc của vùng đất Tây Nguyên.",
    duration: "2 năm",
    degree: "Trung cấp",
    tuitionFee: "534.750 đ/tháng",
    tuitionNote: "Nhóm ngành nghệ thuật - Được giảm 70% học phí",
    admissionRequirements: [
      "Tốt nghiệp THCS hoặc THPT",
      "Xét tuyển năng khiếu (thử giọng)",
      "Có giọng hát tốt"
    ],
    careers: [
      "Ca sĩ",
      "Giáo viên thanh nhạc",
      "MC - Người dẫn chương trình",
      "Nghệ sĩ biểu diễn",
      "Ca sĩ quán bar, nhà hàng"
    ],
    subjects: [
      "Nhạc lý",
      "Thanh nhạc cơ bản",
      "Thanh nhạc nâng cao",
      "Biểu diễn sân khấu",
      "Kỹ năng trình diễn"
    ],
    highlights: [
      "Được giảm 70% học phí",
      "Nghệ sĩ nổi tiếng giảng dạy",
      "Tham gia các cuộc thi ca hát",
      "Biểu diễn trong các sự kiện lớn"
    ],
    curriculum: [
      { semester: "Năm 1 - Kỳ 1", subjects: ["Nhạc lý cơ bản", "Thanh nhạc căn bản", "Thẩm âm", "Nhạc cụ phụ"] },
      { semester: "Năm 1 - Kỳ 2", subjects: ["Thanh nhạc nâng cao", "Hát hợp xướng", "Biểu diễn sân khấu 1"] },
      { semester: "Năm 2 - Kỳ 1", subjects: ["Thanh nhạc chuyên sâu", "Kỹ năng trình diễn", "Biểu diễn sân khấu 2"] },
      { semester: "Năm 2 - Kỳ 2", subjects: ["Thực tập biểu diễn", "Tốt nghiệp biểu diễn"] }
    ],
    jobOpportunities: [
      { position: "Ca sĩ quán bar", salary: "8-15 triệu/tháng", companies: ["Quán bar", "Nhà hàng"] },
      { position: "Giáo viên thanh nhạc", salary: "8-15 triệu/tháng", companies: ["Trung tâm âm nhạc", "Dạy kèm"] },
      { position: "Ca sĩ chuyên nghiệp", salary: "15-50 triệu/tháng", companies: ["Sự kiện", "Show ca nhạc", "Hãng ghi âm"] }
    ],
    relatedNganhs: ["organ", "bieu-dien-guitar", "nghe-thuat-mua"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/vanhoa.jpg"
  },
  "nghe-thuat-mua": {
    id: "nghe-thuat-mua",
    name: "Nghệ thuật biểu diễn múa dân gian dân tộc",
    code: "5210207",
    khoaName: "Khoa Văn hóa - Nghệ thuật",
    group: "Văn hóa Nghệ thuật (Trung cấp)",
    description: "Đào tạo nghệ sĩ múa chuyên nghiệp, bảo tồn và phát huy múa dân gian các dân tộc Tây Nguyên. Thời gian đào tạo 3 năm.",
    duration: "3 năm",
    degree: "Trung cấp",
    tuitionFee: "534.750 đ/tháng",
    tuitionNote: "Nhóm ngành nghệ thuật - Được giảm 70% học phí",
    admissionRequirements: [
      "Tốt nghiệp THCS hoặc THPT",
      "Xét tuyển năng khiếu (thử múa)",
      "Có năng khiếu múa, hình thể phù hợp"
    ],
    careers: [
      "Nghệ sĩ múa",
      "Biên đạo múa",
      "Giáo viên múa",
      "Cán bộ văn hóa",
      "Diễn viên du lịch văn hóa"
    ],
    subjects: [
      "Múa cơ bản",
      "Múa dân gian Việt Nam",
      "Múa dân tộc Tây Nguyên",
      "Biên đạo múa",
      "Biểu diễn sân khấu"
    ],
    highlights: [
      "Bảo tồn múa dân tộc Tây Nguyên",
      "Nghệ nhân dân gian truyền dạy",
      "Được giảm 70% học phí",
      "Cơ hội biểu diễn trong và ngoài nước"
    ],
    curriculum: [
      { semester: "Năm 1", subjects: ["Múa cơ bản", "Thể dục nghệ thuật", "Múa dân gian Việt Nam", "Nhạc lý"] },
      { semester: "Năm 2", subjects: ["Múa dân tộc Tây Nguyên", "Múa đương đại", "Biểu diễn sân khấu 1"] },
      { semester: "Năm 3", subjects: ["Biên đạo múa", "Biểu diễn sân khấu 2", "Thực tập biểu diễn", "Tốt nghiệp biểu diễn"] }
    ],
    jobOpportunities: [
      { position: "Diễn viên múa", salary: "6-12 triệu/tháng", companies: ["Đoàn nghệ thuật tỉnh", "Nhà hát"] },
      { position: "Giáo viên múa", salary: "7-12 triệu/tháng", companies: ["Trường học", "Trung tâm văn hóa"] },
      { position: "Biên đạo múa", salary: "10-20 triệu/tháng", companies: ["Đoàn nghệ thuật", "Sự kiện lớn"] }
    ],
    relatedNganhs: ["bieu-dien-trung", "thanh-nhac"],
    image: "https://cdgl.edu.vn/wp-content/uploads/2023/04/vanhoa.jpg"
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
              
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                  {nganh.khoaName}
                </span>
                <span className="px-3 py-1 bg-white/10 text-primary-foreground rounded-full text-sm">
                  {nganh.degree}
                </span>
                <span className="px-3 py-1 bg-white/20 text-primary-foreground rounded-full text-sm flex items-center gap-1">
                  <Code className="h-3 w-3" />
                  Mã ngành: {nganh.code}
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
            
            {/* Tuition note */}
            {nganh.tuitionNote && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-5xl mx-auto mt-4 p-4 bg-accent/10 border border-accent/20 rounded-xl flex items-start gap-3"
              >
                <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-accent">Lưu ý học phí:</strong> {nganh.tuitionNote}
                </p>
              </motion.div>
            )}
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
                  <h3 className="text-lg font-bold text-foreground mb-4">🎓 Đăng ký tuyển sinh 2026</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Đăng ký ngay để được tư vấn miễn phí về ngành <strong>{nganh.name}</strong> và các chính sách hỗ trợ học phí.
                  </p>
                  <div className="text-xs text-muted-foreground mb-4 p-3 bg-muted/50 rounded-lg">
                    <p className="font-medium text-foreground mb-1">Thời gian nhận hồ sơ:</p>
                    <p>Từ 01/3/2026 đến 30/11/2026</p>
                    <p className="mt-2 font-medium text-foreground">Nhập học dự kiến:</p>
                    <p>Tháng 9/2026</p>
                  </div>
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
                    Hotline: <a href="tel:02696296999" className="text-primary font-medium hover:underline">0269.6296.999</a>
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
                              <p className="text-xs text-muted-foreground">{related.duration} - {related.degree}</p>
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
