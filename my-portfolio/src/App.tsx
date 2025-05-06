import { motion } from 'framer-motion';
import Projects from './components/projects';
import Resume from './components/resume';


const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Jackson Leverock</h1>
      <div className="space-x-6">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#resume" className="hover:text-gray-400">Resume</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center p-10"
      >
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg text-gray-300">I build/maintain embedded systems & and love learning.</p>
      </motion.div>
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
