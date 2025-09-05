import Image from "next/image";
import { ToggleTheme } from "../theme/toggle-theme";
import { LangSwitcher } from "./lang-switcher";
import { getDictionary } from "@/locales/dictionnaries";
import { NavMenu } from "./nav-menu";
import { MobileMenu } from "./mobile-menu";

export const Header = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang, "layout");

  return (
    <header className="sticky top-0 z-50 w-full h-20 bg-background/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60 px-8 py-6 flex items-center">
      <div className="flex items-center mx-auto w-full max-w-6xl">
        <div className="flex-none">
          <Image src={"/logo-2.png"} alt="vivian logo" width={40} height={40} />
        </div>

        <div className="flex-1 flex justify-center">
          <nav className="hidden md:flex">
            <NavMenu items={dict.nav} />
          </nav>
        </div>

        <div className="hidden md:flex flex-none items-center gap-4 ml-8">
          <ToggleTheme />
          <LangSwitcher />
        </div>

        <div className="flex flex-1 justify-end md:hidden">
          <MobileMenu items={dict.nav} />
        </div>
      </div>
    </header>
  );
};
