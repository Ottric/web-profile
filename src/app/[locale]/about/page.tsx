import { AtSign, CardSim, Github, Inbox, Instagram, Mail, Phone } from "lucide-react";

import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

import DragConstraints from "@/components/about/avatar-drag";
import { RollingText, TextPressure } from "@/components/about/text-hero";
import { Footer } from "@/components/footer-sec";
import { Header } from "@/components/header-sec";
import { Logo } from "@/components/logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCharacter } from "@/lib/text-style";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title: "About - Patcharapon Tappakwan | Full-Stack Developer",
    description: "About page of Patcharapon Tappakwan, explaining Ottric's background and journey.",

    authors: [{ name: "Patcharapon Tappakwan" }],
    creator: "Patcharapon Tappakwan",
    publisher: "Patcharapon Tappakwan",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: `${process.env.PUBLIC_BASE_URL}/${locale}/about`,
      languages: {
        en: `${process.env.PUBLIC_BASE_URL}/en/about`,
        th: `${process.env.PUBLIC_BASE_URL}/th/about`,
      },
    },

    keywords: [
      "Patcharapon Tappakwan",
      "About",
      "Ottric",
      "Full-Stack Developer",
      "Next.js",
      "React",
      "Web Development",
      "TypeScript",
      "Frontend",
      "Backend",
      "server",
      "domain",
    ],

    openGraph: {
      title: "Patcharapon Tappakwan – About",
      description:
        "Full-Stack Developer specializing in Next.js, React, and modern web technologies.",
      url: `/${locale}/about`,
      siteName: "Patcharapon Tappakwan",
      locale: locale === "en" ? "en_US" : "th_TH",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Patcharapon Tappakwan – About",
      description:
        "Full-Stack Developer specializing in Next.js, React, and modern web technologies.",
    },
  };
}

export default async function About({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutPage />;
}

async function AboutPage() {
  const t = await getTranslations("About");

  return (
    <>
      <Header />
      <main className="relative mt-[5.4rem] flex min-h-[calc(100vh-10.5rem)] w-screen cursor-default flex-col md:min-h-[calc(100vh-7.5rem)]">
        <DragConstraints />
        <TextPressure text="About" className="text-foreground" />
        <div className="flex w-full flex-col items-center md:flex-row">
          <div className="relative flex aspect-square items-center justify-center">
            <Logo className="p-8 text-6xl md:text-8xl" />
          </div>
          <div className="flex flex-1 flex-col gap-4 px-8 text-justify text-lg leading-relaxed wrap-break-word hyphens-auto [text-justify:inter-character] md:px-16">
            <p>{formatCharacter(t("main"))}</p>
            <p>{formatCharacter(t("sub"))}</p>
          </div>
        </div>
        <div className="mt-12 mb-6 flex w-full items-center justify-center">
          <RollingText text="Contact" className="text-foreground text-5xl" />
        </div>
        <div className="mb-12 grid w-full grid-cols-1 gap-8 px-8 text-sm md:grid-cols-3 md:px-16 lg:text-base">
          <Card className="w-full border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-bold">
                <Inbox className="h-5 w-5" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent className="z-20 flex flex-col gap-2">
              <Link
                href="mailto:patcharapon.tap@dome.tu.ac.th"
                className="text-foreground flex cursor-pointer gap-2 hover:underline"
              >
                <Mail className="hidden h-5 w-5 lg:block" />
                patcharapon.tap@dome.tu.ac.th
              </Link>
              <Link
                href="mailto:corpuspon.pt@gmail.com"
                className="text-foreground flex cursor-pointer gap-2 hover:underline"
              >
                <Mail className="hidden h-5 w-5 lg:block" />
                corpuspon.pt@gmail.com
              </Link>
            </CardContent>
          </Card>
          <Card className="w-full border">
            <CardHeader className="flex items-center gap-2 text-xl font-bold">
              <Phone className="h-5 w-5" />
              Phone
            </CardHeader>
            <CardContent className="z-20 flex flex-col gap-2">
              <Link
                href="tel:+66650483001"
                className="text-foreground flex cursor-pointer gap-2 hover:underline"
              >
                <CardSim className="h-5 w-5" />
                +66 650 483 001
              </Link>
            </CardContent>
          </Card>
          <Card className="w-full border">
            <CardHeader className="flex items-center gap-2 text-xl font-bold">
              <AtSign className="h-5 w-5" />
              Social
            </CardHeader>
            <CardContent className="z-20 flex flex-col gap-2">
              <Link
                href="https://www.instagram.com/pon_pon.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground flex cursor-pointer gap-2 hover:underline"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </Link>
              <Link
                href="https://github.com/ottric"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground flex cursor-pointer gap-2 hover:underline"
              >
                <Github className="h-5 w-5" />
                GitHub
              </Link>
              <Link
                href="https://x.com/pon__uod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground flex cursor-pointer gap-2 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                  className="size-5"
                  dangerouslySetInnerHTML={{
                    __html: `<!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/>`,
                  }}
                />
                X (formerly Twitter)
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
