import React, { useContext } from "react";
import { ContextData } from "../Context";
import Logo from "./Logo";
import Section from "./Section";
import { InlIcon, InsIcon, FbIcon, TopIcon } from "../Icons";
import Menu from "./Menu";

const Item = ({ Icon, link, label,onClick }) => {
  if (link) {
    return (
      <a className="flex items-center space-x-1" href={link} onClick={onClick}>
        {Icon && <Icon className="w-6 h-6 " />}
        {label && <p>{label}</p>}
      </a>
    );
  }
  return (
    <button className="flex items-center space-x-4">
      {Icon && <Icon className=" text-white w-6 h-6" />}
      {label && <p>{label}</p>}
    </button>
  );
};


const Description = ({ text, mediaData }) => {
  return (
    <ul className="space-y-6">
      <li>
        <Logo />
      </li>
      <li className="stroke-white flex items-center space-x-2">
        {mediaData.map((i) => (
          <Item Icon={i.icon} link={i.link} />
        ))}
      </li>
      <li>
        <p className="-mt-4 text-md leading-relaxed  lg:max-w-3xl pr-3">{text}</p>
      </li>
    </ul>
  );
};

const MenuOfferFooter = ({ data }) => {
  return (
    <ul className="text-sm  text-white space-y-5">
      {data.map((v, i) => {
        return (
          <li key={i}>
            <Item label={v} />
          </li>
        );
      })}
    </ul>
  );
};

const MenuFooterService = ({ data,className=''}) => {
  
  return (
    <ul className={`text-sm  text-white ${className !=='' ? className : 'space-y-7'}`}>
      {data.map((v, i) => {
        return (
          <li key={i}>
            <ItemService  index={i} label={v.label} Icon={v.icon}/>
          </li>
        );
      })}
    </ul>
  );
};


const ItemService = ({ Icon, link='#', label ,index }) => {
  const {slide,slideIndex, setslideIndex,activeItme, setOpenMbielMenu, dataRef} = useContext(ContextData)
  const handelNav = () => {
    slide.current.slickGoTo(index);
    setslideIndex(index);
  
  };

  const handleLink = (e) => {
    e.preventDefault();
    handelNav()
    let index = 1;
    if (activeItme !== index && dataRef[index]) {
      let top = dataRef[index].current.offsetTop - 60;
      window.scroll({
        top: top <0?0:top   ,
        behavior: "smooth",
      });
      setOpenMbielMenu(false)
    }
  };
  
    return (
      <button className={`flex items-center space-x-4 ${index === slideIndex?'text-blue-400':''}`} onClick={handleLink}>
      {Icon && <Icon className=" text-white w-6 h-6" />}
      {label && <p>{label}</p>}
    </button>
    );

}
const MenuFooterContact = ({ data,className=''}) => {
  
  return (
    <ul className={`text-sm  text-white ${className !=='' ? className : 'space-y-7'}`}>
      {data.map((v, i) => {
        return (
          <li key={i}>
            <Item label={v.label} Icon={v.icon} link=''/>
          </li>
        );
      })}
    </ul>
  );
};

const EndFooter = () => {
  const goTo = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="bg-gray-800">
      <div className="container">
        <div className="flex items-center justify-between py-2 text-white">
           <div>
             © {new Date().getFullYear()} Nu Terra Labs rights reserved.
           </div>
           <div>
             <button onClick={goTo} className="bg-grean-950 hover:bg-green-700 rounded  w-10 h-10 flex items-center justify-center">
               <TopIcon className='w-6 h-6'/>
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const { dataService, dataContact } = useContext(ContextData);


    
  const data = [
    {
      icon: FbIcon,
      link: "#",
    },
    {
      icon: InsIcon,
      link: "#",
    },
    {
      icon: InlIcon,
      link: "#",
    },
  ];
  const desc = "Nu Terra Labs is a Canadian based agri-tech and software development business. We aim to bridge any gaps you may have and work to build partnerships. Our team brings experience in Websites, Graphic Design, Applications, Content Writing, Ecommerce / Drop shipping, SEO, Marketing and many other business related activities.";
  return (
    <Section
      EdnComponent={EndFooter}
      type="footer"
      className="bg-gray-900"
    >
      <div className=" grid grid-cols-12 lg:grid-cols-12 items-start gap-7 py-8">
        <div className="col-span-12 md:col-span-8  text-white">
          <Description
            text={desc}
            mediaData={data}
          />
        </div>
        
        <div className="col-span-6  md:col-span-4 lg:col-span-2 space-y-5">
          <h6 className="text-white font-semibold capitalize">Menu</h6>
          <Menu className="space-y-2" footer={true} />
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-2 space-y-5">
          <h6 className="text-white font-semibold capitalize">Services</h6>
          <MenuFooterService data={dataService}  />
        </div>
        <div className="col-span-6  md:col-span-12 space-y-5">
          <h6 className="text-white font-semibold capitalize">Conatct Us</h6>
          <MenuFooterContact data={dataContact}  className='md:flex     md:items-center space-y-7 md:space-y-0 md:space-x-8 '/>
        </div>
        
      </div>
    </Section>
  );
};

export default Footer;
