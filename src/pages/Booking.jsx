import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Booking = () => {
  const navigate = useNavigate();
  const photoRef = useRef(null); // Ref for file input

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Build JSON payload matching BookingAppDto
    const payload = {
      fullName: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      date: e.target.date.value,
      area: e.target.area.value,
      city: e.target.city.value,
      state: e.target.state.value,
      postCode: e.target["post-code"].value,
    };

    const formData = new FormData();
    formData.append(
      "data",
      new Blob([JSON.stringify(payload)], { type: "application/json" })
    );

    // Optional pothole photo
    if (photoRef.current && photoRef.current.files[0]) {
      formData.append("potholePhoto", photoRef.current.files[0]);
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}
/api/appointments`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Saved appointment:", res.data);

      // Navigate to success page with appointment data
      navigate("/Sucessfull", { state: { appointment: res.data } });
    } catch (err) {
      console.error("Error saving appointment:", err.response?.data || err);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div className="w-full max-w-[600px] bg-white rounded-2xl shadow-xl p-8 md:p-10">
      <h2 className="text-2xl font-bold text-[#07074D] mb-6 text-center">Book Your Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            required
            className="w-full rounded-lg border border-gray-300 bg-white py-3 px-5 text-base text-gray-600 focus:border-[#6A64F1] focus:ring-1 focus:ring-[#6A64F1] outline-none shadow-sm transition"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            required
            className="w-full rounded-lg border border-gray-300 bg-white py-3 px-5 text-base text-gray-600 focus:border-[#6A64F1] focus:ring-1 focus:ring-[#6A64F1] outline-none shadow-sm transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-lg border border-gray-300 bg-white py-3 px-5 text-base text-gray-600 focus:border-[#6A64F1] focus:ring-1 focus:ring-[#6A64F1] outline-none shadow-sm transition"
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            required
            className="w-full rounded-lg border border-gray-300 bg-white py-3 px-5 text-base text-gray-600 focus:border-[#6A64F1] focus:ring-1 focus:ring-[#6A64F1] outline-none shadow-sm transition"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Address Details
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="area" id="area" placeholder="Area" className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:border-[#6A64F1] focus:ring-1 focus:ring-[#6A64F1] outline-none shadow-sm" required />
            <input type="text" name="city" id="city" placeholder="City" className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:border-[#6A64F1] focus:ring-1 focus:ring-[#6A64F1] outline-none shadow-sm" required />
            <input type="text" name="state" id="state" placeholder="State" className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:border-[#6A64F1] focus:ring-1 focus:ring-[#6A64F1] outline-none shadow-sm" required />
            <input type="text" name="post-code" id="post-code" placeholder="Post Code" className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:border-[#6A64F1] focus:ring-1 focus:ring-[#6A64F1] outline-none shadow-sm" required />
          </div>
        </div>

        {/* File Upload */}
        {/* File Upload */}
<div>
  <label className="block text-sm font-medium text-gray-500 mb-2">
    PotHole Photo (optional)
  </label>
  <div className="relative">
    <input
      type="file"
      name="photobutton"
      id="photobutton"
      ref={photoRef}
      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
    />
    <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-white py-3 px-4 shadow-sm hover:border-[#6A64F1] transition">
      <span className="text-gray-600 text-sm">
        {photoRef.current && photoRef.current.files.length > 0
          ? photoRef.current.files[0].name
          : "Choose file"}
      </span>
      <span className="bg-[#6A64F1] text-white text-sm font-semibold py-1 px-3 rounded cursor-pointer hover:bg-[#574fd6] transition">
        Browse
      </span>
    </div>
  </div>
</div>


        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full rounded-xl bg-[#6A64F1] py-3 px-6 text-lg font-semibold text-white shadow-lg hover:bg-[#574fd6] transition-all duration-300"
          >
            Book Appointment
          </button>
        </div>

      </form>
    </div>
  </div>
);

};

export default Booking;
