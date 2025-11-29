import { motion } from "framer-motion";
import { Music4, Sparkles, User, Baby } from "lucide-react";

export const Courses = () => {
  const courses = [
    {
      icon: Music4,
      title: "Carnatic Vocal",
      levels: ["Beginner", "Intermediate", "Advanced"],
      description: "Master the classical art of Carnatic singing with structured curriculum from basic swaras to advanced compositions",
      color: "from-primary to-primary/70"
    },
    {
      icon: Sparkles,
      title: "Devotional Music",
      levels: ["All Levels"],
      description: "Learn sacred slokas, stotrams, and bhajans. Connect with the divine through devotional singing",
      color: "from-secondary to-yellow-500"
    },
    {
      icon: User,
      title: "Voice Culture & Manodharma",
      levels: ["Intermediate", "Advanced"],
      description: "Develop vocal techniques, breath control, and improvisational skills for creative expression",
      color: "from-accent to-blue-400"
    },
    {
      icon: Baby,
      title: "Kids Music Program",
      levels: ["Ages 6+"],
      description: "Fun and engaging introduction to Carnatic music specially designed for young learners",
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section id="courses" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Courses Offered
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-6" />
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-body">
            Choose from our carefully designed programs tailored to your learning goals
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-border"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <course.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Level badges */}
                  <div className="flex flex-wrap gap-2 justify-end">
                    {course.levels.map((level) => (
                      <span
                        key={level}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-body font-medium"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                  {course.title}
                </h3>
                <p className="text-foreground/70 font-body leading-relaxed">
                  {course.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${course.color} mt-6 rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 bg-muted/30 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <p className="text-foreground/80 font-body text-lg">
            <strong className="text-primary">Flexible Learning:</strong> All courses available both 
            <span className="text-accent font-semibold"> online </span> and 
            <span className="text-accent font-semibold"> in-person</span> (Melbourne).
            One-on-one and small group sessions available.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
