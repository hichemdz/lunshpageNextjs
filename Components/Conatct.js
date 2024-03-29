import React, { useContext, useState } from "react";
import axios from 'axios';
import { ContextData } from "../Context";
import Section from "./Section";
import Swal from 'sweetalert2'


const ItemContact = ({ title, label, Icon }) => {
  return (
    <div  className="flex items-center space-x-2">
      <div>
        <div className="flex items-center justify-center w-10 h-10 bg-grean-950 rounded-full"><Icon className='w-6 h-6 text-white' /></div>
      </div>
      <div className="text-white  space-y-2">
        <p className="text-xs capitalize ">{title}</p>
        <p className="text-sm font-semibold ">{label}</p>
      </div>
    </div>
  );
};
const Conatct = () => {
  const { dataContact,oferData,URL_API } = useContext(ContextData);
  const [contact ,setConatc] = useState({email:"",subject:"client contact",message:"",type:'',name:""})
  
  const hadnleInput = (e) => {
    const {name,value} = e.target
    setConatc({...contact,[name]:value});
  }

  const hadelSubmit = (e) => {
    e.preventDefault()

    const url = URL_API;

    axios.post(url,contact)

    .then(function (response) {
      Swal.fire({
        title: response.data.status?'success': 'Error!',
        text: response.data.message,
        icon: response.data.status?'success': 'error',
      })

     setConatc({email:"",subject:"client contact",message:"",type:'',name:""})

    })
    .catch(function (error) {
      Swal.fire({
        title:  'Error!',
        text: response.data.message || '!',
        icon:  'error',
      })
    });
  }
  
  return (
    <Section
      myRef={4}
      className="bg-contact pb-64 bg-cover bg-no-repeat bg-center pt-32 md:pb-52 flex items-center w-full"
    >
      <div className="container py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-16 md:space-x-16">
          <div className="w-full space-y-8">
            <h3 className="text-white text-2xl font-semibold">
              It’s very easy to contact us
            </h3>

            <form className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-8">
              <div className="col-span-2 md:col-span-1">
                <input
                  className="w-full  md:col-span-1 rounded px-3 py-2"
                  name='name'
                  value={contact.name}
                  onChange={hadnleInput}
                  placeholder="my name is .."
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input
                  type='email'
                  className="w-full rounded px-3 py-2"
                  name='email'
                  value={contact.email}
                  onChange={hadnleInput}
                  placeholder="my email is .."
                />
              </div>
              <div className="col-span-2 ">
                <select name='type' onChange={hadnleInput} className="w-full rounded px-3 py-2">
                      <option value='0' selected={contact.type===''}>choose your service</option>
                      {
                        oferData.map(op=><option key={op} value={op}>{op}</option>)
                      }
                </select>
              </div>
              <div className="col-span-2 ">
                <textarea
                  className="w-full rounded px-3 py-2"
                  rows={4}
                  value={contact.message}
                  name='message'
                  onChange={hadnleInput}
                  placeholder="my message is .."
                />
              </div>
              <div>
                <button onClick={hadelSubmit} className="rounded text-sm px-4 py-2 bg-grean-950 text-white">
                  send
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:flex justify-end">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
              {dataContact.map((v, k) => (
                <ItemContact
                  title={v.title}
                  label={v.label}
                  Icon={v.icon}
                  key={k}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Conatct;
