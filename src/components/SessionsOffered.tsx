import { motion } from "framer-motion";
import { Video, Clock, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SessionsOffered = () => {
  const sessions = [
    {
      title: "Introduction to Carnatic Classical Music",
      description: "A quick tour of Carnatic Music and its foundational elements – voice culture, ragas, talas, and the joy of classical expression.",
      options: [
        { duration: "30 minute session", platform: "Zoom", price: "$10" },
        { duration: "45 minute session", platform: "Zoom", price: "$12" }
      ],
      oneOnOne: true,
      gradient: "from-primary to-primary/70"
    },
    {
      title: "Introduction to Slokas & Stotras",
      description: "Explore the beauty of Slokas and Stotras… Suitable for all age groups and beginners.",
      options: [
        { duration: "30 minute session", platform: "Zoom", price: "$10" }
      ],
      oneOnOne: false,
      gradient: "from-secondary to-yellow-500"
    }
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('book-demo');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sessions" className="py-12 md:py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5 rangoli-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Sessions Offered
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-body">
            Personalized online sessions designed to help you discover the beauty of Indian classical music
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sessions.map((session, index) => (
            <motion.div
              key={session.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${session.gradient} p-6 md:p-8`}>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3">
                  {session.title}
                </h3>
                <p className="text-white/90 font-body leading-relaxed">
                  {session.description}
                </p>
              </div>

              {/* Session options */}
              <div className="p-6 md:p-8 space-y-4">
                {session.options.map((option, optIndex) => (
                  <motion.div
                    key={optIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + optIndex * 0.1 }}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-body font-semibold text-foreground">
                          {option.duration}
                        </p>
                        <p className="text-sm text-foreground/60 flex items-center gap-1">
                          <Video className="w-3 h-3" />
                          {option.platform}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-secondary font-heading font-bold text-xl">
                      <DollarSign className="w-5 h-5" />
                      <span>{option.price.replace('$', '')}</span>
                    </div>
                  </motion.div>
                ))}

                {session.oneOnOne && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="flex items-center gap-2 text-accent font-body text-sm mt-3"
                  >
                    <Users className="w-4 h-4" />
                    <span>One-on-One option available</span>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="pt-4"
                >
                  <Button
                    onClick={scrollToBooking}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md"
                  >
                    Book This Session
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
