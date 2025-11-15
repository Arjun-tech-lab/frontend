import React from 'react'
import myImage from "../assets/pic.jpg"
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="min-h-screen bg-gray-900 text-white flex items-center px-4 py-12">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ---------- TEXT SECTION ---------- */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
              <h2 className="text-white text-4xl font-bold leading-snug">
                Building Stronger Communities through Collaboration and Empowerment
              </h2>

              <p className="text-gray-400 text-base leading-relaxed">
                At PotYourHoles, we believe that safe roads make better communities. Our
                mission is to provide an easy-to-use platform for citizens to report potholes
                and get them repaired quickly, ensuring smoother, safer journeys for everyone.
                <br /><br />
                Using cutting-edge technology, we connect local authorities with real-time
                reports and data insights, helping them prioritize repairs efficiently.
                Whether it’s tracking problem areas, monitoring repair progress, or simply
                making your daily commute safer, PotYourHoles is committed to transforming
                how roads are maintained.
                <br /><br />
                We’re passionate about creating smarter cities and happier citizens—one
                pothole at a time.
              </p>

              <button
                onClick={() => navigate("/Booking")}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-300 rounded-lg shadow-lg"
              >
                <span className="text-white text-sm font-medium">Get Started</span>
              </button>
            </div>

            {/* ---------- IMAGE SECTION ---------- */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={myImage}
                alt="About Us"
                className="rounded-3xl object-cover w-full max-w-md shadow-xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
