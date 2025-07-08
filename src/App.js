import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import Problem from "./pages/Problem";
import Solution from "./pages/Solution";
import DemoVideo from "./components/DemoVideo";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Problem />
      <Solution />
      <DemoVideo />
      <Team />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-3 py-2 rounded-full shadow-lg"
        title="Go to top"
      >
        ↑
      </button>
      <footer className="text-center py-6 bg-blue-200 text-sm">
        &copy; 2025 Digital Twin Model Environmental Monitoring
      </footer>
    </>
  );
}

export default App;
