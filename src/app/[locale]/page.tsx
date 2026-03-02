import { setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/footer-sec";
import { Header } from "@/components/header-sec";
import { Resume } from "@/components/home/resume";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title: "Resume - Patcharapon Tappakwan | Full-Stack Developer",
    description:
      "Resume of Patcharapon Tappakwan, a Full-Stack Developer specializing in Next.js, React, and modern web technologies.",

    authors: [{ name: "Patcharapon Tappakwan" }],
    creator: "Patcharapon Tappakwan",
    publisher: "Patcharapon Tappakwan",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: `${process.env.PUBLIC_BASE_URL}/${locale}`,
      languages: {
        en: `${process.env.PUBLIC_BASE_URL}/en`,
        th: `${process.env.PUBLIC_BASE_URL}/th`,
      },
    },

    keywords: [
      "Patcharapon Tappakwan",
      "Resume",
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
      title: "Patcharapon Tappakwan – Resume",
      description:
        "Full-Stack Developer specializing in Next.js, React, and modern web technologies.",
      url: `/${locale}`,
      siteName: "Patcharapon Tappakwan",
      locale: locale === "en" ? "en_US" : "th_TH",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Patcharapon Tappakwan – Resume",
      description:
        "Full-Stack Developer specializing in Next.js, React, and modern web technologies.",
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${process.env.PUBLIC_BASE_URL}/#person`,
        name: "Patcharapon Tappakwan",
        alternateName: "Ottric",
        url: process.env.PUBLIC_BASE_URL,
        sameAs: ["https://github.com/Ottric"],
        knowsAbout: [
          "Next.js",
          "React",
          "TypeScript",
          "Web Development",
          "Frontend Development",
          "Backend Development",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${process.env.PUBLIC_BASE_URL}/${locale}`,
        url: `${process.env.PUBLIC_BASE_URL}/${locale}`,
        name: "Resume - Patcharapon Tappakwan | Full-Stack Developer",
        description:
          "Resume of Patcharapon Tappakwan, a Full-Stack Developer specializing in Next.js, React, and modern web technologies.",
        inLanguage: locale === "en" ? "en-US" : "th-TH",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${process.env.PUBLIC_BASE_URL}/#website`,
          url: process.env.PUBLIC_BASE_URL,
          name: "Patcharapon Tappakwan",
          publisher: {
            "@id": `${process.env.PUBLIC_BASE_URL}/#person`,
          },
        },
        about: {
          "@id": `${process.env.PUBLIC_BASE_URL}/#person`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-10.5rem)] w-screen cursor-default justify-center-safe pt-[5.4rem] md:min-h-[calc(100vh-7.5rem)]">
        <Resume />
      </main>
      <Footer />
    </>
  );
}
