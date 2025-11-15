import pothole from "../assets/image.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/potholeacc.jpg";

const LandingPage = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 text-center text-white"
        style={{
          backgroundImage: `url(${pothole})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
          <Link
            to="/Booking"
            className="inline-flex justify-between items-center py-1 px-3 sm:px-4 mb-7 text-xs sm:text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white"
            role="alert"
          >
            <span className="font-medium text-center">
              Making Roads Safer, One Pothole at a Time
            </span>
            <svg
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>

          <h1
            className={`mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight dark:text-white transition-all duration-1000 ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            Report Potholes, Fix Communities
          </h1>

          <p
            className={`mb-8 text-sm sm:text-lg font-normal text-gray-100 lg:text-xl px-4 sm:px-10 md:px-28 dark:text-white transition-all duration-1000 delay-200 ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            Snap a photo, pay a small fee, and help fix dangerous potholes in your
            neighbourhood. Together, we can make our roads safer.
          </p>

          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4">
            <Link
              to="/About"
              className="inline-flex justify-center items-center py-2 sm:py-3 px-5 text-sm sm:text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
            >
              Learn more
              <svg
                className="ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-gray-900 p-6 sm:p-8 min-h-screen pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="md:w-2/3 lg:w-1/2">
            <h2 className="my-8 text-3xl sm:text-4xl font-bold text-white">
              How We Work
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Our process ensures potholes are reported, verified, and fixed as
              quickly as possible.
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="mt-16 grid divide-y sm:divide-x sm:divide-y-0 divide-gray-600 rounded-3xl border border-gray-600 overflow-hidden text-gray-600 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className="group bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
              >
                <div className="relative space-y-6 py-12 p-6 sm:p-8">
                  <div className="text-white text-4xl font-bold">{step}</div>
                  <h5 className="text-xl font-semibold text-white">
                    {step === 1 && "Capture & Report"}
                    {step === 2 && "Pay a Small Fee"}
                    {step === 3 && "Verification"}
                    {step === 4 && "Pothole Fixed"}
                  </h5>
                  <p className="text-gray-300 text-sm">
                    {step === 1 &&
                      "Snap a photo of a pothole in your neighborhood and upload it to our platform."}
                    {step === 2 &&
                      "Contribute a small fee to help fund the verification and repair process."}
                    {step === 3 &&
                      "Our team validates the report and notifies local authorities."}
                    {step === 4 &&
                      "Repairs are carried out and you’ll be updated once your pothole is fixed."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  accidents sections */}
<div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
  <div className="text-center mb-10">
    <h2 className="text-4xl tracking-tight font-bold text-black">
      Highlighted Features
    </h2>
  </div>

  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
    {/* Image Section */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        className="w-3/4 md:w-2/3 lg:w-full max-w-lg rounded-2xl shadow-xl object-cover"
        src={image}
        alt="can_help_banner"
      />
    </div>

    {/* Feature Cards */}
    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Card Template */}
      {[
        {
          title: "Millions of Accidents Annually",
          text: "Potholes cause over 2 million accidents every year due to sudden swerves or loss of vehicle control.",
        },
        {
          title: "Costly Vehicle Damage",
          text: "Suspension failure, flat tires, and wheel misalignment cost drivers billions every year.",
        },
        {
          title: "Delayed Emergency Response",
          text: "Ambulances and emergency vehicles get delayed on pothole-filled roads, worsening outcomes.",
        },
        {
          title: "Economic and Social Impact",
          text: "Potholes slow deliveries, hurt businesses, and cause major productivity loss across cities.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="h-full py-6 px-6 bg-gray-800 rounded-xl border border-gray-700 shadow-md shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-3 text-white">
            {item.title}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">{item.text}</p>
        </div>
      ))}

    </div>
  </div>
</div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-4">
        <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-3">PotYourHoles</h4>
            <p className="text-sm">
              A platform to report, fund, and fix potholes — making roads safer
              for everyone.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>How It Works</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>support@potyourholes.com</li>
              <li>+91 6360726962</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Follow Us</h4>
            <div className="flex space-x-4 text-lg">
              <span>📘</span>
              <span>🐦</span>
              <span>📸</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm">
          © {new Date().getFullYear()} PotYourHoles. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
