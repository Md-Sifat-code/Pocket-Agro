import React from "react";
import banner from "/image 17.png";
import { Link } from "react-router-dom";
import icon1 from "/icon-1.png";
import icon2 from "/icon-2.png";
import icon3 from "/icon-3.png";
import icon4 from "/icon-4.png";

const Hero: React.FC = () => {
  return (
    <section>
      <div className="relative mt-6 h-[700px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>

        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.6 }}
        ></div>

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="grid h-full grid-cols-1 md:grid-cols-2 gap-12 container mx-auto">
            <div className="flex flex-col justify-center gap-4 items-start">
              <h1 className="road text-2xl sm:text-3xl md:text-5xl font-medium text-white">
                A DIGITAL FARMING MARKET PLACE WHERE FAIR FOOD TRADE MADE EASY,
                FAST AND TRANSPARENT!
              </h1>
              <p className="rocknroll text-white flex flex-col items-start justify-center">
                BUY DIRECTLY FROM FARM
                <span className="rubik textcol">OFFERS AVAILABLE NOW!</span>
              </p>
              <Link to={""} className="px-8 py-2 bgmain font-bold text-white">
                JOIN NOW
              </Link>
            </div>
            <div
              className="relative w-full md:w-[80%] bgmain"
              style={{ opacity: 0.6 }}
            >
              <div className="absolute flex flex-col justify-center items-center gap-12 inset-0">
                <div className="">
                  <h1 className="text-white text-xl sm:text-3xl roboto font-bold">
                    Select a product to buy
                  </h1>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-3">
                  <div className="flex gap-12 flex-row">
                    <div>
                      <img
                        className="w-[50px] rounded-full h-[50px]"
                        src={icon1}
                        alt=""
                      />
                      <p className="text-white font-bold roboto mt-1">RICE</p>
                    </div>
                    <div>
                      <img
                        className="w-[50px] rounded-full h-[50px]"
                        src={icon2}
                        alt=""
                      />
                      <p className="text-white font-bold roboto mt-1">WHEAT</p>
                    </div>
                    <div>
                      <img
                        className="w-[50px] rounded-full h-[50px]"
                        src={icon3}
                        alt=""
                      />
                      <p className="text-white font-bold roboto mt-1">CORN</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="">
                    <img
                      className="w-[50px] rounded-full h-[50px]"
                      src={icon4}
                      alt=""
                    />
                    <p className="text-white font-bold roboto mt-1">COFFEE</p>
                  </div>
                  <p className="text-xl mb-4 text-white font-bold mt-4">
                    CAN’T FIND THE PRODUCT YOU ARE LOOKING FOR?
                  </p>
                  <Link className="px-8 py-3 bg-white textcol" to={""}>
                    MAIL US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
