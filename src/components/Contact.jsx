import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const toastOption = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
  };
  const form = useRef()
  const [formData, setFormData] = useState({name: '', email:'', message: ''})

  const handleChange = (e) => {
    console.log(formData)
    const {name, value} = e.target
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_3uwpsm2', 'template_4le66tm', form.current, {
            publicKey: 'k5c-Hevgl64iYwrTc',
        })
        .then(
            () => {
              toast.success('You send message successfuly')
              setFormData({name: '', email:'', message: ''})
            },
            (error) => {
                console.log(error.text);
            },
        );
};

  return (
    <>
      <div className=" sm:w-10/12 sm:min-h-[70vh] m-auto sm:mt-20 border-2 border-sky-700 sm:rounded-md flex-col sm:flex-row flex items-center">
        <div className="sm:w-1/2 sm:min-h-[70vh] bg-sky-700 text-white px-5 py-10 flex flex-col space-y-5">
          <h1 className="text-4xl mb-5">Do you have any Project? Let’s Talk</h1>
          <p>Design For</p>
          <p>Web & Mobile</p>
          <div>
            <p>Phone</p>
            <a href="tel: +387 60 34 11 342">+387 60 34 11 342</a>
          </div>
          <div>
            <p>Drop your message</p>
            <a href="mailto:belci911mu@gmail.com">belci911mu@gmail.com</a>
          </div>
        </div>

        <form onSubmit={sendEmail} ref={form} method="post" className="w-11/12 mt-10 mb-10 sm:mt-0 sm:w-1/2 box-border sm:p-5 flex flex-col items-center space-y-10">
          <input value={formData.name} onChange={handleChange} className="w-full p-2 border-b-[1px] border-sky-700 " name="name" type="text" placeholder="Enter your name"></input>
          <input value={formData.email} onChange={handleChange} className="w-full p-2 border-b-[1px] border-sky-700 " name="email" type="email" placeholder="Enter your email adress"></input>
          <textarea value={formData.message} onChange={handleChange}  className="w-full p-2 border-b-[1px] border-sky-700 " name="message" placeholder="Enter your message"></textarea>
          <button type="submit" className="text-white bg-sky-700 rounded-full px-10 py-3 uppercase text-xl">Submit</button>
        </form>
      </div>
      <ToastContainer />

    </>
  );
};

export default Contact;
