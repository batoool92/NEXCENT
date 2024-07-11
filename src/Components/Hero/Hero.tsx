
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlide from "../HeroSlide/HeroSlide";

function Hero() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots:undefined) => (
        <div
          style={{
            borderRadius: "10px",
            padding: "0.7rem"
          }}
        >
          <ul style={{ margin: "1rem" }}> {dots} </ul>
        </div>
      )
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <HeroSlide />
        <HeroSlide />
        <HeroSlide />
      </Slider>
    </div>
  );
}

export default Hero;