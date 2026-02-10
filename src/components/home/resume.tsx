import * as React from "react";

import { getTranslations } from "next-intl/server";

import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";

import { TechStack } from "./tech-stack";

export const metadata = {
  title: "Resume - Patcharapon Tappakwan",
  description: "Patcharapon Tappakwan's resume page",
};

interface ExperienceItem {
  topic: string;
  start: string;
  end: string;
  responsibilities: string[];
}

export async function Resume() {
  const t = await getTranslations("Resume");

  return (
    <div className="resume bg-card mt-32 mb-12 flex w-full max-w-328 flex-col gap-4 px-6 py-10 text-justify font-light wrap-break-word hyphens-auto shadow-xl/20 [text-justify:inter-character] md:w-3/4 md:gap-6 md:px-8 md:py-12 lg:px-12 lg:py-16">
      <section className="flex flex-col">
        <h1 className="cursor-text font-(family-name:--font-sarabun) text-base font-bold md:text-xl lg:text-3xl">
          Patcharapon Tappakwan
        </h1>
        <i className="eground/35 cursor-text font-(family-name:--font-sarabun) text-sm md:text-lg lg:text-2xl">
          พชรพล ทัพผักแว่น
        </i>
        <Separator className="bg-card-foreground mt-3 data-[orientation=horizontal]:h-0.5" />
      </section>
      <section className="flex flex-col">
        <h2 className="cursor-text font-(family-name:--font-sarabun) text-base font-semibold md:text-xl lg:text-2xl">
          Information
        </h2>
        <Separator className="bg-card-foreground/35 my-1" />
        <p className="cursor-text font-(family-name:--font-sarabun) text-xs md:text-sm lg:text-lg">
          Address: {t("address")}
        </p>
        <p className="cursor-text font-(family-name:--font-sarabun) text-xs md:text-sm lg:text-lg">
          <b className="font-(family-name:--font-sarabun)">CONTACT:</b>{" "}
          <Link
            href="mailto:corpuspon.pt@gmail.com"
            className="cursor-text font-(family-name:--font-sarabun) hover:underline"
          >
            corpuspon.pt@gmail.com
          </Link>{" "}
          |{" "}
          <Link
            href="tel:+66650483001"
            className="cursor-text font-(family-name:--font-sarabun) hover:underline"
          >
            +66 650483001
          </Link>
        </p>
      </section>
      <section className="flex flex-col">
        <h2 className="cursor-text font-(family-name:--font-sarabun) text-base font-semibold md:text-xl lg:text-2xl">
          Objectives
        </h2>
        <Separator className="bg-card-foreground/35 my-1" />
        <p className="cursor-text indent-8 font-(family-name:--font-sarabun) text-xs md:text-sm lg:text-lg">
          {t("objectives")}
        </p>
      </section>
      <section className="flex flex-col">
        <h2 className="cursor-text font-(family-name:--font-sarabun) text-base font-semibold md:text-xl lg:text-2xl">
          Education
        </h2>
        <Separator className="bg-card-foreground/35 my-1" />
        <p className="cursor-text font-(family-name:--font-sarabun) text-xs md:text-sm lg:text-lg">
          <b className="font-(family-name:--font-sarabun)">{t("education.university")}</b> (
          {t("education.region")}),{" "}
          <i className="eground/45 font-(family-name:--font-sarabun)">2021&mdash;2026</i>
        </p>
        <p className="cursor-text font-(family-name:--font-sarabun) text-xs md:text-sm lg:text-lg">
          {t("education.degree")}
        </p>
      </section>
      <section className="flex flex-col">
        <h2 className="cursor-text font-(family-name:--font-sarabun) text-base font-semibold md:text-xl lg:text-2xl">
          Experience
        </h2>
        <Separator className="bg-card-foreground/35 my-1" />
        {t.raw("experiences").map((item: ExperienceItem, idx: number) => (
          <React.Fragment key={`exp-${idx}`}>
            <h3 className="cursor-text font-(family-name:--font-sarabun) text-xs font-semibold md:text-sm lg:text-xl">
              {item.topic}
            </h3>
            <i className="eground/45 cursor-text font-(family-name:--font-sarabun) text-xs md:text-sm lg:text-lg">
              {item.start}&mdash;{item.end}
            </i>
            <ul className="mb-2 ml-4 cursor-text list-disc text-xs md:text-sm lg:text-lg">
              {item.responsibilities.map((responsibility, idx) => (
                <li className="font-(family-name:--font-sarabun)" key={`exp-res-${idx}`}>
                  {responsibility}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </section>
      <section className="flex flex-col">
        <h2 className="cursor-text font-(family-name:--font-sarabun) text-base font-semibold lg:text-2xl">
          Activities
        </h2>
        <Separator className="bg-card-foreground/35 my-1" />
        <h3 className="cursor-text font-(family-name:--font-sarabun) text-xs font-semibold md:text-sm lg:text-xl">
          Practical Training: "Development of Email Servers to Support Thai Language Emails (EAI)"
          by THNIC
        </h3>
        <i className="eground/45 cursor-text font-(family-name:--font-sarabun) text-xs md:text-sm lg:text-lg">
          Nov 2023
        </i>
        <ul className="mb-2 ml-4 cursor-text list-disc text-xs md:text-sm lg:text-lg">
          <li className="font-(family-name:--font-sarabun)">
            Participated in an intensive hands-on workshop conducted by THNIC aimed at equipping
            participants with the skills to develop email servers capable of supporting Thai
            language emails (EAI).
          </li>
          <li className="font-(family-name:--font-sarabun)">
            Successfully configured and deployed personal email servers using Ubuntu operating
            system, enabling practical experience in server setup and administration.
          </li>
        </ul>
      </section>
      <section className="flex flex-col">
        <h2 className="cursor-text font-(family-name:--font-sarabun) text-base font-semibold md:text-lg lg:text-2xl">
          Tech Stack
        </h2>
        <Separator className="bg-card-foreground/35 my-1" />
        <TechStack />
      </section>
    </div>
  );
}
