import React from "react";
import {Link} from 'react-router-dom'
const About = () => {

  document.title = "About - Muratovic Belmin"

  return (
    <>
      <div className="bg-zinc-800 flex flex-col items-center pb-14">
        <h1 className="uppercase text-white text-2xl pt-10 ">A bit about me</h1>
        <h1 className="text-sky-700 font-bold text-5xl sm:text-7xl py-7">Who am I?</h1>
        <img
          src="/header1.jpg"
          className="rounded-full w-[270px] h-[270px] sm:h-[400px] sm:w-[400px] border-4 border-sky-700 "
        ></img>

        <p className="text-white px-4 sm:px-0 sm:w-1/2 text-center py-5 text-lg">
          I am Belmin, a student of information technology. Born on November 9,
          2001 in Travnik. A budding developer ready to pick up new skills and
          friendships. I am based in web application and web development. If you
          need an engagement of a person like me, contact me!
        </p>

        <Link
          to="/contact"
          className="text-sky-700 uppercase border-2 border-sky-700 rounded-full hover:bg-sky-700 hover:text-white py-2 tracking-widest px-7"
        >
          Contact me
        </Link>
      </div>
      <div className="flex flex-col py-14">
        <h1 className=" text-4xl sm:text-6xl text-center text-sky-700 font-bold">
          Development Services
        </h1>

        <div className=" flex-col sm:flex-row flex mt-20 justify-around w-10/12 m-auto">
          <div className="bg-[#ddd] relative mb-7 sm:mb-0 sm:w-1/4 flex flex-col items-center p-3 pb-10 rounded-xl">
            <div className="bg-slate-200 absolute -top-5 p-5 rounded-full">
              <img src="/development.png" className="h-14"></img>
            </div>
            <h1 className="mt-16 py-2 text-sky-700 text-xl font-semibold uppercase ">
              WEB DEVELOPMENT
            </h1>
            <p className="leading-6 text-lg px-5 text-center">
              Web development is the process of creating, building and
              maintaining websites. It encompasses a range of tasks, including
              front-end development (creating the visible and interactive parts
              of a website) and back-end development (enabling the website to
              function properly and interact with databases).
            </p>
          </div>

          <div className="bg-[#ddd] relative mb-7 sm:mb-0 sm:w-1/4 flex flex-col items-center p-3 pb-10 rounded-xl">
            <div className="bg-slate-200 absolute -top-5 p-5 rounded-full">
              <img src="/graphic.png" className="h-14"></img>
            </div>
            <h1 className="mt-16 py-2 text-sky-700 text-xl font-semibold uppercase ">
              Graphic design
            </h1>
            <p className="leading-6 text-lg px-5 text-center">
              Web design is the process of creating the layout, look, and feel
              of a website. This includes the selection of colors, fonts,
              images, and other elements to create an aesthetically pleasing and
              user-friendly experience. Web designers use design software and
              languages such as HTML, CSS, and JavaScript to create the
              website's structure and visual elements.
            </p>
          </div>

          <div className="bg-[#ddd] relative mb-5 sm:mb-0 sm:w-1/4 flex flex-col items-center p-3 pb-10 rounded-xl">
            <div className="bg-slate-200 absolute -top-5 p-5 rounded-full">
              <img src="/content.png" className="h-14"></img>
            </div>
            <h1 className="mt-16 py-2 text-sky-700 text-xl font-semibold uppercase ">
              content writing
            </h1>
            <p className="leading-6 text-lg px-5 text-center">
              Content writing is the creation of written material, typically for
              the purpose of online publication. This material can include
              articles, blog posts, product descriptions, and website content.
              The goal of content writing is to engage the audience and provide
              them with valuable information or entertainment.
            </p>
          </div>
        </div>

        <Link
          to="/projects"
          className="mt-10 w-fit m-auto border-2 border-white
    hover:bg-white hover:text-sky-700 hover:border-2 hover:border-sky-700
    text-white uppercase text-2xl bg-sky-700 py-3 px-7 rounded-full tracking-wider"
        >
          Projects
        </Link>
      </div>

      <div className="bg-sky-700 text-white">
        <h1 className="text-4xl sm:text-7xl font-semibold text-center py-5">Education</h1>
        <div className="flex flex-col items-center w-10/12 sm:w-1/2 m-auto">
          <div className="flex  items-start justify-around w-full py-5">
            <p className="">Oct, 2022 - current</p>
            <div className="pl-2 w-1/2 font-semibold text-lg">
              <p>Faculty</p>
              <p>Sarajevo</p>
              <p>
                Faculty of Natural Sciences and Mathematics - Information
                Technologies
              </p>
            </div>
          </div>

          <div className="flex items-start justify-around w-full py-5">
            <p className="">Sep, 2016 - Jun, 2020</p>
            <div className="w-1/2 font-semibold text-lg">
              <p>High School</p>
              <p>Travnik</p>
              <p>Mixed High Tehnical School Travnik</p>
            </div>
          </div>

          <div className="flex items-start justify-around w-full py-5">
            <p className="">Sep, 2008 - Jun, 2016</p>
            <div className="w-1/2 font-semibold text-lg">
              <p>Elementary School</p>
              <p>Vitez</p>
              <p>Elementary School "Vitez"</p>
            </div>
          </div>
          <Link 
            to='/contact'
            className="bg-yellow-600 uppercase py-3 px-7 my-5 rounded-full text-xl"
          >
            COntact me
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
