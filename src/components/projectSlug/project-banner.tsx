"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type ProjectBannerProps = { title: string; imageURL: string; stacks: string[] };

export const ProjectBanner = ({
  title,
  imageURL,
  stacks,
}: ProjectBannerProps) => (
  <motion.div
    className="flex flex-col md:flex-row md:items-center gap-8 mb-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <motion.div
      className="w-full md:w-1/3 flex-shrink-0"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Image
        src={imageURL}
        alt={`${title} banner`}
        width={600}
        height={400}
        className="rounded-xl object-cover w-full h-auto shadow-md"
      />
    </motion.div>

    <motion.div
      className="flex-1"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>
      <div className="flex flex-wrap gap-2 lg:gap-3">
        {stacks.map((stack) => (
          <Badge key={stack} variant="gradient">
            {stack}
          </Badge>
        ))}
      </div>
    </motion.div>
  </motion.div>
);
