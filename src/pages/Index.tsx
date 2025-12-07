import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <main className="min-h-screen pt-16 pb-16 md:pb-0">
      <HeroSection />
      <FeaturedCourses />
      <BenefitsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;
