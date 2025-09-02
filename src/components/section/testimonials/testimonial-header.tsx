import { CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Testimonial } from "../testimonials-section";

export const TestimonialHeader = ({
  testimonial,
}: {
  testimonial: Testimonial;
}) => (
  <CardHeader className="flex flex-col items-center gap-3 text-center lg:flex-row lg:gap-4 lg:text-left">
    {testimonial.img && (
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-primary/20 shadow-sm">
        {testimonial.link ? (
          <Link
            href={testimonial.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={testimonial.img}
              alt={testimonial.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </Link>
        ) : (
          <Image
            src={testimonial.img}
            alt={testimonial.name}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        )}
      </div>
    )}

    <div className="flex flex-col">
      <p className="font-semibold text-lg text-foreground">
        {testimonial.name}
      </p>
      {(testimonial.role || testimonial.enterprise) && (
        <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-1">
          {testimonial.role && <span>{testimonial.role}</span>}
          {testimonial.enterprise && (
            <>
              <span>·</span>
              {testimonial.enterpriseLink ? (
                <a
                  href={testimonial.enterpriseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {testimonial.enterprise}
                </a>
              ) : (
                testimonial.enterprise
              )}
            </>
          )}
        </p>
      )}
    </div>
  </CardHeader>
);
