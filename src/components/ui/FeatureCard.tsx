import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, className, delay = 0 }: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "p-8 bg-card rounded-2xl border border-border hover:border-gold/40 hover-glow fade-in-up transition-all group",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="font-serif text-xl text-gradient-warm mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
