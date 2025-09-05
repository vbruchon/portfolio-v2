import { ProjectBanner } from "@/components/projectSlug/project-banner";
import { ProjectContentSection } from "@/components/projectSlug/project-content-section";
import { ProjectLinks } from "@/components/projectSlug/project-links";
import { ProjectTestimonials } from "@/components/projectSlug/project-testimonials";
import { ProjectContent } from "@/components/section/projects";
import { Testimonial } from "@/components/section/testimonials-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/locales/dictionnaries";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectContentExtended = ProjectContent & {
  content: {
    bannerURL: string | null;
    context: string;
    objective: string;
    github: string | null;
    github2?: string | null;
    websiteURL: string | null;
  };
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; projectSlug: string }>;
}) {
  const { lang, projectSlug } = await params;

  const projectsDict = await getDictionary(lang, "projects");
  const project = projectsDict.projects.find(
    (p: ProjectContentExtended) => p.slug === projectSlug
  );

  if (!project) notFound();

  const testimonialsDict = await getDictionary(lang, "testimonials");
  const projectTestimonials = testimonialsDict.testimonials
    .filter((t: Testimonial) => t.projectSlugs?.includes(projectSlug))
    .reverse();

  return (
    <>
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "w-fit"
        )}
      >
        ← Back
      </Link>
      <div className="px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <ProjectBanner
          title={project.title}
          imageURL={project.content?.bannerURL ?? project.imageURL}
          stacks={project.stacks}
        />

        <ProjectContentSection
          context={project.content?.context}
          objective={project.content?.objective}
        />

        <ProjectLinks
          github={project.content?.github}
          github2={project.content?.github2}
          websiteURL={project.content?.websiteURL}
        />

        <ProjectTestimonials testimonials={projectTestimonials} />
      </div>
    </>
  );
}
