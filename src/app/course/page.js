'use client'
import { useState } from "react"

export default function Course() {
    let tabs = ['Online Course', 'Offline Course', 'Test Series', 'Study Materials']
    let courseData = [
        {}
    ]
    const [activeTab, setActiveTab] = useState('onlineCourse')
    return (
        <div className="w-full ">
            <div className="max-w-[1320px] mx-auto lg:py-[60px] py-[30px]">
                <div className="flex items-center gap-10 justify-center">
                    {tabs.map((item, index) => {
                        return (
                            <button key={index} className="bg-gray-300 hover:bg-red-500 duration-300 hover:text-white w-[200px] py-3 rounded-[5px] cursor-pointer">{item}</button>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}