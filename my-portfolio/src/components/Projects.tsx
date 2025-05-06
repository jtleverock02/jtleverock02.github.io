const Projects = () => {
    return (
      <section id="Projects" className="py-16 px-6 md:px-20 bg-gray-950 text-white">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Project card 1 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">Lorem Ipsum 1</h3>
            <p className="text-gray-300">A custom-built software-only simulation of real-time embedded tasks with a CLI interface and schedulers written in C++.</p>
          </div>
  
          {/* Project card 2 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">Lorem Ipsum 2</h3>
            <p className="text-gray-300">A lightweight kernel framework featuring task management and cooperative scheduling designed for ARM microcontrollers.</p>
          </div>
  
          {/* Project card 3 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">Lorem Ipsum 3</h3>
            <p className="text-gray-300">Simulates UART, GPIO, and timer peripherals using C++ object modeling for embedded education and debugging.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  