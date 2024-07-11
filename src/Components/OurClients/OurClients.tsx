
import Slider from "react-slick";
import { data } from '../../data.ts';
import { company } from '../../types/company'


function OurClients() {
    console.log(data)

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
        ]

    };
    return (
        <div className="px-24 py-7">
            <div className="text-theme-black text-center mb-5">
                <h1 className="text-2xl font-semibold mb-3">{data[0].OurClientsSection.title}</h1>
                <p className="text-xs text-greyColor">{data[0].OurClientsSection.smallText}</p>
            </div>
            <Slider {...settings}>
                {data[0]?.OurClientsSection.Companies.map((item: company, index) => {

                    return (
                        <div key={index}>
                            <div className="mx-auto max-w-10"><img src={item.CompanyIcon} alt="" /></div>

                        </div>
                    )
                }
                )}
            </Slider>
        </div>
    );
}

export default OurClients;