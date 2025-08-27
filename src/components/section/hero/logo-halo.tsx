"use client";

import { NextLogo } from "@/components/logo/nextjs-logo";
import { NodeLogo } from "@/components/logo/node-logo";
import { OtherLogo } from "@/components/logo/other-logo";
import { ReactLogo } from "@/components/logo/react-logo";
import { motion } from "framer-motion";
import React from "react";
import { Bubble } from "./bubble";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
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
      <Bubble className="top-[-0.5rem] left-[75%] md:top-[0rem] md:left-[80%] xl:top-[0.75rem] xl:left-[80%] 2xl:top-[0.5rem] 2xl:left-[77%]">
        <ReactLogo className="w-full h-full p-1 text-foreground dark:text-muted-foreground bg-background " />
      </Bubble>

      <Bubble className="top-[4rem] left-[98%] md:size-13 md:top-[5rem] md:left-[100%] xl:size-14 xl:top-[7rem]">
        <NextLogo className="w-full h-full p-1 text-background bg-muted-foreground scale-115" />
      </Bubble>

      <Bubble className="top-[9.5rem] left-[97%] md:top-[11rem] xl:size-14 xl:top-[14.5rem] 2xl:top-[15rem]">
        <NodeLogo className="w-full h-full p-1.5 text-foreground dark:text-muted-foreground bg-background scale-110" />
      </Bubble>

      <Bubble className="top-[13.5rem] left-[75%] md:top-[15.5rem] xl:size-14 xl:top-[20rem] 2xl:top-[21rem]">
        <OtherLogo className="w-full h-full p-1 text-foreground dark:text-muted-foreground bg-background scale-110" />
      </Bubble>
    </motion.div>
  );
};
