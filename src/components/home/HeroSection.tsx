import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingMusicNotes from "@/components/FloatingMusicNotes";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[100vh] w-full overflow-hidden">
      {/* ---------- BACKGROUND IMAGE LAYER ---------- */}
      <div className="absolute inset-0">
        <img
          src="/Assets/images/hero_section.png"
          alt="Carnatic music teaching"
          className="w-full h-full object-cover scale-100"
        />

        {/* cinematic dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D2137]/70 via-[#0D2137]/50 to-[#0D2137]/80" />

        {/* subtle blue accent light */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1E90FF]/25 via-transparent to-[#1E90FF]/15" />
      </div>

      {/* ---------- ORGANIC EDGE MASKS ---------- */}
      <div className="absolute top-0 left-0 w-full h-16 sm:h-24 bg-background clip-top-wave z-20" />
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-background clip-bottom-wave z-20" />

      {/* ---------- FLOATING MUSICAL DEPTH ---------- */}
      <FloatingMusicNotes count={14} />

      {/* ---------- CONTENT ---------- */}
      <div className="relative z-30 min-h-[90vh] sm:min-h-[100vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-xl">
            Learn the Tradition.
            <br className="hidden sm:block" />
            <span className="text-[#ffffff] text-stroke">Live the Music.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            To inspire every learner to discover their voice, honour tradition,
            and grow through the soulful journey of Carnatic music.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 
                         shadow-[0_12px_40px_rgba(30,144,255,0.35)]
                         hover:shadow-[0_16px_50px_rgba(30,144,255,0.45)]
                         text-base font-semibold px-8 py-6 transition-all duration-200"
            >
              <Link to="/demo">
                Book a Demo Class
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white font-extrabold bg-white/5 hover:bg-white/15 backdrop-blur-sm px-8 py-6 transition-all duration-200"
            >
              <Link to="/about">Explore the Academy</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
