import { useContext } from 'react';
import { ThemeContext } from '../hooks/useDarkMode';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import logo from '../assets/logo.svg';

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center"
          aria-label="Homepage"
        >
          <img src={logo} alt="Logo" className="w-10 h-10" />
          {/* Optional: You can remove the text "My Portfolio" or keep it */}
          {/* <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">My Portfolio</span> */}
        </motion.a>
        
        <nav className="flex items-center gap-6">
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Contact
          </a>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-yellow-300"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
