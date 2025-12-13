import { ReactNode } from "react";
import FloatingMusicNotes from "@/components/FloatingMusicNotes";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHero = ({ title, subtitle, children }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-tertiary via-primary to-secondary rangoli-pattern py-20 lg:py-28">
      <FloatingMusicNotes count={8} />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold rounded-full blur-3xl floating-animation" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: "0.1s" }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
