import { useEffect, useState } from "react";
import { FaSearch, FaTools, FaHeart } from "react-icons/fa";

export default function Principles() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("principles");
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
    <div id="principles" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2
          className={`text-3xl font-bold text-gray-900 mb-12 transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          My Work Principles
        </h2>

        {/* Grid Layout for Consistent Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Principle 1: Why Over What */}
          <div
            className={`flex flex-col items-center transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <FaSearch size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Why Over What</h3>
            <p className="text-gray-700 mt-2 max-w-xs">Understanding core needs is key.</p>
          </div>

          {/* Principle 2: Practicality Over Perfectionism */}
          <div
            className={`flex flex-col items-center transition-all duration-700 ease-out delay-150
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <FaTools size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Practicality Over Perfectionism</h3>
            <p className="text-gray-700 mt-2 max-w-xs">Focus on the journey, not the destination.</p>
          </div>

          {/* Principle 3: Honesty = Care */}
          <div
            className={`flex flex-col items-center transition-all duration-700 ease-out delay-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <FaHeart size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Honesty = Care</h3>
            <p className="text-gray-700 mt-2 max-w-xs">
              Properly communicated directness is an act of kindness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
