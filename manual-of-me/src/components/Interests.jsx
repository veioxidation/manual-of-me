import { useEffect, useState } from "react";

// Example images (replace these with your own file paths later)
const interestData = [
  { title: "Travel", description: "Exploring off-the-beaten paths.", image: "/images/DSCF3502.jpg" },
  { title: "Sports", description: "Hiking, cycling, diving, and much more.", image: "/images/DSCF5473.jpg" },
  { title: "Meditation", description: "Everyday mindfulness", image: "/images/DSCF6170.jpg" },
  { title: "Learning", description: "Understanding concepts, ideas, trying new things.", image: "/images/DSCF4402.jpg" }
];
export default function Interests() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById("interests");
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
      <div id="interests" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Interests & Hobbies</h2>
          <p className="text-gray-600 mb-12">What I enjoy beyond work.</p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interestData.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out group
                  ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                  hover:scale-105 hover:shadow-lg`}
                onClick={() => setSelectedImage(item.image)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:filter-none"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Lightened Overlay + Blur - Removed on Hover */}
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-md transition-all duration-500 group-hover:bg-transparent group-hover:backdrop-blur-none"></div>
                </div>
  
                {/* Content - Text Fades on Hover */}
                <div className="relative z-10 text-gray-900 text-center p-6 transition-opacity duration-500 group-hover:opacity-0">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
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
  