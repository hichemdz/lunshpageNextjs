import React, { useEffect, createContext, useState, createRef } from "react";
import { Process, portfolio, services } from "./data";
import {
  AppIcon,
  DesignIcon,
  MarketingIcon,
  BusinessIcon,
  MailIcon,
  TimeIcon,
  PhoneIcon,
  AddressIcon,
} from "./Icons";

export const ContextData = createContext();

const InnerContext = ({ children, val }) => {
  
  const URL_API = 'http://localhost:8001/send';
  const slide = createRef(null); // change slide service
  const [slideIndex, setslideIndex] = useState(0); // change header slide service
  const items = [
    "home",
    "services",
    "Our Process",
    "projects",
    "contact",
    "pricing",
  ];
  const dataService = [
    { label: "Website Design", icon: DesignIcon },
    { label: "Applications", icon: AppIcon },
    { label: "Online Marketing", icon: MarketingIcon },
    { label: "Business Solutions", icon: BusinessIcon },
  ];
  const dataContact = [
    {
      title: "Our Mail address",
      label: "info@nuterralabs.com",
      icon: MailIcon,
    },
    { title: "Our location", label: "Edmonton, Montreal", icon: AddressIcon },
    { title: "Ofition timing", label: "24hrs 7 days a week", icon: TimeIcon },
    { title: "Call Us for help!", label: "+1 (587) 715-0179", icon: PhoneIcon },
  ];
  const oferData = [
    "Websites",
    "Graphic Design",
    "Applications",
    "Content Writing",
    "Ecommerce / Dropshipping",
    "SEO",
    "Marketing",
    "Custom Software",
  ];
  const [dataRef, setRef] = useState([]);
  const [isFixedHeader, setFixedHeader] = useState(true);
  const [activeItme, setActiveItem] = useState(0);
  const [isOpenMbielMenu, setOpenMbielMenu] = useState(false);

  const removeSpace = (name) => name.split(" ").join("");

  useEffect(() => {
    setRef((dataRef) => {
      return items.map((v, i) => dataRef[i] || createRef(removeSpace(v)));
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 570 ? setFixedHeader(true) : setFixedHeader(false);

      items.forEach((v, i) => {
        if (dataRef[i] && dataRef[i].current) {
          let offset = dataRef[i].current.offsetTop - 60;
          let endSection = offset + dataRef[i].current.clientHeight;
          let windowOP = window.pageYOffset;

          if (windowOP >= offset && windowOP <= endSection - 60) {
            setActiveItem(i);
          }
        }
      });
    });
  }, [dataRef]);

  const values = {
    // data
    Process,
    portfolio,
    services,
    // menu
    isOpenMbielMenu,
    setOpenMbielMenu,
    oferData,
    activeItme,
    setActiveItem,
    dataService,
    dataContact,
    isFixedHeader,
    items,
    dataRef,
    removeSpace,
    slide,
    slideIndex, setslideIndex,
    URL_API,
    ...val,
  };
  return (
    <ContextData.Provider value={values}>
      <div
        className="relative 
          space-y-24"
      >
        {children}
      </div>
    </ContextData.Provider>
  );
};

export default InnerContext;
