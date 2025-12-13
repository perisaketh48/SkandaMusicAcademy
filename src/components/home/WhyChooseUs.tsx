import {
  User,
  Users,
  ListChecks,
  CalendarClock,
  Headphones,
  Laptop,
  Mic2,
  TrendingUp,
  Heart,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const WhyChooseUs = () => {
  const features = [
    {
      icon: User,
      title: "One-on-One Classes",
      description:
        "Individualised attention tailored to each student’s voice, pace, and learning style.",
    },
    {
      icon: Users,
      title: "Group Sessions",
      description:
        "Interactive group learning that builds confidence, teamwork, and musical awareness.",
    },
    {
      icon: ListChecks,
      title: "Structured Lessons",
      description:
        "Step-by-step teaching designed to make Carnatic concepts easy to understand and follow.",
    },
    {
      icon: CalendarClock,
      title: "Flexible Timings",
      description:
        "Convenient class slots that fit comfortably into your weekly routine.",
    },
    {
      icon: Headphones,
      title: "Instant Doubt Support",
      description:
        "Students can clarify doubts anytime through messages or voice notes.",
    },
    {
      icon: Laptop,
      title: "Online & Offline Options",
      description:
        "Learn from home or attend in person with equal quality and attention.",
    },
    {
      icon: Mic2,
      title: "Performance Training",
      description:
        "Special coaching for concerts, competitions, and stage presentation skills.",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Regular feedback and monitoring to ensure steady musical improvement.",
    },
    {
      icon: Heart,
      title: "Warm, Friendly and Devotional Teaching",
      description:
        "Lessons taught with patience, positive energy, and deep respect for tradition.",
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Why Skanda Music Academy?"
          subtitle="At Skanda Music Academy, learning Carnatic music is not just about attending a class, it is a personal, guided, and enriching musical journey.
We ensure every student receives the attention, clarity, and confidence they need to grow beautifully in their musical path."
        />

        {/* Compact Feature Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-base leading-tight">
                    {feature.title}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
