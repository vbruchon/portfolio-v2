"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LangSwitcher } from "./lang-switcher";
import { ToggleTheme } from "../theme/toggle-theme";
import Image from "next/image";
import { NavMenu } from "./nav-menu";

export const MobileMenu = ({ items }: { items: [] }) => {
  const [open, setOpen] = useState(false);

  // const handleLinkClick = () => {
  //   setOpen(false);
  // };

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="right">
      <DrawerTrigger asChild>
        <Button variant="ghost" size="sm" aria-label="Open menu">
          <Menu />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerClose asChild>
            <Button
              size={"sm"}
              variant={"ghost"}
              aria-label="Close menu"
              className="ml-auto"
            >
              <X />
            </Button>
          </DrawerClose>
          <DrawerTitle>
            <Image
              src={"/logo-2.png"}
              alt="vivian logo"
              width={40}
              height={40}
            />
          </DrawerTitle>
          <div className="mt-12">
            <NavMenu items={items} />
          </div>
          <div className="mt-8"></div>
        </DrawerHeader>

        <DrawerFooter className="border-t pt-4">
          <div className="flex items-center justify-between gap-4">
            <ToggleTheme />
            <LangSwitcher />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
