import { useEffect, useState } from "react";
import { FaFire, FaBook, FaMountain, FaHeadphones } from "react-icons/fa";

// Example images (replace these with your own file paths later)
const bondData = [
  { 
    title: "Adventure Travel", 
    description: "The more extraordinary and off-beaten path, the better.", 
    image: "images/DSCF3502.jpg",
    icon: <FaMountain size={30} />
  },
  { 
    title: "Endurance Sports", 
    description: "Running, cycling, diving, football - absolutely inseparable part of my life.", 
    image: "images/DSCF5473.jpg",
    icon: <FaFire size={30} />
  },
  { 
    title: "Mindfulness & Philosophy", 
    description: "Zen Buddhism, Stoicism, meditation—exploring ways to live a better life.", 
    image: "images/DSCF6170.jpg",
    icon: <FaHeadphones size={30} />
  },
  { 
    title: "Lifelong Learning", 
    description: "Reading, languages, new sports - all that expands thought horizons.", 
    image: "images/DSCF4402.jpg",
    icon: <FaBook size={30} />
  }
];

export default function BondOver() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById("bond-over");
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
      <div id="bond-over" className="pt-20 pb-6 bg-white/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">We Can Bond Over...</h2>
          <p className="text-gray-600 mb-12">Things I’m passionate about & always happy to chat about.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bondData.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out group
                  ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                  hover:scale-105 hover:shadow-lg hover:rotate-1`}
                onClick={() => setSelectedImage(item.image)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:filter-none"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Lightened Overlay + Blur - Removed on Hover */}
                  <div className="absolute inset-0 bg-primary/50 backdrop-blur-md transition-all duration-500 group-hover:bg-transparent group-hover:backdrop-blur-none"></div>
                </div>

                {/* Content - Text Fades on Hover */}
                <div className="relative z-10 text-white text-center p-6 transition-opacity duration-500 group-hover:opacity-0">
                  <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
                    {item.icon} {item.title}
                  </h3>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative">
              <img src={selectedImage} alt="Selected" className="max-w-screen-lg max-h-screen-lg rounded-lg shadow-lg" />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    );
}
