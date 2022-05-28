import Image from "next/image";
import Slider from "react-slick";
import Star from "../Icons/Star";
import TestIcon from "../Icons/TestIcon";
import Section from "./Section";

const Range = ({ max }) => {
  return (
    <ul className="flex space-x-1">
      {[...Array(5)].map((v, i) => {
        if (i + 1 <= max) {
          return <Star key={i} />;
        }
        return <Star key={i} type={false} />;
      })}
    </ul>
  );
};
const ItmeTestimonial = ({ img, name, title, range, comment }) => {
  return (
    <div className="md:max-w-lg p-5 bg-gray-100 space-y-4 rounded mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div>
            <Image width={64} height={64} className="w-16 h-16 rounded-full bg-gray-400" src={img} />
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-1">{name}</h3>
            <h4 className="text-sm mb-1">{title}</h4>
            <div>
              <Range max={range} />
            </div>
          </div>
        </div>
        <div>
          <TestIcon />
        </div>
      </div>
      <div>
        <p className="text-black opacity-50 text-sm leading-loose">{comment}</p>
      </div>
    </div>
  );
};
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  };
  return (
    <Section myRef={5}>
      <div className="flex items-center py-8">
        <div className="space-y-8">
          <h3 class="capitalize font-fira leading-main text-xl lg:text-4xl max-w-2xl">
            Why Choose Nu Terra Labs as your service company?
          </h3>
          <div className="flex items-center">
            <div className="w-0 lg:w-64  flex justify-center">
              <div class="hidden w-2  h-[200px]   border-l-[3px] border-dashed border-[#ccc] lg:flex"></div>
            </div>
            <div class="max-w-xl flex flex-col items-start justify-between space-y-3">
              <p class="text-sm font-normal leading-loose opacity-90">
                Shopify Partner, BigCommerce Partner, WordPress Specialists,
                &amp; WIX Partner One of our strengths is our high standards and
                appreciation of intelligent designs and process. All our work
                will consider the following elements to ensure a positive and
                unforgettable experience.
              </p>
              <p class="text-sm font-normal leading-loose opacity-90">
                Efficient, Reliable and Economical We acknowledge the importance
                of giving as many options to you in the design process to meet
                your needs and budget.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-20 hidden lg:block">
          <Image width={409} height={547} src={"/assest/img/t.png"} />
        </div>
      </div>
      <div className="">
        <Slider {...settings}>
          {[...Array(8)].map((v, i) => (
            <ItmeTestimonial
              key={i}
              img={"/assest/img/t.png"}
              title="programer"
              name="boudjafa lakhdar"
              comment=" Ordered my first mobile app development to ITSoft Solutions. I was
              inexperienced contractor but they carefully listened to my request and
              try to deliver the best quality of service."
              range={5}
            />
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Testimonial;
