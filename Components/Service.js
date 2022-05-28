import React,{useContext,useState,useRef} from "react";
import Image from "next/image";
import { ContextData } from "../Context";
import Slider from "react-slick";
import Section from "./Section";

const Item = ({ label, Icon, index, slideIndex, handelNav }) => (
  <li
    onClick={handelNav}
    className={
      "w-full cursor-pointer flex justify-center pb-5 border-gray-800 text-gray-800 " +
      (index == slideIndex ? " border-b-4" : "border-b opacity-90 ")
    }
  >
    <button className="flex items-center space-x-2">
      <Icon className='w-6 h-6' />
      <span className={"text-md " + (index == slideIndex && "font-medium")}>
        {label}
      </span>
    </button>
  </li>
);

const SliderService = ({ title, description, img, calback }) => {
  return (
    <div className=" py-3 items-center  lg:flex flex-row-reverse ">
      <div className="w-full flex justify-center ">
        <div className=" text-center lg:text-left max-w-xl space-y-8">
          <h3 className="text-3xl ">{title}</h3>
          <p>{description}</p>
          <button className="font-bold text-lg" onClick={calback}>
            Give Super Powers to the User
          </button>
        </div>
      </div>
      <div className="mt-3 w-full flex justify-center items-center">
        <Image width='448' height='395' className="w-full max-w-md" src={img} />
      </div>
    </div>
  );
};
const Service = () => {
  const {dataService} = useContext(ContextData)
  const slide = useRef(null);
  const [slideIndex, setslideIndex] = useState(0);

  const settings = () => ({
    dots: false,
    infinite: true,
    margin: 0,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  const handelNav = (key) => {
    slide.current.slickGoTo(key);
    setslideIndex(key);
  };

  return (
    <Section className="py-8" myRef={1}>
      <ul className=" mb-8 w-full grid grid-cols-2 lg:grid-cols-4 gap-y-8 items-center ">
        {dataService.map((i, key) => (
          <Item
            Icon={i.icon}
            handelNav={() => handelNav(key)}
            slideIndex={slideIndex}
            index={key}
            key={key}
            label={i.label}
          />
        ))}
      </ul>
      <Slider ref={slide} {...settings}>

        {
          [...Array(15)].map( (v,i) =>(
            
            <SliderService
              key={i}
              title="Lorem Ipsum is simply dummy text"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum"
              img={'/assest/img/s1.jpg'}
            />
          ))
        }

        
       
      </Slider>
    </Section>
  );
};

export default Service;
