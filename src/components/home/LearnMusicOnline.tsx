// import { Link } from "react-router-dom";
// import { CheckCircle2, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import FloatingMusicNotes from "@/components/FloatingMusicNotes";

// const LearnMusicOnline = () => {
//   const learningTopics = [
//     "Swara Patterns: Develop clarity in scales, patterns, and melodic flow.",
//     "Raga Mastery: Learn a wide range of ragas from beginner to advanced levels, each carrying unique moods and expressions.",
//     "Talam Structure: Understand and practise rhythmic cycles that form the backbone of Carnatic music.",
//     "Krithi Learning: Learn and perform compositions of legendary composers like Tyagaraja, Muthuswami Dikshitar, and Shyama Sastri and many more.",
//     "Alapana & Kalpana Swaras: Build confidence in improvisation and creative musical expression which are essential skills for advanced singing.",
//   ];

//   return (
//     <section className="py-12 bg-gradient-to-r from-primary via-accent to-gold text-primary-foreground relative overflow-hidden">
//       <FloatingMusicNotes count={10} />
//       <div className="container mx-auto px-4 lg:px-8 relative z-10">
//         <div className="max-w-4xl mx-auto text-center mb-12 fade-in-up">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
//             Learn Carnatic Singing Online
//           </h2>
//           <p className="text-primary-foreground/90 leading-relaxed text-lg">
//             Carnatic music is celebrated for its depth, precision, and spiritual
//             richness. Its intricate melodies and rhythmic structures form the
//             foundation of many classical and modern musical forms. Learning
//             Carnatic music not only strengthens one’s connection to Indian
//             culture but also enhances discipline, memory, creativity, and
//             emotional expression.
//             <br />
//             At Skanda Music Academy, we offer a well-structured and
//             student-friendly learning experience that helps every learner build
//             a strong foundation in both theory and performance. Our courses
//             cover all the essential elements of Carnatic music, guiding students
//             through the finer nuances of this classical tradition, including:
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//           {learningTopics.map((topic, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-4 p-5 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all fade-in-up"
//               style={{ animationDelay: `${i * 0.05}s` }}
//             >
//               <CheckCircle2 className="h-6 w-6 text-gold shrink-0" />
//               <span className="text-primary-foreground/90">{topic}</span>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 max-w-4xl mx-auto text-center">
//           <p className="text-primary-foreground/90 leading-relaxed text-lg mb-8">
//             Each class at Skanda Music Academy is tailored to the individual
//             pace and progress of every student, ensuring a strong, steady
//             foundation before moving into higher levels of learning and
//             performance.
//           </p>
//           <Button
//             asChild
//             size="lg"
//             className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
//           >
//             <Link to="/courses">
//               Explore Our Courses
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LearnMusicOnline;

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
    <section className="py-16 bg-gradient-to-r from-primary via-accent to-gold text-primary-foreground relative overflow-hidden">
      <FloatingMusicNotes count={8} />

      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 mx-auto text-center max-w-4xl fade-in-up">
        Learn Carnatic Singing Online
      </h2>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* LEFT CONTENT */}
          <div className="fade-in-up">
            {/* Always visible intro (UNCHANGED) */}
            <p className="text-primary-foreground/85 leading-relaxed mb-4">
              Carnatic music is celebrated for its depth, precision, and
              spiritual richness. Its intricate melodies and rhythmic structures
              form the foundation of many classical and modern musical forms.
              Learning Carnatic music not only strengthens one’s connection to
              Indian culture but also enhances discipline, memory, creativity,
              and emotional expression.
            </p>

            {/* Expandable content (UNCHANGED) */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-primary-foreground/85 leading-relaxed mb-4">
                At <b>Skanda Music Academy</b>, we offer a well-structured and
                student-friendly learning experience that helps every learner
                build a strong foundation in both theory and performance. Our
                courses cover all the essential elements of Carnatic music,
                guiding students through the finer nuances of this classical
                tradition, including:
              </p>
            </div>
            <div className="flex flex-col w-[50%]">
              {/* Read More / Show Less (ALWAYS VISIBLE) */}
              <button
                onClick={() => setExpanded(!expanded)}
                className="mb-6 inline-flex items-center gap-2 text-gold font-medium hover:underline transition"
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

              {/* CTA */}
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
              >
                <Link to="/courses">
                  Explore Our Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid sm:grid-cols-2 gap-4 fade-in-up">
            {learningTopics.map((topic, i) => (
              <div
                key={i}
                className="group flex items-start gap-3 p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-4 w-4" />
                </div>

                <p className="text-primary-foreground/90 text-sm leading-snug">
                  {topic}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Highlight Line */}
        <div className="mt-14 max-w-4xl mx-auto text-center fade-in-up">
          <div className="inline-flex items-center gap-2 text-primary-foreground/90 text-lg">
            <Music className="h-5 w-5 text-gold animate-pulse" />
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
