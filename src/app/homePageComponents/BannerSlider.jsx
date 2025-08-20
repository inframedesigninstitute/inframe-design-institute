"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function BannerSlider() {
  const [contactModel, setcontactModel] = useState(false);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-[100%] pb-10">
      <Slider {...settings}>
        <div
          className="w-[100%] h-[80vh] bg-cover bg-center"
          style={{ backgroundImage: 'url("/bannerImages/games.jpg")' }}
        >
          <img
            className="w-[100%] h-[100%]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKMwmbWItxl4Y_q1ofmYMJNVrWiN9b5Yaqg&s"
          />
        </div>
        <div
          className="w-[100%] h-[80vh] bg-cover bg-center"
          style={{ backgroundImage: 'url("/bannerImages/games.jpg")' }}
        >
          <img
            className="w-[100%] h-[100%]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKMwmbWItxl4Y_q1ofmYMJNVrWiN9b5Yaqg&s"
          />
        </div>
        <div
          className="w-[100%] h-[80vh] bg-cover bg-center"
          style={{ backgroundImage: 'url("/bannerImages/games.jpg")' }}
        >
          <img
            className="w-[100%] h-[100%]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKMwmbWItxl4Y_q1ofmYMJNVrWiN9b5Yaqg&s"
          />
        </div>
      </Slider>
      <button
        onClick={() => setcontactModel(!contactModel)}
        className={`${contactModel ? "rotate-180 " : "rotate-0"
          } fixed cursor-pointer top-[88%] right-[25px] z-[110] text-[28px] hover:bg-gray-700 bg-red-500 text-white rounded-full lg:p-4 p-3 transition-all ease-initial duration-400`}
      >
        {contactModel ? <IoMdClose /> : <FaPhoneAlt />}
      </button>
      <div
        className={`${contactModel ? "opacity-[1] scale-[1]" : "opacity-0 scale-0"
          } transition-all duration-300 ease-in-out w-[300px] h-[auto] p-5 rounded-[10px] origin-bottom-right shadow-lg shadow-gray-500  bg-white z-[110] fixed top-[67%] right-[60px]`}
      >
        <h3 className="text-[18px] text-gray-800 flex items-center gap-2">
          <FaUserAlt className="text-[16px]" /> Talk to a counsellor
        </h3>
        <p className="my-[5px] text-[14px]">
          Have doubts? Our support team will be happy to assist you !
        </p>
        <button className="w-[100%] py-[10px] border-[2px] border-red-600 font-semibold mt-3 text-red-600 rounded-[10px] cursor-pointer">
          +91 807531251
        </button>
      </div>
    </div>
  );
}
