import React from 'react';
import { Github, ExternalLink, Briefcase } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Movie Review App",
      tech: "Flutter, Node.js, MongoDB",
      description: "Built a full-stack movie review mobile app using Flutter for the frontend and Node.js for the backend. Implemented user authentication and review submission features. Designed intuitive UI for rating and browsing movies.",
      github: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "New Digital Marketplace",
      tech: "React Native, Node.js, MySQL",
      description: "Implemented a full-stack marketplace app with product listings, user management, and transactions. Deployed role-based access for entrepreneurs, investors, and customers. Developed frontend with React Native and backend APIs with Node.js for CRUD operations using MySQL.",
      github: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Blood Unity – Blood Donation Management Platform",
      tech: "PHP, MySQL",
      description: "Developed a platform connecting donors, recipients, and staff with role-based access. Created modules for donor registration, staff management, and emergency request handling. Established blood stock monitoring with search and filter functionalities.",
      github: "#",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Research Conference Management System",
      tech: "HTML, CSS, JavaScript",
      description: "Prepared a responsive interface to manage conference schedules, speakers, and participants. Enhanced UI/UX for easy navigation and fast access to information. Ensured cross-device compatibility for organizers and attendees.",
      github: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Portfolio Website",
      tech: "React, Tailwind CSS",
      description: "Built a responsive personal portfolio to showcase projects and skills. Integrated animations, reusable components, and interactive navigation.",
      github: "#",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fadeIn">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="project-card group relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl transition-all duration-500 border border-slate-700 hover:border-transparent overflow-hidden animate-fadeInUp"
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${project.color} blur-2xl`}></div>
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} blur-2xl`}></div>
              </div>
              
              <div className="relative z-10">
                <div className={`inline-block p-3 bg-gradient-to-br ${project.color} rounded-lg mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                  <Briefcase size={24} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500 transform group-hover:translate-x-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-4 font-mono transform group-hover:translate-x-2 transition-transform">{project.tech}</p>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>
                
                <a 
                  href={project.github} 
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors transform group-hover:translate-x-2 duration-300"
                >
                  <Github size={20} className="group-hover:rotate-12 transition-transform" />
                  <span className="font-semibold">View Code</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;