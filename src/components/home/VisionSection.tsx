// import { useState } from "react";
// import SectionHeading from "@/components/ui/SectionHeading";

// const VisionSection = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <section
//       className="
//         flex-1
//         bg-card
//         rounded-2xl
//         p-10
//         shadow-elegant
//         border
//         border-border
//         mx-2
//       "
//     >
//       <div className="fade-in-up">
//         <SectionHeading title="Our Vision" className="mb-6" centered={false} />

//         {/* TEXT CONTAINER */}
//         <div
//           className={`
//             space-y-5 text-muted-foreground leading-relaxed text-[1.05rem]
//             transition-all duration-500 overflow-hidden
//             ${expanded ? "max-h-[2000px]" : "max-h-[220px]"}
//           `}
//         >
//           <p>
//             At Skanda Music Academy, our vision is to awaken the inner musician
//             in every learner by nurturing a deep, soulful connection with the
//             art of Carnatic music. We believe that music is not just a skill to
//             be mastered, but a sacred journey that shapes discipline,
//             confidence, and self-expression.
//           </p>

//           <p>
//             Our dream is to create a space where students feel truly seen,
//             valued, and inspired, a place where tradition is honoured with
//             devotion, and learning unfolds with warmth, patience, and personal
//             care.
//           </p>

//           <p>
//             Through personalised guidance, meaningful mentorship, and a balance
//             of classical wisdom and modern teaching, we strive to build a
//             community of musicians who carry music not just in their voice, but
//             in their heart. <br />A community where every note is sung with
//             purity, every lesson sparks joy, and every learner discovers their
//             unique musical identity.
//           </p>

//           <p>
//             At Skanda Music Academy, our vision is:
//             <b className="text-gradient-warm ml-2">
//               “To make Carnatic music a lifelong companion of beauty, devotion,
//               and inner growth.”
//             </b>
//           </p>
//         </div>

//         {/* READ MORE / SHOW LESS BUTTON */}
//         <button
//           onClick={() => setExpanded(!expanded)}
//           className="
//             mt-4 text-primary font-semibold
//             hover:text-accent transition-colors
//           "
//         >
//           {expanded ? "Show Less" : "Read More"}
//         </button>
//       </div>
//     </section>
//   );
// };

// export default VisionSection;

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const VisionMissionSection = () => {
  const [visionExpanded, setVisionExpanded] = useState(false);

  return (
    <section className="relative mx-3 sm:mx-4 rounded-2xl sm:rounded-3xl shadow-elegant">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* ---------- BACKGROUND ---------- */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/Assets/images/hero_section.png"
            alt="Carnatic music ambience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D2137]/75" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#125699]/20 via-transparent to-[#1E90FF]/15" />
        </div>

        {/* ---------- CONTENT ---------- */}
        <div
          className="
            relative z-10
            p-5 sm:p-8 lg:p-12
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-2xl sm:rounded-3xl
          "
        >
          <div className="flex flex-col gap-10 sm:gap-16">
            {/* ================= VISION (TEXT + IMAGE) ================= */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start fade-in-up">
              {/* TEXT */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 sm:mb-6">
                  Our Vision
                </h3>

                <div
                  className={`
                    space-y-4 sm:space-y-5 text-white/75 leading-relaxed text-sm sm:text-[1.05rem]
                    transition-all duration-500 overflow-hidden
                    ${visionExpanded ? "max-h-[2000px]" : "max-h-[180px] sm:max-h-[220px]"}
                  `}
                >
                  <p>
                    At Skanda Music Academy, our vision is to awaken the inner
                    musician in every learner by nurturing a deep, soulful
                    connection with the art of Carnatic music. We believe that
                    music is not just a skill to be mastered, but a sacred
                    journey that shapes discipline, confidence, and
                    self-expression.
                  </p>

                  <p>
                    Our dream is to create a space where students feel truly
                    seen, valued, and inspired, a place where tradition is
                    honoured with devotion, and learning unfolds with warmth,
                    patience, and personal care.
                  </p>

                  <p>
                    Through personalised guidance, meaningful mentorship, and a
                    balance of classical wisdom and modern teaching, we strive
                    to build a community of musicians who carry music not just
                    in their voice, but in their heart.
                  </p>

                  <p>
                    At Skanda Music Academy, our vision is:
                    <b className="text-[#3BA0FF] ml-2">
                      “To make Carnatic music a lifelong companion of beauty,
                      devotion, and inner growth.”
                    </b>
                  </p>
                </div>

                <button
                  onClick={() => setVisionExpanded(!visionExpanded)}
                  className="mt-4 sm:mt-5 text-[#3BA0FF] font-semibold hover:text-[#60B5FF] transition-colors text-sm sm:text-base"
                >
                  {visionExpanded ? "Show Less" : "Read More"}
                </button>
              </div>

              {/* IMAGE */}
              <div className="w-full lg:w-1/2">
                <img
                  src="/Assets/images/8.jpg"
                  alt="Carnatic music teaching"
                  className="w-full rounded-2xl shadow-xl object-cover"
                />
              </div>
            </div>

            {/* ================= MISSION (RIGHT-ALIGNED BLOCK) ================= */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start fade-in-up">
              {/* IMAGE */}
              <div className="w-full lg:w-1/2">
                <img
                  src="/Assets/images/15.jpg"
                  alt="Carnatic music teaching"
                  className="rounded-xl sm:rounded-2xl shadow-xl object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 sm:mb-6">
                  Our Mission
                </h3>
                <div className="space-y-4 sm:space-y-5 text-white/75 leading-relaxed text-sm sm:text-[1.05rem]">
                  <p>
                    Our mission is to provide personalised, high-quality
                    Carnatic music training through one-on-one sessions,
                    flexible learning options, and continuous guidance. We are
                    committed to preserving the depth of classical tradition
                    while embracing modern teaching methods that support each
                    learner’s pace, potential, and confidence.
                  </p>
                  <p>
                    Through structured lessons, supportive mentorship, and a
                    nurturing learning environment, we aim to cultivate
                    disciplined learners, expressive singers, and individuals
                    who experience music as a source of joy, devotion, and
                    lifelong growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
