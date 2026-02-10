"use client";

import { Archive, Award, House, Menu, PanelRightClose, Smile, Star } from "lucide-react";

import { useTranslations } from "next-intl";

import { LangToggle } from "@/components/lang-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";

export function Header() {
  const t = useTranslations("Header");
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: t("Home"), key: "home", icon: House },
    { href: "/certificate", label: t("Certificate"), key: "certificate", icon: Award },
    { href: "/documentation", label: t("Documentation"), key: "documentation", icon: Archive },
    { href: "/seakeen", label: "SEAKEEN", key: "seakeen", icon: Star },
    { href: "/about", label: t("About"), key: "about", icon: Smile },
  ];
  return (
    <>
      <header className="bg-card fixed top-0 z-50 flex w-full justify-between border-b px-10 py-4 select-none">
        <div className="flex items-baseline gap-8">
          <Logo />
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-2.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className={cn(
                        'focus-visible:ring-ring/50 group hover:text-secondary focus:text-secondary focus:before:bg-secondary before:bg-secondary relative inline-flex h-10 w-max cursor-pointer flex-col items-center justify-center gap-1 rounded-[calc(var(--radius)-10px)] p-2 px-4 py-2 font-bold transition-colors duration-300 outline-none before:absolute before:right-0 before:bottom-0 before:left-0 before:h-0.5 before:rounded-full before:transition-transform before:duration-300 hover:before:scale-x-100 focus:outline-none focus:before:scale-x-100 focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*="size-"])]:size-4',
                        isActive
                          ? "text-primary before:bg-primary focus:before:bg-secondary hover:before:bg-secondary before:scale-x-100 before:transition-colors"
                          : "before:scale-x-0"
                      )}
                    >
                      <div className="flex items-center gap-1.5 text-base">
                        {item.icon && <item.icon size={24} className="size-5" />}
                        {item.label}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <Drawer direction="right">
            <DrawerTrigger asChild className="hidden md:flex lg:hidden">
              <Button
                variant={"outline"}
                className="focus:bg-accent dark:focus:bg-accent dark:focus:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground size-10 cursor-pointer items-center rounded-full p-0 transition-colors"
                aria-label="Menu"
              >
                <Menu size={24} className="size-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="hidden md:flex lg:hidden">
              <DrawerHeader className="flex flex-row items-center justify-between">
                <DrawerTitle>
                  <Logo />
                </DrawerTitle>
                <DrawerClose asChild>
                  <Button
                    variant={"outline"}
                    className="focus:bg-accent dark:focus:bg-accent dark:focus:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground size-10 cursor-pointer items-center rounded-full p-0 transition-colors"
                    aria-label="Close menu"
                  >
                    <PanelRightClose size={24} className="size-6" />
                  </Button>
                </DrawerClose>
              </DrawerHeader>
              <nav>
                <ul className="flex flex-col gap-4 p-4">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.key}>
                        <Link
                          href={item.href}
                          className={cn(
                            'focus-visible:ring-ring/50 group hover:text-secondary focus:text-secondary focus:before:bg-secondary before:bg-secondary relative inline-flex h-10 w-max cursor-pointer flex-col items-center justify-center gap-1 rounded-[calc(var(--radius)-10px)] p-2 px-4 py-2 font-bold transition-colors duration-200 outline-none before:absolute before:right-0 before:bottom-0 before:left-0 before:h-full before:w-0.5 before:rounded-full before:transition-transform before:duration-200 hover:before:scale-y-100 focus:outline-none focus:before:scale-y-100 focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*="size-"])]:size-4',
                            isActive
                              ? "text-primary before:bg-primary focus:before:bg-secondary hover:before:bg-secondary before:scale-y-100 before:transition-colors"
                              : "before:scale-y-0"
                          )}
                        >
                          <div className="flex items-center gap-1.5 text-base">
                            {item.icon && <item.icon size={24} className="size-5" />}
                            {item.label}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </header>

      <nav className="fixed bottom-0 z-50 flex w-full select-none md:hidden">
        <ul className="bg-card/90 flex w-full items-center justify-around border-t px-10 py-2 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={cn(
                    'focus-visible:ring-ring/50 group hover:text-secondary focus:text-secondary focus:before:bg-secondary before:bg-secondary relative inline-flex h-10 w-max cursor-pointer flex-col items-center justify-center gap-1 rounded-[calc(var(--radius)-10px)] p-2 px-4 py-2 font-bold transition-colors duration-300 outline-none before:absolute before:right-0 before:bottom-0 before:left-0 before:h-0.5 before:rounded-full before:transition-transform before:duration-300 hover:before:scale-x-100 focus:outline-none focus:before:scale-x-100 focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*="size-"])]:size-4',
                    isActive
                      ? "text-primary before:bg-primary focus:before:bg-secondary hover:before:bg-secondary before:scale-x-100 before:transition-colors"
                      : "before:scale-x-0"
                  )}
                >
                  <div className="flex items-center gap-1.5 text-base">
                    {item.icon && <item.icon size={24} className="size-6" />}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
