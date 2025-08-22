import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function FooterNew() {
    return (
        <div className="w-full lg:py-[30px] py-[20px bg-black lg:px-6 px-3 " >
            <div className="max-w-[1320] mx-auto lg:p-0 p-3">
                <div className="grid md:grid-cols-[60%_auto] items-center gap-10">
                    <div className="text-white md:border-r-[1] pr-3 border-white">
                        <h2 className="text-[24px] font-semibold uppercase border-b-[1] w-[150px] ">About Us</h2>
                        <p className="my-[15px] tracking-wider text-[18px]">InFrame Design Institute (IDI), established in 2013, is a premier
                            design education center located in Jodhpur, Rajasthan. Founded by a
                            group of artists, IDI offers comprehensive coaching for various
                            design entrance examinations, including NIFT, NID, and UCEED.
                        </p>
                        <p className="my-[5px]">EMAIL : <span className="hover:underline duration-100 cursor-pointer">Inframe@gmail.com</span></p>
                        <p className="my-[5px]">PHONE : <span className="hover:underline duration-100 cursor-pointer">+91-8079025145</span></p>
                        <ul className="flex flex-wrap gap-5 items-center my-[15px] text-[18px]">
                            <li className="cursor-pointer hover:text-gray-300 duration-100">Terms and condition &nbsp; | </li>
                            <li className="cursor-pointer hover:text-gray-300 duration-100">Privacy Policy &nbsp; | </li>
                            <li className="cursor-pointer hover:text-gray-300 duration-100">Refund Policy &nbsp; |</li>
                            <li className="cursor-pointer hover:text-gray-300 duration-100">Contact Us &nbsp; |</li>
                            <li className="cursor-pointer hover:text-gray-300 duration-100">About Us</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h3 className="text-[22px] font-semibold uppercase">Social Channels</h3>
                        <div className="flex items-center gap-5 text-[25px] cursor-pointer my-[10px] mr-1">
                            <FaYoutube className="hover:text-gray-400 duration-100" />
                            <FaFacebookSquare className="hover:text-gray-400 duration-100" />
                            <RiInstagramFill className="hover:text-gray-400 duration-100" />
                            <FaTwitterSquare className="hover:text-gray-400 duration-100" />
                            <FaLinkedin className="hover:text-gray-400 duration-100" />
                        </div>
                        <h3 className="text-[20px] mt-[25px] font-semibold uppercase">Get the app for better Experience</h3>
                        <img className="w-[180] -ml-3 cursor-pointer object-cover" src="https://cdn.toprankers.net.in/images/google-play-badge1699151081.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}