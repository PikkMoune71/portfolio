import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Skill, iconComponents } from "@/utils/Skills";

type SkillCategoryProps = {
  category: string;
  skills: Skill[];
  currentLanguage: string;
  itemAnimation: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number };
  };
};

export const SkillCategory: React.FC<SkillCategoryProps> = ({
  category,
  skills,
  currentLanguage,
  itemAnimation,
}) => {
  return (
    <motion.div
      variants={itemAnimation}
      initial="hidden"
      animate="visible"
      className="my-5"
    >
      <h3 className="text-xl font-semibold mb-4">{category}</h3>
      <Card className="flex justify-start gap-6 flex-wrap p-4">
        {skills.map((skill) => (
          <div className="flex justify-start gap-3" key={skill.name}>
            {iconComponents[skill.icon] || (
              <span className="text-red-500">Icon Missing</span>
            )}
            <div className="flex flex-col items-start">
              <p className="text-lg font-medium">{skill.name}</p>
              <Badge variant="secondary">
                {currentLanguage === "en" ? skill.levelEn : skill.levelFr}
              </Badge>
            </div>
          </div>
        ))}
      </Card>
    </motion.div>
  );
};
