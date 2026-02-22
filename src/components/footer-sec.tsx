import { Github, Instagram } from "lucide-react";

import { Link } from "@/i18n/navigation";

import { Logo } from "./logo";
import { Separator } from "./ui/separator";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-border border-t pb-12 md:pb-0">
      <div className="container flex max-w-screen flex-col px-6 py-4">
        <Logo />
        <Separator className="bg-border/15 mb-2" />
        <div className="text-muted-foreground flex items-center justify-between gap-2 text-xs sm:flex-row sm:text-sm md:text-base">
          <span className="flex items-baseline gap-0.5 whitespace-nowrap">
            &copy; {year} [&nbsp;
            <Logo className="text-base" />
            &nbsp;] Patcharapon Tappakwan
          </span>
          <div className="flex items-center whitespace-nowrap md:gap-2">
            <Link
              href="https://x.com/pon__uod"
              target="_blank"
              rel="noopener noreferrer"
              className="size-6 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                fill="currentColor"
                dangerouslySetInnerHTML={{
                  __html: `<!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/>`,
                }}
              />
            </Link>
            <Link
              href="https://github.com/ottric"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Github className="size-6 p-0.5" />
            </Link>
            <Link
              href="https://www.instagram.com/pon_pon.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Instagram className="size-6 p-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
