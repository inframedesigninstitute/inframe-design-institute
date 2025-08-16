export default function MegaMenu({ MegaMenuOpen, setMegaMenuOpen }) {
    //group-hover:visible invisible scale-y-0 group-hover:scale-y-100 
    return (
        <div onClick={(e) => e.stopPropagation()} className={`${MegaMenuOpen ? 'visible scale-y-100 opacity-100' : 'invisible scale-y-0 opacity-80'} absolute duration-400 transition-all ease-in-out top-[100%] 
        left-[170px] bg-white shadow-2xl rounded-b-[15px] w-[900px] origin-top h-[auto] z-[100]
         p-5 lg:block hidden text-gray-900`}>
            <div className="grid grid-cols-[40%_auto] gap-5" >
                <div className="border-0">
                    <ul>
                        <li className="text-start text-[18px] my-[25px] py-[15px] px-3 rounded-[10px] duration-500 hover:bg-gray-200 relative group">Online Course
                            <div className="group-hover:visible shadow-xl h-full scale-y-10 group-hover:scale-y-100 origin-top invisible p-5 absolute top-0 left-[110%] transition-all ease-in-out duration-400 ">dfdj</div>
                        </li>
                        <li className="text-start text-[18px] my-[25px] py-[15px] px-3 rounded-[10px] duration-500 hover:bg-gray-200 ">Offline Course</li>
                        <li className="text-start text-[18px] my-[25px] py-[15px] px-3 rounded-[10px] duration-500 hover:bg-gray-200 ">Study Material</li>
                        <li className="text-start text-[18px] my-[25px] py-[15px] px-3 rounded-[10px] duration-500 hover:bg-gray-200 ">Test Series</li>
                        <li className="text-start text-[18px] my-[25px] py-[15px] px-3 rounded-[10px] duration-500 hover:bg-gray-200 ">Free Resources</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}