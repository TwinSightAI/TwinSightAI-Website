import React from "react";

const Navbar = () => {
  const links = ["About", "Problem", "Solution", "Team"];

  return (
    <nav className="hidden md:flex space-x-6 text-blue-400 text-lg font-medium tracking-wide">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="hover:text-blue-600 transition duration-200"
        >
          {link}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
