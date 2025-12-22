import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MarqueeNews } from "@/components/home/MarqueeNews";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { DepartmentsSection } from "@/components/home/DepartmentsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { GallerySection } from "@/components/home/GallerySection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MarqueeNews />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <WhyUsSection />
        <DepartmentsSection />
        <NewsSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;