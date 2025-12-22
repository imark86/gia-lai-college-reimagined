import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { DepartmentsSection } from "@/components/home/DepartmentsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <WhyUsSection />
        <DepartmentsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
