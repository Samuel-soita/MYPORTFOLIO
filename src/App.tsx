import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-holographic-dark text-white selection:bg-holographic-cyan/30 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-holographic-cyan to-holographic-purple z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Global Background Particles/Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-holographic-cyan/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] bg-holographic-purple/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </motion.div>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm relative z-10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Samuel Soita. Engineered with Precision.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/Samuel-soita" target="_blank" rel="noopener noreferrer" className="hover:text-holographic-cyan transition-colors uppercase tracking-widest text-[10px] font-bold">
              GitHub
            </a>
            {['LinkedIn', 'Resume'].map(link => (
              <a key={link} href="#" className="hover:text-holographic-cyan transition-colors uppercase tracking-widest text-[10px] font-bold">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
