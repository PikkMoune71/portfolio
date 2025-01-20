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
import { typedSkillsSgmn, categories } from "@/data/skills";
import { SkillCategory } from "@/components/SkillsCategory";
import { openSauceBlack, animations } from "@/utils/constant";

export default function Sgmn() {
  const images = [
    "/sgmn.png",
    "/sgmn/sgmn-4.png",
    "/sgmn/sgmn-5.png",
    "/sgmn/sgmn-6.png",
    "/sgmn/sgmn-3.png",
    "/sgmn/sgmn-2.png",
    "/sgmn/sgmn-1.png",
  ];
  const t = useScopedI18n("sgmn");
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
          Alternance SGMN E-Trade
        </motion.h2>
        <span className="text-lg text-muted-foreground">
          {t("september")} 2021 - {t("september")} 2024
        </span>
      </div>
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
        className="text-lg text-left"
      >
        {t("contextSgmn")}
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
        className="text-lg"
      >
        <ul>
          <p className="font-bold mt-5">
            {t("internship.responsibilities.0.title")} :
          </p>
          <li className="list-disc ml-10">
            {t("internship.responsibilities.0.details.0")}
          </li>
          <li className="list-disc ml-10">
            {t("internship.responsibilities.0.details.1")}
          </li>
        </ul>
        <ul>
          <p className="font-bold mt-5">
            {t("internship.responsibilities.1.title")} :
          </p>
          <li className="list-disc ml-10">
            {t("internship.responsibilities.1.details.0")}
          </li>
          <li className="list-disc ml-10">
            {t("internship.responsibilities.1.details.1")}
          </li>
        </ul>
        <ul>
          <p className="font-bold mt-5">
            {t("internship.responsibilities.2.title")} :
          </p>
          <li className="list-disc ml-10">
            {t("internship.responsibilities.2.details.0")}
          </li>
          <li className="list-disc ml-10">
            {t("internship.responsibilities.2.details.1")}
          </li>
        </ul>
        <ul>
          <p className="font-bold mt-5">
            {t("internship.responsibilities.3.title")} :
          </p>
          <li className="list-disc ml-10">
            {t("internship.responsibilities.3.details.0")}
          </li>
        </ul>

        <p className="font-bold mt-5">{t("internship.technical_skills.0")} :</p>
        <ul>
          <li className="list-disc ml-10">
            {t("internship.technical_skills.1")} :
          </li>
          <li className="list-disc ml-10">
            {t("internship.technical_skills.2")}
          </li>
          <li className="list-disc ml-10">
            {t("internship.technical_skills.3")}
          </li>
          <li className="list-disc ml-10">
            {t("internship.technical_skills.4")}
          </li>
        </ul>
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
            skills: typedSkillsSgmn.filter(
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
