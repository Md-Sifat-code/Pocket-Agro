import React from "react";
import { Link } from "react-router-dom";
import img1 from "/image 27.png";
import img2 from "/image 28.png";
import img3 from "/image 29.png";
import img4 from "/image 30.png";
const Market: React.FC = () => {
  return (
    <section>
      <div className="container px-4 md:px-0 mt-[100px] mx-auto">
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <div>
              <h1 className="road text-3xl   lg:text-6xl">
                <span className="textcol mr-2">Organic</span>
                products. everything on our farm To your daily food cycle
              </h1>
            </div>
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
          <div className="grid mt-12  md:mt-0 grid-rows-2 gap-2">
            {/* grid part */}
            <div className="row-span-2 h-fit  grid grid-cols-2 gap-2 ">
              <div className=" flex flex-col  gap-6">
                <img className="h-auto" src={img1} alt="" />
                <img className="h-auto" src={img3} alt="" />
              </div>
              <div className="flex ">
                <img className="w-full" src={img2} alt="" />
              </div>
            </div>
            <div className="row-span-1 w-full ">
              <img className="h-full w-full" src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
