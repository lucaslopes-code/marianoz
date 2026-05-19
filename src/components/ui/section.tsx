import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export const Section = ({ children, className, id, style }: SectionProps) => {
  return (
    <section id={id} className={cn("py-6 lg:py-10", className)} style={style}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};