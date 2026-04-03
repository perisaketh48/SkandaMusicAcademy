import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhatMakesUsDifferent from "@/components/home/WhatMakesUsDifferent";
import LearnMusicOnline from "@/components/home/LearnMusicOnline";
import CTASection from "@/components/home/CTASection";
import QuickNav from "@/components/QuickNav";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import HomeMissionVisionPreview from "./../components/home/HomeMissionVisionPreview";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HomeMissionVisionPreview />
      <WhyChooseUs />
      <WhatMakesUsDifferent />
      <LearnMusicOnline />
      <QuickNav />
      <CTASection />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
