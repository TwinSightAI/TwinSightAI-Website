import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Dr.Lawrence Nderu PHD",
    role: "Project Investigator",
    image: "/assets/nderu.jpg",
    linkedin: "https://www.linkedin.com/in/dr-lawrence-nderu",
    github: "",
  },
  {
    name: "Joseph Ndung'u",
    role: "Project Lead",
    image: "/assets/jose.jpg",
    linkedin: "https://www.linkedin.com/in/joseph-githinji-494b4424b/",
    github: "https://github.com/",
  },
  {
    name: "Antoinette Wangari",
    role: "Geospatial Engineer",
    image: "/assets/antoinette.jpg",
    linkedin: "https://www.linkedin.com/in/antoinettewangari",
    github: "https://github.com/AntoinetteWangari1",
  },
  {
    name: "Willy Mutunga",
    role: "Backend Engineer",
    image: "/assets/wil.jpg",
    linkedin: "https://www.linkedin.com/in/willy-mutunga",
    github: "https://github.com/Willy-Mutunga",
  },
  {
    name: "Dorica Mbula",
    role: "Frontend Developer",
    image: "/assets/dee.jpg",
    linkedin: "https://www.linkedin.com/in/dorryl-mbula-31b569276",
    github: "https://github.com/dorryldee",
  },
  {
    name: "Kelvin Uhuru",
    role: "Software Engineer",
    image: "/assets/kh.jpg",
    linkedin: "https://www.linkedin.com/in/kelvin-uhuru-0389331b8",
    github: "https://github.com/Kahuru99",
  },
  {
    name: "Bakhita Gathoni",
    role: "Geospatial Engineer",
    image: "/assets/bkhita.jpg",
    linkedin: "https://www.linkedin.com/in/bakhita-gathoni-750858300",
    github: "https://github.com/BakhitaGathoni",
  },
  {
    name: "Eric Thomas",
    role: "ML Engineer",
    image: "/assets/er.jpg",
    linkedin: "https://www.linkedin.com/in/eric-thomas-b342b0338",
    github: "https://github.com/ericust1",
  },
  {
    name: "Felix Oyoo",
    role: "UI/UX Designer",
    image: "/assets/f.jpg",
    linkedin: "https://www.linkedin.com/in/felix-oyoo-037755358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/Felix-Oyoo",
  },
  {
    name: "Naftali Nassir",
    role: "Mass Communication Specialist",
    image: "/assets/nassir.jpg",
    linkedin: "https://www.linkedin.com/in/nassir-naftali-63973436a",
    github: "https://github.com/",
  },
  
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Team = () => {
  const pi = teamMembers[0];
  const others = teamMembers.slice(1);

  return (
    <section
      id="team"
      className="bg-white py-20 px-6 text-green-900"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl text-blue-400 text-center font-mogra drop-shadow mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        Meet the Team
      </motion.h2>

      <motion.p
        className="text-lg font-poppins text-center text-gray-700 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: false }}
      >
        The passionate minds behind Twinsight AI!
      </motion.p>

      {/* Project PI */}
      <motion.div
        className="max-w-3xl mx-auto mb-16"
        variants={fadeUp}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition">
          <img
            src={pi.image}
            alt={pi.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-400"
          />
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-xl font-semibold text-blue-400">{pi.name}</h3>
            <p className="text-sm text-gray-700 mb-2">{pi.role}</p>
            <div className="flex justify-center sm:justify-start gap-4 text-xl">
              {pi.linkedin && (
                <a
                  href={pi.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaLinkedin />
                </a>
              )}
              {pi.github && (
                <a
                  href={pi.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Remaining Members */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {others.map((member, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center text-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-400 mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-700">
              {member.name}
            </h3>
            <p className="text-sm text-gray-700 mb-3">{member.role}</p>
            <div className="flex gap-4 text-xl">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaLinkedin />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;