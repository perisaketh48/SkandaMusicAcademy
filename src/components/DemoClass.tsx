import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Video, CheckCircle2 } from "lucide-react";

export const DemoClass = () => {
  const benefits = [
    "Experience authentic Carnatic music teaching",
    "Understand your learning path",
    "Ask questions and get personalized guidance",
    "No commitment required"
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('book-demo');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="demo" className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 rangoli-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Try a Demo Class
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-body">
            Experience the beauty of Carnatic music with a complimentary demo session
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-center">
          {/* Video placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center overflow-hidden shadow-xl border-2 border-border group-hover:border-secondary transition-colors">
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg cursor-pointer"
                >
                  <Video className="w-10 h-10 text-secondary-foreground" />
                </motion.div>
                <p className="text-foreground/60 font-body">Demo Video Coming Soon</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">
              What You'll Get
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-body text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <Button
                size="lg"
                onClick={scrollToBooking}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 w-full md:w-auto"
              >
                Book Your Free Demo Class
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
