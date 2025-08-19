'use client'
import { useParams } from "next/navigation"

export default function CoursePage() {
    let slug = useParams().slug
    console.log(slug)
    return (
        <div className="w-full ">
            <div className="max-w-[1320px] mx-auto px-6 lg:py-[30px] py-[20px]">
                <h2 className="bg-red-600 w-[full] capitalize text-[22px] mb-4 text-white px-3 py-2 -skew-x-[5deg] ml-2">{slug.replaceAll('-', ' ')}</h2>
                <div className="my-[30px]">
                    <div className="w-[550px] h-[320px] shadow-2xl rounded-[5px] border-0 p-5 ">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jDptwnCtrqM" title="Everything About NIFT 2025 Exam | Eligibility, Seats &amp; Fee Structure | All about NIFT 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}