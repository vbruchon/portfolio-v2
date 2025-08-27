import {
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFigma,
  SiGithub,
  SiPrisma,
} from "react-icons/si";
import { SkillsGrid } from "./skills/skills-grid";
import { SectionWrapper } from "./section-wrapper";

type SkillsProps = {
  content: {
    title: string;
    category: {
      dev: string;
      tools: string;
    };
  };
};

export const Skills = ({ content }: SkillsProps) => {
  return (
    <SectionWrapper title={content.title}>
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-6 text-muted-foreground text-center sm:text-start">
          {content.category.dev}
        </h3>
        <SkillsGrid skills={devSkills} />
      </div>

      <h3 className="text-xl font-semibold mb-6 text-muted-foreground text-center sm:text-start">
        {content.category.tools}
      </h3>
      <SkillsGrid skills={toolSkills} />
    </SectionWrapper>
  );
};

const devSkills = [
  {
    icon: <SiReact className="animate-spin-slow" />,
    name: "React",
    hoverClass: "group-hover:text-sky-400",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    hoverClass: "group-hover:text-black group-hover:dark:text-white",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    hoverClass: "group-hover:text-cyan-500",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    hoverClass: "group-hover:text-blue-600",
  },
  {
    icon: <SiNodedotjs />,
    name: "Node.js",
    hoverClass: "group-hover:text-primary",
  },
  {
    icon: <SiPrisma />,
    name: "Prisma",
    hoverClass: "group-hover:text-purple-600",
  },
];

const toolSkills = [
  {
    icon: <SiGithub />,
    name: "GitHub",
    hoverClass: "group-hover:text-black group-hover:dark:text-white",
  },
  { icon: <SiFigma />, name: "Figma", hoverClass: "group-hover:text-pink-500" },
];
