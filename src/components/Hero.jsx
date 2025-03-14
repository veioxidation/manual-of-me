import { useState, useEffect } from "react";
import { FaQuestionCircle, FaBars } from "react-icons/fa";

export default function Hero() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (!isShrunk) {
      setIsShrunk(true);
      setTimeout(() => {
        const section = document.getElementById("manual");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 1000);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setIsShrunk(true);
      }
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Sticky Top Navigation */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-[1000ms] ease-in-out ${
          isSticky ? "h-16 py-2 px-6 flex items-center justify-between z-50 opacity-100" : "h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-4">
          <img
            src="images/profile_picture_mom.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full shadow-md transition-all duration-500"
          />
          <h1 className="text-xl font-bold text-primary">Przemek Dobreńko - Manual of Me</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          <a href="#manual" className="hover:text-primary transition duration-300">Manual of Me</a>
          <a href="#principles" className="hover:text-primary transition duration-300">Principles</a>
          <a href="#howIWork" className="hover:text-primary transition duration-300">How I Work</a>
          <a href="#career-skills" className="hover:text-primary transition duration-300">Career & Skills</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white shadow-lg py-4 px-6 z-50">
          <a href="#manual" className="block py-2 hover:text-primary transition duration-300" onClick={() => setMenuOpen(false)}>Manual of Me</a>
          <a href="#principles" className="block py-2 hover:text-primary transition duration-300" onClick={() => setMenuOpen(false)}>Principles</a>
          <a href="#howIWork" className="block py-2 hover:text-primary transition duration-300" onClick={() => setMenuOpen(false)}>How I Work</a>
          <a href="#career-skills" className="block py-2 hover:text-primary transition duration-300" onClick={() => setMenuOpen(false)}>Career & Skills</a>
        </div>
      )}

      {/* Hero Section */}
      <div
        className={`relative flex items-center justify-center px-10 bg-cover bg-center transition-all duration-[1500ms] ease-in-out ${
          isShrunk ? "py-20 h-[500px]" : "h-screen"
        }`}
        style={{ backgroundImage: "url('images/hero_mountains_background.jpg')" }}
      >
        {/* Color Mask / Overlay */}
        <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-sm transition-all duration-1000"></div>

        {/* Content */}
        <div className="relative flex items-center max-w-5xl w-full">
          {/* Reference Link */}
          <a
            href="https://www.manualof.me"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-20 right-6 flex items-center gap-2 text-primary hover:text-white transition-colors duration-300 [text-shadow:_0_0_20px_rgba(255,255,255,0.8)] z-[60]"
          >
            <span className="text-sm text-primary hover:text-white duration-300">
              What is Manual of Me?
            </span>
            <FaQuestionCircle className="w-5 h-5" />
          </a>

          {/* Left Side: Profile Picture */}
          <div className="relative w-40 h-40 md:w-52 md:h-52 mr-10">
            <div className="absolute inset-0 rounded-full border-4 border-secondary"></div>
            <div className="absolute inset-1 rounded-full bg-white"></div>
            <img
              src="images/profile_picture_mom.jpg"
              alt="Profile"
              className="relative z-10 rounded-full w-full h-full object-cover shadow-lg"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="text-left text-primary text-white max-w-xl [text-shadow:_0_0_20px_rgba(255,255,255,0.8),_0_0_30px_rgba(255,255,255,0.6)]">
            <h1 className="text-4xl text-primary font-bold [text-shadow:_0_0_25px_rgba(255,255,255,0.9),_0_0_40px_rgba(255,255,255,0.7)]">
              Hi, I'm Przemek
            </h1>
            {!isSticky && (
              <>
                <p className="text-lg mt-3 text-primary [text-shadow:_0_0_20px_rgba(255,255,255,0.8),_0_0_30px_rgba(255,255,255,0.6)]">
                  AI Engineer in GOTO XDO Automation & AI
                </p>
                <div className="mt-6">
                  <button
                    onClick={handleScroll}
                    className="bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-secondary transition duration-300"
                  >
                    ↓ Explore My Manual of Me! ↓
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
