import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

const iconComponents = {
  react: FaReact,
  javascript: FaJs,
  typescript: SiTypescript,
  html5: FaHtml5,
  css3: FaCss3Alt,
  nodejs: FaNodeJs,
  git: FaGitAlt,
  tailwindcss: SiTailwindcss,
  figma: FaFigma
};

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
      >
        My Skills
      </motion.h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => {
          const Icon = iconComponents[skill.icon];
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <Icon className="text-4xl mb-3 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}