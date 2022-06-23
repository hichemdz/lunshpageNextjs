import React, { useContext } from "react";

import { ContextData } from "../Context";
import { CloseIcon } from "../Icons";

const NavItem = ({ name, index, footer }) => {
  const { activeItme, setOpenMbielMenu, removeSpace, dataRef } =
    useContext(ContextData);
  const handleLink = (e) => {
    e.preventDefault();
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
    <li
      className={`capitalize hover:text-grean-950 ${
        !footer && index === activeItme ? "text-blue-300" : "text-white"
      }`}
    >
      <a   href={`#${removeSpace(name)}`} onClick={handleLink}>
        {name}
      </a>
    </li>
  );
};

export const MneuMobiel = () => {
  const { items,isOpenMbielMenu,setOpenMbielMenu } = useContext(ContextData);

  return (
    <div className={"flex items-center justify-center bg-black bg-opacity-80 fixed z-50 top-0 left-0 w-full h-full    duration-200 transition-all ease-in-out delay-150 " +
    (!isOpenMbielMenu ? " opacity-0 invisible" : "opacity-100 visible")}>
           <button onClick={()=>setOpenMbielMenu(false)} className="text-white absolute top-5 right-5 hover:text-green-950">
             <CloseIcon className='w-6 h-8' />
           </button>
        <ul className={"flex flex-col justify-center items-center  space-y-12"}>
          {items.map((val, key) => {
            return <NavItem name={val} key={key} index={key} />;
          })}
        </ul>
      
    </div>
  );
};
const Menu = ({ className, footer = false }) => {
  const { items } = useContext(ContextData);

  return (
    <ul
      className={
        className ? className : "hidden md:flex items-center space-x-12"
      }
    >
      {/* {items.map((val, key) => {
        return <NavItem name={val} key={key} index={key} footer={footer} />;
      })} */}
      <NavItem name={items[0]}  index={0} footer={footer} />;
      <NavItem name={items[1]}  index={1} footer={footer} />;
      <NavItem name={items[2]}  index={2} footer={footer} />;
      <NavItem name={items[3]}  index={3} footer={footer} />;
      <NavItem name={items[4]}  index={4} footer={footer} />;
      {/* <NavItem name={items[5]}  index={5} footer={footer} />; */}
      <NavItem name={items[6]}  index={6} footer={footer} />;
    </ul>
  );
};
export default Menu;
