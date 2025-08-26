import { FC } from "react";
import { HeroContent } from "../hero";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TypewriterText } from "@/components/layout/type-writer-text";

export const HeroText: FC<{ content: HeroContent }> = ({ content }) => (
  <div className="flex flex-col md:text-left max-w-xl">
    <span className="text-2xl md:text-3xl text-muted-foreground">
      {content.hello}
    </span>
    <div className="mt-4 leading-relaxed">
      <span className="text-3xl md:mb-4 md:text-3xl">{content.name}</span>
      <h1 className="text-3xl md:text-4xl text-primary font-bold mt-2">
        <TypewriterText text={content.job} />
      </h1>

      <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
        {content.paragraph.iAm}
      </p>
      <p className="mt-2 text-base md:text-lg text-muted-foreground">
        {content.paragraph.explore}
      </p>
    </div>
    <div className="flex flex-wrap items-center gap-4">
      <Link
        href={"#contact"}
        className={cn(buttonVariants({ variant: "outline" }), "mt-6")}
      >
        {content.cta.contact}
      </Link>
      <Link
        href={"/projects"}
        className={cn(buttonVariants({ variant: "default" }), "mt-6 flex-1")}
      >
        {content.cta.projects}
      </Link>
    </div>
  </div>
);
