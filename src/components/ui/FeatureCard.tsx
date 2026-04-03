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
        "p-6 sm:p-8 bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(30,144,255,0.1)] fade-in-up transition-all duration-300 group",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/8 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary/12 transition-colors">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
      </div>
      <h3 className="font-serif text-lg sm:text-xl text-foreground font-semibold mb-2 sm:mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
