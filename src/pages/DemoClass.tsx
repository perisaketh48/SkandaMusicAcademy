import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Clock,
  Video,
  MessageCircle,
  Calendar,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { useToast } from "@/hooks/use-toast";
import { sendDemoBookingEmail } from "@/lib/emailjs";

const DemoClass = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    preferredTime: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Please fill required fields",
        description: "Name and email are required to book a demo class.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);

    try {
      await sendDemoBookingEmail(formData);
      setSent(true);
      toast({
        title: "Demo Class Request Submitted!",
        description: "We'll contact you within 24 hours to confirm your demo class timing.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        preferredTime: "",
        message: "",
      });

      // Reset sent state after 5 seconds
      setTimeout(() => setSent(false), 5000);
    } catch {
      toast({
        title: "Failed to submit request",
        description: "Something went wrong. Please try again or email us at info.skandamusicacademy@gmail.com",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
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
      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What to Expect"
            subtitle="Your free demo class is designed to give you a complete picture of learning with us"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-5 sm:p-6 border border-border text-center hover:border-primary/20 hover-glow fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <benefit.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-14 sm:py-20 bg-[#f6faff]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              title="Request Your Demo"
              subtitle="Fill out the form below and we'll get back to you within 24 hours"
            />

            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-border shadow-elegant">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      disabled={sending}
                      className="border-border focus:border-primary focus:ring-primary/20"
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
                      disabled={sending}
                      className="border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (123) 456-7890"
                      disabled={sending}
                      className="border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Musical Experience</Label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      disabled={sending}
                      className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
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
                    disabled={sending}
                    className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (6 AM - 10 AM IST)</option>
                    <option value="afternoon">Afternoon (12 PM - 4 PM IST)</option>
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
                    disabled={sending}
                    className="border-border focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-primary hover:bg-primary/90 text-white text-base font-semibold py-6 transition-all duration-200"
                >
                  {sending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : sent ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Submitted Successfully!
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Request Demo Class
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#0D2137] via-[#1E90FF] to-[#0D3F73]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl font-serif text-white mb-4 sm:mb-6 italic px-2">
              "The demo class completely changed my perspective on learning
              Carnatic music. The personalized attention and structured approach
              convinced me this was the right place for my musical journey."
            </p>
            <footer className="text-white/70 text-sm sm:text-base">
              Priya K., Student from California
            </footer>
          </blockquote>
        </div>
      </section>
    </PageLayout>
  );
};

export default DemoClass;
