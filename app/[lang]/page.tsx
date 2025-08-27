import { Hero } from "@/components/section/hero";
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

  return (
    <div className="px-6">
      <Hero content={heroDict} />
      <Skills content={skillsDict} />
    </div>
  );
}
