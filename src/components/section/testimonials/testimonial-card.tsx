import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Testimonial } from "../testimonials-section";
import { TestimonialHeader } from "./testimonial-header";

type TestimonialCardProps = {
  testimonial: Testimonial;
  isActive: boolean;
};

export const TestimonialCard = ({
  testimonial,
  isActive,
}: TestimonialCardProps) => {
  return (
    <Card
      className={cn(
        "sm:h-full flex flex-col transition-all duration-500 ease-in-out",
        isActive
          ? "md:opacity-100 md:scale-105 md:shadow-lg"
          : "md:opacity-40 md:scale-95"
      )}
    >
      <TestimonialHeader testimonial={testimonial} />
      <CardContent className="flex-1 flex flex-col justify-between px-5 text-foreground mb-4 italic leading-relaxed">
        &quot; {testimonial.content}&quot;
      </CardContent>
    </Card>
  );
};
