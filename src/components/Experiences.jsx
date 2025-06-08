import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
      >
        My Experience
      </motion.h2>

      <div>
        {experience.map((company, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12"
          >
            <div className="flex items-center gap-x-4 mb-6">
              <img
                src={company.logo}
                alt={company.company}
                className="w-12 h-12 rounded-md object-contain"
              />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {company.company}
              </h3>
            </div>

            {/* Roles Timeline */}
            <div className="relative ml-4 border-l-2 border-blue-500 dark:border-blue-400">
              {company.roles.map((role, roleIdx) => (
                <motion.div
                  key={roleIdx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: roleIdx * 0.1 }}
                  className="relative pl-6 pb-8 mb-0 last:pb-0 mb-8"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-2 top-1.5 w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full"></span>

                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {role.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {role.duration}
                  </p>
                  <ul className="list-[square] list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed">
                    {role.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
