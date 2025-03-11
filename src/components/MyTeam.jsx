import { useEffect, useState } from "react";
import { FaUsers, FaProjectDiagram, FaTools } from "react-icons/fa";

const teamDetails = [
  { icon: <FaUsers size={40} />, title: "Who We Are", description: "A team of AI engineers and automation specialists solving complex problems." },
  { icon: <FaProjectDiagram size={40} />, title: "What We Do", description: "We build AI-powered solutions to optimize operations and drive efficiency." },
  { icon: <FaTools size={40} />, title: "How We Work", description: "We follow an agile, iterative approach, collaborating closely with stakeholders." }
];

export default function MyTeam() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("myTeam");
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

  return (
    <div id="myTeam" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">My Team</h2>
        <p className="text-gray-600 mb-12">Meet the people behind the innovation.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamDetails.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl backdrop-blur-lg bg-white/40 shadow-md transform transition-all duration-500 ease-out
                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                hover:shadow-xl hover:scale-105`}
            >
              <div className="text-primary mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
