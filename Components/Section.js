import React, { useContext } from "react";

import { ContextData } from "../Context";

const Section = ({ type, className, myRef=-1, children ,EdnComponent=null }) => {
  const {dataRef} = useContext(ContextData)
  const hasRef  = dataRef[myRef] || null;
  switch (type) {
    case "footer":
      return (
        <footer className={`overflow-hidden w-full ${className}`}  ref={hasRef}>
          <div className="container">{children}</div>
          <EdnComponent />
         
        </footer>
      );
    case "main":
      return (
        <main className={`overflow-hidden w-full ${className}`}  ref={hasRef}>
          <div className="container">{children}</div>
          
        </main>
      );
    default:
      return (
        <section className={`overflow-hidden w-full ${className}`}  ref={hasRef}>
          <div className="container">{children}</div>
          
        </section>
      );
  }
};

export default Section;
