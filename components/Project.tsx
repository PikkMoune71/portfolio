"use client";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { useScopedI18n } from "@/locales/client";
import { ThumbnailProject } from "./ThumbnailProject";
import projectsData from "@/data/projects.json";

const openSauceBlack = localFont({
  src: "../app/[locale]/fonts/openSauceBlack.ttf",
  variable: "--font-open-sauce-black",
});

interface Project {
  title: string;
  descriptionFr: string;
  descriptionEn: string;
  image: string;
  link: string;
  rotate: string;
}

export const Project = () => {
  const t = useScopedI18n("projects");

  const projects: Project[] = projectsData as Project[];
  return (
    <div id="projects" className="m-auto py-8 px-6 max-w-5xl w-full relative">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`${openSauceBlack.className} text-4xl mb-2`}
      >
        {t("projectsSelected")} 🛠️
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-muted-foreground mb-6"
      >
        {t("description")}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ThumbnailProject
            key={index}
            title={project.title}
            descriptionFr={project.descriptionFr}
            descriptionEn={project.descriptionEn}
            image={project.image}
            link={project.link}
            rotate={project.rotate}
          />
        ))}
      </div>
    </div>
  );
};
