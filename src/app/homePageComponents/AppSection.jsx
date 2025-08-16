export default function AppSection() {
    return (
        <div className="w-full lg:p-0 p-3 lg:py-[60px] py-[30px]">
            <div className="max-w-[1320px] grid lg:grid-cols-[70%_auto] items-center mx-auto bg-gray-100 lg:p-10 p-5  rounded-[10px] ">
                <div>
                    <h3 className="lg:text-[30px] text-[25px] lg:text-start text-center font-bold">Download Our App For Better Experience</h3>
                    <ul>
                        <li className="my-[15px] text-[20px]">Live & recorded classes available at ease</li>
                        <li className="my-[15px] text-[20px]">Dashboard for progress tracking</li>
                        <li className="my-[15px] text-[20px]">Lakhs of practice questions</li>
                    </ul>
                    <div className="flex items-center gap-5 my-[25px]">
                        <img className="lg:w-[200px] w-[120px] cursor-pointer object-cover" src="https://www.pw.live/_next/static/media/google-play-badge.171251c3.webp" alt="" />
                        <img className="lg:w-[200px] w-[120px] cursor-pointer object-cover" src="https://www.pw.live/_next/static/media/apple-store-badge.acb101ce.webp" alt="" />
                    </div>
                </div>
                <div className="lg:w-[350px]   h-[500px]">
                    <img className="w-full h-full object-cover rounded-[10px]" src="https://www.mindinventory.com/blog/wp-content/uploads/2018/12/benefits-of-mobile-app-for-business.webp" alt="" />
                </div>
            </div>
        </div>
    )
}