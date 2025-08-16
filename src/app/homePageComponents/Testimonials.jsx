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
        autoplaySpeed: 3000,
    };

    let data = [
        { name: 'KANIKA', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae debitis, quae repellendus id deleniti pariatur eveniet voluptatum quisquam delectus ipsum non ullam eos ut quas cum, expedita dolores mollitia.', src: 'https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M=', },
        { name: 'ROHAN', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae debitis, quae repellendus id deleniti pariatur eveniet voluptatum quisquam delectus ipsum non ullam eos ut quas cum, expedita dolores mollitia.', src: 'https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg', },
        { name: 'MANISH', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae debitis, quae repellendus id deleniti pariatur eveniet voluptatum quisquam delectus ipsum non ullam eos ut quas cum, expedita dolores mollitia.', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcccKNqXWCKdFIiJhndpIfWw_I8hfzbM7rQ&s', },

    ]
    return (
        <div className="w-full lg:p-0 p-3">
            <div className="max-w-[1320px] mx-auto lg:py-[60px] py-[30px]">
                <h3 className="text-[35px] font-bold ">Happy Student <span className="text-red-600">Testimonials</span></h3>
                <Slider {...settings}>

                    {data.map((item, index) => {
                        return (
                            <div key={index} className="bg-gray-200  rounded-[10px] w-full h-auto lg:h-[250px] relative mt-[100px]">
                                <img className="w-[120px] h-[120px] absolute -top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full object-center object-cover" src={item.src} alt="" />
                                <div className="px-5 py-15">
                                    <h3 className="text-[25px]">{item.name}</h3>
                                    <p className="mt-4">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>


            </div>
        </div>
    )
}