import skillsData from "./skills.json";
import skillsScrolly from "./skillsScrolly.json";
import { Skill } from "@/utils/Skills";

export const typedSkillsData: Skill[] = skillsData as Skill[];

export const typedSkillsScrolly: Skill[] = skillsScrolly as Skill[];

export const categories = Array.from(
  new Set(typedSkillsData.map((skill) => skill.category))
);
