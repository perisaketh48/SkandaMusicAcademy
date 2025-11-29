import { motion } from "framer-motion";
import { Music4, Sparkles } from "lucide-react";

export const SubjectsTeach = () => {
  const subjects = [
    {
      icon: Music4,
      title: "Carnatic Vocal",
      color: "from-primary to-primary/70"
    },
    {
      icon: Sparkles,
      title: "Devotional",
      color: "from-secondary to-yellow-500"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Subjects I Teach
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${subject.color} p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all min-w-[160px]`}>
                <div className="flex flex-col items-center gap-3">
                  <subject.icon className="w-10 h-10 md:w-12 md:h-12 text-white group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg md:text-xl font-heading font-bold text-white text-center">
                    {subject.title}
                  </h3>
                </div>
              </div>
              
              {/* Decorative glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
