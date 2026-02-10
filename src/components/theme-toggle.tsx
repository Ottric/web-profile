"use client";

import { Moon, Sun } from "lucide-react";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant={"outline"}
        className="focus:bg-accent dark:focus:bg-accent dark:focus:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground size-10 cursor-pointer items-center rounded-full p-0 transition-colors"
        aria-label="Toggle theme"
      >
        <span className="size-6" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      variant={"outline"}
      className="focus:bg-accent dark:focus:bg-accent dark:focus:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground size-10 cursor-pointer items-center rounded-full p-0 transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Moon size={24} className="size-6" /> : <Sun size={24} className="size-6" />}
    </Button>
  );
}
