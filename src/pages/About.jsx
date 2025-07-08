const About = () => {
  return (
    <section id="about" className="bg-white py-20 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
          About
        </h2>
        <div className="text-lg leading-relaxed border-l-4 border-blue-500 pl-6 text-left bg-white bg-opacity-80 shadow-lg">
          <p>
            <strong>TwinSight AI</strong> is inspired by{" "}
            <em>Conduit Empathy</em>, an art installation at JKUAT by Eva
            Petrič, symbolizing innovation in SPACE-SI satellite technologies
            and C3M digital twin models. Designed to enhance agriculture and
            environmental monitoring, TwinSight AI integrates satellite imagery
            with real-time sensor data to deliver precise insights on crop
            health, soil conditions, and environmental risks.
          </p>
          <p className="mt-4">
            It empowers sustainability through real-time alerts, early hazard
            detection, and data-driven planning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
