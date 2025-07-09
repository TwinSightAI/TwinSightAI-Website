import React from "react";
import Gis from "../assets/Gis.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={Gis}
        alt="Earth Network"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />

      {/* Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Real-Time Monitoring for <br />
          <span className="text-blue-400">Sustainable Decisions</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-6">
          Real-Time Monitoring for Calamity-Prone Areas
        </p>
        <a
          href="https://naftalinassir01.wixsite.com/nassir-bloggs-and-ar/post/from-jhub-africa-to-climate-innovation-twinsight-ai-tackles-real-world-environmental-challenges"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
        >
          Learn More →
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
