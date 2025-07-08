import React, { useEffect, useRef } from "react";
import joseImg from "../assets/jose.jpg";
import deeImg from "../assets/dee.jpg";
import felixImg from "../assets/f.jpg";
import nassirImg from "../assets/nassir.jpg";
import wilImg from "../assets/wil.jpg";
import khImg from "../assets/kh.jpg";
import ericImg from "../assets/er.jpg";
import bkhitaImg from "../assets/bkhita.jpg";

const teamMembers = [
  {
    name: "Joseph Ndungu",
    role: "Team Lead",
    image: joseImg,
    linkedin: "https://www.linkedin.com/in/joseph-githinji-494b4424b/",
    github: "",
  },
  {
    name: "Dorica Mbula",
    role: "Front-end Developer",
    image: deeImg,
    linkedin: "https://www.linkedin.com/in/dorryl-mbula-31b569276",
    github: "https://github.com/dorryldee",
  },
  {
    name: "Willy Mutunga",
    role: "Backend Developer",
    image: wilImg,
    linkedin: "https://www.linkedin.com/in/willy-mutunga",
    github: "https://github.com/Willy-Mutunga",
  },
  {
    name: "Felix Oyoo",
    role: "UI/UX Designer",
    image: felixImg,
    linkedin: "https://www.linkedin.com/in/felix-oyoo-037755358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/Felix-Oyoo",
  },
  {
    name: "Naftali Nassir",
    role: "Mass Communication",
    image: nassirImg,
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Kelvin Uhuru",
    role: "Software Engineer",
    image: khImg,
    linkedin: "https://www.linkedin.com/in/kelvin-uhuru-0389331b8",
    github: "https://github.com/Kahuru99",
  },
  {
    name: "Eric Thomas",
    role: "Machine Learning Specialist",
    image: ericImg,
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Stephanie Bakhita",
    role: "Geospatial Engineer",
    image: bkhitaImg,
    linkedin: "https://www.linkedin.com/in/bakhita-gathoni-750858300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/BakhitaGathoni",
  },
];

const Team = () => {
  const sliderRef = useRef(null);
  const scrollInterval = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    const step = 1;
    const frameRate = 16;

    const scroll = () => {
      if (slider && !isPaused.current) {
        slider.scrollLeft += step;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
    };

    scrollInterval.current = setInterval(scroll, frameRate);

    return () => clearInterval(scrollInterval.current);
  }, []);

  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  return (
    <section id="team" className="bg-white text-blue-600 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Team</h2>
      <p className="text-black text-lg text-center mb-10">
        Meet the dedicated team behind the project
      </p>

      <div
        ref={sliderRef}
        className="overflow-hidden whitespace-nowrap max-w-[95vw] mx-auto"
      >
        <div className="inline-flex gap-8 min-w-max">
          {[...teamMembers, ...teamMembers].map((member, i) => (
            <div
              key={`${member.name}-${i}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-lg shadow-lg w-72 inline-block transition duration-300 hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-blue-400"
              />
              <h3 className="mt-4 text-lg font-semibold text-blue-400 text-center">
                {member.name}
              </h3>
              <p className="text-sm text-black text-center">{member.role}</p>
              <div className="flex justify-center gap-4 mt-3 text-xl">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
