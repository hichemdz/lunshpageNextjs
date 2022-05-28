import React from "react";

function Icon({type=true}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 12 12"
      
    
    >
      <path
        fill={type?"#ECE426":"#DEDDDD"}
        d="M5.402 1.038l-1.36 2.758-3.044.444a.667.667 0 00-.37 1.137l2.203 2.146-.52 3.031a.666.666 0 00.966.702L6 9.826l2.723 1.43a.667.667 0 00.966-.702l-.52-3.031 2.201-2.146a.667.667 0 00-.368-1.137l-3.044-.444-1.36-2.758a.667.667 0 00-1.196 0z"
      ></path>
    </svg>
  );
}

export default Icon;
