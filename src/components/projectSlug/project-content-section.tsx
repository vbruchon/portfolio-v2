"use client";

import { motion } from "framer-motion";

type ProjectContentSectionProps = {
  context: string;
  objective: string;
};

export const ProjectContentSection = ({
  context,
  objective,
}: ProjectContentSectionProps) => (
  <motion.div
    initial="hidden"
    animate="visible"
    viewport={{ once: true }}
    className="space-y-6 text-lg leading-relaxed text-foreground mb-12 h-full"
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.15 },
      },
    }}
  >
    {[context, objective].map((text, i) => (
      <motion.p
        key={i}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.p>
    ))}
  </motion.div>
);
