import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, index }) => {
  const percentage = (level / 5) * 100;
  
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-500 text-sm">{level}/5</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-400 to-primary-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2 + (index * 0.1),
            ease: "easeOut" 
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;