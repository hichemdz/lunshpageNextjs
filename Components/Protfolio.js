import React, { useContext, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";


import Section from "./Section";
import { ContextData } from "../Context";

const ItemSlide = ({ img, type, title, handelCLick }) => (
  <div className="space-y-2  ml-3" onClick={handelCLick}>
    <Image width='440' height='356' className="w-full" src={img} />
    <div className="max-w-xs">
      <h4 className="text-sm text-black text-opacity-50">{type}</h4>
      <h3>{title.slice(0, 48)} </h3>
    </div>
  </div>
);

const ItemSlideD = ({ img }) => (
  <div className="space-y-2  ml-3">
    <img width={294} height={238}  className="w-full" src={img} />
  </div>
);
const Details = ({ settings2, setShowDetails, showDetails,indexWork,data }) => (
  <div
    className={
      "bg-black bg-opacity-80 fixed z-50 top-0 left-0 w-full   duration-200 transition-all ease-in-out delay-150 " +
      (!showDetails ? " opacity-0 invisible" : "opacity-100 visible")
    }
  >
    <button
      onClick={() => setShowDetails(0)}
      className="text-white absolute top-0 right-0 z-50 lg:right-11 text-2xl opacity-75 hover:opacity-100 w-16 h-16"
    >
      x 
    </button>
    <div className="container bg-gray-900 relative flex flex-row items-center overflow-y-auto py-16 h-screen">
      <div className="w-full flex flex-col lg:flex-row space-y-8 items-center md:space-x-12">
        <div className="w-full  lg:max-w-lg">
          <Slider {...settings2}>
            {
              data[indexWork].images.map((v,i)=> <ItemSlideD key={i} img={v} />)
            }
           
           
          </Slider>
        </div>
        <div className="w-full  lg:max-w-xl  text-white space-y-8">
          <h3 className="capitalize text-2xl leading-relaxed">
            A glimpse of what Nu Terra Labs, can do for you
          </h3>
          <p className=" capitalize leading-portfolio text-md   text-opacity-80">
            {data[indexWork].description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Arrow = (handelCLick) =>  <button >ok</button>
const Protfolio = () => {
  const { portfolio } = useContext(ContextData);
  const { title, description, items } = portfolio;
  const [showDetails, setShowDetails] = useState(false);
  const [indexWork, setSIndexWork] = useState(0);
  const refSliser = useRef(null)
  const next = () =>  {
   // console.log(refSliser);
   refSliser.slickNext();
  }
 const previous = () => {
  //refSliser.slickPrev();
  }
  const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handelCLick = (index) => {
    setSIndexWork(index);
    setShowDetails(true)
  }
  return (
    <Section myRef={3} className="min-h-screen flex items-center w-full">
      <Details
        data={items}
        indexWork={indexWork}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
        settings2={settings2}
      />

      <div className="space-y-8">
        <div className="lg:flex  items-center space-y-8 lg:space-x-4 lg:space-y-0">
          <div className="w-full space-y-6">
            <h3 className=" mx-auto  text-center lg:text-left lg:mx-0 max-w-md capitalize text-2xl leading-relaxed">
              {title} 
              
            </h3>
            <p className="mx-auto   text-center lg:text-left capitalize leading-relaxed text-sm max-w-lg text-black text-opacity-80">
              {description}
            </p>
              <div class=' mx-auto max-w-lg text-center lg:text-left'>
                  <a className="w-full text-regal-blue text-sm" href="https://agri.nuterralabs.com">
                    Looking for our agricultural solutions? Please click here
                  </a>
                  <span className="block w-16  py-1/8 mt-2 bg-regal-blue "></span>
                </div>

          </div>
          <div className="max-w-2xl w-full">
            <Slider ref={refSliser} {...settings}>
              {items.map((v, i) => {
              
               return (
                <ItemSlide
                  key={i}
                  img={v.thumbnails || '/assest/project/c.jpg'}
                  title={v.title}
                  type={v.serviceName}
                  handelCLick={()=>handelCLick(i)}
                />
              )
              })}
            </Slider>
            
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          <img className="mx-auto w-36" src={'/assest/img/brands/b1.png'} />
          <img className="mx-auto w-36" src={'/assest/img/brands/b2.png'} />
          <img className="mx-auto w-20 md:w-16" src={'/assest/img/brands/b3.png'} />
          <img className="mx-auto w-20 md:w-16" src={'/assest/img/brands/b4.png'} />
        </div>
      </div>
    </Section>
  );
};

export default Protfolio;
