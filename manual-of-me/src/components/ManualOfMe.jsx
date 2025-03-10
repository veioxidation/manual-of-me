import { useEffect, useState } from "react";
import { FaHeadphones, FaHandHoldingHeart, FaBolt, FaBrain, FaChartLine, FaSearch, FaBalanceScale } from "react-icons/fa";

const items = [
  { icon: <FaHeadphones size={40} />, title: "Deep Work Advocate", description: "I thrive in focused, distraction-free environments." },
  { icon: <FaHandHoldingHeart size={40} />, title: "Honesty & Directness", description: "I believe honesty is the highest form of care." },
  { icon: <FaBolt size={40} />, title: "Agile & MVP First", description: "Build fast, iterate fast, learn fast." },
  { icon: <FaBrain size={40} />, title: "Kaizen Mindset", description: "Leave things better than you found them." },
  { icon: <FaChartLine size={40} />, title: "Data-Driven Thinking", description: "Bring me solid data to convince me." },
  { icon: <FaSearch size={40} />, title: "Why Over What", description: "I always dig deeper to understand the real issue." },
  { icon: <FaBalanceScale size={40} />, title: "Zen & Stoicism", description: "I apply mindfulness and philosophy to work and life." }
];

export default function ManualOfMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("manual");
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
    <div id="manual" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Manual of Me</h2>
        <p className="text-gray-600 mb-12">A guide to how I work, think, and collaborate.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
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
