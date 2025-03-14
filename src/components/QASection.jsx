import { useEffect, useState } from "react";

export default function QASection() {
  // Full list of questions (around 10)
  const qaPool = [
    { question: "📖 Book I'm currently reading:", answer: "\"The Wind-Up Bird Chronicle\" by Haruki Murakami" },
    { question: "🧠 I'm currently learning:", answer: "Japanese! 大変ですね!" },
    { question: "🏔️ Most interesting thing I did recently:", answer: "Completed a 10-day Vipassana retreat in Sweden" },
    // { question: "🤔 A weird skill I have:", answer: "I can navigate a new city almost instantly without a map" },
    { question: "🍕 Pizza or pasta?", answer: "Yes, please." },
    { question: "🍕 Pineapple on pizza?", answer: "I respect everyone's choices, but... no. Just no. 😂" },
    { question: "🎬 The series I absolutely loved:", answer: "The Bear" },
    { question: "🚀 Resolution for 2025:", answer: "Run 1000k in one year!" },
    { question: "🤠 Country I would visit again:", answer: "Japan!" },

];

const [qaDisplayed, setQaDisplayed] = useState(
    qaPool.slice(0, 4).map((item) => ({ ...item, animating: false }))
  );
  const [currentTileIndex, setCurrentTileIndex] = useState(0);
  const [currentQueueIndex, setCurrentQueueIndex] = useState(4);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setQaDisplayed((prev) => {
        const updated = [...prev];
        updated[currentTileIndex] = { ...updated[currentTileIndex], animating: true };
        return updated;
      });

      setTimeout(() => {
        setQaDisplayed((prev) => {
          const updated = [...prev];
          updated[currentTileIndex] = { question: "", answer: "", animating: true };
          return updated;
        });
      }, 300);

      setTimeout(() => {
        setQaDisplayed((prev) => {
          const updated = [...prev];
          updated[currentTileIndex] = { ...qaPool[currentQueueIndex], animating: false };
          return updated;
        });

        setCurrentTileIndex((prev) => (prev + 1) % 4);
        setCurrentQueueIndex((prev) => (prev + 1) % qaPool.length);
      }, 800);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentTileIndex, currentQueueIndex, qaPool]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("qa-section");
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
    <div id="qa-section" className="pt-5 pb-20 bg-white/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className={`text-3xl font-bold text-gray-900 mb-8 text-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Quick Facts About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qaDisplayed.map((item, index) => {
            const slideClass = item.animating
              ? index % 2 === 0
                ? "-translate-x-10 opacity-0"
                : "translate-x-10 opacity-0"
              : "translate-x-0 opacity-100";

            return (
              <div
                key={index}
                className={`p-4 bg-white shadow-md rounded-xl flex flex-col justify-between items-start transition-all duration-700 ease-in-out transform ${slideClass} hover:shadow-lg min-h-[100px] overflow-hidden`}
              >
                <h3 className={`text-lg font-semibold text-gray-900 ${item.question ? "visible" : "invisible"} truncate w-full`}>
                  {item.question}
                </h3>
                <p className={`text-gray-600 italic text-right ${item.answer ? "visible" : "invisible"} truncate w-full`}>
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
