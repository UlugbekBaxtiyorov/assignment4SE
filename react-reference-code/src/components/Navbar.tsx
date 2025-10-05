import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow w-full py-4 flex justify-center space-x-6 font-semibold text-gray-700">
      <Link
        to="/"
        className={`hover:text-blue-500 ${
          location.pathname === "/" ? "text-blue-600 underline" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`hover:text-blue-500 ${
          location.pathname === "/about" ? "text-blue-600 underline" : ""
        }`}
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;
