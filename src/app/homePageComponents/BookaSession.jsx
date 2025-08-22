"use client";
import React from "react";
import { MdLocalPhone, MdOutlineImportContacts } from "react-icons/md";
import { FaGraduationCap, FaUser } from "react-icons/fa";

export default function BookaSession() {
  return (
    <div className="w-full bg-[#fff9f9] p-4 lg:p-10">
      <div className="max-w-[1320px] mx-auto rounded-[40px] bg-white shadow-md overflow-hidden grid lg:grid-cols-[65%_auto] grid-cols-1">
        {/* Left Section */}
        <div style={{ backgroundImage: 'url("/bookSession.jpg")' }} className="p-8 lg:p-12 bg-no-repeat bg-cover flex flex-col  space-y-6 bg-white relative z-40">
          <div className="w-[100%] h-[100%] absolute top-0 left-0 z-[-10] bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>


          <div className="flex items-center gap-3 text-white">
            <MdOutlineImportContacts className="text-[40px] " />
            <h3 className="text-[26px] lg:text-[40px] font-bold leading-tight text-white">
              Book Your Free Counseling Session
            </h3>
          </div>

          <p className="text-[16px] text-white leading-[35px]">
            Not sure which creative career to pursue? Let's talk it out. Our expert
            mentors will help you understand the best path forward based on your
            passion and goals.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white text-[16px]">
              <FaUser className="text-white mt-1" />
              Fill out a short form with your details.
            </li>
            <li className="flex items-start gap-3 text-white text-[16px]">
              <MdLocalPhone className="text-white mt-1" />
              Get a call from our academic counselor within 24 hours.
            </li>
            <li className="flex items-start gap-3 text-white text-[16px]">
              <FaGraduationCap className="text-white mt-1" />
              Receive personalized guidance on exams, programs, and colleges.
            </li>
          </ul>

          {/* Callout or Highlight
          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-lg shadow-sm mt-4">
            <p className="text-sm text-gray-700 font-medium">
              🎯 9 out of 10 students say this session clarified their career direction.
            </p>
          </div> */}

          {/* Assurance */}
          <div className="text-[14px] text-white italic mt-2">
            “I was confused between NID and UCEED — this call helped me decide clearly.” — Rhea, Design Aspirant
          </div>
        </div>

        {/* Right Section - Form */}
        <form className="p-8 lg:p-12 bg-white space-y-6 flex flex-col justify-center border-t-2 border-b-2 border-r-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            Fill in Your Details
          </h2>

          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name*
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address*
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number*
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
              required
            />
          </div>

          <div>
            <label htmlFor="exam" className="block text-gray-700 font-medium mb-2">
              Exam Type*
            </label>
            <select
              id="exam"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">-- Select Exam Type --</option>
              <option value="nift">NIFT</option>
              <option value="nid">NID</option>
              <option value="uceed">UCEED</option>
              <option value="nata">NATA</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 uppercase"
          >
            Book My Session
          </button>
        </form>
      </div>
    </div>
  );
}
