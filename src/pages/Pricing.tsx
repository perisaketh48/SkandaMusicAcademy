import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for beginners starting their musical journey",
      features: [
        "4 Live Sessions per Month",
        "30-minute Sessions",
        "Basic Curriculum Access",
        "Email Support",
        "Practice Recordings",
      ],
      popular: false,
    },
    {
      name: "Standard",
      price: "$89",
      period: "per month",
      description: "Ideal for regular learners seeking steady progress",
      features: [
        "8 Live Sessions per Month",
        "45-minute Sessions",
        "Full Curriculum Access",
        "Priority Support",
        "Practice Recordings",
        "Monthly Progress Report",
        "Group Session Access",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$149",
      period: "per month",
      description: "For dedicated students pursuing advanced mastery",
      features: [
        "12 Live Sessions per Month",
        "60-minute Sessions",
        "Full Curriculum + Advanced Modules",
        "24/7 Priority Support",
        "Unlimited Practice Recordings",
        "Weekly Progress Reports",
        "Exclusive Group Sessions",
        "Performance Opportunities",
        "One-on-One Mentorship",
      ],
      popular: false,
    },
  ];

  return (
    <PageLayout>
      <PageHero
        title="Pricing Plans"
        subtitle="Transparent, flexible pricing designed to make quality music education accessible to everyone"
      />

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-card rounded-2xl border overflow-hidden fade-in-up transition-all ${
                  plan.popular
                    ? "border-gold shadow-gold scale-105 z-10"
                    : "border-border hover:border-gold/40 hover-glow"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gold via-accent to-gold py-2 text-center">
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-primary-foreground">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                <div className={`p-8 ${plan.popular ? "pt-14" : ""}`}>
                  <h3 className="text-xl font-serif font-bold text-gradient-warm mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-serif font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      /{plan.period}
                    </span>
                  </div>
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-gold via-accent to-gold hover:shadow-gold"
                        : "bg-gradient-to-r from-primary to-accent hover:shadow-gold"
                    }`}
                  >
                    <Link to="/demo">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-gold/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our pricing and plans"
          />
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Can I change my plan later?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect from your next billing cycle.",
              },
              {
                q: "Is there a free trial available?",
                a: "We offer a free demo class so you can experience our teaching approach before committing to a plan.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, debit cards, and online payment methods including PayPal and UPI.",
              },
              {
                q: "Can I pause my subscription?",
                a: "Yes, you can pause your subscription for up to 3 months per year if needed, without losing your progress.",
              },
              {
                q: "Do you offer family discounts?",
                a: "Yes! We offer special discounts for families with multiple learners. Contact us for more details.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 border border-border hover:border-gold/40 hover-glow fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {faq.q}
                </h4>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-gold">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            30-Day Money-Back Guarantee
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
            We're confident you'll love learning with us. If you're not
            completely satisfied within the first 30 days, we'll refund your
            payment, no questions asked.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
          >
            <Link to="/demo">
              Start Risk-Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pricing;
