/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { SocialContact } from "./SocialContact";
import localFont from "next/font/local";
import { useI18n } from "@/locales/client";
import { CodeIcon } from "@radix-ui/react-icons";

const openSauceBlack = localFont({
  src: "../app/[locale]/fonts/openSauceBlack.ttf",
  variable: "--font-open-sauce-black",
});

export const About = () => {
  const t = useI18n();
  const container = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const waveAnimation = {
    rotate: [0, 15, -10, 15, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  };

  return (
    <div id="about" className="m-auto py-8 px-6 max-w-5xl w-full relative">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex justify-start items-center gap-5"
        >
          <Avatar>
            <AvatarImage
              src="/logo/profile-linkedin.jpeg"
              alt="@shadcn"
              className="h-20 w-20"
            />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
          <div className="my-4 text-2xl">
            <motion.strong
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={openSauceBlack.className}
            >
              Antoine Picard{" "}
              <motion.span
                className="inline-block"
                animate={waveAnimation}
                role="img"
                aria-label="waving hand"
              >
                👋
              </motion.span>
            </motion.strong>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="my-4 text-lg"
      >
        <motion.h2 variants={item} className="text-2xl italic mb-2">
          <div className="flex align-center gap-2">
            {t("about.webDeveloper")} <CodeIcon className="h-[2rem] w-[2rem]" />
          </div>
        </motion.h2>
        <motion.p variants={item}>{t("about.description")}</motion.p>

        <motion.p
          variants={item}
          className={`${openSauceBlack.className} text-2xl font-bold mt-12 mb-2`}
        >
          {t("about.contactMe")}
        </motion.p>
        <motion.div variants={item}>
          <SocialContact linkedin mail />
        </motion.div>
      </motion.div>
    </div>
  );
};
