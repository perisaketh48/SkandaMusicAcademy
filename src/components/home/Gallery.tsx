// import { useState } from "react";
// import { X, ChevronLeft, ChevronRight, Music, Mic2, Users } from "lucide-react";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { Badge } from "@/components/ui/badge";

// /* ------------------------------------------------------------------ */
// /* GALLERY DATA (USE LOCAL IMAGES – /public/images/gallery) */
// /* ------------------------------------------------------------------ */

// const galleryItems = [
//   {
//     id: 1,
//     title: "Kacheri Performance",
//     description:
//       "Traditional Carnatic concert with vocal and percussion ensemble",
//     category: "Concert",
//     image: "/images/gallery/concert-1.jpg",
//   },
//   {
//     id: 2,
//     title: "Student Keerthana Recital",
//     description: "Students presenting classical keerthanas",
//     category: "Students",
//     image: "/images/gallery/student-1.jpg",
//   },
//   {
//     id: 3,
//     title: "Veena Accompaniment",
//     description: "Veena supporting vocal music",
//     category: "Instruments",
//     image: "/images/gallery/instrument-1.jpg",
//   },
//   {
//     id: 4,
//     title: "Mridangam Practice",
//     description: "Rhythm training with percussion accompaniment",
//     category: "Instruments",
//     image: "/images/gallery/instrument-2.jpg",
//   },
//   {
//     id: 5,
//     title: "Annual Student Concert",
//     description: "Academy annual student recital",
//     category: "Concert",
//     image: "/images/gallery/concert-2.jpg",
//   },
//   {
//     id: 6,
//     title: "Online Carnatic Class",
//     description: "Live online vocal training session",
//     category: "Classes",
//     image: "/images/gallery/class-1.jpg",
//   },
//   {
//     id: 7,
//     title: "Advanced Vocal Training",
//     description: "One-on-one advanced vocal guidance",
//     category: "Classes",
//     image: "/images/gallery/class-2.jpg",
//   },
//   {
//     id: 8,
//     title: "Bhajan Session",
//     description: "Devotional group singing with bhava",
//     category: "Performance",
//     image: "/images/gallery/bhajan-1.jpg",
//   },
//   {
//     id: 9,
//     title: "Group Practice",
//     description: "Students practising shruti and tala together",
//     category: "Students",
//     image: "/images/gallery/student-2.jpg",
//   },
//   {
//     id: 10,
//     title: "Live Stage Performance",
//     description: "Carnatic music performed on stage",
//     category: "Concert",
//     image: "/images/gallery/concert-3.jpg",
//   },
//   {
//     id: 11,
//     title: "Voice Culture Training",
//     description: "Breath control and vocal warm-ups",
//     category: "Classes",
//     image: "/images/gallery/class-3.jpg",
//   },
//   {
//     id: 12,
//     title: "Violin Support",
//     description: "Classical violin accompaniment",
//     category: "Instruments",
//     image: "/images/gallery/instrument-3.jpg",
//   },
//   {
//     id: 13,
//     title: "Young Learners",
//     description: "Children learning Carnatic foundations",
//     category: "Students",
//     image: "/images/gallery/student-3.jpg",
//   },
//   {
//     id: 14,
//     title: "Temple Bhajan",
//     description: "Devotional singing at a temple",
//     category: "Performance",
//     image: "/images/gallery/bhajan-2.jpg",
//   },
//   {
//     id: 15,
//     title: "Academy Group Class",
//     description: "Interactive Carnatic music group session",
//     category: "Classes",
//     image: "/images/gallery/class-4.jpg",
//   },
// ];

// /* ------------------------------------------------------------------ */
// /* CATEGORY ICONS */
// /* ------------------------------------------------------------------ */

// const categoryIcons: Record<string, any> = {
//   Concert: Music,
//   Performance: Mic2,
//   Instruments: Music,
//   Students: Users,
//   Classes: Users,
// };

// /* ------------------------------------------------------------------ */
// /* COMPONENT */
// /* ------------------------------------------------------------------ */

// const Gallery = () => {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

//   const currentItem =
//     selectedIndex !== null ? galleryItems[selectedIndex] : null;

//   const goPrev = () => {
//     if (selectedIndex !== null) {
//       setSelectedIndex(
//         selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1
//       );
//     }
//   };

//   const goNext = () => {
//     if (selectedIndex !== null) {
//       setSelectedIndex(
//         selectedIndex === galleryItems.length - 1 ? 0 : selectedIndex + 1
//       );
//     }
//   };

//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient-warm mb-4">
//             Our Musical Moments
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Glimpses from concerts, kacheris, student performances, and our
//             vibrant Carnatic music learning environment.
//           </p>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {galleryItems.map((item, index) => {
//             const Icon = categoryIcons[item.category] || Music;

//             return (
//               <div
//                 key={item.id}
//                 onClick={() => setSelectedIndex(index)}
//                 className="group relative overflow-hidden rounded-2xl cursor-pointer bg-card border border-border hover:border-gold/40 transition-all aspect-[4/3]"
//               >
//                 {/* Image */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                 {/* Content */}
//                 <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//                   <Badge className="mb-2 bg-background/90 text-primary">
//                     <Icon className="h-3 w-3 mr-1" />
//                     {item.category}
//                   </Badge>
//                   <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
//                     {item.title}
//                   </h3>
//                   <p className="text-muted-foreground text-sm line-clamp-2">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Lightbox */}
//         <Dialog
//           open={selectedIndex !== null}
//           onOpenChange={() => setSelectedIndex(null)}
//         >
//           <DialogContent className="max-w-4xl p-0 bg-background border-border overflow-hidden">
//             {currentItem && (
//               <div className="relative">
//                 {/* Close */}
//                 <button
//                   onClick={() => setSelectedIndex(null)}
//                   className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>

//                 {/* Navigation */}
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     goPrev();
//                   }}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 hover:bg-background"
//                 >
//                   <ChevronLeft className="h-6 w-6" />
//                 </button>

//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     goNext();
//                   }}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 hover:bg-background"
//                 >
//                   <ChevronRight className="h-6 w-6" />
//                 </button>

//                 {/* Image */}
//                 <img
//                   src={currentItem.image}
//                   alt={currentItem.title}
//                   className="w-full aspect-video object-cover"
//                 />

//                 {/* Caption */}
//                 <div className="p-6 bg-card">
//                   <Badge className="mb-2 bg-primary/10 text-primary">
//                     {currentItem.category}
//                   </Badge>
//                   <h3 className="font-serif text-xl font-semibold mb-2">
//                     {currentItem.title}
//                   </h3>
//                   <p className="text-muted-foreground">
//                     {currentItem.description}
//                   </p>
//                 </div>
//               </div>
//             )}
//           </DialogContent>
//         </Dialog>
//       </div>
//     </section>
//   );
// };

// export default Gallery;import { useEffect, useRef, useState } from "react";
import React, { useEffect, useRef, useState } from "react";
import { X, Music, Mic2, Users } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

/* ------------------------------------------------------------------ */
/* DATA */
/* ------------------------------------------------------------------ */

const galleryItems = [
  {
    id: 1,

    image: "/Assets/images/1.jpg",
  },
  {
    id: 2,

    image: "/Assets/images/2.jpg",
  },
  {
    id: 3,

    image: "/Assets/images/3.jpg",
  },
  {
    id: 4,

    image: "/Assets/images/4.jpg",
  },
  {
    id: 5,

    image: "/Assets/images/5.jpg",
  },
  {
    id: 6,

    image: "/Assets/images/6.jpg",
  },
  {
    id: 7,

    image: "/Assets/images/7.jpg",
  },
  {
    id: 8,

    image: "/Assets/images/8.jpg",
  },
  {
    id: 9,

    image: "/Assets/images/9.jpg",
  },
  {
    id: 10,

    image: "/Assets/images/10.jpg",
  },
  {
    id: 11,

    image: "/Assets/images/11.jpg",
  },
  {
    id: 12,

    image: "/Assets/images/12.jpg",
  },
  {
    id: 13,

    image: "/Assets/images/13.jpg",
  },
  {
    id: 14,

    image: "/Assets/images/14.jpg",
  },
  {
    id: 15,

    image: "/Assets/images/15.jpg",
  },
];

const categoryIcons: Record<string, any> = {
  Concert: Music,
  Performance: Mic2,
  Instruments: Music,
  Students: Users,
  Classes: Users,
};

/* ------------------------------------------------------------------ */
/* HELPERS */
/* ------------------------------------------------------------------ */

// Pair images into bento columns (1 large + 1 small)
const pairItems = (items: typeof galleryItems) => {
  const pairs = [];
  for (let i = 0; i < items.length; i += 2) {
    pairs.push([items[i], items[i + 1]].filter(Boolean));
  }
  return pairs;
};

/* ------------------------------------------------------------------ */
/* COMPONENT */
/* ------------------------------------------------------------------ */

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const pairs = pairItems(galleryItems);
  const infinitePairs = [...pairs, ...pairs]; // internal duplication only

  /* Infinite horizontal scroll */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let x = 0;
    let rafId: number;
    const speed = 0.35;

    const animate = () => {
      x += speed;
      if (x >= el.scrollWidth / 2) x = 0;
      el.scrollLeft = x;
      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
            Our Musical Moments
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto text-sm md:text-base">
            Concerts, classes, and cherished moments from our Carnatic journey.
          </p>
        </div>

        {/* HORIZONTAL BENTO SCROLLER */}
        <div ref={scrollRef} className="overflow-x-hidden">
          <div className="flex gap-6 w-max pr-10">
            {infinitePairs.map((pair, colIndex) => (
              <div
                key={colIndex}
                className="flex flex-col gap-4 w-[280px] shrink-0"
              >
                {pair.map((item, i) => {
                  const Icon = categoryIcons[item.category] || Music;
                  const isLarge = i === 0;

                  return (
                    <div
                      key={item.id}
                      onClick={() =>
                        setSelectedIndex(
                          galleryItems.findIndex((g) => g.id === item.id)
                        )
                      }
                      className={`relative rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-gold/40 ${
                        isLarge ? "aspect-[4/5]" : "aspect-[5/4]"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white text-sm font-serif font-semibold">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* LIGHTBOX */}
        <Dialog
          open={selectedIndex !== null}
          onOpenChange={() => setSelectedIndex(null)}
        >
          <DialogContent className="max-w-5xl h-[90vh] p-0 overflow-hidden border-border bg-background [&>button]:hidden">
            {selectedIndex !== null && (
              <div className="relative w-full h-full">
                {/* IMAGE */}
                <img
                  src={galleryItems[selectedIndex].image}
                  className="absolute inset-0 w-full h-full object-contain"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* SINGLE CUSTOM CLOSE BUTTON */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* CONTENT */}
                {/* <div className="relative z-10 h-full flex items-end">
                  <div className="w-full p-6 md:p-8">
                    <p className="text-white/90 max-w-3xl">
                      {galleryItems[selectedIndex].description}
                    </p>
                  </div>
                </div> */}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
