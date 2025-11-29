import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Award, Music, Radio, ChevronDown, ChevronUp } from "lucide-react";

export const AboutTeacher = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="teacher" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            About the Teacher
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border"
          >
            {/* Teacher name and title */}
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-2 px-2">
                Subramanya Venkata Ramani Varahabhatla
              </h3>
              <p className="text-base md:text-lg text-secondary font-body font-semibold">
                Founder & Principal Teacher
              </p>
            </div>

            {/* Short bio */}
            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-foreground/80 text-center font-body leading-relaxed mb-4">
                A dedicated practitioner and teacher of Carnatic music with years of rigorous training 
                under renowned gurus. Passionate about preserving the authentic tradition while making 
                it accessible to students worldwide.
              </p>
            </div>

            {/* Expandable section */}
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="pt-6 border-t border-border space-y-6">
                {/* Qualifications */}
                <div>
                  <h4 className="text-xl font-heading font-semibold text-primary mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-secondary" />
                    Recognition & Qualifications
                  </h4>
                  <ul className="space-y-2 text-foreground/80 font-body">
                    <li className="flex items-start gap-2">
                      <Radio className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span><strong>AIR (All India Radio) Approved Artist</strong> – Recognized for excellence in Carnatic music</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Radio className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span><strong>Yuvavani Grade Artist</strong> – Certified by All India Radio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Music className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span>Extensive training in classical Carnatic vocal music</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Music className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span>Specialized in devotional music, stotrams, and bhajans</span>
                    </li>
                  </ul>
                </div>

                {/* Teaching philosophy */}
                <div>
                  <h4 className="text-xl font-heading font-semibold text-primary mb-4">
                    Teaching Philosophy
                  </h4>
                  <p className="text-foreground/80 font-body leading-relaxed">
                    Every student is unique, and music education should be personalized. With patience, 
                    dedication, and a deep respect for tradition, I strive to help each student discover 
                    their own voice while mastering the classical foundations. Whether you're a beginner 
                    or advancing your skills, my goal is to make this sacred art form both accessible 
                    and profoundly meaningful.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Toggle button */}
            <div className="flex justify-center mt-8">
              <Button
                variant="ghost"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary hover:text-primary/80 hover:bg-primary/5 font-semibold gap-2"
              >
                {isExpanded ? (
                  <>
                    Read Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
