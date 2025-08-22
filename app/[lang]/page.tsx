import { getDictionary } from "@/locales/dictionnaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "hero");

  return (
    <div className="flex flex-col gap-[32px]  items-center  sm:items-start">
      Portfolio v2
    </div>
  );
}
