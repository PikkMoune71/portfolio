"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { useEffect, useState } from "react";
import { typedSkillTaskk, categories } from "@/data/skills";
import { SkillCategory } from "@/components/SkillsCategory";
import { openSauceBlack, animations } from "@/utils/constant";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Taskk() {
  const images = [
    "/taskk/taskk-project.png",
    "/taskk/taskk-1.png",
    "/taskk/taskk-2.png",
    "/taskk/taskk-3.png",
    "/taskk/taskk-4.png",
    "/taskk/taskk-5.png",
  ];
  const t = useScopedI18n("taskk");
  const currentLanguage = useCurrentLocale();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="m-auto py-8 px-6 max-w-5xl w-full relative">
      <div className="mx-full">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <Card>
                    <CardContent className="flex items-center justify-center p-0">
                      <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={src}
                          alt={`Carousel item ${index + 1}`}
                          layout="responsive"
                          width={1000}
                          height={2000}
                          className="rounded-xl"
                        />
                      </motion.div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
      <div className="text-center mt-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`${openSauceBlack.className} text-6xl`}
        >
          Taskk
        </motion.h2>
        <span className="text-lg text-muted-foreground">
          {t("february")} 2024
        </span>
      </div>
      <Button className="text-xl flex items-center gap-2">
        <Link
          href="https://dashboard-delta-blue.vercel.app/dashboard"
          target="_blank"
          className="flex items-center gap-2"
        >
          <span>{t("visitWebsite")}</span>
          <ExternalLink className="w-5 h-5" />
        </Link>
      </Button>
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`${openSauceBlack.className} text-4xl mt-10 mb-2`}
      >
        {t("context")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-justify"
      >
        {t("contextTaskk")}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`${openSauceBlack.className} text-4xl mt-10 mb-2`}
      >
        {t("description")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-justify"
      >
        {t("descriptionTaskk")}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`${openSauceBlack.className} text-4xl mt-10 mb-2`}
      >
        {t("technologyUsed")}
      </motion.h2>
      <motion.div
        variants={animations.container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
      >
        {categories
          .map((category) => ({
            category,
            skills: typedSkillTaskk.filter(
              (skill) => skill.category === category
            ),
          }))
          .filter(({ skills }) => skills.length > 0)
          .map(({ category, skills }, index) => (
            <SkillCategory
              key={index}
              category={category}
              skills={skills}
              currentLanguage={currentLanguage}
              itemAnimation={animations.item}
            />
          ))}
      </motion.div>
    </div>
  );
}
