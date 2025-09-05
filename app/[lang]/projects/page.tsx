import { ProjectsGrid } from "@/components/layout/projects-grid";
import { getDictionary } from "@/locales/dictionnaries";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const projectsDict = await getDictionary(lang, "projects");

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">
        {projectsDict.title
          .split(" ")
          .filter((_: undefined, i: number) => i !== 1)
          .join(" ")}
      </h1>
      <ProjectsGrid
        projects={projectsDict.projects}
        cta={projectsDict.ctaCard}
      />
    </div>
  );
}
