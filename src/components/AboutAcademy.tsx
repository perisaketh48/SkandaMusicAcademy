import { motion } from "framer-motion";
import { Music2, Heart, Users } from "lucide-react";

export const AboutAcademy = () => {
  const features = [
    {
      icon: Music2,
      title: "Traditional Excellence",
      description:
        "Authentic Carnatic music pedagogy rooted in centuries of tradition",
    },
    {
      icon: Heart,
      title: "Devotional Focus",
      description:
        "Nurturing spiritual connection through sacred music and mantras",
    },
    {
      icon: Users,
      title: "Personal Attention",
      description:
        "Small batch sizes ensuring individual guidance for every student",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-background rangoli-pattern"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            About the Academy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl text-left mx-auto font-body leading-relaxed">
            Skanda Music Academy is a traditional yet forward-thinking
            institution committed to preserving and promoting the rich heritage
            of Carnatic music. Founded with the vision of making classical music
            accessible, enjoyable, and achievable for learners of all ages, the
            academy offers a structured and personalised learning pathway
            tailored to each individual’s goals.
            <br />
            At Skanda Music Academy, the focus is on developing strong musical
            foundations, sruti, laya, voice culture, pronunciation, and
            repertoire, while also nurturing creativity, confidence, and a deep
            appreciation for the art form. Every student receives individual
            attention, clear guidance, and continuous support, ensuring steady
            progress over time.
            <br /> With a curriculum that gradually advances from foundational
            exercises to varnams, kritis, and manodharma basics, the academy
            blends traditional Carnatic pedagogy with modern teaching
            approaches. Whether a beginner taking their first steps or an
            advanced learner seeking refinement, Skanda Music Academy provides a
            nurturing, disciplined, and inspiring environment for musical
            growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-border"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-foreground/70 text-center font-body">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Musical instruments decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center gap-12 mt-16 text-primary/20"
        >
          <motion.div
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Music2 className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <Music2 className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
            <Music2 className="w-12 h-12" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
