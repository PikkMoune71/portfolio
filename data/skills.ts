import skillsData from "./skills.json";
import skillsScrolly from "./skillsScrolly.json";
import skillsSgmn from "./skillsSgmn.json";
import skillMentorio from "./skillsMentorio.json";
import skillFormNextjs from "./skillsFormNextjs.json";
import skillBuvette from "./skillsBuvette.json";
import skillsWebServices from "./skillsWebServices.json";
import { Skill } from "@/utils/Skills";

export const typedSkillsData: Skill[] = skillsData as Skill[];

export const typedSkillsScrolly: Skill[] = skillsScrolly as Skill[];
export const typedSkillsSgmn: Skill[] = skillsSgmn as Skill[];
export const typedSkillsMentorio: Skill[] = skillMentorio as Skill[];
export const typedSkillsFormNextjs: Skill[] = skillFormNextjs as Skill[];
export const typedSkillsBuvette: Skill[] = skillBuvette as Skill[];
export const typedSkillsWebServices: Skill[] = skillsWebServices as Skill[];

export const categories = Array.from(
  new Set(typedSkillsData.map((skill) => skill.category))
).sort((a, b) => a.localeCompare(b));
