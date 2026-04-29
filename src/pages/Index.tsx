import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { trackPageViewCAPI } from "@/lib/meta-pixel";

const Index = () => {
  useEffect(() => {
    // Espelha o PageView do Pixel no CAPI com o mesmo event_id (deduplicação)
    trackPageViewCAPI();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
