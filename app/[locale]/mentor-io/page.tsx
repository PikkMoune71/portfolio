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
import { typedSkillsMentorio, categories } from "@/data/skills";
import { SkillCategory } from "@/components/SkillsCategory";
import { openSauceBlack, animations } from "@/utils/constant";
import { PdfViewer } from "@/components/PdfViewer";
import { useIsMobileOrTablet } from "@/composables/useIsMobileOrTablet";

export default function MentorIo() {
  const images = [
    "/mentorio.png",
    "/mentorio/mentorio-1.png",
    "/mentorio/mentorio-2.png",
    "/mentorio/mentorio-3.png",
  ];
  const t = useScopedI18n("mentorio");
  const currentLanguage = useCurrentLocale();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const isMobileOrTablet = useIsMobileOrTablet();

  const filePdf1 = "/mentorio/Cahier_des_charges_Mentor_io.pdf";
  const filePdf2 = "/mentorio/Annexes_Livrable_Semestre_2_Mentor_io.pdf";

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
          Mentor.io
        </motion.h2>
        <span className="text-lg text-muted-foreground">
          {t("october")} 2023 - {t("june")} 2024
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
        className="text-lg text-justify"
      >
        {t("contexteMentorio")}
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
        {t("descriptionMentorio")}
        <h3 className="font-bold mt-5 text-2xl">
          {t("functionnality.0.title")}
        </h3>
        <ul>
          <li className="font-bold list-disc ml-10">
            {t("functionnality.1.title")}
          </li>
          <p className="ml-10">{t("functionnality.1.details")}</p>
          <li className="font-bold list-disc ml-10">
            {t("functionnality.2.title")}
          </li>
          <p className="ml-10">{t("functionnality.2.details")}</p>
          <li className="font-bold list-disc ml-10">
            {t("functionnality.3.title")}
          </li>
          <p className="ml-10">{t("functionnality.3.details")}</p>
          <li className="font-bold list-disc ml-10">
            {t("functionnality.4.title")}
          </li>
          <p className="ml-10">{t("functionnality.4.details")}</p>
          <li className="font-bold list-disc ml-10">
            {t("functionnality.5.title")}
          </li>
          <p className="ml-10">{t("functionnality.5.details")}</p>
          <li className="mt-5">{t("functionnality.6.title")}</li>
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
            skills: typedSkillsMentorio.filter(
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
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`${openSauceBlack.className} text-4xl mt-10 mb-2`}
      >
        {t("annexes")}
      </motion.h2>
      <div className="flex justify-center align-center gap-6 flex-wrap">
        {isMobileOrTablet ? (
          <>
            <a
              href={filePdf1}
              download
              className="bg-zinc-900 text-white py-2 px-4 rounded transition"
            >
              {t("downloadDoc")}
            </a>
          </>
        ) : (
          <>
            <PdfViewer src={filePdf1} />
            <PdfViewer src={filePdf2} />
          </>
        )}
      </div>
    </div>
  );
}
