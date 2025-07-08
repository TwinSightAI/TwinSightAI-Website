import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider">
          Twinsight<span className="text-blue-400">AI</span>
        </h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
