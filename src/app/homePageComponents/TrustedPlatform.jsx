'use client'
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function TrustedPlatform() {
    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current.forEach((card) => {
            if (card) {
                gsap.fromTo(
                    card,
                    { y: '-10px', opacity: 0 },
                    {
                        y: '0px',
                        opacity: 1,
                        duration: 0.5,   // 500 seconds is too long, changed to 0.5 seconds
                        ease: 'power1.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 80%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        });
    }, []);

    let data = [
        {
            heading: "15 Million+",
            description: "Happy Students",
            src: "/happyStudents.jpg",
        },
        {
            heading: "24000 +",
            description: "Mock Tests",
            src: "/mockTest.JPG",
        },
        {
            heading: "14000 +",
            description: "Video Lectures",
            src: "https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d70e/671f5d9531cc552d2aa3f4de_b8406cb4-5bea-4c23-a047-2e245afa50a0.jpeg",
        },
        {
            heading: "80000 +",
            description: "Practice Papers",
            src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202107/Capture_13_1200x768.png?size=690:388",
        },
    ];

    return (
        <div className="w-full px-6 p-3">
            <div className="max-w-[1320px] mx-auto lg:py-[60px] py-[30px]">
                <div className="mb-[55px]">
                    <h3 className="text-[35px] text-center font-bold">
                        A Platform Trusted by Students
                    </h3>
                    <p className="text-center mt-4 text-[18px]">
                        Inframe is not just a platform it is an opportunity for students to
                        upskill and improve yourself.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-center lg:gap-12 gap-5 my-[30px]">
                    {data.map((item, index) => {
                        return (
                            <div
                                ref={(el) => (cardsRef.current[index] = el)}
                                key={index}
                                style={{
                                    backgroundImage: `url(${item.src})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                className="w-full rounded-[10px] lg:rounded-[25px] flex h-[300px] items-center justify-start p-10 relative overflow-hidden shadow-lg"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/5 rounded-[10px] lg:rounded-[25px] z-10"></div>

                                <div className="z-40 ">
                                    <h3 className="text-white font-semibold lg:text-[45px] text-[30px] mb-2">
                                        {item.heading}
                                    </h3>
                                    <p className="text-white text-[20px]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
