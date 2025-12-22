import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Sẵn sàng khởi đầu
            <span className="block text-secondary mt-2">hành trình nghề nghiệp?</span>
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Đăng ký ngay hôm nay để nhận tư vấn miễn phí về ngành học phù hợp 
            và các chính sách hỗ trợ học phí đặc biệt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8"
            >
              Đăng ký tư vấn
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              02693 825 001
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10">
            <p className="text-sm text-primary-foreground/60 mb-4">Được công nhận bởi</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {["Bộ LĐ-TB&XH", "UBND Tỉnh Gia Lai", "Tổng cục GDNN"].map((org) => (
                <span key={org} className="text-primary-foreground/70 text-sm font-medium">
                  {org}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}