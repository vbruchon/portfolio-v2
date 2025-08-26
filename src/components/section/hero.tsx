import { FC } from "react";
import { LogoHalo } from "./hero/logo-halo";
import { HeroText } from "./hero/hero-text";
import { HeroImage } from "./hero/hero-img";
import { BlobSVG } from "./hero/blob-svg";
import { ArrowDown } from "lucide-react";

export type HeroContent = {
  hello: string;
  name: string;
  job: string;
  paragraph: {
    iAm: string;
    explore: string;
  };
  cta: {
    contact: string;
    projects: string;
  };
  scroll: string;
};

export type HeroProps = {
  content: HeroContent;
};

export const Hero: FC<HeroProps> = ({ content }) => (
  <>
    <section className="relative flex flex-col mt-26 lg:mt-0 lg:flex-row items-center justify-center gap-10 lg:gap-28 h-[70vh] px-6">
      <BlobSVG className="hidden lg:block lg:absolute lg:-z-20 lg:-top-1/4 lg:right-0 lg:translate-x-1/10 text-chart-5/15 overflow-x-hidden" />
      <HeroText content={content} />
      <HeroImage src="/me.png" alt="Photo de Vivian Bruchon">
        <LogoHalo />
      </HeroImage>
      <div className="lg:absolute lg:-bottom-20 text-center">
        <p className="text-muted-foreground italic mb-2">{content.scroll}</p>
        <ArrowDown
          className="size-8 text-muted-foreground animate-bounce mx-auto"
          aria-hidden="true"
        />
      </div>
    </section>
  </>
);
