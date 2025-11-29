import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export const Education = () => {
  const education = [
    {
      year: "2020 – 2022",
      degree: "Master of Arts in Carnatic Music (Vocal)",
      institution: "PSTU",
      type: "Postgraduate"
    },
    {
      year: "2017 – 2020",
      degree: "Bachelor of Arts in Carnatic Music (Vocal)",
      institution: "PSTU",
      type: "Undergraduate"
    }
  ];

  return (
    <section id="education" className="py-12 md:py-20 bg-background rangoli-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'
                } pl-20 md:pl-0`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className={`absolute left-[26px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br ${
                    index === 0 ? 'from-secondary to-yellow-500' : 'from-primary to-accent'
                  } border-4 border-background shadow-lg z-10`}
                />

                {/* Content card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-border"
                >
                  {/* Year badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span className="text-secondary font-heading font-bold text-sm">
                      {edu.year}
                    </span>
                    <span className="ml-auto text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-body font-medium">
                      {edu.type}
                    </span>
                  </div>

                  {/* Degree icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground text-lg md:text-xl">
                        {edu.degree}
                      </h3>
                    </div>
                  </div>

                  {/* Institution */}
                  <p className="text-foreground/70 font-body">
                    {edu.institution}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
