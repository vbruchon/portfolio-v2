"use client";

import { motion } from "framer-motion";

type TypewriterProps = {
  text: string;
};

export const TypewriterText = ({ text }: TypewriterProps) => {
  const letters = text.split("");

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.06 },
    },
  };

  const letter = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.05 } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="inline-flex whitespace-pre font-mono"
    >
      {letters.map((char, i) => (
        <motion.span key={i} variants={letter}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};
