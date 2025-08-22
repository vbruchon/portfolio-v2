import { cn } from "@/lib/utils";
import Link from "next/link";

export type NavMenuItemProps = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavMenuItem = ({
  href,
  label,
  isActive = false,
}: NavMenuItemProps) => {
  return (
    <li className="relative flex flex-col items-center">
      <Link
        href={href}
        className={cn(
          " font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
        )}
      >
        {label}
      </Link>

      <div className="relative mt-1 h-[3px] w-full overflow-hidden">
        {isActive && (
          <span className="absolute left-1/2 top-0 h-full w-full max-w-[100px] -translate-x-1/2 bg-primary" />
        )}
      </div>
    </li>
  );
};
