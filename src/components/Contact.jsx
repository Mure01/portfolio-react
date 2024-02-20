import React from "react";

const Contact = () => {
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

        <form className="w-11/12 mt-10 mb-10 sm:mt-0 sm:w-1/2 box-border sm:p-5 flex flex-col items-center space-y-10">
          <input className="w-full p-2 border-b-[1px] border-sky-700 " type="text" placeholder="Enter your name"></input>
          <input className="w-full p-2 border-b-[1px] border-sky-700 " type="email" placeholder="Enter your email adress"></input>
          <textarea  className="w-full p-2 border-b-[1px] border-sky-700 " placeholder="Enter your message"></textarea>
          <button type="submit" className="text-white bg-sky-700 rounded-full px-10 py-3 uppercase text-xl">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
