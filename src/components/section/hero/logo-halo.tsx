"use client";

import { NextLogo } from "@/components/logo/nextjs-logo";
import { NodeLogo } from "@/components/logo/node-logo";
import { OtherLogo } from "@/components/logo/other-logo";
import { ReactLogo } from "@/components/logo/react-logo";
import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const LogoHalo = () => {
  return (
    <motion.div
      className="
        relative border-r-2 border-muted-foreground rounded-full -rotate-18
        w-64 h-64 translate-x-[10%] mt-5
        md:w-72 md:h-72 md:translate-x-[15%] md:translate-y-[10%]
        lg:translate-x-[20%] lg:-translate-y-[0%] lg:-rotate-22 lg:mr-18
        xl:w-96 xl:h-94 xl:translate-x-[15%] xl:translate-y-[1%]
        2xl:w-100 2xl:h-98 2xl:translate-x-[15%]
      "
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <ReactLogo className="w-full h-full p-1 text-foreground dark:text-muted-foreground bg-background " />
      </motion.div>
      <motion.div variants={itemVariants}>
        <NextLogo className="w-full h-full p-1 text-background bg-muted-foreground scale-115" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <NodeLogo className="w-full h-full p-1.5 text-foreground dark:text-muted-foreground bg-background scale-110" />
      </motion.div>
      <motion.div variants={itemVariants}>
        <OtherLogo className="w-full h-full p-1 text-foreground dark:text-muted-foreground bg-background scale-110" />
      </motion.div>
    </motion.div>
  );
};
