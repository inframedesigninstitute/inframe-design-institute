export default function TrustedPlatform() {
    let data = [
        { heading: '15 Million+', description: 'Happy Students', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYseLiV-Hv-lXlyi6Yh9raMcOFK8-tsVNg8g&s' },
        { heading: '24000 +', description: 'Mock Tests', src: 'https://5.imimg.com/data5/SELLER/Default/2023/5/309686711/CK/IQ/EN/8675179/online-mock-test-software.jpg' },
        { heading: '14000 +', description: 'Video Lectures', src: 'https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d70e/671f5d9531cc552d2aa3f4de_b8406cb4-5bea-4c23-a047-2e245afa50a0.jpeg' },
        { heading: '80000 +', description: 'Practice Papers', src: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202107/Capture_13_1200x768.png?size=690:388' },
    ]
    return (
        <div className="w-full lg:p-0 p-3">
            <div className="max-w-[1320px] mx-auto lg:py-[60px] py-[30px]">
                <h3 className="text-[35px] text-center font-bold">A Platform Trusted by Students</h3>
                <p className="text-center mt-2 text-[18px]">Inframe is not just a platform it is a opportunity to students to upskill and improve yourself.  </p>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center lg:gap-10 gap-5 my-[30px] ">
                    {data.map((item, index) => {
                        return (
                            <div key={index}
                                style={{ backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                className="w-full rounded-[10px] lg:rounded-[25px] flex h-[300px] items-center justify-center relative overflow-hidden shadow-lg group transition-transform duration-500 hover:scale-[1.01]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-[10px] lg:rounded-[25px] z-10"></div>

                                <div className="z-40 ">
                                    <h3 className="text-center text-white font-semibold lg:text-[40px] text-[50px] mb-2">{item.heading}</h3>
                                    <p className="text-center text-white text-[20px]">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}