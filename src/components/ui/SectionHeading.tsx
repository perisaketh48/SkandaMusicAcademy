import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  className,
  centered = true,
}: SectionHeadingProps) => {
  return (
    <div className={cn(centered && "text-center", "mb-6 sm:mb-8", className)}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gradient-warm mb-3 sm:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
