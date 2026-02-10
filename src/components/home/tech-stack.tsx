"use client";

import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "@/components/kibo-ui/marquee";

export function TechStack() {
  const techStacksUrl_1 = [
    "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg",
    "https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg",
    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg",
    "https://www.vectorlogo.zone/logos/nextjs/nextjs-ar21.svg",
    "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg",
    "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg",
  ];

  const techStacksUrl_2 = [
    "https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg",
    "https://www.vectorlogo.zone/logos/python/python-ar21.svg",
    "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-ar21.svg",
    "https://www.vectorlogo.zone/logos/java/java-ar21.svg",
    "https://www.vectorlogo.zone/logos/dotnet/dotnet-ar21.svg",
    "https://www.vectorlogo.zone/logos/mariadb/mariadb-ar21.svg",
    "https://www.vectorlogo.zone/logos/postgresql/postgresql-ar21.svg",
  ];

  const techStacksUrl_3 = [
    "https://www.vectorlogo.zone/logos/docker/docker-ar21.svg",
    "https://www.vectorlogo.zone/logos/nginx/nginx-ar21.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    "https://www.vectorlogo.zone/logos/github/github-ar21.svg",
    "https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg",
    "https://www.vectorlogo.zone/logos/figma/figma-ar21.svg",
    "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-ar21.svg",
    "https://www.vectorlogo.zone/logos/linux/linux-ar21.svg",
  ];

  return (
    <>
      <Marquee className="bg-card dark:bg-accent gap-2 overflow-hidden rounded-lg px-1 py-2">
        <MarqueeFade side="left" className="from-card dark:from-accent to-transparent" />
        <MarqueeFade side="right" className="from-card dark:from-accent to-transparent" />
        <MarqueeContent pauseOnHover={false} pauseOnClick={true}>
          {techStacksUrl_1.map((url, index) => (
            <MarqueeItem key={index} className="flex h-8 items-center justify-center md:h-10">
              <img src={url} alt="Tech Stack Logo" className="h-8 object-contain md:h-10" />
            </MarqueeItem>
          ))}
        </MarqueeContent>
        <MarqueeContent pauseOnHover={false} pauseOnClick={true}>
          {techStacksUrl_2.map((url, index) => (
            <MarqueeItem key={index} className="flex h-8 items-center justify-center md:h-10">
              <img src={url} alt="Tech Stack Logo" className="h-8 object-contain md:h-10" />
            </MarqueeItem>
          ))}
        </MarqueeContent>
        <MarqueeContent pauseOnHover={false} pauseOnClick={true}>
          {techStacksUrl_3.map((url, index) => (
            <MarqueeItem key={index} className="flex h-8 items-center justify-center md:h-10">
              <img src={url} alt="Tech Stack Logo" className="h-8 object-contain md:h-10" />
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </>
  );
}
