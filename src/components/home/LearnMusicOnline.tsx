import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Music,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingMusicNotes from "@/components/FloatingMusicNotes";
import { useState } from "react";

const LearnMusicOnline = () => {
  const [expanded, setExpanded] = useState(false);

  const learningTopics = [
    "Swara Patterns: Develop clarity in scales, patterns, and melodic flow.",
    "Raga Mastery: Learn a wide range of ragas from beginner to advanced levels.",
    "Talam Structure: Understand and practise rhythmic cycles.",
    "Krithi Learning: Perform compositions of legendary composers.",
    "Alapana & Kalpana Swaras: Build confidence in improvisation skills.",
  ];

  return (
    <section className="py-14 sm:py-16 bg-gradient-to-br from-[#0D2137] via-[#1E90FF] to-[#0D3F73] text-white relative overflow-hidden">
      <FloatingMusicNotes count={8} />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-6 mx-auto text-center max-w-4xl fade-in-up px-4">
        Learn Carnatic Singing Online
      </h2>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* LEFT CONTENT */}
          <div className="fade-in-up">
            <p className="text-white/80 leading-relaxed mb-4 text-sm sm:text-base">
              Carnatic music is celebrated for its depth, precision, and
              spiritual richness. Its intricate melodies and rhythmic structures
              form the foundation of many classical and modern musical forms.
              Learning Carnatic music not only strengthens one's connection to
              Indian culture but also enhances discipline, memory, creativity,
              and emotional expression.
            </p>

            {/* Expandable content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-white/80 leading-relaxed mb-4 text-sm sm:text-base">
                At <b>Skanda Music Academy</b>, we offer a well-structured and
                student-friendly learning experience that helps every learner
                build a strong foundation in both theory and performance. Our
                courses cover all the essential elements of Carnatic music,
                guiding students through the finer nuances of this classical
                tradition, including:
              </p>
            </div>
            <div className="flex flex-col sm:w-[60%] lg:w-[50%]">
              <button
                onClick={() => setExpanded(!expanded)}
                className="mb-6 inline-flex items-center gap-2 text-[#3BA0FF] font-medium hover:text-[#60B5FF] transition"
              >
                {expanded ? (
                  <>
                    Show Less <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown size={18} />
                  </>
                )}
              </button>

              <Button
                asChild
                size="lg"
                className="bg-white text-[#1E90FF] hover:bg-white/90 font-semibold shadow-md"
              >
                <Link to="/courses">
                  Explore Our Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 fade-in-up">
            {learningTopics.map((topic, i) => (
              <div
                key={i}
                className="group flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white/8 backdrop-blur-sm border border-white/15 hover:bg-white/12 transition-all duration-300"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mt-0.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#1E90FF]/25 text-[#3BA0FF] shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <p className="text-white/85 text-xs sm:text-sm leading-snug">
                  {topic}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Highlight Line */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto text-center fade-in-up">
          <div className="inline-flex items-center gap-2 text-white/80 text-sm sm:text-lg">
            <Music className="h-4 w-4 sm:h-5 sm:w-5 text-[#3BA0FF] animate-pulse" />
            <span>
              Each class is tailored to the individual pace and progress of
              every student.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMusicOnline;
