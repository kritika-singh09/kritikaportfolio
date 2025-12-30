const Projects = () => {
  const projects = [
    {
      title: "CRM Software",
      subtitle: "Official Company Project",
      description: "Full-stack CRM platform with advanced business automation",
      metrics: [
        "100% Invoice Accuracy",
        "Real-time Chat System", 
        "Automated GST Calculation",
        "PDF Generation Engine"
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "Cron Jobs"],
      features: [
        "Built complete invoicing system with GST compliance",
        "Implemented real-time chat and notification system",
        "Developed contract generation with PDF export",
        "Created employee and lead management modules",
        "Integrated automated task scheduling"
      ],
      impact: "Streamlined business operations for 50+ clients",
      gradient: "from-blue-500 to-purple-600",
      icon: "💼"
    },
    {
      title: "Glitzzera PMS",
      subtitle: "Hotel Management System",
      description: "Comprehensive Property Management System for hospitality",
      metrics: [
        "5 Core Modules",
        "Role-based Access",
        "Real-time Updates",
        "Scalable Architecture"
      ],
      tech: ["React.js", "Tailwind CSS", "Axios", "REST APIs"],
      features: [
        "Reception and booking management system",
        "Housekeeping and maintenance tracking",
        "Restaurant and inventory management",
        "Cab and laundry service integration",
        "Dynamic routing and state management"
      ],
      impact: "Managed operations for multi-department hotel workflow",
      gradient: "from-green-500 to-teal-600",
      icon: "🏨"
    },
    {
      title: "Zomato Clone",
      subtitle: "Food Delivery Platform",
      description: "Modern food delivery application with real-time features",
      metrics: [
        "WebSocket Integration",
        "Responsive Design",
        "Dynamic Routing",
        "Optimized Performance"
      ],
      tech: ["React.js", "Tailwind CSS", "WebSocket", "REST APIs"],
      features: [
        "Intuitive restaurant discovery interface",
        "Real-time order tracking system",
        "User and restaurant management panels",
        "Seamless API integration for data flow",
        "Mobile-first responsive design"
      ],
      impact: "Enhanced user engagement with real-time order updates",
      gradient: "from-red-500 to-pink-600",
      icon: "🍕"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Production-ready applications with measurable business impact
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{project.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <p className="text-gray-400">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white font-semibold`}>
                    {project.impact}
                  </div>
                </div>

                <div className="bg-gray-700 p-8 lg:p-12">
                  <h4 className="text-lg font-semibold text-white mb-4">Implementation Highlights</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-300 mb-6">
              Currently working on innovative solutions in fintech and e-commerce domains
            </p>
            <a href="https://github.com/kritika-singh09" target="_blank" rel="noopener noreferrer"
               className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;