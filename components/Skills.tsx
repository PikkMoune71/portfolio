"use client";

import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { motion } from "framer-motion";
import skillsData from "@/data/skills.json";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { NextJs } from "./icons/NextJs";
import { ReactJs } from "./icons/ReactJs";
import { VueJS } from "./icons/VueJs";
import { NuxtJs } from "./icons/Nuxt";
import { Tailwind } from "./icons/Tailwind";
import { FigmaIcon } from "./icons/Figma";
import { CssIcon } from "./icons/CssIcon";
import { ExpressIcon } from "./icons/ExpressIcon";
import { SymfonyIcon } from "./icons/SymfonyIcon";
import { NestIcon } from "./icons/NestIcon";
import { MongoDbIcon } from "./icons/MongoDbIcon";
import { MySqlIcon } from "./icons/MySqlIcon";
import { DockerIcon } from "./icons/DockerIcon";
import { VercelIcon } from "./icons/VercelIcon";
import { Typescript } from "./icons/Typescript";
import { JavascriptIcon } from "./icons/JavascriptIcon";
import { PhpIcon } from "./icons/PhpIcon";
import { HtmlIcon } from "./icons/HtmlIcon";
import { PrestashopIcon } from "./icons/PrestashopIcon";
import { WordpressIcon } from "./icons/WordpressIcon";
import { GitIcon } from "./icons/GitIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { TrelloIcon } from "./icons/TrelloIcon";

type Skill = {
  name: string;
  levelFr: string;
  levelEn: string;
  icon: keyof typeof iconComponents;
  category: string;
};

const typedSkillsData: Skill[] = skillsData as Skill[];

const iconComponents: Record<string, JSX.Element> = {
  NextJs: <NextJs />,
  ReactJs: <ReactJs />,
  VueJS: <VueJS />,
  NuxtJs: <NuxtJs />,
  Tailwind: <Tailwind />,
  FigmaIcon: <FigmaIcon />,
  CssIcon: <CssIcon />,
  ExpressIcon: <ExpressIcon />,
  SymfonyIcon: <SymfonyIcon />,
  NestIcon: <NestIcon />,
  MongoDbIcon: <MongoDbIcon />,
  MySqlIcon: <MySqlIcon />,
  DockerIcon: <DockerIcon />,
  VercelIcon: <VercelIcon />,
  Typescript: <Typescript />,
  JavascriptIcon: <JavascriptIcon />,
  PhpIcon: <PhpIcon />,
  HtmlIcon: <HtmlIcon />,
  PrestashopIcon: <PrestashopIcon />,
  WordpressIcon: <WordpressIcon />,
  GitIcon: <GitIcon />,
  GithubIcon: <GithubIcon />,
  TrelloIcon: <TrelloIcon />,
};

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

  // Récupérer les catégories uniques depuis les données
  const categories = Array.from(
    new Set(typedSkillsData.map((skill) => skill.category))
  );

  return (
    <div className="m-auto py-8 px-6 max-w-5xl w-full relative">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-4xl mb-2"
      >
        {t("skills")} 🚀
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
      >
        {categories.map((category, index) => (
          <motion.div key={index} variants={item}>
            <div className="my-5">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <Card className="flex justify-start gap-6 flex-wrap p-4">
                {typedSkillsData
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div className="flex justify-start gap-3" key={skill.name}>
                      {iconComponents[skill.icon]}
                      <div className="flex flex-col items-start">
                        <p className="text-lg">{skill.name}</p>
                        <Badge variant="secondary">
                          {currentLanguage === "en"
                            ? skill.levelEn
                            : skill.levelFr}
                        </Badge>
                      </div>
                    </div>
                  ))}
              </Card>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
