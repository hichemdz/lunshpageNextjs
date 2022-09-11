import React, { useContext } from "react";

import { ContextData } from "../Context";
import Menu, { MneuMobiel } from './Menu';
import Logo from "./Logo";
import { MenuIcon } from "../Icons";




const Header = () => {

  const {isFixedHeader,setOpenMbielMenu} =  useContext(ContextData)
  
  return (
    <header className={`${isFixedHeader?'fixed bg-gray-900':'absolute'} bg-opacity-75 w-full top-0 left-0 z-50  p-4`}>
            <MneuMobiel />
      <div className="container">
        <div className="flex itme-center justify-between">
          <div>
           <Logo />
          </div>
          <div className="flex items-center space-x-16">
            <Menu />
            <button  onClick={()=>{setOpenMbielMenu(true)}} className="block md:hidden text-white hover:text-grean-950">
              <MenuIcon className='w-8 h-8' />
            </button>
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
