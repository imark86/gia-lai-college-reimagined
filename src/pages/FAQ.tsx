import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  GraduationCap, 
  CreditCard, 
  FileText, 
  Users, 
  Building, 
  Phone,
  HelpCircle,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const faqCategories = [
  {
    title: "Tuyển sinh",
    icon: GraduationCap,
    color: "from-primary to-primary/70",
    questions: [
      {
        q: "Điều kiện xét tuyển vào Cao đẳng Gia Lai là gì?",
        a: "Thí sinh đã tốt nghiệp THPT hoặc tương đương. Đối với hệ trung cấp, thí sinh đã tốt nghiệp THCS hoặc tương đương. Nhà trường xét tuyển dựa trên học bạ THPT hoặc kết quả thi tốt nghiệp."
      },
      {
        q: "Thời gian nhận hồ sơ xét tuyển năm 2026?",
        a: "Thời gian nhận hồ sơ xét tuyển: Từ ngày 01/03/2026 đến hết ngày 30/11/2026. Dự kiến nhập học: Tháng 9/2026."
      },
      {
        q: "Hồ sơ xét tuyển cần những gì?",
        a: "Hồ sơ bao gồm: Phiếu đăng ký xét tuyển (theo mẫu của trường), Bản sao công chứng bằng tốt nghiệp THPT hoặc giấy chứng nhận tốt nghiệp tạm thời, Bản sao công chứng học bạ THPT (3 năm), Giấy khai sinh bản sao, CMND/CCCD photo, 4 ảnh 3x4."
      },
      {
        q: "Có thể đăng ký xét tuyển trực tuyến không?",
        a: "Có. Thí sinh có thể đăng ký xét tuyển trực tuyến tại website cdgl.edu.vn hoặc liên hệ hotline 02696.296.999 để được hướng dẫn chi tiết."
      },
      {
        q: "Trường có xét tuyển bổ sung không?",
        a: "Có. Trường tiếp tục xét tuyển bổ sung các đợt theo thông báo cụ thể trên website và fanpage chính thức của trường."
      }
    ]
  },
  {
    title: "Học phí & Chi phí",
    icon: CreditCard,
    color: "from-secondary to-secondary/70",
    questions: [
      {
        q: "Học phí các ngành tại Cao đẳng Gia Lai như thế nào?",
        a: "Học phí dao động từ 552.000đ đến 934.950đ/tháng tùy theo ngành học. Cụ thể: Nhóm ngành Y Dược: 844.000đ - 934.950đ/tháng; Nhóm ngành Kỹ thuật, Công nghệ: 693.000đ - 714.350đ/tháng; Nhóm ngành Nghiệp vụ Du lịch: 552.000đ - 693.050đ/tháng."
      },
      {
        q: "Có được miễn giảm học phí không?",
        a: "Có. Sinh viên là người dân tộc thiểu số thuộc hộ nghèo và hộ cận nghèo theo quy định của Thủ tướng Chính phủ được giảm 70% học phí."
      },
      {
        q: "Ngoài học phí còn những khoản phí nào khác?",
        a: "Sinh viên cần đóng thêm: Lệ phí nhập học (khoảng 100.000đ), Bảo hiểm y tế theo quy định, Phí ký túc xá (nếu ở nội trú), Chi phí sách vở, đồng phục (tùy ngành)."
      },
      {
        q: "Có hỗ trợ vay vốn sinh viên không?",
        a: "Có. Sinh viên có thể vay vốn ưu đãi từ Ngân hàng Chính sách Xã hội theo chính sách tín dụng học sinh, sinh viên của Nhà nước."
      }
    ]
  },
  {
    title: "Chính sách hỗ trợ",
    icon: Users,
    color: "from-accent to-accent/70",
    questions: [
      {
        q: "Trường có ký túc xá cho sinh viên không?",
        a: "Có. Trường có ký túc xá tại cơ sở Cách Mạng Tháng 8 và cơ sở Biển Hồ với đầy đủ tiện nghi: giường tầng, quạt, nhà vệ sinh khép kín, wifi miễn phí."
      },
      {
        q: "Sinh viên có được hỗ trợ việc làm sau tốt nghiệp không?",
        a: "Có. Trường có Trung tâm Tuyển sinh & Hỗ trợ HSSV phối hợp với các doanh nghiệp để giới thiệu việc làm cho sinh viên. Tỷ lệ sinh viên có việc làm sau tốt nghiệp đạt trên 85%."
      },
      {
        q: "Trường có chính sách học bổng không?",
        a: "Có. Trường có các loại học bổng: Học bổng khuyến khích học tập (dựa trên kết quả học tập), Học bổng dành cho sinh viên có hoàn cảnh khó khăn, Học bổng từ các doanh nghiệp đối tác."
      },
      {
        q: "Sinh viên dân tộc thiểu số được hỗ trợ gì?",
        a: "Sinh viên dân tộc thiểu số được: Giảm 70% học phí (nếu thuộc hộ nghèo/cận nghèo), Ưu tiên bố trí ký túc xá, Hỗ trợ chi phí học tập theo chính sách của tỉnh Gia Lai."
      }
    ]
  },
  {
    title: "Chương trình đào tạo",
    icon: BookOpen,
    color: "from-primary to-secondary",
    questions: [
      {
        q: "Thời gian đào tạo hệ cao đẳng là bao lâu?",
        a: "Thời gian đào tạo hệ cao đẳng từ 2 đến 3 năm tùy theo ngành học. Đa số các ngành có thời gian đào tạo 2,5 năm."
      },
      {
        q: "Trường có những ngành đào tạo nào?",
        a: "Trường đào tạo 13 ngành cao đẳng: Công nghệ kỹ thuật điện (6 học kỳ), Điện tử công nghiệp (6 HK), Công nghệ thông tin (6 HK), Công nghệ ô tô (6 HK), Dược (6 HK), Điều dưỡng (6 HK), Kế toán (5 HK), Quản trị kinh doanh (5 HK), Thiết kế đồ họa (5 HK), Quản trị khách sạn (5 HK), Hướng dẫn du lịch (5 HK), Thú y (5 HK), Lâm nghiệp (5 HK). Và 8 ngành trung cấp."
      },
      {
        q: "Sinh viên có được thực hành nhiều không?",
        a: "Có. Chương trình đào tạo chú trọng thực hành với tỷ lệ lý thuyết/thực hành là 40/60. Sinh viên được thực tập tại doanh nghiệp từ học kỳ 4 hoặc 5."
      },
      {
        q: "Sau khi tốt nghiệp có thể liên thông lên đại học không?",
        a: "Có. Sinh viên tốt nghiệp cao đẳng có thể liên thông lên đại học tại các trường đại học trong nước với thời gian từ 1,5 đến 2 năm tùy ngành."
      }
    ]
  },
  {
    title: "Cơ sở vật chất",
    icon: Building,
    color: "from-secondary to-accent",
    questions: [
      {
        q: "Trường có bao nhiêu cơ sở đào tạo?",
        a: "Trường có 5 cơ sở đào tạo: Cơ sở Cách Mạng Tháng 8 (P. Hội Thương, TP. Pleiku), Cơ sở Biển Hồ (P. Biển Hồ, TP. Pleiku), Cơ sở An Khê (Thị xã An Khê), Cơ sở Ayun Pa (Thị xã Ayun Pa), Cơ sở Đức Cơ (Huyện Đức Cơ)."
      },
      {
        q: "Trang thiết bị phục vụ học tập như thế nào?",
        a: "Trường có đầy đủ phòng thực hành hiện đại: Xưởng ô tô, Phòng thực hành điện - điện tử, Phòng máy tính, Phòng thực hành y dược, Phòng mô phỏng khách sạn - nhà hàng, Vườn thực nghiệm nông lâm."
      },
      {
        q: "Sinh viên có thể sử dụng thư viện không?",
        a: "Có. Thư viện trường mở cửa từ 7h00 đến 21h00 các ngày trong tuần với hàng nghìn đầu sách, tài liệu chuyên ngành và hệ thống thư viện điện tử."
      }
    ]
  },
  {
    title: "Liên hệ & Hỗ trợ",
    icon: Phone,
    color: "from-accent to-primary",
    questions: [
      {
        q: "Làm thế nào để liên hệ tư vấn tuyển sinh?",
        a: "Liên hệ Hotline: 02696.296.999 (8h00 - 17h00 các ngày làm việc), Email: tuyensinh@cdgl.edu.vn, Zalo: 02696.296.999, hoặc đến trực tiếp Trung tâm Tuyển sinh tại cơ sở Cách Mạng Tháng 8."
      },
      {
        q: "Website và fanpage chính thức của trường?",
        a: "Website: cdgl.edu.vn, Fanpage Facebook: Cao đẳng Gia Lai, Youtube: Cao đẳng Gia Lai."
      },
      {
        q: "Có thể đến trường tham quan trước khi đăng ký không?",
        a: "Có. Thí sinh và phụ huynh có thể liên hệ trước qua hotline để đặt lịch tham quan cơ sở vật chất, gặp gỡ giảng viên và tìm hiểu về các ngành đào tạo."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>Câu hỏi thường gặp - Cao đẳng Gia Lai</title>
        <meta name="description" content="Giải đáp các thắc mắc về tuyển sinh, học phí, chính sách hỗ trợ, chương trình đào tạo tại Cao đẳng Gia Lai." />
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <pattern id="faq-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="currentColor" className="text-white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#faq-pattern)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <HelpCircle className="h-5 w-5 text-white" />
                <span className="text-white font-medium">FAQ</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
                Câu hỏi thường gặp
              </h1>
              
              <p className="text-lg md:text-xl text-white/80">
                Giải đáp nhanh các thắc mắc về tuyển sinh, học phí và chính sách hỗ trợ
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {faqCategories.map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                  className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-card"
                >
                  {/* Category Header */}
                  <div className={`p-6 bg-gradient-to-r ${category.color}`}>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-white font-display">
                        {category.title}
                      </h2>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="p-6">
                    <Accordion type="single" collapsible className="space-y-3">
                      {category.questions.map((item, qIndex) => (
                        <AccordionItem 
                          key={qIndex} 
                          value={`${catIndex}-${qIndex}`}
                          className="border border-border/50 rounded-xl px-4 data-[state=open]:bg-muted/50"
                        >
                          <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-4">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-sm pb-4">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">
                Chưa tìm thấy câu trả lời?
              </h3>
              <p className="text-muted-foreground mb-8">
                Liên hệ trực tiếp với chúng tôi để được tư vấn chi tiết về tuyển sinh và các ngành đào tạo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:02696296999">
                  <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90 rounded-xl gap-2">
                    <Phone className="h-5 w-5" />
                    Gọi 02696.296.999
                  </Button>
                </a>
                <a href="https://cdgl.edu.vn/dang-ky-truc-tuyen/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="rounded-xl gap-2">
                    <FileText className="h-5 w-5" />
                    Đăng ký tư vấn
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}