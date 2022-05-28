import React,{useContext} from "react";

import { ContextData } from "../Context";
import Section from "./Section";
const SingleProcess = ({ img, title, desc, index }) => (
  <div
    className={
      "p-5 lg:w-full flex items-center justify-between " +
      (!(index % 2) && "flex-row-reverse")
    }
  >
    <div className=" items-center justify-center max-w-lg text-center space-y-8  text-white">
      <span className="border-4 mx-auto flex items-center justify-center rounded-full w-16 h-16 text-2xl border-dashed border-white">
        {index + 1}
      </span>
      <h3 className="text-2xl md:text-4xl font-medium capitalize">{title}</h3>
      <p className="text-md  leading-loose  lg:px-2">{desc}</p>
    </div>
    <div className="hidden lg:block relative">
      <div className="absolute w-full h-full bg-blue-800 bg-opacity-50 rounded-lg z-20">
        {" "}
      </div>
     
      <img
        className={`max-w-lg rounded-lg transform ${
          index % 2 ? "-translate-x-4" : "translate-x-4"
        } translate-y-4 relative z-30`}
        src={img}
      />
    </div>
  </div>
);
const Process = () => {
  const {Process} = useContext(ContextData)
  const {title,description,items} = Process;
  return (
    <Section myRef={2} className="bg-process py-16">
      <div className="mb-16 max-w-lg text-center space-y-8 m-auto text-white">
        <h3 className="text-4xl font-medium capitalize">{title}</h3>
        <p className="text-md  leading-loose  lg:px-2">{description}</p>
      </div>

      <div className="flex flex-col justify-center  items-center space-y-16">
        {items.map((v, i) => (
          <SingleProcess
            key={i}
            index={i}
            img={v.img}
            title={v.title}
            desc={v.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Process;
