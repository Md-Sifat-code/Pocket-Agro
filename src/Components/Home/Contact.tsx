import React from "react";
import logo from "/image 33.png";

const Contact: React.FC = () => {
  return (
    <section>
      <div>
        <div>
          <h1 className="text-4xl md:text-4xl lg:text-6xl mb-12 road text-center mt-[100px]">
            CONTACT <span className="textcol">US</span>
          </h1>
        </div>
        <div>
          <div className="relative">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Image */}
            <img className="h-[600px] w-full" src={logo} alt="Contact Logo" />

            {/* Content on top */}
            <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-1 lg:grid-cols-2">
              <div className="text-white text-xl md:text-3xl"></div>
              <div className="h-full  w-full flex justify-center items-center ">
                <div className=" w-[95%] lg:w-[60%] bg-white h-auto opacity-90 p-4 rounded-lg">
                  {/* Form with input fields, text area, and submit button */}
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full mt-2 p-2 border bg-[#E7F8DC] border-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full mt-2 p-2 border bg-[#E7F8DC] border-gray-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Enter your message"
                        className="w-full mt-2 p-2 border bg-[#E7F8DC] border-gray-300 rounded-lg"
                        rows={4}
                      />
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className=" w-full px-6 py-2 bgmain font-bold text-white rounded-lg hover:bg-blue-600"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
