import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MarqueeNews } from "@/components/home/MarqueeNews";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { ParallaxSection } from "@/components/home/ParallaxSection";
import { DepartmentsSection } from "@/components/home/DepartmentsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { GallerySection } from "@/components/home/GallerySection";
import { MapSection } from "@/components/home/MapSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <MarqueeNews />
        <HeroSection />
        <WhyUsSection />
        <ParallaxSection />
        <DepartmentsSection />
        <NewsSection />
        <GallerySection />
        <MapSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
