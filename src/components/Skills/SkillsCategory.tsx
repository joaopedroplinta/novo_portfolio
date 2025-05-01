import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../data/skills';
import SkillBar from './SkillBar';

interface SkillsCategoryProps {
  title: string;
  skills: Skill[];
  index: number;
}

const SkillsCategory: React.FC<SkillsCategoryProps> = ({ title, skills, index }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h4 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100 dark:border-gray-700 dark:text-white">{title}</h4>
      <div className="space-y-5">
        {skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            index={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsCategory;