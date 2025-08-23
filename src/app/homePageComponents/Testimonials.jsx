'use client'
import Slider from "react-slick"

export default function Testimonials() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        pushOnHover: true,
    };

    let data = [
        {
            name: 'KANIKA',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae debitis, quae repellendus id deleniti pariatur eveniet voluptatum quisquam delectus ipsum non ullam eos ut quas cum, expedita dolores mollitia.',
            src: '/testimonial0.mp4',
        },
        {
            name: 'ROHAN',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae debitis, quae repellendus id deleniti pariatur eveniet voluptatum quisquam delectus ipsum non ullam eos ut quas cum, expedita dolores mollitia.',
            src: '/testimonial1.mp4',
        },
        {
            name: 'MANISH',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae debitis, quae repellendus id deleniti pariatur eveniet voluptatum quisquam delectus ipsum non ullam eos ut quas cum, expedita dolores mollitia.',
            src: '/testimonial2.mp4',
        },
    ];

    return (
        <div className="w-full bg-gray-50 lg:p-0 p-5">
            <div className="max-w-[1320px] mx-auto lg:py-[40px] py-[20px]">
                <h3 className="text-[35px] font-extrabold text-gray-900 mb-12 text-center">
                    Happy Student <span className="text-red-600">Testimonials</span>
                </h3>

                {data.length >= 1 ?
                    <div className="max-w-7xl mx-auto rounded-4xl">
                        <Slider {...settings}>
                            {

                                data.map((item, index) => (
                                    <div
                                        key={index}
                                        className=""
                                    >
                                        <video autoPlay
                                            muted
                                            playsInline
                                            className=" mx-auto lg:h-[400px] rounded-[30px] " src={item.src} ></video>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                    :
                    <div className="flex justify-center items-center h-auto ">
                        <div className="w-[70px] h-[70px] border-4 border-gray-300 border-t-gray-700 rounded-full animate-spin"></div>
                    </div>

                }
            </div>
        </div>
    );
}
