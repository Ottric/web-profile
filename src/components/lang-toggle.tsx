"use client";

import { useLocale } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";

import { Button } from "./ui/button";

const locales = [
  { code: "en", label: "EN" },
  { code: "th", label: "TH" },
] as const;

export function LangToggle() {
  const locale = useLocale();
  const pathname = usePathname();

  const currentLocale = locales.find((l) => l.code === locale) || locales[0];
  const nextLocale = locales.find((l) => l.code !== locale) || locales[1];

  return (
    <Button
      asChild
      variant={"outline"}
      className="focus:bg-accent dark:focus:bg-accent dark:focus:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground size-10 cursor-pointer items-center rounded-full p-0 transition-colors"
    >
      <Link
        href={pathname}
        locale={nextLocale.code}
        className="flex items-center text-center"
        aria-label={`Switch to ${nextLocale.label}`}
      >
        <div>
          <p className="size-6 text-base font-medium select-none">{currentLocale.label}</p>
        </div>
      </Link>
    </Button>
  );
}
