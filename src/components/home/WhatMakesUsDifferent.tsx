// import { Heart, Target, Star, Lightbulb } from "lucide-react";
// import SectionHeading from "@/components/ui/SectionHeading";
// import IconCircle from "@/components/ui/IconCircle";

// const WhatMakesUsDifferent = () => {
//   const features = [
//     {
//       icon: Heart,
//       title: "•	One-on-One Attention",
//       description: "Personalised learning for every student",
//     },
//     {
//       icon: Target,
//       title: "Flexible Timings",
//       description: "Choose class slots that fit your routine.",
//     },
//     {
//       icon: Star,
//       title: "Anytime Doubt Support",
//       description: "Quick clairification of through messages or voice notes.",
//     },
//     {
//       icon: Lightbulb,
//       title: "Online + Offline Classes",
//       description: "Learn from home or attend in person.",
//     },
//     {
//       icon: Lightbulb,
//       title: "Class Recordings Provided",
//       description: "Students receive recordings after every session.",
//     },
//     {
//       icon: Lightbulb,
//       title: "Structured, Easy-to-Follow Lessons",
//       description: "Clear teaching for all levels.",
//     },
//   ];

//   return (
//     <section className="py-12 bg-gradient-to-br from-primary/5 via-gold/5 to-accent/5">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="zoom-in">
//           <SectionHeading
//             title="What Makes Us Different"
//             subtitle="At Skanda Music Academy, we keep learning simple, personal, and meaningful. Our approach blends traditional Carnatic values with modern flexibility so every student receives the clarity, comfort, and confidence they need to grow beautifully in their musical journey."
//           />
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {features.map((item, i) => (
//             <div
//               key={i}
//               className="flex gap-6 p-6 bg-card rounded-2xl border border-border hover:border-gold/40 hover-glow fade-in-up"
//               style={{ animationDelay: `${i * 0.1}s` }}
//             >
//               <IconCircle icon={item.icon} size="lg" variant="gradient" />
//               <div>
//                 <h3 className="font-serif text-xl text-gradient-warm mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 max-w-4xl mx-auto text-center">
//           <p className="text-muted-foreground leading-relaxed text-lg">
//             At Skanda Music Academy, we understand that every student is unique.
//             Our approach combines the time-tested guru-shishya tradition with
//             contemporary pedagogical insights, creating a learning experience
//             that is both deeply rooted in tradition and refreshingly relevant to
//             modern learners. We do not just teach music—we ignite a lifelong
//             love affair with Carnatic music.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatMakesUsDifferent;

import {
  Clock,
  MessageSquareHeart,
  Laptop2,
  PlayCircle,
  ListMusic,
  Heart,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const WhatMakesUsDifferent = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 1500, // speed (lower = faster)
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  const features = [
    {
      icon: Heart,
      title: "One-on-One Attention",
      description: "Personalised learning for every student",
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Choose class slots that fit your routine.",
    },
    {
      icon: MessageSquareHeart,
      title: "Anytime Doubt Support",
      description: "Quick clarification through messages or voice notes.",
    },
    {
      icon: Laptop2,
      title: "Online + Offline Classes",
      description: "Learn from home or attend in person.",
    },
    {
      icon: PlayCircle,
      title: "Class Recordings Provided",
      description: "Students receive recordings after every session.",
    },
    {
      icon: ListMusic,
      title: "Structured, Easy-to-Follow Lessons",
      description: "Clear teaching for all levels.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-gold/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="What Makes Us Different"
          subtitle="At Skanda Music Academy, we keep learning simple, personal, and meaningful. Our approach blends traditional Carnatic values with modern flexibility so every student receives the clarity, comfort, and confidence they need to grow beautifully in their musical journey."
        />

        {/* Auto-scrolling Carousel */}
        <div className="mt-14 max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true, // 🔁 infinite loop
              dragFree: true, // smooth continuous feel
            }}
            plugins={[autoplay.current]}
            className="pointer-events-none" // 🚫 no manual interaction
          >
            <CarouselContent>
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 h-full">
                      <div className="flex h-full flex-col items-center text-center bg-background border border-border rounded-2xl px-6 py-8">
                        {/* Icon */}
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon size={26} />
                        </div>

                        {/* Content */}
                        <h3 className="font-serif text-xl text-gradient-warm mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
