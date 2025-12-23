import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorksGallery from "@/components/WorksGallery";
import GraphicsSection from "@/components/GraphicsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background w-full">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorksGallery />
      <GraphicsSection />
      <Footer />
    </div>
  );
};

export default Index;
