import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Footer } from "@/components/footer-sec";
import { Header } from "@/components/header-sec";
import { Schedule } from "@/components/seakeen/schedule";
import { TapProfile } from "@/components/seakeen/tap-profile";
import { Card } from "@/components/ui/card";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title: "SEAKEEN - Patcharapon Tappakwan | Full-Stack Developer",
    description:
      "SEAKEEN is a project by Patcharapon Tappakwan, showcasing his work in web development.",

    authors: [{ name: "Patcharapon Tappakwan" }],
    creator: "Patcharapon Tappakwan",
    publisher: "Patcharapon Tappakwan",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: `${process.env.PUBLIC_BASE_URL}/${locale}/seakeen`,
      languages: {
        en: "/en/seakeen",
        th: "/th/seakeen",
      },
    },

    keywords: ["SEAKEEN", "keenkeno", "sea_ta_lay", "ONLY BOO!", "Head2Head", "WEIRDO-101"],

    openGraph: {
      title: "Patcharapon Tappakwan – SEAKEEN",
      description:
        "SEAKEEN is a project by Patcharapon Tappakwan, showcasing his work in web development.",
      url: `/${locale}/seakeen`,
      siteName: "Patcharapon Tappakwan",
      locale: locale === "en" ? "en_US" : "th_TH",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Patcharapon Tappakwan – SEAKEEN",
      description:
        "SEAKEEN is a project by Patcharapon Tappakwan, showcasing his work in web development.",
    },
  };
}

export default async function SEAKEEN({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <SEAKEENPage />;
}

async function SEAKEENPage() {
  const t = await getTranslations("SEAKEEN");
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-10.5rem)] w-screen cursor-default flex-col items-center-safe pt-[5.4rem] md:min-h-[calc(100vh-7.5rem)]">
        <h1 className="my-12 text-4xl font-bold">SEAKEEN</h1>
        <div className="hidden w-full max-w-3xl grid-cols-2 gap-4 p-6 md:grid">
          <Card className="relative aspect-4/5 w-full cursor-pointer overflow-hidden transition-transform duration-300 ease-out hover:z-50 hover:scale-200">
            <Image
              src={`${t("keen_profile_url")}`}
              alt="KEEN Profile Image"
              fill
              loading="lazy"
              className="rounded-md"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </Card>
          <Card className="relative aspect-4/5 w-full cursor-pointer overflow-hidden transition-transform duration-300 ease-out hover:z-50 hover:scale-200">
            <Image
              src={`${t("sea_profile_url")}`}
              alt="SEA Profile Image"
              fill
              loading="lazy"
              className="rounded-md"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </Card>
        </div>
        <TapProfile />
        <Schedule />
      </main>
      <Footer />
    </>
  );
}
