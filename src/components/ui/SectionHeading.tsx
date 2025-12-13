import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, className, centered = true }: SectionHeadingProps) => {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient-warm mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
