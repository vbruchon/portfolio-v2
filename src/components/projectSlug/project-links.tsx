"use client";

import Link from "next/link";
import { FiGlobe } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ProjectLinksProps = {
  github?: string | null;
  github2?: string | null;
  websiteURL?: string | null;
};

export const ProjectLinks = ({
  github,
  github2,
  websiteURL,
}: ProjectLinksProps) => (
  <motion.div
    className="flex flex-wrap gap-4 mb-12"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {github && (
      <Link
        href={github}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "flex items-center gap-2"
        )}
        target="_blank"
      >
        <SiGithub />
        <span>{github.split("/").pop()?.split("-").join(" ")}</span>
      </Link>
    )}
    {github2 && (
      <Link
        href={github2}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "flex items-center gap-2"
        )}
        target="_blank"
      >
        <SiGithub />
        <span>{github2.split("/").pop()?.split("-").join(" ")}</span>
      </Link>
    )}
    {websiteURL && (
      <Link
        href={websiteURL}
        className={cn(
          buttonVariants({ variant: "default" }),
          "flex items-center gap-2"
        )}
        target="_blank"
      >
        <FiGlobe />
        <span>Website</span>
      </Link>
    )}
  </motion.div>
);
