import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Akhilesh Dinesh
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          A passionate frontend developer. I build beautiful, responsive
          websites that provide seamless user experiences. With a keen eye for
          design and a love for clean code, I strive to create web applications
          that are not only visually appealing but also fast and accessible.
          Whether it’s crafting intuitive user interfaces or optimizing
          performance, I enjoy turning ideas into engaging digital realities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
