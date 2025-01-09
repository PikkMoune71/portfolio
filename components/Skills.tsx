"use client";

import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import localFont from "next/font/local";
import { NextJs } from "@/components/icons/NextJs";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { ReactJs } from "./icons/ReactJs";
import { VueJS } from "./icons/VueJs";
import { NuxtJs } from "./icons/Nuxt";
import { Typescript } from "./icons/Typescript";
import { Tailwind } from "./icons/Tailwind";

const openSauceBlack = localFont({
  src: "../app/[locale]/fonts/openSauceBlack.ttf",
  variable: "--font-open-sauce-black",
});

const skills = [
  {
    name: "Next.js",
    levelFr: "Niveau Intermédiaire",
    levelEn: "Intermediate Level",
    icon: <NextJs />,
    category: "Front-End",
  },
  {
    name: "React",
    levelFr: "Niveau Intermédiaire",
    levelEn: "Intermediate Level",
    icon: <ReactJs />,
    category: "Front-End",
  },
  {
    name: "Nuxt.js",
    levelFr: "Niveau Intermédiaire",
    levelEn: "Intermediate Level",
    icon: <NuxtJs />,
    category: "Front-End",
  },
  {
    name: "Vue.js",
    levelFr: "Niveau Intermédiaire",
    levelEn: "Intermediate Level",
    icon: <VueJS />,
    category: "Front-End",
  },
  {
    name: "Tailwind CSS",
    levelFr: "Niveau Expert",
    levelEn: "Expert Level",
    icon: <Tailwind />,
    category: "UX/UI",
  },
  {
    name: "Typescript",
    levelFr: "Niveau Intermédiaire",
    levelEn: "Intermediate Level",
    icon: <Typescript />,
    category: "Langage",
  },
];

export const Skills = () => {
  const t = useScopedI18n("skills");
  const currentLanguage = useCurrentLocale();

  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <div className="m-auto py-8 px-6 max-w-4xl w-full relative">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`${openSauceBlack.className} text-3xl text-center mb-6`}
      >
        {t("skills")} 🚀
      </motion.h2>
      <motion.div variants={container} initial="hidden" animate="visible">
        {categories.map((category) => (
          <div key={category} className="my-10">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex justify-start gap-6 flex-wrap">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <motion.div key={index} variants={item}>
                    <div className="flex justify-start gap-3">
                      {skill.icon}
                      <div className="flex flex-col items-start">
                        <p className="text-lg">{skill.name}</p>
                        <Badge variant="secondary">
                          {currentLanguage === "en"
                            ? skill.levelEn
                            : skill.levelFr}
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
