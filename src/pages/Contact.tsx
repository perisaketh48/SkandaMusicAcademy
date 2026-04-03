import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCircle from "@/components/ui/IconCircle";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/lib/emailjs";

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill all required fields",
        description: "Name, email, subject and message are required.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);

    try {
      await sendContactEmail(formData);
      setSent(true);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll respond within 24-48 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset sent state after 5 seconds
      setTimeout(() => setSent(false), 5000);
    } catch {
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or email us directly at info.skandamusicacademy@gmail.com",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
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
      details: "info.skandamusicacademy@gmail.com",
      subtext: "We respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+61 434 426 619",
      subtext: "Mon-Sat, 9 AM - 7 PM IST",
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
      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto justify-center">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-5 sm:p-6 border border-border text-center hover:border-primary/20 hover-glow fade-in-up"
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
                <p className="text-foreground font-medium mb-1 text-sm sm:text-base break-all sm:break-normal">
                  {info.details}
                </p>
                <p className="text-muted-foreground text-sm">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-14 sm:py-20 bg-[#f6faff]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="fade-in-up">
              <SectionHeading title="Send Us a Message" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Whether you have questions about our courses, need help choosing
                the right plan, or just want to say hello, we're here to help.
                Fill out the form and we'll get back to you as soon as possible.
              </p>

              <div className="bg-white rounded-2xl p-5 sm:p-8 border border-border shadow-elegant">
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full name"
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

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                      disabled={sending}
                      className="border-border focus:border-primary focus:ring-primary/20"
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
                        Sending...
                      </>
                    ) : sent ? (
                      <>
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                        Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="bg-gradient-to-br from-[#0D2137] via-[#125699] to-[#0D3F73] rounded-2xl p-6 sm:p-8 lg:p-12 h-full flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-5 sm:mb-6">
                  Why Choose Skanda Music Academy?
                </h3>
                <ul className="space-y-3 sm:space-y-4">
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
                      className="flex items-center gap-3 text-white/85 text-sm sm:text-base"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#1E90FF] shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/15">
                  <p className="text-white/80 text-sm italic">
                    "The best time to start your musical journey is now. We're
                    here to guide you every step of the way."
                  </p>
                  <p className="text-white/50 text-sm mt-2">
                    The Skanda Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Global Reach, Personal Touch"
            subtitle="While based in Hyderabad, India, we teach students from around the world through our online platform."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {["North America", "Europe", "Asia Pacific"].map((region, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-5 sm:p-6 border border-border fade-in-up"
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
