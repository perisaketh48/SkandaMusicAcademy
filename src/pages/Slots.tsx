import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Calendar,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

const Slots = () => {
  const timeSlots = [
    { time: "6:00 AM - 7:00 AM", available: true, timezone: "IST" },
    { time: "7:00 AM - 8:00 AM", available: false, timezone: "IST" },
    { time: "8:00 AM - 9:00 AM", available: true, timezone: "IST" },
    { time: "9:00 AM - 10:00 AM", available: true, timezone: "IST" },
    { time: "10:00 AM - 11:00 AM", available: false, timezone: "IST" },
    { time: "4:00 PM - 5:00 PM", available: true, timezone: "IST" },
    { time: "5:00 PM - 6:00 PM", available: false, timezone: "IST" },
    { time: "6:00 PM - 7:00 PM", available: true, timezone: "IST" },
    { time: "7:00 PM - 8:00 PM", available: true, timezone: "IST" },
    { time: "8:00 PM - 9:00 PM", available: false, timezone: "IST" },
  ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <PageLayout>
      <PageHero
        title="Slot Availability"
        subtitle="Find the perfect time for your Carnatic music lessons. We offer flexible scheduling to accommodate learners across different time zones."
      />

      {/* Time Zone Notice */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-gold/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-gold/10 px-6 py-3 rounded-full">
              <Clock className="h-5 w-5 text-gold" />
              <span className="text-foreground font-medium">
                All times displayed in Indian Standard Time (IST)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Weekly Schedule"
            subtitle="Check our available time slots for the current week"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {days.map((day, dayIndex) => (
              <div
                key={day}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:border-gold/40 hover-glow fade-in-up"
                style={{ animationDelay: `${dayIndex * 0.05}s` }}
              >
                <div className="bg-gradient-to-r from-primary to-accent p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary-foreground" />
                    <h3 className="font-serif font-bold text-primary-foreground">
                      {day}
                    </h3>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  {timeSlots.slice(0, 5).map((slot, slotIndex) => {
                    // Randomize availability for demo
                    const isAvailable = (dayIndex + slotIndex) % 3 !== 0;
                    return (
                      <div
                        key={slotIndex}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          isAvailable
                            ? "bg-green-50 dark:bg-green-950/20"
                            : "bg-muted"
                        }`}
                      >
                        <span className="text-sm text-muted-foreground">
                          {slot.time}
                        </span>
                        {isAvailable ? (
                          <div className="flex items-center gap-1 text-green-600">
                            <CheckCircle2 className="h-4 w-4" />
                            <span className="text-xs font-medium">
                              Available
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <XCircle className="h-4 w-4" />
                            <span className="text-xs font-medium">Booked</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Scheduling */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-gold/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              title="Need a Different Time?"
              subtitle="We understand that everyone's schedule is unique. If the displayed slots don't work for you, we're happy to accommodate custom timing requests."
            />
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Multiple Time Zones",
                  description:
                    "We teach students from US, UK, Canada, Australia, and more. We'll find a time that works for you.",
                },
                {
                  title: "Weekend Classes",
                  description:
                    "Special weekend batches available for those with busy weekday schedules.",
                },
                {
                  title: "Flexible Rescheduling",
                  description:
                    "Life happens! Easily reschedule classes with 24-hour advance notice.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl p-6 border border-border fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <h4 className="font-serif text-lg font-semibold text-gradient-warm mb-3">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-gold">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Ready to Book Your Slot?
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
            Start with a free demo class to experience our teaching approach,
            then choose a regular slot that fits your schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
            >
              <Link to="/demo">
                Book Demo Class
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground/40 border-2 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Link to="/contact">Contact for Custom Timing</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Slots;
