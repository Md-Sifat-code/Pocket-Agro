import React, { useState } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLock,
  FaArrowCircleLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Buyers: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    phone: "",
    password: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSend = { ...formData, role: "buyer" };
    console.log(dataToSend); // Handle form submission logic
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <Link to={"/auth"}>
          <FaArrowCircleLeft className=" text-blue-600 text-xl" />
        </Link>
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Buyer Signup
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full outline-none"
            />
          </div>

          {/* Username */}
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <FaPhoneAlt className="text-gray-500 mr-3" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <FaLock className="text-gray-500 mr-3" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full outline-none"
            />
          </div>

          {/* Location */}
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <FaMapMarkerAlt className="text-gray-500 mr-3" />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full outline-none"
            />
          </div>

          {/* Hidden role input */}
          <input type="hidden" name="role" value="buyer" />

          <button
            type="submit"
            className="w-full bg-blue-500 font-bold text-white py-2 rounded-md mt-4 hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Buyers;
