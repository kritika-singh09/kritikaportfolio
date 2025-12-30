const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript (ES6+)", level: 90, color: "from-yellow-500 to-orange-500" },
        { name: "HTML5 & CSS3", level: 95, color: "from-orange-500 to-red-500" },
        { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-blue-500" },
        { name: "Bootstrap", level: 85, color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-500 to-emerald-500" },
        { name: "Express.js", level: 85, color: "from-gray-600 to-gray-400" },
        { name: "MongoDB", level: 80, color: "from-green-600 to-green-400" },
        { name: "REST APIs", level: 90, color: "from-indigo-500 to-purple-500" },
        { name: "Socket.io", level: 75, color: "from-teal-500 to-cyan-500" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90, color: "from-gray-700 to-gray-500" },
        { name: "VS Code", level: 95, color: "from-blue-600 to-blue-400" },
        { name: "Postman", level: 85, color: "from-orange-600 to-orange-400" },
        { name: "Vercel", level: 80, color: "from-black to-gray-800" },
        { name: "Cron Jobs", level: 70, color: "from-red-500 to-pink-500" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient in modern web technologies with hands-on production experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 mx-auto relative z-10">
                <span className="text-2xl font-bold text-white">{category.title.charAt(0)}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center relative z-10">{category.title}</h3>
              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-sm relative overflow-hidden`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-lg opacity-90 mb-6">
                Currently exploring advanced React patterns, microservices architecture, and cloud technologies 
                to stay ahead in the rapidly evolving tech landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Next.js", "TypeScript", "AWS", "Docker", "GraphQL"].map((tech, index) => (
                  <span key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;