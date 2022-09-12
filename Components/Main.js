import React, { useContext, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import { ContextData } from "../Context";


import { Section } from ".";

const InputMainContact = ({name,onChange,value, label, placeholder, type = "text", textarea }) => {
  return (
    <div className="space-y-2">
      <label className="text-white text-sm">{label}</label>
      {textarea ? (
        <textarea
          className="rounded w-full px-3 py-1 text-sm"
          placeholder={placeholder}
          rows={4}
          name={name}
          onChange={onChange}
          value={value}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          className="w-full rounded px-3 py-2 text-sm"
          placeholder={placeholder}
        />
      )}
    </div>
  )
};
const MainContact = ({ title,URL_API }) => {
  const [contact, setConatc] = useState({ email: "", subject: "client contact", message: "", type: '', name: "" })

  const hadnleInput = (e) => {
    const { name, value } = e.target
    setConatc({ ...contact, [name]: value });
  }

  const hadelSubmit = (e) => {
    e.preventDefault()

    const url = URL_API;

    axios.post(url, contact)

      .then(function (response) {
        Swal.fire({
          title: response.data.status ? 'success' : 'Error!',
          text: response.data.message,
          icon: response.data.status ? 'success' : 'error',
        })

        setConatc({ email: "", subject: "client contact", message: "", type: '', name: "" })

      })
      .catch(function (error) {
        Swal.fire({
          title: 'Error!',
          text: response.data.message || '!',
          icon: 'error',
        })
      });
  }
  return (
    <div className=" bg-black-blue  w-full max-w-mainFomr p-8  z-40 ">
      <h3 className="mb-3 text-white">{title}</h3>
      <form className="space-y-3">
        <InputMainContact
          onChange={hadnleInput}
          name='name'
          value={contact.name}
          label="Enter Name"
          placeholder="Enter your name" />
        <InputMainContact
          onChange={hadnleInput}
          name='email'
          value={contact.email}
          label="Enter Email"
          placeholder="Enter your email"
          type="email"
        />
        <InputMainContact
          onChange={hadnleInput} 
          name='message' 
          value={contact.message}
          label="Enter message"
          placeholder="Enter your message"
          textarea
        />

        <div className="flex justify-center ">
          <button onClick={hadelSubmit} className="bg-regal-blue mt-4 px-6 py-2 text-xs rounded mx-auto text-white">
            send now
          </button>
        </div>
      </form>
    </div>
  );
};

const Main = () => {

  const { activeItme, setOpenMbielMenu, removeSpace, dataRef ,URL_API} =
    useContext(ContextData);

  const handleLink = (e) => {
    e.preventDefault();
    let index = 4;
    if (activeItme !== index && dataRef[index]) {
      let top = dataRef[index].current.offsetTop - 60;
      window.scroll({
        top: top < 0 ? 0 : top,
        behavior: "smooth",
      });
      setOpenMbielMenu(false)
    }
  };

  const styleCircle = () => ({
    position: "absolute",
    width: "103.58px",
    height: " 105.63px",
    left: "1083px",
    top: "77px",
    background:
      "linear-gradient(49.31deg, #1A86B5 38.58%, #001438 83.87%), linear-gradient(159.32deg, #C4C4C4 -133.43%, rgba(189, 189, 189, 0) 86.3%), linear-gradient(159.32deg, #C4C4C4 -133.43%, rgba(189, 189, 189, 0) 86.3%)",
  });
  return (
    <Section
      myRef={0}
      type="main"
      className="bg-main bg-cover bg-no-repeat bg-center "
    >
      <div className="container ">
        <div className="flex items-center w-full   pb-16">
          <div className="flex w-full items-center justify-between  h-screen">
            <div className="w-full relative">
              <div className="text-white text-center md:text-left w-full space-y-7 lg:max-w-xl">

                <h1 className="capitalize font-fira leading-main text-2xl lg:text-4xl">
                  Nu Terra Labs{" "}
                </h1>
                <p>
                  All the services your project needs to launch From graphic
                  design to applications, and business solutions. We can help
                  you with all aspects of your business and make your project
                  come to life.{" "}
                </p>
                <div>
                  <a className="text-regal-blue" href="#" onClick={handleLink} >
                    Contact Now
                  </a>
                  <span className="block w-16  py-1/8 mt-2 bg-regal-blue "></span>
                </div>
              </div>
            </div>
            <div className="hidden w-full lg:flex justify-end relative">
              <div
                className="absolute rounded-full bg-circle p-16 right-20
               -top-16
               "
              />
              <div className="absolute rounded-full bg-blue-900 p-40 bg-opacity-50 -right-10 top-16" />
              <MainContact URL_API={URL_API} title="Our team is at your service!" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Main;
