import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      position: "Carnatic Vocal Teacher",
      organization: "Skanda Music Academy Academy",
      location: "Melbourne, Australia & Online",
      period: "2023 – Present",
      description: [
        "Teaching Carnatic vocal music to students of all ages and skill levels",
        "Conducting both online and in-person classes",
        "Specializing in voice culture, raga training, and devotional music",
        "Providing personalized one-on-one instruction and group sessions",
      ],
      gradient: "from-primary to-primary/70",
    },
    {
      position: "AIR Approved Artist",
      organization: "All India Radio",
      location: "India",
      period: "2024 – Present",
      description: [
        "Recognized as Yuvavani Grade Artist (November 2024)",
        "Recognized as Devotional Grade Artist (December 2024)",
        "Regular performances on AIR platforms",
        "Contributing to the preservation and promotion of classical music",
      ],
      gradient: "from-secondary to-yellow-500",
    },
    {
      position: "Freelance Music Educator",
      organization: "Independent Practice",
      location: "Online & In-Person",
      period: "2020 – Present",
      description: [
        "Providing individualized instruction in Carnatic vocal techniques",
        "Teaching slokas, stotrams, and devotional compositions",
        "Preparing students for music examinations and performances",
        "Developing customized curriculum based on student needs",
      ],
      gradient: "from-accent to-blue-400",
    },
  ];

  return (
    <section id="experience" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-body">
            A journey of teaching, performing, and preserving the classical
            tradition
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${exp.gradient} p-6 md:p-8`}>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-white/90 font-body font-semibold text-lg mb-2">
                        {exp.organization}
                      </p>
                      <div className="flex flex-wrap gap-3 text-white/80 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-6 md:p-8">
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3 text-foreground/80 font-body"
                    >
                      <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
