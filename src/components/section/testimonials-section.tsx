import { SectionWrapper } from "./section-wrapper";
import { Testimonials } from "./testimonials/testimonials";

export type Testimonial = {
  img: string;
  link?: string;
  name: string;
  role?: string;
  enterprise: string;
  enterpriseLink: string;
  content: string;
  projectSlugs?: string[];
};

type TestimonialsSectionProps = {
  data: {
    title: string;
    testimonials: Testimonial[];
  };
};

export const TestimonialsSection = ({ data }: TestimonialsSectionProps) => {
  return (
    <SectionWrapper title={data.title}>
      <Testimonials data={data.testimonials} />
    </SectionWrapper>
  );
};
