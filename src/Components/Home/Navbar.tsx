import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex flex-row justify-between items-center">
            <div>
              {/* Logo part */}
              <h1 className="jaini text-4xl mt-4">
                Pocket<span className="textcol">Agro</span>
              </h1>
            </div>
            <div className="mt-4">
              {/* Navigation part */}
              <div className="flex space-x-4">
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
            </div>
            <div className="flex mt-4 flex-row items-center">
              <Link
                className=" text-white font-bold px-6 py-2 bgmain  uppercase"
                to={"/signup"}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
