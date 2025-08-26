import { Hero } from "@/components/section/hero";
import { getDictionary } from "@/locales/dictionnaries";
import Image from "next/image";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "hero");

  return (
    <div className="">
      <Hero content={dict} />
    </div>
  );
}
