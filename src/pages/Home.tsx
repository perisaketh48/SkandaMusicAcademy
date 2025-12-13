import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import VisionSection from "@/components/home/VisionSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhatMakesUsDifferent from "@/components/home/WhatMakesUsDifferent";
import LearnMusicOnline from "@/components/home/LearnMusicOnline";
import FoundersMessage from "@/components/home/FoundersMessage";
import CTASection from "@/components/home/CTASection";
import Gallery from "@/components/home/Gallery";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Gallery />
      <VisionSection />
      <WhyChooseUs />
      <WhatMakesUsDifferent />
      <LearnMusicOnline />
      <FoundersMessage />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
