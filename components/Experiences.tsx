"use client";

import { useScopedI18n } from "@/locales/client";
import { motion } from "framer-motion";
import { openSauceBlack, animations } from "@/utils/constant";
import { companiesData } from "@/data/experiences";
import { schoolsData } from "@/data/experiences";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Location } from "./icons/Location";
import { Card } from "./ui/card";

export const Experiences = () => {
  const t = useScopedI18n("experencies");

  return (
    <div
      id="experiences"
      className="m-auto py-8 px-6 max-w-5xl w-full relative"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`${openSauceBlack.className} text-4xl mb-2`}
      >
        {t("experiences")} 💻
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
        {companiesData.map((company) => (
          <div key={company.id} className="mb-4">
            <div className="flex items-center gap-3 text-xs">
              {company.status ? (
                <Badge variant="destructive" className="bg-violet-900">
                  {company.status}
                </Badge>
              ) : (
                <p className="text-muted-foreground">{company.date}</p>
              )}
              <div className="flex gap-1">
                <Location />
                <p>{company.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <div>
                <Image
                  src="/company.jpg"
                  width={70}
                  height={70}
                  alt="Company Icon"
                  className="rounded-3xl"
                />
              </div>
              <div>
                <h3 className={`${openSauceBlack.className} text-xl`}>
                  {company.title}
                </h3>
                <p className="text-lg">{company.company}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`${openSauceBlack.className} text-4xl my-10`}
      >
        {t("formations")} 🎓
      </motion.h2>
      <motion.div
        variants={animations.container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
      >
        {schoolsData.map((school) => (
          <Card key={school.id} className="p-4">
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src={`/${school.icon}`}
                  width={70}
                  height={70}
                  alt="Company Icon"
                  className="rounded-3xl bg-white"
                />
              </div>
              <div>
                <h3 className={`${openSauceBlack.className} text-xl`}>
                  {school.title}
                </h3>
                <p className="text-lg">{school.degree}</p>
                <p className="text-muted-foreground">{school.date}</p>
              </div>
            </div>
          </Card>
        ))}
      </motion.div>
    </div>
  );
};
