"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export type SkillItemProps = {
  icon: ReactNode;
  name: string;
  hoverClass: string;
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const SkillItem = ({ icon, name, hoverClass }: SkillItemProps) => (
  <motion.div
    className={`group flex flex-col items-center gap-3 p-4 text-muted-foreground`}
    variants={itemVariants}
    whileHover={{ scale: 1.15 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
  >
    <div className={`text-4xl ${hoverClass} transition-colors duration-200`}>
      {icon}
    </div>
    <p
      className={`text-sm text-center font-medium ${hoverClass} transition-colors duration-200`}
    >
      {name}
    </p>
  </motion.div>
);
