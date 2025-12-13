import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Clock,
  Video,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const DemoClass = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    preferredTime: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Class Request Submitted!",
      description:
        "We'll contact you within 24 hours to confirm your demo class timing.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      preferredTime: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefits = [
    {
      icon: Video,
      title: "30-Minute Live Session",
      description:
        "Experience our teaching methodology firsthand with a personal one-on-one session.",
    },
    {
      icon: MessageCircle,
      title: "Personalized Assessment",
      description:
        "Get feedback on your current level and a customized learning path recommendation.",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose a time that works best for you across any timezone.",
    },
    {
      icon: Clock,
      title: "No Commitment",
      description:
        "Absolutely free with no obligation to enroll. Experience first, decide later.",
    },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Book a Free Demo Class"
        subtitle="Experience the transformative power of Carnatic music with a complimentary 30-minute session"
      />

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="What to Expect"
            subtitle="Your free demo class is designed to give you a complete picture of learning with us"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 border border-border text-center hover:border-gold/40 hover-glow fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-gradient-warm mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-gold/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              title="Request Your Demo"
              subtitle="Fill out the form below and we'll get back to you within 24 hours"
            />

            <div className="bg-card rounded-2xl p-8 border border-border shadow-elegant">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="border-border focus:border-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="border-border focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (123) 456-7890"
                      className="border-border focus:border-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Musical Experience</Label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    >
                      <option value="">Select your level</option>
                      <option value="beginner">Complete Beginner</option>
                      <option value="basic">Some Basic Knowledge</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Time Slot</Label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (6 AM - 10 AM IST)</option>
                    <option value="afternoon">
                      Afternoon (12 PM - 4 PM IST)
                    </option>
                    <option value="evening">Evening (5 PM - 9 PM IST)</option>
                    <option value="flexible">Flexible / Contact me</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your musical interests or any specific questions..."
                    rows={4}
                    className="border-border focus:border-gold resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary via-accent to-gold hover:shadow-gold text-base font-semibold py-6"
                >
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Request Demo Class
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-gold">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-serif text-primary-foreground mb-6 italic">
              "The demo class completely changed my perspective on learning
              Carnatic music. The personalized attention and structured approach
              convinced me this was the right place for my musical journey."
            </p>
            <footer className="text-primary-foreground/80">
              — Priya K., Student from California
            </footer>
          </blockquote>
        </div>
      </section>
    </PageLayout>
  );
};

export default DemoClass;
