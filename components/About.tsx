/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { SocialContact } from "./SocialContact";
import localFont from "next/font/local";

const openSauceBlack = localFont({
  src: "../app/fonts/openSauceBlack.ttf",
  variable: "--font-open-sauce-black",
});

export const About = () => {
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

  return (
    <div className="m-auto py-10 lg:py-14 px-4 max-w-3xl w-full relative">
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
              src="https://media.licdn.com/dms/image/v2/C4D03AQHy5iE3VO-6ig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1605118432887?e=1741824000&v=beta&t=cN6eGFJqkjeA4e6Yuq9NIfYhMLH1l0IKsAxvbHoGpnk"
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
              Antoine Picard
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
          Web Developer - Front-end Specialist
        </motion.h2>
        <motion.p variants={item}>
          Recently graduated with a master's degree in web development from Ynov
          Lyon, I decided to embark on a freelance career. My ambition is to
          support startups, SMEs, and agencies by offering tailored solutions
          perfectly suited to their needs. Specializing in technologies such as
          Vue.js, React, Next.js, and Nuxt.js, I design modern,
          high-performance, and scalable interfaces that address the unique
          challenges of each project.
        </motion.p>

        <motion.p
          variants={item}
          className={`${openSauceBlack.className} text-2xl font-bold mt-5 mb-2`}
        >
          Contact me
        </motion.p>
        <motion.div variants={item}>
          <SocialContact linkedin mail />
        </motion.div>
      </motion.div>
    </div>
  );
};
