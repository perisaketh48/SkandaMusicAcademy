import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconCircleProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "gradient" | "soft";
  className?: string;
}

const IconCircle = ({ icon: Icon, size = "md", variant = "gradient", className }: IconCircleProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-16 h-16",
  };

  const iconSizes = {
    sm: "h-5 w-5",
    md: "h-7 w-7",
    lg: "h-8 w-8",
  };

  const variantClasses = {
    gradient: "bg-gradient-to-br from-primary to-gold shadow-gold",
    soft: "bg-gradient-to-br from-primary/10 to-gold/10",
  };

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center shrink-0",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <Icon className={cn(iconSizes[size], variant === "gradient" ? "text-primary-foreground" : "text-primary")} />
    </div>
  );
};

export default IconCircle;
