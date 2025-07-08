import React from "react";

const solutions = [
  {
    icon: "🧩",
    title: "Data Silos",
    desc: "We use a centralized, cloud-based platform to integrate diverse environmental data sources—eliminating data fragmentation and enabling unified decision-making. This approach ensures that all stakeholders, from policymakers to local communities, have real-time access to accurate and comprehensive data insights that inform proactive environmental strategies.",

  },
  {
    icon: "💸",
    title: "High Operational Costs",
    desc: "By automating data collection using real-time sensors, satellite feeds, and Conduit Empathy Sensors, we reduce manual workload and operational expenses. This allows for continuous environmental monitoring at a fraction of traditional costs, enabling broader coverage and timely interventions without relying heavily on human resources.",
  },
  {
    icon: "🔗",
    title: "Integration Complexity",
    desc: "We use standardized APIs for seamless communication between Conduit Empathy Sensors and other platforms. This interoperability removes vendor lock-in, simplifies integration with legacy systems, and accelerates the deployment of new services, making the entire ecosystem more adaptive and efficient.",
  },
  {
    icon: "💻",
    title: "Technical Infrastructure Limitations",
    desc: "Cloud-native architecture plus Conduit Empathy Sensors ensures scalable, low-cost deployment. This model supports rapid expansion into remote or underserved areas, minimizes the need for expensive hardware, and enhances the reliability of environmental data collection even in challenging terrains.",
  },
];

const Solutions = () => {
  return (
    <section id="solution" className="bg-white py-20 text-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 tracking-tight">
          Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {solutions.map((item, idx) => (
            <div key={idx} className="flip-card">
              <div className="flip-inner">
                {/* Front face */}
                <div className="flip-front">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                </div>

                {/* Back face */}
                <div className="flip-back">
                  <p className="text-sm text-gray-700 px-4">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
