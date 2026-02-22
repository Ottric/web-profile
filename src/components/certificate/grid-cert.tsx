import { Hash } from "lucide-react";

import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { CertDialog } from "./cert-dialog";

export async function GridCert() {
  const t = await getTranslations("Certificate");

  const certItems = [
    {
      id: 1,
      title: "GDSC - Basic Linux",
      detail: t("GDSC_Linux"),
      imageUrl: "/image/GDSC_basicLinux101.png",
      tag: "SysAdmin",
      date: "Jan. 2024",
    },
    {
      id: 2,
      title: "GDSC - React 101",
      detail: t("GDSC_react"),
      imageUrl: "/image/GDSC_react101.png",
      tag: "Web Dev",
      date: "Jan. 2024",
    },
    {
      id: 3,
      title: "GDSC - Figma 101",
      detail: t("GDSC_figma"),
      imageUrl: "/image/GDSC_figma101.png",
      tag: "UI/UX",
      date: "Feb. 2024",
    },
    {
      id: 4,
      title: "CCNA - Introduction to Networks",
      detail: t("CCNA_intro"),
      imageUrl: "/image/CCNA_introductionToNetworks.png",
      tag: "Networking",
      date: "Feb. 2024",
    },
    {
      id: 5,
      title: "CCNA - Switching, Routing, and Wireless Essentials",
      detail: t("CCNA_switch"),
      imageUrl: "/image/CCNA_switchingRoutingWirelessEssentials.png",
      tag: "Networking",
      date: "Feb. 2024",
    },
    {
      id: 6,
      title: "Letter Internship - NECTEC NSTDA Traffy Team",
      detail: t("NSTDA_intrenship"),
      imageUrl: "/image/Letter-NSTDA-NECTEC.png",
      tag: "Internship",
      date: "Mar. 2025",
    },
  ];

  return (
    <div className="my-12 grid h-fit w-full grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {/* Certificate items will be rendered here */}
      {certItems.map((cert) => (
        <CertDialog
          key={cert.id}
          src={cert.imageUrl}
          alt={cert.title}
          by={cert.tag}
          date={cert.date}
        >
          <Card className="flex h-full min-h-85 cursor-pointer flex-col p-4 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-xl">
            <CardHeader className="relative min-h-0 flex-1 overflow-hidden rounded-lg border">
              <Image
                src={cert.imageUrl}
                alt={cert.title}
                fill
                priority
                sizes="512px"
                className="object-cover object-top"
              />
            </CardHeader>
            <CardContent className="flex min-h-0 flex-1 flex-col items-start gap-2 px-0">
              <div className="flex w-full items-center gap-2">
                <Badge variant="secondary" className="cursor-pointer text-sm">
                  <Hash strokeWidth={3} />
                  {cert.tag}
                </Badge>
                <i className="text-muted-foreground/50 text-sm">{cert.date}</i>
              </div>
              <span className="text-muted-foreground cursor-pointer font-medium">{cert.title}</span>
              <p className="text-muted-foreground/75 line-clamp-2 text-sm">{cert.detail}</p>
            </CardContent>
          </Card>
        </CertDialog>
      ))}
    </div>
  );
}
