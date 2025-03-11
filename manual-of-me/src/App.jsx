import Hero from "./components/Hero";
import ManualOfMe from "./components/ManualOfMe";
import Principles from "./components/Principles";

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
      <Principles />
      <HowIWork />
      {/* <MyTeam /> */}
      <Interests />
      <Contact />
    </div>
  );
}
