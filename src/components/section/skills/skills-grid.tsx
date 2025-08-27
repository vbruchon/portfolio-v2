"use client";
import { motion } from "framer-motion";
import { SkillItem, SkillItemProps } from "./skill-item";

type SkillsGridProps = {
  skills: SkillItemProps[];
};
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const SkillsGrid = ({ skills }: SkillsGridProps) => {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
    >
      {skills.map((skill) => (
        <SkillItem
          key={skill.name}
          icon={skill.icon}
          name={skill.name}
          hoverClass={skill.hoverClass}
        />
      ))}
    </motion.div>
  );
};
