import { FC } from "react";
import { HeroContent } from "../hero";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TypewriterText } from "@/components/layout/type-writer-text";

export const HeroText: FC<{ content: HeroContent }> = ({ content }) => (
  <div className="flex flex-col md:text-left max-w-xl">
    <span className="text-2xl sm:text-2xl md:text-3xl text-muted-foreground">
      {content.hello}
    </span>

    <div className="mt-4">
      <span className="block text-2xl sm:text-3xl md:text-3xl font-semibold mb-2 md:mb-4 break-words">
        {content.name}
      </span>

      <h1
        className="
          font-bold
          mt-2
          text-2xl sm:text-3xl md:text-4xl
          leading-snug sm:leading-snug md:leading-tight
          text-transparent
          bg-clip-text
          bg-gradient-to-r from-primary to-ring
          break-words
        "
      >
        <TypewriterText text={content.job} />
      </h1>

      <p className="mt-4 sm:mt-6 text-base md:text-lg leading-relaxed text-muted-foreground break-words">
        {content.paragraph.iAm}
      </p>
      <p className="mt-2 text-sm sm:text-base md:text-lg text-muted-foreground break-words">
        {content.paragraph.explore}
      </p>
    </div>

    <div className="flex flex-wrap items-center gap-4 mt-6">
      <Link
        href="#contact"
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        {content.cta.contact}
      </Link>
      <Link
        href="/projects"
        className={cn(buttonVariants({ variant: "default" }), "flex-1")}
      >
        {content.cta.projects}
      </Link>
    </div>
  </div>
);
