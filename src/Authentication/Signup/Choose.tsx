import React from "react";
import { FaRegUser, FaTruck, FaStoreAlt } from "react-icons/fa"; // Import icons

const Choose: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#E7F8DC]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Farmer Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="flex justify-center items-center bg-green-500 py-6">
            <FaRegUser className="text-white text-5xl" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-3">
              Farmers
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Join the platform to sell your crops, manage inventory, and reach
              potential buyers.
            </p>
            <div className="flex justify-center">
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
                Choose Farmer
              </button>
            </div>
          </div>
        </div>

        {/* Buyer Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="flex justify-center items-center bg-blue-500 py-6">
            <FaTruck className="text-white text-5xl" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-3">
              Buyers
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Explore the freshest produce and get it delivered to your
              doorstep.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
                Choose Buyer
              </button>
            </div>
          </div>
        </div>

        {/* Investor Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="flex justify-center items-center bg-yellow-500 py-6">
            <FaStoreAlt className="text-white text-5xl" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-3">
              Investors
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Invest in agricultural projects, grow your portfolio, and support
              local farmers.
            </p>
            <div className="flex justify-center">
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition">
                Choose Investor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
