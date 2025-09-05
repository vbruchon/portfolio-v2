"use client";

import { Testimonial } from "@/components/section/testimonials-section";
import { TestimonialCard } from "@/components/section/testimonials/testimonial-card";
import { motion } from "framer-motion";

type ProjectTestimonialsProps = {
  testimonials: Testimonial[];
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const ProjectTestimonials = ({
  testimonials,
}: ProjectTestimonialsProps) => {
  if (!testimonials.length) return null;

  return (
    <div className="mt-16">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Testimonials
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={item}>
            <TestimonialCard
              testimonial={testimonial}
              isActive={true}
              className="scale-100"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
