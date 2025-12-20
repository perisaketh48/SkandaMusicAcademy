import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhatMakesUsDifferent from "@/components/home/WhatMakesUsDifferent";
import LearnMusicOnline from "@/components/home/LearnMusicOnline";
import CTASection from "@/components/home/CTASection";
import Gallery from "@/components/home/Gallery";
import HomeMissionVisionPreview from "./../components/home/HomeMissionVisionPreview";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Gallery />
      <HomeMissionVisionPreview />
      <WhyChooseUs />
      <WhatMakesUsDifferent />
      <LearnMusicOnline />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
