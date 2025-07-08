import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import DemoVideo from "../components/DemoVideo";
import Team from "../components/Team";

const Home = () => {
  return (
    <main className="bg-[#020617] text-white relative">
      {/* Navigation + Hero */}
      <Header />
      <HeroSection />

      {/* Core Sections */}
      <section id="about">
        <About />
      </section>

      <section id="problem">
        <Problem />
      </section>

      <section id="solution">
        <Solution />
      </section>

      <section id="demo">
        <DemoVideo />
      </section>

      <section id="team">
        <Team />
      </section>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 px-4 py-2 text-white rounded-full shadow-lg z-50"
        title="Back to top"
      >
        ↑
      </button>

      {/* Footer */}
      <footer className="text-center py-6 bg-black bg-opacity-70 text-gray-300 text-sm mt-12">
        &copy; {new Date().getFullYear()} TwinsightAI · Digital Twin
        Environmental Monitoring
      </footer>
    </main>
  );
};

export default Home;
