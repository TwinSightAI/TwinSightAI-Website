import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground"; // adjust path as needed

const fullText =
  "Calamity-prone areas like Narok, Kenya, continue to suffer severe losses due to floods, droughts, and other natural disasters. Despite advances in technology, there is a critical gap in real-time monitoring and early warning systems that can predict, detect, and alert people before disaster strikes. This leaves vulnerable populations exposed, unprepared, and unable to take preventive action.";

const Problem = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 30;
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="problem" className="relative bg-white py-20 text-gray-900 overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Problem Statement
        </motion.h2>

        <motion.div
          className="bg-white/80 backdrop-blur-md shadow-md p-6 rounded-md text-left border-l-4 border-blue-500 min-h-[180px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-wrap">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
