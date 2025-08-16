"use client";
import { FaIndianRupeeSign } from "react-icons/fa6";

export default function TopCourses() {


  return (
    <div className="w-full lg:p-0 p-3">
      <div className="max-w-[1320px] mx-auto lg:py-[60px] py-[30px]">
        <OnlineCourses />
        <OfflineCourses />
        <StudyMaterial />
        <TestSeries />
      </div>
    </div>
  );
}

export function OnlineCourses() {
  let onlineCourses = [
    {
      title: "Interior Design Course",
      description:
        "Master the art of interior design by learning how to create cohesive room themes, apply color theory, and develop skills to elevate your design perspective.",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "1399",
    },
    {
      title: "Graphic Design Course",
      description:
        "Learn the fundamentals of visual communication, typography, and branding using tools like Adobe Photoshop and Illustrator to create stunning digital designs.",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "1599",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "799",
    },
  ];
  return (
    <div className="my-[80px] border-b-2 border-gray-300">
      <h3 className="text-gray-900 font-bold text-[35px] lg:my-10 my-5">
        Online <span className="text-red-600"> Best Selling </span> Courses
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-10 lg:my-[40px] ">
        {onlineCourses.map((item) => {
          return (
            <div className="rounded-[10px] shadow-lg lg:h-[500px] h-auto">
              <img
                className="w-full h-[40%] object-cover rounded-t-[10px]"
                src={item.image}
                alt=""
              />
              <div className="p-6">
                <h2 className="text-[23px] font-semibold mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                  <FaIndianRupeeSign /> {item.price}/-
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[10px] rounded-lg hover:text-white font-medium">
                    Add to Cart
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 transition duration-300 cursor-pointer py-[10px] rounded-lg text-white font-medium">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export function OfflineCourses() {
  let OfflineCourse = [
    {
      title: "Interior Design Course",
      description:
        "Master the art of interior design by learning how to create cohesive room themes, apply color theory, and develop skills to elevate your design perspective.",
      image:
        "https://www.shutterstock.com/image-photo/training-courses-business-concept-stack-260nw-549736798.jpg",
      price: "1399",
    },
    {
      title: "Graphic Design Course",
      description:
        "Learn the fundamentals of visual communication, typography, and branding using tools like Adobe Photoshop and Illustrator to create stunning digital designs.",
      image:
        "https://www.shutterstock.com/image-photo/training-courses-business-concept-stack-260nw-549736798.jpg",
      price: "1599",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://www.shutterstock.com/image-photo/training-courses-business-concept-stack-260nw-549736798.jpg",
      price: "799",
    },
  ];
  return (
    <div className="my-[80px] border-b-2 border-gray-300">
      <h3 className="text-gray-900 font-bold text-[35px] lg:my-10 my-5">
        Offline <span className="text-red-600"> Best Selling </span> Courses
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-10 lg:my-[40px] ">
        {OfflineCourse.map((item) => {
          return (
            <div className="rounded-[10px] shadow-lg lg:h-[500px] h-auto">
              <img
                className="w-full h-[40%] object-cover rounded-t-[10px]"
                src={item.image}
                alt=""
              />
              <div className="p-6">
                <h2 className="text-[23px] font-semibold mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                  <FaIndianRupeeSign /> {item.price}/-
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[10px] rounded-lg hover:text-white font-medium">
                    Add to Cart
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 transition duration-300 cursor-pointer py-[10px] rounded-lg text-white font-medium">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export function StudyMaterial() {
  let studyMaterialCourses = [
    {
      title: "Interior Design Course",
      description:
        "Master the art of interior design by learning how to create cohesive room themes, apply color theory, and develop skills to elevate your design perspective.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFSxQxzOxDu-OvGxtjEBNKTh5wi7N0VUPsA&s",
      price: "1399",
    },
    {
      title: "Graphic Design Course",
      description:
        "Learn the fundamentals of visual communication, typography, and branding using tools like Adobe Photoshop and Illustrator to create stunning digital designs.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFSxQxzOxDu-OvGxtjEBNKTh5wi7N0VUPsA&s",
      price: "1599",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFSxQxzOxDu-OvGxtjEBNKTh5wi7N0VUPsA&s",
      price: "799",
    },
  ];
  return (
    <div className="my-[80px] border-b-2 border-gray-300">
      <h3 className="text-gray-900 font-bold text-[35px] lg:my-10 my-5">
        Study Material <span className="text-red-600"> Best Selling </span> Courses
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-10 lg:my-[40px] ">
        {studyMaterialCourses.map((item) => {
          return (
            <div className="rounded-[10px] shadow-lg lg:h-[500px] h-auto">
              <img
                className="w-full h-[40%] object-cover rounded-t-[10px]"
                src={item.image}
                alt=""
              />
              <div className="p-6">
                <h2 className="text-[23px] font-semibold mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                  <FaIndianRupeeSign /> {item.price}/-
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[10px] rounded-lg hover:text-white font-medium">
                    Add to Cart
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 transition duration-300 cursor-pointer py-[10px] rounded-lg text-white font-medium">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export function TestSeries() {
  let TestSeriesCourses = [
    {
      title: "Interior Design Course",
      description:
        "Master the art of interior design by learning how to create cohesive room themes, apply color theory, and develop skills to elevate your design perspective.",
      image:
        "https://www.questpond.com/img/2.png",
      price: "1399",
    },
    {
      title: "Graphic Design Course",
      description:
        "Learn the fundamentals of visual communication, typography, and branding using tools like Adobe Photoshop and Illustrator to create stunning digital designs.",
      image:
        "https://www.questpond.com/img/2.png",
      price: "1599",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://www.questpond.com/img/2.png",
      price: "799",
    },
  ];

  return (
    <div className="my-[80px] border-b-2 border-gray-300">
      <h3 className="text-gray-900 font-bold text-[35px] lg:my-10 my-5">
        Test Series <span className="text-red-600"> Best Selling </span> Courses
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-10 lg:my-[40px] ">
        {TestSeriesCourses.map((item) => {
          return (
            <div className="rounded-[10px] shadow-lg lg:h-[500px] h-auto">
              <img
                className="w-full h-[40%] object-cover rounded-t-[10px]"
                src={item.image}
                alt=""
              />
              <div className="p-6">
                <h2 className="text-[23px] font-semibold mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                  <FaIndianRupeeSign /> {item.price}/-
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[10px] rounded-lg hover:text-white font-medium">
                    Add to Cart
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 transition duration-300 cursor-pointer py-[10px] rounded-lg text-white font-medium">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}