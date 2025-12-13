import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCircle from "@/components/ui/IconCircle";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description:
        "Thank you for reaching out. We'll respond within 24-48 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@skandamusicacademy.com",
      subtext: "We respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      subtext: "Mon-Sat, 9 AM - 7 PM IST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Hyderabad, India",
      subtext: "In-person classes available",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sat: 6 AM - 9 PM IST",
      subtext: "Sunday: By appointment",
    },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Contact Us"
        subtitle="Have questions? We'd love to hear from you. Reach out and let's start a conversation about your musical journey."
      />

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 border border-border text-center hover:border-gold/40 hover-glow fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <IconCircle
                  icon={info.icon}
                  size="md"
                  variant="soft"
                  className="mx-auto mb-4"
                />
                <h3 className="font-serif text-lg font-semibold text-gradient-warm mb-2">
                  {info.title}
                </h3>
                <p className="text-foreground font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-muted-foreground text-sm">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-gold/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="fade-in-up">
              <SectionHeading title="Send Us a Message" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have questions about our courses, need help choosing
                the right plan, or just want to say hello, we're here to help.
                Fill out the form and we'll get back to you as soon as possible.
              </p>

              <div className="bg-card rounded-2xl p-8 border border-border shadow-elegant">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full name"
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

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                      className="border-border focus:border-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                      className="border-border focus:border-gold resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary via-accent to-gold hover:shadow-gold text-base font-semibold py-6"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="bg-gradient-to-br from-tertiary via-primary to-secondary rounded-2xl p-8 lg:p-12 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-6">
                  Why Choose Skanda Music Academy?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Personalized one-on-one attention",
                    "Flexible scheduling across time zones",
                    "Traditional guru-shishya approach",
                    "Structured curriculum for all levels",
                    "Regular performance opportunities",
                    "Supportive learning community",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-primary-foreground/90"
                    >
                      <div className="w-2 h-2 rounded-full bg-gold shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                  <p className="text-primary-foreground/80 text-sm italic">
                    "The best time to start your musical journey is now. We're
                    here to guide you every step of the way."
                  </p>
                  <p className="text-primary-foreground/60 text-sm mt-2">
                    — The Skanda Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeading
            title="Global Reach, Personal Touch"
            subtitle="While based in Hyderabad, India, we teach students from around the world through our online platform."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {["North America", "Europe", "Asia Pacific"].map((region, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 border border-border fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h4 className="font-serif text-lg font-semibold text-gradient-warm mb-2">
                  {region}
                </h4>
                <p className="text-muted-foreground text-sm">
                  Students learning with us
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
