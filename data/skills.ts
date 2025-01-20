import skillsData from "./skills.json";
import skillsScrolly from "./skillsScrolly.json";
import skillsSgmn from "./skillsSgmn.json";
import { Skill } from "@/utils/Skills";

export const typedSkillsData: Skill[] = skillsData as Skill[];

export const typedSkillsScrolly: Skill[] = skillsScrolly as Skill[];
export const typedSkillsSgmn: Skill[] = skillsSgmn as Skill[];

export const categories = Array.from(
  new Set(typedSkillsData.map((skill) => skill.category))
).sort((a, b) => a.localeCompare(b));
