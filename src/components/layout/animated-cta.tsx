"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

type AnimatedCTAProps = {
  href: string;
  text: string;
  className?: string;
  transitionDelay?: number;
};

export const AnimatedCTA = ({
  href,
  text,
  className = "",
  transitionDelay = 0.15,
}: AnimatedCTAProps) => {
  return (
    <motion.div
      className={`flex items-center justify-center mt-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: transitionDelay }}
    >
      <Link href={href} className={buttonVariants()}>
        {text}
      </Link>
    </motion.div>
  );
};
