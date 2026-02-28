import { setRequestLocale } from "next-intl/server";

import { DocTable } from "@/components/documentation/doc-table";
import { Footer } from "@/components/footer-sec";
import { Header } from "@/components/header-sec";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title: "Documentation - Patcharapon Tappakwan | Full-Stack Developer",
    description:
      "Documentation page of Patcharapon Tappakwan, view and download documentation related.",

    authors: [{ name: "Patcharapon Tappakwan" }],
    creator: "Patcharapon Tappakwan",
    publisher: "Patcharapon Tappakwan",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: `${process.env.PUBLIC_BASE_URL}/${locale}/documentation`,
      languages: {
        en: `${process.env.PUBLIC_BASE_URL}/en/documentation`,
        th: `${process.env.PUBLIC_BASE_URL}/th/documentation`,
      },
    },

    keywords: [
      "Patcharapon Tappakwan",
      "Documentation",
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
      title: "Patcharapon Tappakwan – Documentation",
      description:
        "Full-Stack Developer specializing in Next.js, React, and modern web technologies.",
      url: `/${locale}/documentation`,
      siteName: "Patcharapon Tappakwan",
      locale: locale === "en" ? "en_US" : "th_TH",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Patcharapon Tappakwan – Documentation",
      description:
        "Full-Stack Developer specializing in Next.js, React, and modern web technologies.",
    },
  };
}

export default async function Documentation({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DocumentationPage />;
}

function DocumentationPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-10.5rem)] w-screen cursor-default justify-center-safe pt-[5.4rem] md:min-h-[calc(100vh-7.5rem)]">
        <DocTable />
      </main>
      <Footer />
    </>
  );
}
