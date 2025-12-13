// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Music,
//   Mic,
//   Star,
//   BookOpen,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import PageLayout from "@/components/layout/PageLayout";
// import PageHero from "@/components/layout/PageHero";
// import SectionHeading from "@/components/ui/SectionHeading";

// const Courses = () => {
//   const courses = [
//     {
//       icon: Music,
//       title: "Beginner's Course",
//       subtitle: "Foundation in Carnatic Music",
//       duration: "6 Months",
//       level: "Beginner",
//       description:
//         "Perfect for those new to Carnatic music. Learn the fundamentals including swaras, basic ragas, and simple compositions.",
//       topics: [
//         "Introduction to Carnatic Music",
//         "Sarali Varisai & Janta Varisai",
//         "Basic Alankaras",
//         "Simple Geetams",
//         "Voice Culture Basics",
//         "Talam Foundation",
//       ],
//     },
//     {
//       icon: Mic,
//       title: "Intermediate Course",
//       subtitle: "Building Musical Depth",
//       duration: "12 Months",
//       level: "Intermediate",
//       description:
//         "Deepen your understanding of ragas, learn complex compositions, and develop your improvisational skills.",
//       topics: [
//         "Advanced Alankaras",
//         "Varnam Practice",
//         "Krithi Learning",
//         "Raga Exploration",
//         "Basic Manodharma",
//         "Concert Preparation",
//       ],
//     },
//     {
//       icon: Star,
//       title: "Advanced Course",
//       subtitle: "Mastering the Art",
//       duration: "Ongoing",
//       level: "Advanced",
//       description:
//         "For serious students ready to master advanced techniques, complex ragas, and sophisticated improvisational forms.",
//       topics: [
//         "Advanced Manodharma",
//         "Niraval & Kalpanaswaram",
//         "Complex Raga Studies",
//         "Ragam-Tanam-Pallavi",
//         "Concert Performance",
//         "Scholarly Understanding",
//       ],
//     },
//     {
//       icon: BookOpen,
//       title: "Specialty Workshops",
//       subtitle: "Focused Learning",
//       duration: "Varies",
//       level: "All Levels",
//       description:
//         "Specialized workshops on specific topics, composers, or styles to enhance your musical knowledge.",
//       topics: [
//         "Thyagaraja Krithis",
//         "Dikshitar Compositions",
//         "Shyama Sastri Works",
//         "Festival-specific Songs",
//         "Theory & Musicology",
//         "Bhajans & Devotional Music",
//       ],
//     },
//   ];

//   return (
//     <PageLayout>
//       <PageHero
//         title="Our Courses"
//         subtitle="Comprehensive Carnatic music education designed to nurture musicians at every stage of their journey"
//       />

//       {/* Course Cards */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-8">
//             {courses.map((course, i) => (
//               <div
//                 key={i}
//                 className="bg-card rounded-2xl border border-border overflow-hidden hover:border-gold/40 hover-glow fade-in-up transition-all"
//                 style={{ animationDelay: `${i * 0.1}s` }}
//               >
//                 <div className="bg-gradient-to-r from-primary via-accent to-gold p-6">
//                   <div className="flex items-center gap-4">
//                     <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
//                       <course.icon className="h-7 w-7 text-primary-foreground" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-serif font-bold text-primary-foreground">
//                         {course.title}
//                       </h3>
//                       <p className="text-primary-foreground/80 text-sm">
//                         {course.subtitle}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex gap-4 mb-4">
//                     <span className="px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium">
//                       {course.duration}
//                     </span>
//                     <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
//                       {course.level}
//                     </span>
//                   </div>
//                   <p className="text-muted-foreground mb-6 leading-relaxed">
//                     {course.description}
//                   </p>
//                   <div className="space-y-3">
//                     {course.topics.map((topic, j) => (
//                       <div key={j} className="flex items-center gap-3">
//                         <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
//                         <span className="text-muted-foreground text-sm">
//                           {topic}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                   <Button
//                     asChild
//                     className="w-full mt-6 bg-gradient-to-r from-primary to-accent hover:shadow-gold"
//                   >
//                     <Link to="/demo">
//                       Enroll Now
//                       <ArrowRight className="ml-2 h-4 w-4" />
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Learning Format */}
//       <section className="py-20 bg-gradient-to-br from-primary/5 via-gold/5 to-accent/5">
//         <div className="container mx-auto px-4 lg:px-8">
//           <SectionHeading
//             title="Learning Format"
//             subtitle="Flexible options designed to fit your lifestyle and learning preferences"
//           />
//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {[
//               {
//                 title: "One-on-One Sessions",
//                 description:
//                   "Personalized attention with individual classes tailored to your pace and goals.",
//               },
//               {
//                 title: "Group Classes",
//                 description:
//                   "Learn alongside peers in small, interactive group sessions for collaborative growth.",
//               },
//               {
//                 title: "Recorded Lessons",
//                 description:
//                   "Access recorded sessions anytime to practice and reinforce your learning.",
//               },
//             ].map((format, i) => (
//               <div
//                 key={i}
//                 className="bg-card rounded-2xl p-8 border border-border text-center hover:border-gold/40 hover-glow fade-in-up"
//                 style={{ animationDelay: `${i * 0.1}s` }}
//               >
//                 <h3 className="font-serif text-xl text-gradient-warm mb-4">
//                   {format.title}
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   {format.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-gradient-to-r from-primary via-accent to-gold">
//         <div className="container mx-auto px-4 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
//             Ready to Start Your Musical Journey?
//           </h2>
//           <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
//             Book a free demo class to experience our teaching approach and find
//             the perfect course for you.
//           </p>
//           <Button
//             asChild
//             size="lg"
//             className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
//           >
//             <Link to="/demo">
//               Book Free Demo Class
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </PageLayout>
//   );
// };

// export default Courses;
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Mic,
  Music,
  Star,
  Heart,
  Clock,
  DollarSign,
  Calendar,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ------------------------------------------------------------------ */
/* COURSE DATA (UNCHANGED CONTENT) */
/* ------------------------------------------------------------------ */

const coursesData = [
  {
    id: "group",
    icon: Users,
    title: "Carnatic Music – Group Sessions",
    suitableFor: "All levels (Beginners, Intermediate & Advanced)",
    meta: {
      duration: "45 minutes per session",
      price: "$10 per session",
      monthly: "4 or 8 classes",
    },
    description: [
      "Interactive group learning where students learn together in a supportive environment.",
      "Focus on swaras, rhythm, basic compositions, and voice training suitable for mixed-level batches.",
      "Perfect for students who enjoy collaborative learning.",
    ],
    outcomes: [
      "Improved shruti stability and swara clarity",
      "Ability to sing basic compositions confidently",
      "Better rhythm understanding and group coordination",
      "Increased confidence in performing with others",
    ],
    syllabus: [
      "Foundation exercises (appropriate to level)",
      "Simple compositions, bhajans, and light classical pieces",
      "Shruti alignment and tala practice",
      "Vocal warm-ups and pronunciation practice",
    ],
    prerequisites: [
      "None for beginners",
      "Prior learners will be placed in suitable level-based groups",
    ],
  },
  {
    id: "basic",
    icon: Mic,
    title: "Carnatic Music – One-on-One Sessions (Basic Level)",
    suitableFor: "Complete beginners",
    meta: {
      duration: "30 minutes per session",
      price: "$15 per session",
      monthly: "4 or 8 classes",
    },
    description: [
      "Personalised beginner training with full individual attention.",
      "Focus on building strong fundamentals, correct pronunciation, and stable voice culture.",
      "Slow-paced, structured learning ideal for children and first-time learners.",
    ],
    outcomes: [
      "Strong foundation in swaras, rhythm, and voice stability",
      "Ability to sing basic exercises independently",
      "Ability to perform simple keerthanams/bhajans",
      "Improved breath control and pitch accuracy",
    ],
    syllabus: [
      "14 Sarali Varisai",
      "5 Janta Varisai",
      "3 Datu Varisai",
      "3 Keerthanams / Bhajans",
    ],
    prerequisites: [
      "No prior music training required",
      "Students should be able to attend regularly and practise at home",
    ],
  },
  {
    id: "intermediate",
    icon: BookOpen,
    title: "Carnatic Music – One-on-One Sessions (Intermediate Level)",
    suitableFor: "Students with previous Carnatic training",
    meta: {
      duration: "45 minutes per session",
      price: "$20 per session",
      monthly: "4 or 8 classes",
    },
    description: [
      "Designed for students who already know basics and can sing beginner lessons fluently.",
      "Builds musicianship through improved voice modulation, gamakas, and tala control.",
      "Focus on expanding repertoire and introducing creative elements.",
    ],
    outcomes: [
      "Stronger grip on gamakas and tala structure",
      "Ability to sing geethams and small compositions confidently",
      "Improved musical expression and voice clarity",
      "Readiness to begin manodharma basics in advanced level",
    ],
    syllabus: [
      "7 Alankaras",
      "12 Geethams",
      "3 Swarajathis",
      "3 Swarapallavi",
      "5 Keerthanams / Bhajans",
    ],
    prerequisites: [
      "Must know Sarali, Janta, Datu varisai",
      "Should be comfortable singing basic keerthanams",
      "Ability to maintain shruti independently",
    ],
  },
  {
    id: "advanced",
    icon: Star,
    title: "Carnatic Music – One-on-One Sessions (Advanced Level)",
    suitableFor: "Advanced learners with strong fundamentals",
    meta: {
      duration: "1 hour per session",
      price: "$25 per session",
      monthly: "4 or 8 classes",
    },
    description: [
      "Focuses on advanced Carnatic repertoire and manodharma (creative improvisation).",
      "Ideal for students preparing for concerts, competitions, recordings, and high-level exams.",
      "Training includes tonal balance, advanced gamakas, and performance techniques.",
    ],
    outcomes: [
      "Mastery of advanced compositions",
      "Ability to perform alapana, neraval, and swarakalpana confidently",
      "Professional-level voice control, expression, and stage readiness",
      "Ability to perform full concerts with ease",
    ],
    syllabus: [
      "Adi Tala Varnams",
      "Ata Tala Varnams",
      "Advanced Krithis",
      "Manodharma Aspects: Alapana, Neraval, Kalpana Swaras",
    ],
    prerequisites: [
      "Strong command over basics, geethams, and varnams",
      "Ability to sing with pitch accuracy and tala stability",
      "Regular practice commitment",
    ],
  },
  {
    id: "devotional",
    icon: Heart,
    title: "Devotional Songs – Group Sessions",
    suitableFor: "All levels",
    meta: {
      duration: "30 minutes per session",
      price: "$10 per session",
      monthly: "4 or 8 classes",
    },
    description: [
      "A light classical devotional course featuring bhajans and krithis from various composers.",
      "Focus on emotion, pronunciation, and presentation rather than heavy technicality.",
      "Suitable for learners who wish to sing devotional songs for bhajans, temples, events, or personal practice.",
    ],
    outcomes: [
      "Ability to sing devotional songs with correct bhava and clarity",
      "Better breath control, melody flow, and lyrical understanding",
      "Increased confidence to sing in temples, gatherings, and bhajan sessions",
    ],
    syllabus: [
      "Includes selected works from: Tyagaraja",
      "Muthuswami Dikshitar compositions",
      "Syama Sastri krithis",
      "Annamayya sankirtanas",
      "Ramadasu keertanas",
      "Other devotional composers",
    ],
    prerequisites: [
      "None; open to all age groups",
      "Beginners and experienced singers will be grouped separately",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* UI BLOCKS */
/* ------------------------------------------------------------------ */

const MetaCard = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-center gap-3 bg-muted/30 rounded-xl p-4">
    <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
      <Icon size={18} />
    </div>
    <div>
      <p className="text-xs uppercase text-muted-foreground">{label}</p>
      <p className="font-medium text-sm">{value}</p>
    </div>
  </div>
);

const Block = ({ title, items, accent = "primary" }: any) => (
  <div className="bg-card border border-border rounded-xl p-6">
    <h4 className="font-semibold text-lg mb-4">{title}</h4>
    <ul className="space-y-2">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex gap-3 text-muted-foreground">
          <CheckCircle2 className={`h-5 w-5 text-${accent}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

/* ------------------------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------------------------ */

const Courses = () => {
  return (
    <PageLayout>
      <PageHero
        title="Course Structure – Skanda Music Academy"
        subtitle="Clear, structured Carnatic music programs designed for confident learning"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <Accordion type="single" collapsible className="space-y-6">
            {coursesData.map((course) => {
              const Icon = course.icon;

              return (
                <AccordionItem
                  key={course.id}
                  value={course.id}
                  className="border border-border rounded-2xl px-6"
                >
                  {/* HEADER */}
                  <AccordionTrigger className="py-6">
                    <div className="flex gap-4 items-center">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon size={22} />
                      </div>
                      <div className="text-left">
                        <h3 className="font-serif text-xl">{course.title}</h3>
                        <div className="flex gap-2 mt-1 flex-wrap">
                          <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                            {course.suitableFor}
                          </span>
                          <span className="px-3 py-1 text-m rounded-full bg-gold/10 text-primary">
                            {course.meta.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>

                  {/* CONTENT */}
                  <AccordionContent className="pb-8 space-y-8">
                    {/* META ROW */}
                    <div className="grid sm:grid-cols-3 gap-4">
                      <MetaCard
                        icon={Clock}
                        label="Duration"
                        value={course.meta.duration}
                      />
                      <MetaCard
                        icon={DollarSign}
                        label="Price"
                        value={course.meta.price}
                      />
                      <MetaCard
                        icon={Calendar}
                        label="Frequency"
                        value={course.meta.monthly}
                      />
                    </div>

                    {/* WHAT THIS COURSE OFFERS */}
                    {course.description && (
                      <Block
                        title="What this course offers"
                        items={course.description}
                        accent="primary"
                      />
                    )}

                    {/* TWO COLUMN: OUTCOMES + SYLLABUS */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {course.outcomes && (
                        <Block
                          title="What you will achieve"
                          items={course.outcomes}
                          accent="green-500"
                        />
                      )}

                      {course.syllabus && (
                        <Block
                          title="Syllabus"
                          items={course.syllabus}
                          accent="blue-500"
                        />
                      )}
                    </div>

                    {/* PREREQUISITES */}
                    {course.prerequisites && (
                      <Block
                        title="Prerequisites"
                        items={course.prerequisites}
                        accent="orange-500"
                      />
                    )}

                    {/* CTA */}
                    <div className="flex justify-between items-center pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        Ready to start your musical journey?
                      </p>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-primary to-accent"
                      >
                        <Link to="/demo">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
    </PageLayout>
  );
};

export default Courses;
