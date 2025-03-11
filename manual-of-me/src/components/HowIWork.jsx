import { useEffect, useState } from "react";
import { FaHeadphones, FaBolt, FaSyncAlt, FaCommentDots } from "react-icons/fa";

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
    <div id="howIWork" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2
          className={`text-3xl font-bold text-gray-900 mb-12 transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          How I Work Best
        </h2>

        {/* Grid Layout: 4 Items in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Deep Work Believer */}
          <div
            className={`flex flex-col items-center justify-start text-center p-8 h-64 rounded-xl backdrop-blur-lg bg-white/40 shadow-md transition-all duration-500 ease-out
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              hover:shadow-xl hover:scale-105`}
          >
            <FaHeadphones size={50} className="text-primary mb-4 transition-transform duration-300 hover:scale-125" />
            <h3 className="text-xl font-semibold text-gray-900">Deep Work</h3>
            <p className="text-gray-700 italic mt-2 max-w-xs text-xs">Quality work requires <b>focus</b>. We build great things within uninterrupted time slots - so don't expect me to always be available and respond immediately</p>
          </div>

          {/* Agile Practitioner */}
          <div
            className={`flex flex-col items-center justify-start text-center p-8 h-64 rounded-xl backdrop-blur-lg bg-white/40 shadow-md transition-all duration-500 ease-out delay-150
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              hover:shadow-xl hover:scale-105`}
          >
            <FaBolt size={50} className="text-primary mb-4 transition-transform duration-300 hover:scale-125" />
            <h3 className="text-xl font-semibold text-gray-900">Agile Practitioner</h3>
            <p className="text-gray-700 italic mt-2 max-w-xs text-xs">Focus on increment & stakeholder collaboration. Fostering empiricism - transparency, inspection and adaptation.</p>
          </div>

          {/* Kaizen Mindset */}
          <div
            className={`flex flex-col items-center justify-start text-center p-8 h-64 rounded-xl backdrop-blur-lg bg-white/40 shadow-md transition-all duration-500 ease-out delay-300
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              hover:shadow-xl hover:scale-105`}
          >
            <FaSyncAlt size={50} className="text-primary mb-4 transition-transform duration-300 hover:scale-125" />
            <h3 className="text-xl font-semibold text-gray-900">Kaizen</h3>
            <p className="text-gray-700 italic mt-2 max-w-xs text-xs">改善 - Leaving things in a better state than you encountered them.</p>
          </div>

          {/* Simple Communication */}
          <div
            className={`flex flex-col items-center justify-start text-center p-8 h-64 rounded-xl backdrop-blur-lg bg-white/40 shadow-md transition-all duration-500 ease-out delay-450
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              hover:shadow-xl hover:scale-105`}
          >
            <FaCommentDots size={50} className="text-primary mb-4 transition-transform duration-300 hover:scale-125" />
            <h3 className="text-xl font-semibold text-gray-900">Clarity matters</h3>
            <p className="text-gray-700 italic mt-2 max-w-xs text-xs">We all have a tendency to underestimate how differently we look at the things. Precise communication helps us bring these barriers down.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
