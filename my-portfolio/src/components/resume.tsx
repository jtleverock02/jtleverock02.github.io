const Resume = () => {
    return (
      <section id="resume" className="py-16 px-6 md:px-20 bg-gray-950 text-white">
        <h2 className="text-4xl font-bold text-center mb-10">Resume</h2>
  
        <div className="flex justify-center mb-6">
          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md font-semibold"
          >
            Download Resume (PDF)
          </a>
        </div>
  
        <div className="flex justify-center">
          <iframe
            src="/resume.pdf"
            className="w-full h-[800px] border-2 border-gray-700 rounded-lg"
            title="Resume PDF"
          ></iframe>
        </div>
      </section>
    );
  };
  
  export default Resume;
  