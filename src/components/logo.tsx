import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const cloud = localFont({
  src: [
    {
      path: "./font/Cloud-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cloud",
});

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        `flex items-baseline text-5xl leading-none tracking-tight ${cloud.variable} cursor-default font-sans select-none`,
        className
      )}
    >
      <p className="font-black">O</p>
      <p className="font-(family-name:--font-cloud) font-bold">ttric</p>
    </span>
  );
}
