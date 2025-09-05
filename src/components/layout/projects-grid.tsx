"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/section/projects/project-card";
import { ProjectContent } from "@/components/section/projects";
import { Plus } from "lucide-react";
import Link from "next/link";

type ProjectsGridProps = {
  projects: ProjectContent[];
  cta: {
    title: string;
  };
};

export const ProjectsGrid = ({ projects, cta }: ProjectsGridProps) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.div
          key={project.slug}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ProjectCard project={project} className="h-72" />
        </motion.div>
      ))}

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="h-72 rounded-xl border border-dashed border-muted-foreground/40 bg-muted/80 flex flex-col items-center justify-center text-center p-6 hover:border-primary hover:text-primary transition-colors"
      >
        <Link href="/contact" className="flex flex-col items-center gap-3">
          <Plus className="w-12 h-12" />
          <span className="text-lg font-bold">{cta.title}</span>
        </Link>
      </motion.div>
    </motion.div>
  );
};
