import { ThemeContext, useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experiences';

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;