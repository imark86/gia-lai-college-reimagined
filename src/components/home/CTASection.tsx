import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-80 h-80 border border-white/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 w-96 h-96 border border-white/10 rounded-full"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white mb-6 border border-white/30"
          >
            <Zap className="h-4 w-4 text-yellow-300" />
            Đăng ký ngay hôm nay
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 font-display leading-tight">
            Sẵn Sàng Cho
            <br />
            <span className="text-yellow-300">Hành Trình Mới?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Bắt đầu hành trình chinh phục ước mơ của bạn. Đăng ký tư vấn miễn phí để được hỗ trợ 
            chọn ngành nghề phù hợp nhất.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://cdgl.edu.vn/dang-ky-truc-tuyen/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-base px-8 h-14 rounded-2xl shadow-lg hover-lift group"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Đăng ký tư vấn miễn phí
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="tel:02693825001">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold text-base px-8 h-14 rounded-2xl backdrop-blur-sm"
              >
                <Phone className="mr-2 h-5 w-5" />
                02696.296.999
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
