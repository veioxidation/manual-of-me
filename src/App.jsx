import Hero from "./components/Hero";
import ManualOfMe from "./components/ManualOfMe";
import Principles from "./components/Principles";

import HowIWork from "./components/HowIWork";
import MyTeam from "./components/MyTeam";
import CareerSkills from "./components/CareerSkills";
import BondOver from "./components/Interests";
import Contact from "./components/Contact";
import QASection from "./components/QASection";

export default function App() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Sections */}
      <ManualOfMe />
      <Principles />
      <HowIWork />
      <CareerSkills />
      {/* <MyTeam /> */}
      <BondOver />
      <QASection />

      <Contact />
    </div>
  );
}
