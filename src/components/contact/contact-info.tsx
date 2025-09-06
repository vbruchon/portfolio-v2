"use client";

import { motion } from "framer-motion";

export const ContactInfo = ({ replyNote }: { replyNote: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-6 mx-auto text-sm text-muted-foreground space-y-1"
    >
      <div className="flex items-center gap-4">
        <p>
          Email:{" "}
          <a
            href="mailto:vivian.bruchon@gmail.com"
            className="underline"
            aria-label="Email Vivian"
          >
            vivian.bruchon@gmail.com
          </a>
        </p>
        <span> | </span>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/vivian"
            target="_blank"
            className="underline"
            aria-label="LinkedIn profile"
          >
            linkedin.com/in/vivian
          </a>
        </p>
      </div>
      <p className="italic text-center">{replyNote}</p>
    </motion.div>
  );
};
