import { ProjectContent } from "@/components/section/projects";
import { ProjectCard } from "@/components/section/projects/project-card";
import { getDictionary } from "@/locales/dictionnaries";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const projectsDict = await getDictionary(lang, "projects");

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {projectsDict.title
          .split(" ")
          .filter((_: undefined, i: number) => i !== 1)
          .join(" ")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {projectsDict.projects.map((project: ProjectContent) => (
          <ProjectCard key={project.slug} project={project} className="h-72" />
        ))}
      </div>
    </div>
  );
}
