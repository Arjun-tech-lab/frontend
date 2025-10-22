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
    <div className="min-h-screen bg-white flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white rounded-lg shadow-lg p-10">
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          {/* Phone */}
          <div className="mb-5">
            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          {/* Date */}
          <div className="mb-5">
            <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          {/* Address */}
          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
              Address Details
            </label>
            <div className="-mx-3 flex flex-wrap">
              <input type="text" name="area" id="area" placeholder="Area" className="w-full sm:w-1/2 px-3 mb-5 rounded-md border border-[#e0e0e0] py-3 focus:border-[#6A64F1]" required />
              <input type="text" name="city" id="city" placeholder="City" className="w-full sm:w-1/2 px-3 mb-5 rounded-md border border-[#e0e0e0] py-3 focus:border-[#6A64F1]" required />
              <input type="text" name="state" id="state" placeholder="State" className="w-full sm:w-1/2 px-3 mb-5 rounded-md border border-[#e0e0e0] py-3 focus:border-[#6A64F1]" required />
              <input type="text" name="post-code" id="post-code" placeholder="Post Code" className="w-full sm:w-1/2 px-3 mb-5 rounded-md border border-[#e0e0e0] py-3 focus:border-[#6A64F1]" required />
            </div>
          </div>

          {/* File Upload */}
          <div className="mb-5">
            <label htmlFor="photobutton" className="text-xs font-medium text-gray-500">
              PotHole Photo (optional)
            </label>
            <input
              type="file"
              name="photobutton"
              id="photobutton"
              ref={photoRef} // ref used here
              className="w-full mt-1"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none hover:shadow-form transition-all duration-300"
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
