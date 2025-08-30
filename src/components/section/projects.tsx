import { SectionWrapper } from "./section-wrapper";
import { ProjectsGrid } from "./projects/projects-grid";
import { AnimatedCTA } from "../layout/animated-cta";

export type ProjectContent = {
  title: string;
  description: string;
  stacks: string[];
  imageURL: string;
  slug: string;
  portfolio: boolean;
};

type ProjectsProps = {
  content: {
    title: string;
    cta: string;
    projects: ProjectContent[];
  };
};

export const Projects = ({ content }: ProjectsProps) => {
  return (
    <SectionWrapper title={content.title}>
      <ProjectsGrid projects={content.projects} />
      <AnimatedCTA href="/projects" text={content.cta} />
    </SectionWrapper>
  );
};
