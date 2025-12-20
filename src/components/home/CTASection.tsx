import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingMusicNotes from "@/components/FloatingMusicNotes";

const CTASection = () => {
  return (
    <section className="py-12 bg-[#e0d6cc]  relative overflow-hidden">
      <FloatingMusicNotes count={8} />
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient-to-r from-gold via-accent to-gold  mb-6 fade-in-up">
          Begin Your Musical Journey Today
        </h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg fade-in-up">
          Take the first step towards discovering the transformative power of
          Carnatic music. Book a free demo class and experience our teaching
          approach firsthand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-gold via-accent to-gold hover:shadow-gold text-base font-semibold"
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
            className=" border-primary-foreground text-primary-foreground font-semibold hover:bg-primary/10 text-slate-950"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
