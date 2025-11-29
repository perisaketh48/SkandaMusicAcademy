import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Music2, Heart, ChevronDown, ChevronUp } from "lucide-react";

export const AboutMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about-me" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-6 md:p-10 shadow-xl border border-border"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Music2 className="w-8 h-8 text-primary animate-float" />
              <Heart className="w-6 h-6 text-secondary" />
              <Music2 className="w-8 h-8 text-accent animate-float" style={{ animationDelay: '1s' }} />
            </div>

            {/* Short bio */}
            <div className="prose prose-lg max-w-none mb-6">
              <p className="text-foreground/80 text-center md:text-left font-body leading-relaxed mb-4">
                I am a passionate Carnatic vocalist and devotional music practitioner with a deep-rooted love 
                for preserving and sharing the rich traditions of Indian classical music. My journey in music 
                began at a young age, and over the years, I have dedicated myself to mastering both the technical 
                and spiritual dimensions of this sacred art form.
              </p>
            </div>

            {/* Expandable section */}
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="pt-6 border-t border-border space-y-6">
                <p className="text-foreground/80 font-body leading-relaxed">
                  Having completed my Master's degree in Carnatic Music from PSTU, I bring both academic rigor 
                  and traditional guru-shishya parampara training to my teaching. My approach blends the classical 
                  foundations with a deep understanding of voice culture, raga elaboration, and devotional expression.
                </p>

                <p className="text-foreground/80 font-body leading-relaxed">
                  I am honored to be recognized as a Yuvavani Grade Artist and Devotional Grade Artist by All India 
                  Radio (AIR), which has given me the opportunity to perform and share this divine art with a wider 
                  audience. Through my teaching, I aim to make the beauty of Carnatic music accessible to students 
                  of all backgrounds and skill levels.
                </p>

                <p className="text-foreground/80 font-body leading-relaxed">
                  Whether you are taking your first steps into Indian classical music or looking to deepen your 
                  existing practice, I am here to guide you with patience, dedication, and a genuine love for 
                  this timeless tradition. Music, to me, is not just an art—it's a spiritual journey that connects 
                  us to our inner selves and to the divine.
                </p>

                <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary mt-6">
                  <p className="text-foreground/80 font-body italic leading-relaxed">
                    "My mission is to preserve the authentic tradition of Carnatic music while making it accessible 
                    and meaningful for modern learners. Every student is unique, and I believe in nurturing their 
                    individual voice while honoring the classical foundations."
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
