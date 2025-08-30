"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { ProjectContent } from "../projects";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const getCardVariants = (index: number) => ({
  hidden: { opacity: 0, x: index === 0 ? -50 : 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
});

export const ProjectsGrid = ({ projects }: { projects: ProjectContent[] }) => {
  return (
    <motion.div
      className="grid gap-6 md:grid-cols-4 md:grid-rows-2 md:h-[500px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      {projects.map((project, index) => {
        let className = "hover:shadow-lg transition-shadow duration-300";
        if (index === 0) className += " md:col-span-2 md:row-span-2";
        if (index === 1)
          className += " md:col-span-2 md:col-start-3 md:row-start-1";
        if (index === 2)
          className += " md:col-span-2 md:col-start-3 md:row-start-2";

        return (
          <motion.div
            key={project.slug}
            className={className}
            variants={getCardVariants(index)}
          >
            <ProjectCard project={project} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};
