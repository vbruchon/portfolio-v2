import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

type BubbleProps = {
  children: ReactNode;
  className: string;
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const Bubble: FC<BubbleProps> = ({ children, className }) => (
  <motion.div variants={itemVariants}>
    <div
      className={`absolute border-2 border-primary rounded-full overflow-hidden size-10 rotate-18 -translate-x-1/2 lg:rotate-22 md:size-13 xl:size-14 ${className}`}
    >
      {children}
    </div>
  </motion.div>
);
