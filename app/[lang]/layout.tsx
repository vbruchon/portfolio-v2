import { Header } from "@/components/layout/header";
import { ReactNode } from "react";

type LandingLayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LandingLayout({
  children,
  params,
}: LandingLayoutProps) {
  const { lang } = (await params) ?? "en";
  return (
    <>
      <Header lang={lang} />
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 flex flex-col gap-16">
        {children}
      </main>
    </>
  );
}
