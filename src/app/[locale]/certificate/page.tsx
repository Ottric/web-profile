import { setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/footer-sec";
import { Header } from "@/components/header-sec";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Certificate({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CertificatePage />;
}

function CertificatePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-168px)] w-screen cursor-default justify-center-safe md:min-h-[calc(100vh-120px)]"></main>
      <Footer />
    </>
  );
}
