import { motion } from "framer-motion";
import { Trophy, Star, Radio } from "lucide-react";

export const Awards = () => {
  const awards = [
    {
      title: "Yuvavani Grade Artist",
      organization: "All India Radio (AIR)",
      date: "November 2024",
      description: "Recognized for excellence in Carnatic vocal music performance",
      icon: Trophy,
      color: "from-secondary to-yellow-500"
    },
    {
      title: "Devotional Grade Artist",
      organization: "All India Radio (AIR)",
      date: "December 2024",
      description: "Certified for devotional music broadcasts and performances",
      icon: Star,
      color: "from-primary to-primary/70"
    }
  ];

  return (
    <section id="awards" className="py-12 md:py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5 rangoli-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Awards & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-body">
            Honored to be recognized by All India Radio for contributions to classical music
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-r ${award.color} p-6 md:p-8`}>
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  >
                    <award.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
                      {award.title}
                    </h3>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Radio className="w-4 h-4" />
                  <span className="font-body">{award.organization}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-body font-semibold">
                    {award.date}
                  </span>
                </div>
                <p className="text-foreground/80 font-body leading-relaxed">
                  {award.description}
                </p>
              </div>

              {/* Decorative sparkle */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 right-4"
              >
                <Star className="w-6 h-6 text-white/20 fill-white/20" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
