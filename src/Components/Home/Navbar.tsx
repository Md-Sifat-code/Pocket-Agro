import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing hamburger and close icons

const Navbar: React.FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex px-4 md:px-0 flex-row justify-between items-center">
          {/* Logo Section */}
          <div>
            <h1 className="jaini text-4xl mt-4">
              Pocket<span className="textcol">Agro</span>
            </h1>
          </div>

          {/* Navigation and Hamburger Menu */}
          <div className="mt-4 flex flex-row justify-center items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className={`font-normal px-2 uppercase ${
                  activeLink === "/" ? "textcol" : ""
                }`}
                onClick={() => handleClick("/")}
              >
                Home
              </Link>
              <Link
                to="/investment"
                className={`font-normal px-2 uppercase ${
                  activeLink === "/investment" ? "textcol" : ""
                }`}
                onClick={() => handleClick("/investment")}
              >
                Investment
              </Link>
              <Link
                to="/market"
                className={`font-normal px-2 uppercase ${
                  activeLink === "/market" ? "textcol" : ""
                }`}
                onClick={() => handleClick("/market")}
              >
                Market
              </Link>
              <Link
                to="/about-us"
                className={`font-normal px-2 uppercase ${
                  activeLink === "/about-us" ? "textcol" : ""
                }`}
                onClick={() => handleClick("/about-us")}
              >
                About Us
              </Link>
            </div>

            {/* Hamburger Icon for mobile */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="textcol"
              >
                {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
              </button>
            </div>
          </div>
          {/* Sign up Button */}
          <div className=" hidden md:flex mt-4 flex-row items-center">
            <Link
              className="text-white font-bold px-6 py-2 bgmain uppercase"
              to="/signup"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <Link
              to="/"
              className={`font-normal px-2 uppercase ${
                activeLink === "/" ? "textcol" : ""
              }`}
              onClick={() => {
                handleClick("/");
                setIsMenuOpen(false);
              }}
            >
              Home
            </Link>
            <Link
              to="/investment"
              className={`font-normal px-2 uppercase ${
                activeLink === "/investment" ? "textcol" : ""
              }`}
              onClick={() => {
                handleClick("/investment");
                setIsMenuOpen(false);
              }}
            >
              Investment
            </Link>
            <Link
              to="/market"
              className={`font-normal px-2 uppercase ${
                activeLink === "/market" ? "textcol" : ""
              }`}
              onClick={() => {
                handleClick("/market");
                setIsMenuOpen(false);
              }}
            >
              Market
            </Link>
            <Link
              to="/about-us"
              className={`font-normal px-2 uppercase ${
                activeLink === "/about-us" ? "textcol" : ""
              }`}
              onClick={() => {
                handleClick("/about-us");
                setIsMenuOpen(false);
              }}
            >
              About Us
            </Link>
            <Link
              className="text-white font-bold px-6 py-2 bgmain uppercase"
              to="/signup"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
