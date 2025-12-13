// import { Link } from "react-router-dom";
// import { ArrowRight, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import FloatingMusicNotes from "@/components/FloatingMusicNotes";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-[100vh] overflow-hidden bg-[radial-gradient(circle_at_top,_#3b1d12,_#120806_70%)] flex items-center">
//       {/* Floating musical particles */}
//       <FloatingMusicNotes count={18} />

//       {/* Global depth glow */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 blur-[140px]" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 blur-[140px]" />
//       </div>

//       <div className="container mx-auto px-6 lg:px-10 relative z-10 perspective-[1400px]">
//         <div className="grid lg:grid-cols-2 items-center gap-16">
//           {/* -------- 3D GLASS CONTENT CARD -------- */}
//           <div
//             className="relative transform-style-preserve-3d
//                           rotate-x-[8deg] rotate-y-[-10deg]
//                           hover:rotate-x-0 hover:rotate-y-0
//                           transition-transform duration-700 ease-out"
//           >
//             <div
//               className="bg-white/10 backdrop-blur-xl border border-white/20
//                             rounded-[32px] p-10 shadow-[0_40px_120px_rgba(0,0,0,0.6)]
//                             relative"
//             >
//               {/* inner light */}
//               <div
//                 className="absolute inset-0 rounded-[32px]
//                               bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"
//               />

//               <div className="relative z-10">
//                 <div className="inline-flex items-center gap-2 bg-gold/90 px-5 py-2.5 rounded-full mb-6">
//                   <Sparkles className="h-5 w-5 text-primary-foreground" />
//                   <span className="text-sm font-semibold text-primary-foreground">
//                     Learn the Tradition. Live the Music.
//                   </span>
//                 </div>

//                 <h1 className="text-4xl md:text-5xl xl:text-6xl font-serif font-bold mb-6 text-primary-foreground leading-tight">
//                   Skanda Music Academy
//                 </h1>

//                 <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl">
//                   To inspire every learner to discover their voice, honour
//                   tradition, and grow through the soulful journey of Carnatic
//                   music.
//                 </p>

//                 <Button
//                   asChild
//                   size="lg"
//                   className="bg-gradient-to-r from-gold via-accent to-gold
//                              hover:shadow-[0_0_40px_rgba(255,190,100,0.8)]
//                              transition-all duration-500 text-base font-semibold"
//                 >
//                   <Link to="/demo">
//                     Book a Demo Class
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </div>

//           {/* -------- 3D HERO IMAGE -------- */}
//           <div
//             className="relative transform-style-preserve-3d
//                           rotate-x-[-6deg] rotate-y-[12deg]
//                           hover:rotate-x-0 hover:rotate-y-0
//                           transition-transform duration-700 ease-out"
//           >
//             <div
//               className="relative rounded-[36px] overflow-hidden
//                             shadow-[0_60px_160px_rgba(0,0,0,0.7)]"
//             >
//               <img
//                 src="/Assets/images/hero_section.png"
//                 alt="Carnatic music teaching"
//                 className="w-full h-auto object-cover scale-[1.03]"
//               />

//               {/* cinematic lighting */}
//               <div
//                 className="absolute inset-0 bg-gradient-to-tr
//                               from-black/40 via-transparent to-gold/20"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingMusicNotes from "@/components/FloatingMusicNotes";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden">
      {/* ---------- BACKGROUND IMAGE LAYER ---------- */}
      <div className="absolute inset-0">
        <img
          src="/Assets/images/hero_section.png"
          alt="Carnatic music teaching"
          className="w-full h-full object-cover scale-105"
        />

        {/* cinematic dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* warm musical light */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-accent/20" />
      </div>

      {/* ---------- ORGANIC EDGE MASKS (like your example) ---------- */}
      <div className="absolute top-0 left-0 w-full h-24 bg-background clip-top-wave z-20" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-background clip-bottom-wave z-20" />

      {/* ---------- FLOATING MUSICAL DEPTH ---------- */}
      <FloatingMusicNotes count={14} />

      {/* ---------- CONTENT ---------- */}
      <div className="relative z-30 min-h-[100vh] flex items-center">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-xl">
            Learn the Tradition.
            <br className="hidden md:block" />
            <span className="text-gold">Live the Music.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            To inspire every learner to discover their voice, honour tradition,
            and grow through the soulful journey of Carnatic music.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold text-black hover:bg-gold/90
                         shadow-[0_20px_60px_rgba(255,190,100,0.5)]
                         text-base font-semibold px-8"
            >
              <Link to="/demo">
                Book a Demo Class
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/60 text-white bg-transparent hover:bg-white/10 px-8"
            >
              <Link to="/about">Explore the Academy</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
