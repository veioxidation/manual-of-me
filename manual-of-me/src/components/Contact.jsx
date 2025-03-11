export default function Contact() {
    return (
      <div id="contact" className="py-20 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
        <div className="backdrop-blur-lg bg-white/30 shadow-lg rounded-2xl p-10 max-w-xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">Want to reach me out?</h2>
          <p className="text-gray-700 mt-4">
            Whether it's AI, automation, or just an interesting discussion—I'm always open to new ideas.  
            Reach out and let’s collaborate!
          </p>
  
          <div className="mt-6">
            <a href="mailto:przemek.dobrenko@ubs.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-secondary transition duration-300">
                Drop me a message!
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  