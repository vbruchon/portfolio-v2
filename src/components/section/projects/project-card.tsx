"use client";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ProjectContent } from "../projects";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const container = {
  initial: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
  hover: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};

const item = {
  initial: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
  hover: { opacity: 1, y: 0 },
};

const textVariants = {
  initial: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

type ProjectCardProps = {
  className?: string;
  project: ProjectContent;
};

export const ProjectCard = ({ className = "", project }: ProjectCardProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <motion.div
      initial="initial"
      animate={controls}
      whileHover="hover"
      className={`relative overflow-hidden cursor-pointer p-0 ${className} group h-64 md:h-full hover:border-2 hover:border-primary bg-card text-card-foreground flex flex-col gap-6 rounded-xl border`}
    >
      <Link href={`/projects/${project.slug}`} className="w-full h-full block">
        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            src={project.imageURL || "/track-dev-time.png"}
            alt={project.title}
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="absolute inset-0 bg-card-foreground/95 dark:bg-background/95 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
          <motion.h3
            variants={textVariants}
            className="text-lg font-bold w-full text-white mb-2"
          >
            {project.title}
          </motion.h3>

          <motion.p
            variants={textVariants}
            className="text-white line-clamp-3 md:line-clamp-none"
          >
            {project.description}
          </motion.p>

          <motion.div
            variants={container}
            className="flex flex-wrap item-center justify-start mt-5 w-full gap-2"
          >
            {project.stacks.map((stack) => (
              <motion.span key={stack} variants={item}>
                <Badge variant="gradient">{stack}</Badge>
              </motion.span>
            ))}
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};
