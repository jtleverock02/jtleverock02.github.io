//import { motion } from 'framer-motion';
//import Projects from './components/projects';
//import Resume from './components/resume';


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
  return <h1 style={{ color: 'white' }}>Hello from App!</h1>;
}

export default App;
