'use client'
import Slider from "react-slick"

export default function Testimonials() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        adaptiveHeight: true,
    };

    let data = [
        {
            name: 'KANIKA',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae debitis, quae repellendus id deleniti pariatur eveniet voluptatum quisquam delectus ipsum non ullam eos ut quas cum, expedita dolores mollitia.',
            src: 'https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M=',
        },
        {
            name: 'ROHAN',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae debitis, quae repellendus id deleniti pariatur eveniet voluptatum quisquam delectus ipsum non ullam eos ut quas cum, expedita dolores mollitia.',
            src: 'https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg',
        },
        {
            name: 'MANISH',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae debitis, quae repellendus id deleniti pariatur eveniet voluptatum quisquam delectus ipsum non ullam eos ut quas cum, expedita dolores mollitia.',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcccKNqXWCKdFIiJhndpIfWw_I8hfzbM7rQ&s',
        },
    ];

    return (
        <div className="w-full lg:p-0 p-5">
            <div className="max-w-[1320px] mx-auto lg:py-[30px] py-[20px]">
                <h3 className="text-[35px] font-extrabold text-gray-900 mb-12 text-center">
                    Happy Student <span className="text-red-600">Testimonials</span>
                </h3>

                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl mt-20 shadow-md relative px-10 pt-20 pb-10"
                        >
                            <img
                                className="w-28 h-28 rounded-full border-4 border-white shadow-lg absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
                                src={item.src}
                                alt={`${item.name} photo`}
                                loading="lazy"
                            />
                            <h3 className="text-2xl font-semibold text-center text-gray-900 mt-8">
                                {item.name}
                            </h3>
                            <p className="mt-4  text-gray-700 leading-relaxed tracking-tight text-justify lg:text-center max-w-[600px] mx-auto">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
