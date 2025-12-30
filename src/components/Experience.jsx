const Experience = () => {
  const experience = {
    company: "Shine Infosolutions Pvt Ltd",
    role: "Full Stack Web Developer Intern",
    location: "Gorakhpur, India",
    duration: "June 2025 – Present",
    achievements: [
      {
        title: "Production-Level Development",
        description: "Collaborating on MERN stack applications with real-time data processing and secure authentication systems",
        impact: "Delivered 3 production-ready applications"
      },
      {
        title: "API Architecture",
        description: "Building RESTful APIs and integrating MongoDB for scalable backend operations with optimized queries",
        impact: "Improved API response time by 40%"
      },
      {
        title: "Performance Optimization",
        description: "Enhancing application performance and UI/UX based on user feedback and comprehensive testing",
        impact: "Increased user satisfaction by 35%"
      },
      {
        title: "Agile Development",
        description: "Participating in Agile sprints using Git, GitHub, and issue-tracking tools for efficient project delivery",
        impact: "100% sprint completion rate"
      },
      {
        title: "Component Development",
        description: "Developing reusable, responsive UI components with React and Tailwind CSS for consistent design systems",
        impact: "Reduced development time by 50%"
      }
    ]
  };

  const certifications = [
    {
      title: "Samsung Innovation Campus Certification",
      description: "Advanced training in programming and software development",
      year: "2024",
      icon: "🎓"
    },
    {
      title: "Samsung Innovation Hackathon",
      description: "Led team in developing creative tech solutions",
      year: "2024",
      icon: "🏆"
    },
    {
      title: "E-Summit'24 Participant",
      description: "Entrepreneurship Cell, IIT Kanpur",
      year: "2024",
      icon: "🚀"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building production-ready solutions with measurable impact
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{experience.role}</h3>
                <p className="text-xl text-blue-600 font-semibold">{experience.company}</p>
                <p className="text-gray-600">{experience.location}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-semibold">
                  {experience.duration}
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 mb-3 leading-relaxed">{achievement.description}</p>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1 rounded-full inline-block">
                    <span className="text-green-700 font-semibold text-sm">{achievement.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Certifications & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h4>
                <p className="text-gray-600 mb-3">{cert.description}</p>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready for New Challenges</h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Looking for opportunities to contribute to innovative products and work with cutting-edge technologies 
              in a collaborative environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Let's Connect
              </a>
              <a href="https://drive.google.com/file/d/1Vj1wNMtTnTL3XWzyadD4HkJ45m4WtipS/view?usp=sharing" target="_blank" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;