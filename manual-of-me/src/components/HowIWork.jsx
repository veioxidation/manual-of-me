import { useEffect, useState } from "react";
import { FaChartBar, FaUserTie, FaRocket, FaSearch, FaCogs, FaSyncAlt } from "react-icons/fa";

const workPrinciples = [
  { icon: <FaRocket size={40} />, title: "Ambitious Goals & People", description: "I work best with those who challenge the norm and push limits." },
  { icon: <FaChartBar size={40} />, title: "Bring Data to Convince Me", description: "I value decisions backed by strong reasoning, not just opinions." },
  { icon: <FaSearch size={40} />, title: "Why Over What", description: "I always dig deeper to understand the real issue." },
  { icon: <FaCogs size={40} />, title: "Agile Execution", description: "MVP first, iterate fast, involve customers early." },
  { icon: <FaSyncAlt size={40} />, title: "Continuous Improvement (Kaizen)", description: "I believe in refining and improving everything I touch." },
  { icon: <FaUserTie size={40} />, title: "Structured Over Casual", description: "Well-thought-out messages and clarity in discussions matter." }
];

export default function HowIWork() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("howIWork");
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
    <div id="howIWork" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How I Work Best</h2>
        <p className="text-gray-600 mb-12">The key principles that define my work style.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workPrinciples.map((item, index) => (
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
