import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingMusicNotes from "@/components/FloatingMusicNotes";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0D2137] via-[#26629f] to-[#0D3F73] relative overflow-hidden">
      <FloatingMusicNotes count={8} />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#1E90FF] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 sm:mb-6 fade-in-up">
          Begin Your Musical Journey Today
        </h2>
        <p className="text-white/75 max-w-2xl mx-auto mb-8 text-base sm:text-lg fade-in-up px-2">
          Take the first step towards discovering the transformative power of
          Carnatic music. Book a free demo class and experience our teaching
          approach firsthand.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center fade-in-up px-4 sm:px-0">
          <Button
            asChild
            size="lg"
            className="bg-[#1E90FF] hover:bg-[#1a7ee0] text-white text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 py-6"
          >
            <Link to="/demo">
              Book Your Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white bg-white/5 hover:bg-white/10 font-semibold py-6 transition-all duration-200"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
