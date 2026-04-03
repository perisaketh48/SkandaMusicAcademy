import { ReactNode } from "react";
import FloatingMusicNotes from "@/components/FloatingMusicNotes";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHero = ({ title, subtitle, children }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1877F2] to-[#0a52c2] py-16 sm:py-20 lg:py-28">
      <FloatingMusicNotes count={8} />

      {/* Subtle depth elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#1877F2] rounded-full blur-[80px] floating-animation"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#42a5f5] rounded-full blur-[100px] floating-animation" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 sm:mb-6 fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto fade-in-up px-2" style={{ animationDelay: "0.1s" }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
