import { Hero } from "@/components/section/hero";
import { ProjectContent, Projects } from "@/components/section/projects";
import { Skills } from "@/components/section/skills";
import { getDictionary } from "@/locales/dictionnaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const heroDict = await getDictionary(lang, "hero");
  const skillsDict = await getDictionary(lang, "skills");
  const projectsDict = await getDictionary(lang, "projects");

  const portfolioProjects = projectsDict.projects.filter(
    (project: ProjectContent) => project.portfolio === true
  );

  const portfolioContent = {
    ...projectsDict,
    projects: portfolioProjects,
  };

  return (
    <div className="px-6">
      <Hero content={heroDict} />
      <Skills content={skillsDict} />
      <Projects content={portfolioContent} />
    </div>
  );
}
