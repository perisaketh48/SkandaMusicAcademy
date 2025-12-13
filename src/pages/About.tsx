import {
  Award,
  Users,
  Heart,
  BookOpen,
  Music2,
  GraduationCap,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import IconCircle from "@/components/ui/IconCircle";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Music",
      description:
        "We teach with genuine love for Carnatic music, inspiring students to develop their own deep connection with this art form.",
    },
    {
      icon: Award,
      title: "Excellence in Teaching",
      description:
        "Our structured curriculum and personalized approach ensure every student achieves their highest potential.",
    },
    {
      icon: Users,
      title: "Student-Centered",
      description:
        "Every lesson is tailored to the individual student's pace, style, and musical goals.",
    },
    {
      icon: BookOpen,
      title: "Authentic Tradition",
      description:
        "We preserve and transmit the authentic guru-shishya parampara while embracing modern teaching methods.",
    },
  ];

  const milestones = [
    { year: "2015", event: "Skanda Music Academy Founded" },
    { year: "2017", event: "Launched Online Learning Platform" },
    { year: "2019", event: "500+ Students Trained" },
    { year: "2021", event: "International Student Community Established" },
    { year: "2023", event: "1000+ Students Worldwide" },
  ];

  return (
    <PageLayout>
      <PageHero
        title="About Us"
        subtitle="Discover the story behind Skanda Music Academy and our commitment to preserving and sharing the beauty of Carnatic music."
      />

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <SectionHeading title="Our Story" centered={false} />
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Skanda Music Academy was born from a deep passion for Carnatic
                  music and a desire to make this ancient art form accessible to
                  learners worldwide. Founded by Ramani Varahabhatla, the
                  academy represents decades of musical knowledge and teaching
                  experience.
                </p>
                <p>
                  What started as a small initiative to teach local students has
                  grown into a thriving online community of music enthusiasts
                  from across the globe. Our journey has been guided by a simple
                  principle: authentic, heartfelt teaching that transforms
                  students into true musicians.
                </p>
                <p>
                  Today, Skanda Music Academy stands as a bridge between
                  tradition and technology, offering the warmth of guru-shishya
                  parampara through the convenience of modern online learning
                  platforms.
                </p>
              </div>
            </div>
            <div className="relative slide-in-right">
              <div className="bg-gradient-to-br from-primary/10 via-gold/10 to-accent/10 rounded-2xl p-8 lg:p-12 border border-border">
                <div className="flex flex-col items-center text-center">
                  <IconCircle
                    icon={Music2}
                    size="lg"
                    variant="gradient"
                    className="mb-6"
                  />
                  <h3 className="text-2xl font-serif font-bold text-gradient-warm mb-4">
                    Our Philosophy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "Music is not just an art to be learned; it is a journey of
                    self-discovery. At Skanda, we nurture the musician within
                    every student."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-gold/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="zoom-in">
            <SectionHeading
              title="Our Core Values"
              subtitle="The principles that guide everything we do at Skanda Music Academy"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <FeatureCard
                key={i}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Founder */}
      {/* ================= ABOUT THE FOUNDER ================= */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* ---------- FOUNDER IMAGE ---------- */}
            <div className="relative fade-in-up">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <img
                  src="/Assets/images/11.jpg" // <-- add founder image here
                  alt="Ramani Varahabhatla - Founder of Skanda Music Academy"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-serif font-bold text-gradient-warm">
                  Ramani Varahabhatla
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Founder & Lead Instructor <br />
                  Skanda Music Academy
                </p>
              </div>
            </div>

            {/* ---------- CONTENT ---------- */}
            <div className="fade-in-up space-y-10">
              <SectionHeading
                title="About the Founder"
                subtitle="A journey rooted in tradition, discipline, and devotion to Carnatic music"
                centered={false}
              />

              {/* JOURNEY */}
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ramani Varahabhatla is the Founder and Lead Instructor of
                  Skanda Music Academy, with over{" "}
                  <b>
                    18 years of continuous learning, practice, and performance
                  </b>{" "}
                  in Carnatic vocal music. Her musical journey began at a young
                  age, where she was introduced to the discipline, structure,
                  and spiritual depth of this classical art form.
                </p>

                <p>
                  She initially trained under <b>Smt. Kanthi</b>, building a
                  strong foundation in swara exercises, rhythm awareness, voice
                  discipline, and classical fundamentals. She continues her
                  advanced training under the guidance of{" "}
                  <b>Smt. Sarada Janaswamy Garu</b>, following the traditional{" "}
                  <i>guru–shishya parampara</i>, which has deeply shaped her
                  musical maturity and respect for classical values.
                </p>
              </div>

              {/* ACADEMICS */}
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <h4 className="font-serif font-semibold text-primary">
                  Academic Excellence
                </h4>
                <p>
                  Ramani holds a <b>Bachelor of Arts</b> and a{" "}
                  <b>Master of Arts in Carnatic Music (Vocal)</b>, along with
                  double diplomas, certification programs, and teacher-training
                  courses. Her academic journey strengthened her command over
                  music theory, notation, raga–tala methodology, and analytical
                  interpretation of compositions.
                </p>
              </div>

              {/* TEACHING EXPERIENCE */}
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <h4 className="font-serif font-semibold text-primary">
                  Teaching & Mentorship
                </h4>
                <p>
                  With over{" "}
                  <b>five years of professional teaching experience</b>, Ramani
                  has worked with students across diverse age groups and skill
                  levels. She served as a Carnatic music teacher at{" "}
                  <b>Army Public School, Bolarum</b>, training students from
                  pre-primary to senior secondary levels, leading choirs,
                  preparing students for competitions, and contributing actively
                  to cultural programs.
                </p>

                <p>
                  She has also mentored students globally through online
                  academies, teaching learners aged 5 to 45 from India, the USA,
                  the UK, and Australia, guiding them for examinations,
                  performances, and competitions.
                </p>
              </div>

              {/* PERFORMANCE */}
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <h4 className="font-serif font-semibold text-primary">
                  Performance & Recognition
                </h4>
                <p>
                  Ramani is a{" "}
                  <b>
                    Grade Artist with Prasar Bharati (All India Radio),
                    Hyderabad
                  </b>
                  , and has performed at esteemed venues including Bhadrachalam
                  Temple (Ramadasu Utsavalu), Raj Bhavan – Telangana,
                  Doordarshan, Bhakti TV, Skandagiri Temple, and Vemulawada
                  Temple. She has also received an appreciation certificate from
                  <b> Dr. Tamilisai Soundararajan</b>, Former Governor of
                  Telangana.
                </p>
              </div>

              {/* PHILOSOPHY */}
              <div className="bg-gradient-to-br from-primary/10 via-gold/10 to-accent/10 rounded-2xl p-6 border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  Through Skanda Music Academy, Ramani brings together rigorous
                  training, academic depth, teaching expertise, and performance
                  exposure to create a nurturing learning space. She believes
                  Carnatic music should be taught with{" "}
                  <b>patience, clarity, warmth, and devotion</b>, focusing not
                  just on technique but also on bhava, discipline, confidence,
                  and emotional connection.
                </p>

                <p className="mt-4 font-semibold text-gradient-warm">
                  “To nurture confident voices, disciplined musicians, and
                  lifelong lovers of Carnatic music.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
