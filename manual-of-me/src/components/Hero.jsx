import { FaQuestionCircle } from "react-icons/fa";

export default function Hero() {

  const handleScroll = () => {
    const section = document.getElementById("manual");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative py-20 flex items-center justify-center px-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero_mountains_background.jpg')" }} // Replace with your actual image
    >
      {/* Color Mask / Overlay */}
      <div className="absolute inset-30 bg-blue-900/30 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative flex items-center max-w-5xl w-full">
        {/* Reference Link */}
        <a
          href="https://www.manualof.me"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-4 right-4 flex items-center gap-2 text-white hover:text-secondary transition-colors duration-300 [text-shadow:_0_0_20px_rgba(255,255,255,0.8)] z-50"
        >
          <span className="text-sm">What is Manual of Me?</span>
          <FaQuestionCircle className="w-5 h-5" />
        </a>

        {/* Left Side: Profile Picture */}
        <div className="relative w-40 h-40 md:w-52 md:h-52 mr-10">
          <div className="absolute inset-0 rounded-full border-4 border-secondary"></div>
          <div className="absolute inset-1 rounded-full bg-white"></div>
          <img
            src="/images/DSCF3441-Edit-Edit-2.jpg" // Replace with your actual image path
            alt="Profile"
            className="relative z-10 rounded-full w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="text-left text-blue-900 text-white max-w-xl [text-shadow:_0_0_20px_rgba(255,255,255,0.8),_0_0_30px_rgba(255,255,255,0.6)]">
          <h1 className="text-4xl text-blue-900 font-bold [text-shadow:_0_0_25px_rgba(255,255,255,0.9),_0_0_40px_rgba(255,255,255,0.7)]">Hi, I'm Przemek</h1>
          <p className="text-lg mt-3 text-blue-900 [text-shadow:_0_0_20px_rgba(255,255,255,0.8),_0_0_30px_rgba(255,255,255,0.6)]">
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
        </div>
      </div>
    </div>
  );
}


