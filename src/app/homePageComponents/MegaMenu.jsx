import { useState } from "react"

export default function MegaMenu({ MegaMenuOpen, setMegaMenuOpen }) {
    let [activeTab, setActiveTab] = useState('onlineCourse')

    //group-hover:visible invisible scale-y-0 group-hover:scale-y-100 
    return (
        <div onClick={(e) => e.stopPropagation()} className={`${MegaMenuOpen ? 'visible scale-y-100 opacity-100' : 'invisible scale-y-0 opacity-80'} absolute duration-400 transition-all ease-in-out top-[100%] 
        left-[170px] bg-white shadow-2xl rounded-b-[15px] w-[900px] origin-top h-[auto] z-[100]
         p-5 lg:block hidden text-gray-900`}>
            <div className="grid grid-cols-[30%_auto] gap-5" >
                <div className="border-0">
                    <ul>
                        <li onClick={() => setActiveTab('onlineCourse')} className="text-start text-[18px] my-[25px] py-[15px] px-3 rounded-[10px] duration-500 hover:bg-gray-200 relative group">Online Course
                        </li>
                        <li onClick={() => setActiveTab('offlineCourse')} className="text-start text-[18px] my-[25px] py-[15px] px-3 rounded-[10px] duration-500 hover:bg-gray-200 ">Offline Course</li>
                        <li onClick={() => setActiveTab('studyMaterial')} className="text-start text-[18px] my-[25px] py-[15px] px-3 rounded-[10px] duration-500 hover:bg-gray-200 ">Study Material</li>
                        <li onClick={() => setActiveTab('testSeries')} className="text-start text-[18px] my-[25px] py-[15px] px-3 rounded-[10px] duration-500 hover:bg-gray-200 ">Test Series</li>
                        <li onClick={() => setActiveTab('freeRes')} className="text-start text-[18px] my-[25px] py-[15px] px-3 rounded-[10px] duration-500 hover:bg-gray-200 ">Free Resources</li>
                    </ul>
                </div>
                <div className="h-[700px] overflow-y-scroll">
                    {activeTab === 'onlineCourse' && <OnlineCourse />}
                    {activeTab === 'offlineCourse' && <OfflineCourse />}
                    {activeTab === 'studyMaterial' && <StudyMaterial />}
                    {activeTab === 'testSeries' && <TestSeries />}
                    {activeTab === 'freeRes' && <FreeRes />}
                </div>
            </div>
        </div>
    )
}

export function OnlineCourse() {
    let ugCourse = [
        'Design Course',
        'graphic Course',
        'Interior Course',
        'Design Course',
        'Design Course',
    ]
    return (
        <div className="p-5">
            <div className="w-full h-auto mb-10 origin-top transition-all ease-in-out duration-400 ">
                <h3 className="border-red-500 border-[2] text-red-500  rounded-xl  w-full px-[10px] py-[14px]">UG Exams</h3>
                <div className="grid grid-cols-3 gap-7 mt-5 w-full">
                    {ugCourse.map((item, index) => {
                        return (
                            <button key={index} className="text-start bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-[12px] cursor-pointer text-[15px] py-[13px] ">{item}</button>
                        )
                    })}
                </div>
            </div>
            <div className="w-full h-auto mb-10 origin-top transition-all ease-in-out duration-400 ">
                <h3 className="border-red-500 border-[2] text-red-500  rounded-xl  w-full px-[10px] py-[14px]">UG Exams</h3>
                <div className="grid grid-cols-3 gap-7 mt-5 w-full">
                    {ugCourse.map((item, index) => {
                        return (
                            <button key={index} className="text-start bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-[12px] cursor-pointer text-[15px] py-[13px] ">{item}</button>
                        )
                    })}
                </div>
            </div>
            <div className="w-full h-auto mb-10 origin-top transition-all ease-in-out duration-400 ">
                <h3 className="border-red-500 border-[2] text-red-500  rounded-xl  w-full px-[10px] py-[14px]">UG Exams</h3>
                <div className="grid grid-cols-3 gap-7 mt-5 w-full">
                    {ugCourse.map((item, index) => {
                        return (
                            <button key={index} className="text-start bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-[12px] cursor-pointer text-[15px] py-[13px] ">{item}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export function OfflineCourse() {
    let ugCourse = [
        'Design Course',
        'Design Course',
        'Design Course',
        'Design Course',
    ]
    return (
        <div className="p-5">
            <div className="w-full h-auto mb-10 origin-top transition-all ease-in-out duration-400 ">
                <h3 className="border-red-500 border-[2] text-red-500  rounded-xl  w-full px-[10px] py-[14px]">UG Exams</h3>
                <div className="grid grid-cols-3 gap-7 mt-5 w-full">
                    {ugCourse.map((item, index) => {
                        return (
                            <button key={index} className="text-start bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-[12px] cursor-pointer text-[15px] py-[13px] ">{item}</button>
                        )
                    })}
                </div>
            </div>
            <div className="w-full h-auto mb-10 origin-top transition-all ease-in-out duration-400 ">
                <h3 className="border-red-500 border-[2] text-red-500  rounded-xl  w-full px-[10px] py-[14px]">PG Exams</h3>
                <div className="grid grid-cols-3 gap-7 mt-5 w-full">
                    {ugCourse.map((item, index) => {
                        return (
                            <button key={index} className="text-start bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-[12px] cursor-pointer text-[15px] py-[13px] ">{item}</button>
                        )
                    })}
                </div>
            </div>
            <div className="w-full h-auto mb-10 origin-top transition-all ease-in-out duration-400 ">
                <h3 className="border-red-500 border-[2] text-red-500  rounded-xl  w-full px-[10px] py-[14px]">Short Courses</h3>
                <div className="grid grid-cols-3 gap-7 mt-5 w-full">
                    {ugCourse.map((item, index) => {
                        return (
                            <button key={index} className="text-start bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-[12px] cursor-pointer text-[15px] py-[13px] ">{item}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export function StudyMaterial() {
    let ugCourse = [
        'Design Course',
        'graphic Course',
        'Interior Course',
        'Design Course',
        'Design Course',
        'Design Course',
    ]
    return (
        <div className="p-5">
            <div className="w-full h-auto mb-10 origin-top transition-all ease-in-out duration-400 ">
                <h3 className="border-red-500 border-[2] text-red-500  rounded-xl  w-full px-[10px] py-[14px]">UG Exams</h3>
                <div className="grid grid-cols-3 gap-7 mt-5 w-full">
                    {ugCourse.map((item, index) => {
                        return (
                            <button key={index} className="text-start bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-[12px] cursor-pointer text-[15px] py-[13px] ">{item}</button>
                        )
                    })}
                </div>
            </div>
            <div className="w-full h-auto mb-10 origin-top transition-all ease-in-out duration-400 ">
                <h3 className="border-red-500 border-[2] text-red-500  rounded-xl  w-full px-[10px] py-[14px]">UG Exams</h3>
                <div className="grid grid-cols-3 gap-7 mt-5 w-full">
                    {ugCourse.map((item, index) => {
                        return (
                            <button key={index} className="text-start bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-[12px] cursor-pointer text-[15px] py-[13px] ">{item}</button>
                        )
                    })}
                </div>
            </div>
            <div className="w-full h-auto mb-10 origin-top transition-all ease-in-out duration-400 ">
                <h3 className="border-red-500 border-[2] text-red-500  rounded-xl  w-full px-[10px] py-[14px]">UG Exams</h3>
                <div className="grid grid-cols-3 gap-7 mt-5 w-full">
                    {ugCourse.map((item, index) => {
                        return (
                            <button key={index} className="text-start bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-[12px] cursor-pointer text-[15px] py-[13px] ">{item}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export function TestSeries() {
    let ugCourse = [
        'Design Course',
        'graphic Course',
        'Interior Course',
        'Design Course',
        'Design Course',
    ]
    return (
        <div className="p-5">
            <div className="w-full h-auto mb-10 origin-top transition-all ease-in-out duration-400 ">
                <h3 className="border-red-500 border-[2] text-red-500  rounded-xl  w-full px-[10px] py-[14px]">UG Exams</h3>
                <div className="grid grid-cols-3 gap-7 mt-5 w-full">
                    {ugCourse.map((item, index) => {
                        return (
                            <button key={index} className="text-start bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-[12px] cursor-pointer text-[15px] py-[13px] ">{item}</button>
                        )
                    })}
                </div>
            </div>
            <div className="w-full h-auto mb-10 origin-top transition-all ease-in-out duration-400 ">
                <h3 className="border-red-500 border-[2] text-red-500  rounded-xl  w-full px-[10px] py-[14px]">UG Exams</h3>
                <div className="grid grid-cols-3 gap-7 mt-5 w-full">
                    {ugCourse.map((item, index) => {
                        return (
                            <button key={index} className="text-start bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-[12px] cursor-pointer text-[15px] py-[13px] ">{item}</button>
                        )
                    })}
                </div>
            </div>
            <div className="w-full h-auto mb-10 origin-top transition-all ease-in-out duration-400 ">
                <h3 className="border-red-500 border-[2] text-red-500  rounded-xl  w-full px-[10px] py-[14px]">UG Exams</h3>
                <div className="grid grid-cols-3 gap-7 mt-5 w-full">
                    {ugCourse.map((item, index) => {
                        return (
                            <button key={index} className="text-start bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-[12px] cursor-pointer text-[15px] py-[13px] ">{item}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export function FreeRes() {
    let ugCourse = [
        'Design Course',
        'graphic Course',
        'Interior Course',
        'Design Course',
        'Design Course',
    ]
    return (
        <div className="p-5">
            <div className="w-full h-auto mb-10 origin-top transition-all ease-in-out duration-400 ">
                <h3 className="border-red-500 border-[2] text-red-500  rounded-xl  w-full px-[10px] py-[14px]">UG Exams</h3>
                <div className="grid grid-cols-3 gap-7 mt-5 w-full">
                    {ugCourse.map((item, index) => {
                        return (
                            <button key={index} className="text-start bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-[12px] cursor-pointer text-[15px] py-[13px] ">{item}</button>
                        )
                    })}
                </div>
            </div>
            <div className="w-full h-auto mb-10 origin-top transition-all ease-in-out duration-400 ">
                <h3 className="border-red-500 border-[2] text-red-500  rounded-xl  w-full px-[10px] py-[14px]">UG Exams</h3>
                <div className="grid grid-cols-3 gap-7 mt-5 w-full">
                    {ugCourse.map((item, index) => {
                        return (
                            <button key={index} className="text-start bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-[12px] cursor-pointer text-[15px] py-[13px] ">{item}</button>
                        )
                    })}
                </div>
            </div>
            <div className="w-full h-auto mb-10 origin-top transition-all ease-in-out duration-400 ">
                <h3 className="border-red-500 border-[2] text-red-500  rounded-xl  w-full px-[10px] py-[14px]">UG Exams</h3>
                <div className="grid grid-cols-3 gap-7 mt-5 w-full">
                    {ugCourse.map((item, index) => {
                        return (
                            <button key={index} className="text-start bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-[12px] cursor-pointer text-[15px] py-[13px] ">{item}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
