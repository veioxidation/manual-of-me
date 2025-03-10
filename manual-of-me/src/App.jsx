import Hero from "./components/Hero";
import ManualOfMe from "./components/ManualOfMe";
import HowIWork from "./components/HowIWork";
import MyTeam from "./components/MyTeam";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Sections */}
      <ManualOfMe />
      <HowIWork />
      <MyTeam />
      <Interests />
      <Contact />
    </div>
  );
}
