import { setRequestLocale } from "next-intl/server";

import { GridCert } from "@/components/certificate/grid-cert";
import { Footer } from "@/components/footer-sec";
import { Header } from "@/components/header-sec";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title: "Certificate - Patcharapon Tappakwan | Full-Stack Developer",
    description:
      "Certificate page of Patcharapon Tappakwan, showcasing professional certifications and achievements.",

    authors: [{ name: "Patcharapon Tappakwan" }],
    creator: "Patcharapon Tappakwan",
    publisher: "Patcharapon Tappakwan",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: `${process.env.PUBLIC_BASE_URL}/${locale}/certificate`,
      languages: {
        en: `${process.env.PUBLIC_BASE_URL}/en/certificate`,
        th: `${process.env.PUBLIC_BASE_URL}/th/certificate`,
      },
    },

    keywords: [
      "Patcharapon Tappakwan",
      "Certificate",
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
      title: "Patcharapon Tappakwan – Certificate",
      description:
        "Full-Stack Developer specializing in Next.js, React, and modern web technologies.",
      url: `/${locale}/certificate`,
      siteName: "Patcharapon Tappakwan",
      locale: locale === "en" ? "en_US" : "th_TH",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Patcharapon Tappakwan – Certificate",
      description:
        "Full-Stack Developer specializing in Next.js, React, and modern web technologies.",
    },
  };
}

export default async function Certificate({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CertificatePage />;
}

function CertificatePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-10.5rem)] w-screen cursor-default justify-center-safe pt-[5.4rem] md:min-h-[calc(100vh-7.5rem)]">
        <GridCert />
      </main>
      <Footer />
    </>
  );
}
