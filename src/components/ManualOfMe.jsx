import { useEffect, useState } from "react";
import { FaHome, FaClock, FaGlobe, FaBriefcase } from "react-icons/fa";

export default function ManualOfMe() {
  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("manual");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }

      const header = document.getElementById("manual-header");
      if (header) {
        const top = header.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) {
          setHeaderVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="manual" className="py-20 bg-white/70 backdrop-blur-sm">
      {/* Grainy Background Effect */}
      <div className="absolute inset-0 bg-white-100 bg-noise-pattern opacity-50"></div>

      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start relative">
        {/* Left Side: Introduction Text */}
        <div className="md:w-1/2 pr-6">
          <h2
            id="manual-header"
            className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-700 ease-out
            ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Hey there!
          </h2>
          <p
            className={`text-gray-700 transition-all duration-700 ease-out delay-150 leading-relaxed
            ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            I'm Przemek, an AI Engineer, with a background in data science and engineering.
            I'm passionate about solving problems; making complex things simpler, and simple things - automated.<br /><br />
            I value <b>deep work</b>, <b>open and honest collaboration</b>, and <b>agile execution</b>. <br/><br/>When I'm not working, you can most likely find me doing sports, traveling, and learning languages.
          </p>
        </div>

        {/* Right Side: 2x2 Grid of Interactive Tiles */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4 mt-8 md:mt-0">
          {/* Location */}
          <div className={`p-6 rounded-xl backdrop-blur-lg bg-white/40 shadow-md transform transition-all duration-500 ease-out
              hover:shadow-xl hover:scale-105 flex flex-col items-center text-center
              ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <FaHome size={30} className="text-primary mb-2" />
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-700">Zurich, Switzerland</p>
          </div>

          {/* Languages Spoken */}
          <div className={`p-6 rounded-xl backdrop-blur-lg bg-white/40 shadow-md transform transition-all duration-500 ease-out
              hover:shadow-xl hover:scale-105 flex flex-col items-center text-center
              ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <FaGlobe size={30} className="text-primary mb-2" />
            <h3 className="text-xl font-semibold">Languages</h3>
            <p className="text-gray-700 text-sm">English, Polish - fluently</p>
            <p className="text-gray-700 text-xs">(+ German, Spanish)</p>
          </div>

          {/* Working Hours with Hover Disclaimer */}
          <div 
            className={`p-6 rounded-xl backdrop-blur-lg bg-white/40 shadow-md transform transition-all duration-500 ease-out
              hover:shadow-xl hover:scale-105 flex flex-col items-center text-center relative
              ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            onMouseEnter={() => setShowDisclaimer(true)}
            onMouseLeave={() => setShowDisclaimer(false)}
          >
            <FaClock size={30} className="text-primary mb-2" />
            <h3 className="text-xl font-semibold">Working Hours</h3>
            <p className="text-gray-700">~08:30 - 17:30 CET *</p>
            
            {showDisclaimer && (
              <div className="absolute top-full mt-2 w-48 bg-gray-900 text-white text-sm p-2 rounded-lg shadow-lg">
                I'm flexible! Meetings outside these hours are usually fine with **proper advance notice**.
              </div>
            )}
          </div>

          {/* Working Experience */}
          <div 
          className={`p-6 rounded-xl backdrop-blur-lg bg-white/40 shadow-md transform transition-all duration-500 ease-out
              hover:shadow-xl hover:scale-105 flex flex-col items-center text-center
               ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <FaBriefcase size={30} className="text-primary mb-2" />
            <h3 className="text-xl font-semibold">Experience</h3>
            <p className="text-gray-700">7 years at UBS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
