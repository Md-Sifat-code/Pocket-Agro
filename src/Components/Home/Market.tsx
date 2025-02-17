import React from "react";
import { Link } from "react-router-dom";
import img1 from "/image 27.png";
import img2 from "/image 28.png";
import img3 from "/image 29.png";
import img4 from "/image 30.png";
const Market: React.FC = () => {
  return (
    <section>
      <div className="container mt-[100px] mx-auto">
        <div>
          <h1 className="road text-5xl">
            <p>
              <span className="textcol ">Organic</span> products. everything on
              our farm To your
            </p>
            <p>
              <span>daily food cycle</span>
            </p>
          </h1>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <h1 className="md:w-[80%] text-2xl roboto">
              Your trusted food partner, delivering fast, secure, and
              high-quality meals for a reliable, satisfying dining experience
              every time.
            </h1>
            <Link
              className="text-white bgmain px-8 py-2 font-bold mt-3"
              to={""}
            >
              {" "}
              MARKET NOW
            </Link>
          </div>
          <div className="grid grid-rows-2 gap-2 ">
            {/* grid part */}
            <div className="row-span-2 h-fit  grid grid-cols-2 gap-4">
              <div className=" flex flex-col items-center gap-4">
                <img className="h-auto" src={img1} alt="" />
                <img className="h-auto" src={img3} alt="" />
              </div>
              <div>
                <img className="" src={img2} alt="" />
              </div>
            </div>
            <div className="row-span-1">
              <img className="h-full" src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
