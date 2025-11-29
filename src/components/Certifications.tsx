import { motion } from "framer-motion";
import { Award, Music, BookOpen, Trophy } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      title: "AIR Yuvavani Grade Artist",
      issuer: "All India Radio",
      year: "2024",
      color: "from-primary to-primary/70"
    },
    {
      icon: Trophy,
      title: "AIR Devotional Grade Artist",
      issuer: "All India Radio",
      year: "2024",
      color: "from-secondary to-yellow-500"
    },
    {
      icon: Music,
      title: "Master's in Carnatic Music",
      issuer: "PSTU",
      year: "2022",
      color: "from-accent to-blue-400"
    },
    {
      icon: BookOpen,
      title: "Bachelor's in Carnatic Music",
      issuer: "PSTU",
      year: "2020",
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section id="certifications" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Certifications & Qualifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative p-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-md`}
                >
                  <cert.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-heading font-bold text-primary text-center mb-2">
                  {cert.title}
                </h3>
                <p className="text-foreground/70 font-body text-sm text-center mb-1">
                  {cert.issuer}
                </p>
                <p className="text-secondary font-body text-sm text-center font-semibold">
                  {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
