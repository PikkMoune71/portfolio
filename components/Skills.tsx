"use client";

import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { motion } from "framer-motion";
import { typedSkillsData, categories } from "@/data/skills";
import { openSauceBlack, animations } from "@/utils/constant";
import { SkillCategory } from "./SkillsCategory";

export const Skills = () => {
  const t = useScopedI18n("skills");
  const currentLanguage = useCurrentLocale();

  return (
    <div id="skills" className="m-auto py-8 px-6 max-w-5xl w-full relative">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`${openSauceBlack.className} text-4xl mb-2`}
      >
        {t("skills")} 🚀
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-muted-foreground mb-6"
      >
        {t("description")}
      </motion.p>
      <motion.div
        variants={animations.container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
      >
        {categories.map((category, index) => (
          <SkillCategory
            key={index}
            category={category}
            skills={typedSkillsData.filter(
              (skill) => skill.category === category
            )}
            currentLanguage={currentLanguage}
            itemAnimation={animations.item}
          />
        ))}
      </motion.div>
    </div>
  );
};
