"use client";

import { useState } from "react";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CertDialogProps {
  src: string;
  alt: string;
  by: string;
  date: string;
  children: React.ReactNode;
}

export function CertDialog({ src, alt, by, date, children }: CertDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {children}
      </div>
      <DialogContent className="sm:max-w-xl md:max-w-2xl lg:max-w-3xl 2xl:max-w-5xl">
        <DialogHeader>
          <DialogTitle>{alt}</DialogTitle>
          <DialogDescription>
            {by} • {date}
          </DialogDescription>
        </DialogHeader>
        <div className="relative aspect-4/3 w-full">
          <Image
            src={src}
            alt={alt}
            fill
            loading="lazy"
            className="object-contain"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
