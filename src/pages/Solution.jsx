import React from "react";

const solutions = [
  {
    icon: "🧩",
    title: "Real-time Monitoring and Data Integration",
    desc: "Digital twins integrate real-time data from various sources, such as rainfall sensors, river gauges, and weather forecasts, providing a comprehensive view of the flood situation. This allows for continuous monitoring of water levels, flow rates, and other relevant parameters, enabling timely detection of potential flood events",

  },
  {
    icon: "💸",
    title: "Advanced Simulation and Prediction",
    desc: "Digital twins can simulate flood scenarios, including different rainfall intensities, dam breaches, and urban runoff, to assess potential impacts and identify vulnerable areasThese simulations help predict flood propagation, assess potential damage, and evaluate the effectiveness of different mitigation strategies.For example, by simulating the impact of a dam failure, authorities can anticipate the extent of flooding and prepare accordingly.",
  },
  {
    icon: "🔗",
    title: "Enhanced Decision-Making and Emergency Response",
    desc: "The insights gained from digital twin simulations enable informed decision-making regarding flood preparedness, response, and recovery. By visualizing potential flood impacts, emergency responders can optimize evacuation routes, allocate resources effectively, and minimize casualties. Digital twins can also facilitate communication and coordination among different stakeholders, including government agencies, emergency services, and the public.",
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
