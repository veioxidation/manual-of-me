import { useEffect, useState } from "react";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

export default function CareerSkills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("career-skills");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timelineData = [
    {
      year: "2025 - Present",
      location: "Zurich, Switzerland",
      roles: ["AI Delivery Portfolio Lead"],
    },
    {
      year: "2022 - 2024",
      location: "Singapore",
      roles: ["APAC Delivery Lead"],
    },
    {
      year: "2020 - 2022",
      location: "Zurich, Switzerland",
      roles: ["Shared Services Operations"],
    },
    {
      year: "2018 - 2020",
      location: "Zurich, Switzerland",
      roles: ["Automation developer (GO)", "Automation Engineer (IBO)"],
    },
  ];

  const skills = {
    technical: [
      { name: "Python", level: 3, details: "Experienced in Pandas, NumPy, FastAPI, SQLAlchemy, Pydantic, and ML frameworks like TensorFlow & PyTorch." },
      { name: "Data Science", level: 3, details: "Experience with Machine Learning, statistical modeling, and large-scale data analysis." },
      { name: "Deep Learning", level: 2, details: "Worked on NLP, Transformers, and GANs. Familiar with TensorFlow and PyTorch." },
      { name: "Git & GitLab", level: 3, details: "CI/CD expert, managing repositories, branching strategies, and DevOps workflows." },
      { name: "SQL & Databases", level: 2, details: "Proficient in PostgreSQL, MySQL, and NoSQL solutions like MongoDB." },
      { name: "Automation Anywhere", level: 2, details: "Built RPA solutions for process automation." },
      { name: "Alteryx", level: 2, details: "Experience in workflow automation and analytics using Alteryx." },
    ],
    nonTechnical: [
      { name: "Scrum", level: 3, details: "PSPO II & PAL certified. Strong focus on Agile product ownership and stakeholder engagement." },
      { name: "Agile Leadership", level: 3, details: "Led multiple cross-functional teams and Agile transformations in UBS." },
      { name: "AI Strategy", level: 2, details: "Managed AI product roadmaps, balancing technical feasibility and business impact." },
      { name: "Product Management", level: 2, details: "Strong experience in defining MVPs, user stories, and feature prioritization." },
    ]
  };

  const getSkillColor = (level) => {
    return level === 3
      ? "bg-primary text-white"
      : level === 2
      ? "bg-primary/70 text-white"
      : "bg-primary/40 text-gray-900";
  };

  return (
    <div id="career-skills" className="py-20 bg-white/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Career Timeline */}
        <div>
          <h2
            className={`text-3xl font-bold text-gray-900 mb-6 transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Career Journey
          </h2>

          <div className="relative border-l-4 border-primary pl-10">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative mb-10 transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
                ${index === 0 ? "opacity-100" : "opacity-60 hover:opacity-100 transition-opacity duration-300"}`}
              >
                {/* Icon */}
                <div className="absolute -left-8 top-1 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full shadow-lg">
                  <FaBriefcase />
                </div>

                {/* Timeline Content (Shifted Right for Readability) */}
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900">{item.year}</h3>
                  <p className="text-sm text-gray-600 flex items-center mt-1">
                    <FaMapMarkerAlt className="mr-2 text-primary" /> {item.location}
                  </p>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    {item.roles.map((role, i) => (
                      <li key={i} className="transition-all duration-300 hover:text-primary">
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Skills List */}
        <div>
          <h2
            className={`text-3xl font-bold text-gray-900 mb-6 transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Skills & Expertise
          </h2>

          {/* Technical Skills */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-x-3 gap-y-6">
              {skills.technical.map((skill, index) => (
                <div key={index} className="relative group">
                  <span className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 shadow-md cursor-help hover:-translate-y-1
                    ${getSkillColor(skill.level)}`}>
                    {skill.name}
                    {skill.level === 3 ? " ★★★" : skill.level === 2 ? " ★★" : " ★"}
                  </span>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-2 bg-gray-900 text-white text-sm rounded-lg 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    {skill.details}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 
                      border-8 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Non-Technical Skills</h3>
            <div className="flex flex-wrap gap-x-3 gap-y-6">
              {skills.nonTechnical.map((skill, index) => (
                <div key={index} className="relative group">
                  <span className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 shadow-md cursor-help hover:-translate-y-1
                    ${getSkillColor(skill.level)}`}>
                    {skill.name}
                    {skill.level === 3 ? " ★★★" : skill.level === 2 ? " ★★" : " ★"}
                  </span>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-2 bg-gray-900 text-white text-sm rounded-lg 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    {skill.details}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 
                      border-8 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
