

export default function Hero() {
  return (
    <div className="relative py-20 bg-gradient-to-br from-blue-100 to-indigo-300 flex items-center justify-center px-10">
      {/* Left Side: Profile Picture */}
      <div className="relative w-40 h-40 md:w-52 md:h-52 mr-10">
        {/* Outer Transparent Border Effect */}
        <div className="absolute inset-0 rounded-full border-4 border-secondary"></div>
        <div className="absolute inset-1 rounded-full bg-white"></div>
        {/* Profile Image */}
        <img
          src="/images/DSCF3441-Edit-Edit-2.jpg" // Replace with your actual image path
          alt="Profile"
          className="relative z-10 rounded-full w-full h-full object-cover shadow-lg"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="text-left max-w-xl">
        <h1 className="text-4xl font-bold text-gray-900">Hi, I'm Przemek</h1>
        <p className="text-lg text-gray-700 mt-3">
          AI Engineer | Problem Solver | Zen Thinker
        </p>
        <div className="mt-6">
          <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-secondary transition duration-300">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
