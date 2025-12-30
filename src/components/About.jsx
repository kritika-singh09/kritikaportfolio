const About = () => {
  const stats = [
    { number: "3+", label: "Production Projects" },
    { number: "76.8%", label: "Academic Excellence" },
    { number: "6+", label: "Months Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const skills = [
    { name: "React.js", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "Node.js", level: 85, color: "from-green-500 to-emerald-500" },
    { name: "MongoDB", level: 80, color: "from-green-600 to-green-400" },
    { name: "Express.js", level: 85, color: "from-gray-600 to-gray-400" },
    { name: "JavaScript", level: 90, color: "from-yellow-500 to-orange-500" },
    { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-blue-500" }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From curious student to production-ready developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">The Beginning</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Started my journey at <span className="font-semibold text-blue-600">DDU Gorakhpur University</span> with a passion for technology. 
                Maintaining <span className="font-semibold text-purple-600">76.8% academic excellence</span> while diving deep into full-stack development.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">The Breakthrough</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Joined <span className="font-semibold text-green-600">Shine Infosolutions</span> as Full Stack Intern, working on 
                <span className="font-semibold text-blue-600"> production-level MERN applications</span> with real-time features, 
                authentication systems, and scalable architectures.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">The Impact</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Led frontend development for <span className="font-semibold text-purple-600">CRM Software</span> and 
                <span className="font-semibold text-pink-600"> Hotel Management System</span>, implementing real-time chat, 
                invoice generation, and role-based access controls.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center border border-gray-100/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 relative z-10">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium relative z-10">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 relative z-10">Technical Expertise</h3>
              <div className="space-y-4 relative z-10">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">What Drives Me</h3>
          <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
            I believe in building applications that solve real problems. Every line of code I write is focused on 
            creating seamless user experiences and scalable solutions. My goal is to contribute to products that 
            make a meaningful impact on millions of users.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;