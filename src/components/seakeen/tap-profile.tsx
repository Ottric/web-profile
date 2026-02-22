"use client";

import { AnimatePresence, motion } from "motion/react";

import { useEffect, useRef, useState } from "react";

import { useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  { value: "KEEN", label: "KEEN" },
  { value: "SEA", label: "SEA" },
];

export function TapProfile() {
  const [activeTab, setActiveTab] = useState("KEEN");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const t = useTranslations("SEAKEEN");

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.value === activeTab);
    const activeTabElement = tabsRef.current[activeIndex];

    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full max-w-md items-center-safe md:hidden"
    >
      <TabsList className="relative grid w-full grid-cols-2">
        <motion.div
          className="bg-background dark:bg-input/30 absolute h-[calc(100%-6px)] rounded-md shadow-sm"
          initial={false}
          animate={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
          }}
        />
        {tabs.map((tab, index) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            ref={(el) => {
              tabsRef.current[index] = el;
            }}
            className="relative z-10 cursor-pointer data-[state=active]:bg-transparent data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="w-full pt-4"
        >
          <TabsContent
            value="KEEN"
            forceMount={activeTab === "KEEN" ? true : undefined}
            className={activeTab !== "KEEN" ? "hidden" : ""}
          >
            <Card className="w-full p-4">
              {/* <h2 className="text-lg font-semibold">KEEN Profile</h2>
              <p className="text-muted-foreground text-sm">
                This is the content for the KEEN profile.
              </p> */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${t("keen_profile_url")}`}
                alt="KEEN Profile"
                className="w-full rounded-md"
              />
            </Card>
          </TabsContent>
          <TabsContent
            value="SEA"
            forceMount={activeTab === "SEA" ? true : undefined}
            className={activeTab !== "SEA" ? "hidden" : ""}
          >
            <Card className="w-full p-4">
              {/* <h2 className="text-lg font-semibold">SEA Profile</h2>
            <p className="text-muted-foreground text-sm">
                This is the content for the SEA profile.
            </p> */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${t("sea_profile_url")}`}
                alt="SEA Profile"
                className="w-full rounded-md"
              />
            </Card>
          </TabsContent>
        </motion.div>
      </AnimatePresence>
    </Tabs>
  );
}
