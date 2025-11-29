import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Music, Sparkles } from "lucide-react";
import heroPattern from "@/assets/hero-pattern.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 md:py-0"
      style={{
        background:
          "linear-gradient(rgba(40, 20, 15, 0.85), rgba(40, 20, 15, 0.75))",
      }}
    >
      {/* Rotating Hero Pattern Background */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroPattern})`,
          backgroundSize: "120vh", // ensures perfect circular coverage
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", // centers mandala precisely
          transformOrigin: "center center", // IMPORTANT
          opacity: 0.4,
          scale: 3.5,
        }}
      />

      {/* Floating musical notes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["Sa", "Ri", "Ga", "Ma", "Pa", "Dha", "Ni"].map((note, i) => (
          <motion.div
            key={note}
            className="absolute text-secondary/20 text-2xl font-heading font-bold"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              y: [-20, -100],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 1.2,
            }}
            style={{
              left: `${10 + i * 15}%`,
              bottom: 0,
            }}
          >
            {note}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="relative">
              <Music className="w-16 h-16 text-secondary animate-float" />
              <Sparkles className="w-6 h-6 text-secondary absolute -top-2 -right-2 animate-pulse" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-primary-foreground px-4"
          >
            Skanda Music Academy
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-3 md:mb-4 font-body px-4"
          >
            School of Classical Music
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 md:mb-12 font-body px-4"
          >
            Carnatic Vocal • Devotional Music • Online.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-lg mx-auto px-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("book-demo")}
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Book Demo Class
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("courses")}
              className="w-full text-secondary/90 sm:w-auto border-2 border-primary-foreground/50  hover:bg-primary-foreground/10 hover:border-primary-foreground font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-all hover:-translate-y-1"
            >
              Explore Courses
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-secondary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
