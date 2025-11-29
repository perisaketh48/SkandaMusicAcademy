import { motion } from "framer-motion";
import { Languages as LanguagesIcon, CheckCircle2 } from "lucide-react";

export const Languages = () => {
  const languages = [
    { name: "Telugu", proficiency: "Fluent", level: 100, icon: "తె" },
    { name: "English", proficiency: "Fluent", level: 100, icon: "En" },
    { name: "Hindi", proficiency: "Fluent", level: 100, icon: "हिं" },
    { name: "Tamil", proficiency: "Limited Proficiency", level: 40, icon: "த" }
  ];

  return (
    <section id="languages" className="py-12 md:py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Languages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-body">
            Teaching and communicating in multiple languages
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-border"
            >
              {/* Language icon */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                <span className="text-2xl font-bold text-white">
                  {lang.icon}
                </span>
              </div>

              {/* Language name */}
              <h3 className="text-xl font-heading font-bold text-primary text-center mb-2">
                {lang.name}
              </h3>

              {/* Proficiency level */}
              <div className="flex items-center justify-center gap-2 mb-3">
                {lang.level === 100 && (
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                )}
                <p className={`text-sm font-body font-semibold ${
                  lang.level === 100 ? 'text-accent' : 'text-foreground/70'
                }`}>
                  {lang.proficiency}
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className={`h-full rounded-full ${
                    lang.level === 100 
                      ? 'bg-gradient-to-r from-accent to-blue-400' 
                      : 'bg-gradient-to-r from-primary to-secondary'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
