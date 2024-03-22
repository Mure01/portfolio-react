import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from 'gsap'
import ProjectsDetails from './ProjectsDetails'
const Projects = () => {

  const projekti = ['Project management system', 'Furniture site', 'WEATHER FORECAST APP  ', 'Chat media'  ];
  const [selectedProject, setselectedProject] = useState({})
  const [isSelected, setisSelected] = useState(false)

  const getData = (index) => {
    switch (index) {
        case 0:
          setisSelected(true)
          setselectedProject( {
                title: "Project management system",
                desc: "is a robust application I developed for managing projects, tracking work hours, and monitoring user attendance. It supports role-based access, real-time updates, and communication, along with features for task management, notification system, and report generation. This project highlights my skills in creating complex, real-time, role-based systems.",
                youtube: "https://youtu.be/OPfqt1leC9k?si=QFTeljodp29Rtx2M",
                viewSite: "https://evidencija-projekata-7916.onrender.com/",
                repo: "https://github.com/Mure01/Evidencija-projekata",
                stack: ["react", "node", "mongodb"]
            })
            break;
        case 1:
          setisSelected(true)
          setselectedProject({
                title: "Furniture site",
                desc: "is an application designed to showcase my skills in effectively fetching and retrieving data, as well as displaying it on the frontend. This application use sanity studio as cms for data which I fetching and display.",
                viewSite: "https://nextjs-shop-sage.vercel.app/",
                repo: "https://github.com/Mure01/nextjs-shop",
                stack: ["next", "sanity"]
            })
            break
        case 2:
          setisSelected(true)
          setselectedProject({
                title: "Weather forecast app",
                desc: "is an application designed to showcase my skills in effectively fetching and retrieving data, as well as displaying it on the frontend. This application utilizes the weahterapi to fetch latest weather data, providing users with accurate and up-to-date information.",
                viewSite: "https://vprognoza.netlify.app/",
                stack: ["react"]
            })
            break
        case 3:
          setisSelected(true)
          setselectedProject({
                title: "Chat media",
                desc: "Chat media is a basic social networking platform I developed, which could also be described as a community interaction hub. It allows users to create their profile, and engage in real-time conversations with any other user. This project highlights my ability to create interactive and user-friendly environments, handle real-time data, and manage user relationships.",                viewSite: "https://friends-chat-a8iu.onrender.com",
                repo: "https://github.com/Mure01/react-chat",
                stack: ["react", "node", "mongodb"]
            }) 
            break
        default:
            return {
                msg: "Error" 
            };
    }
};

  return (
    <>
      <div className="py-10 flex-col flex justify-center items-center text-center space-y-5 border-b-[1px] w-11/12 sm:w-3/5 m-auto border-sky-700">
        <h1 className="text-4xl">My Works</h1>
        <div className="text-2xl space-y-3 font-extralight">
          <p>“You can do anything you set your mind to.”</p>
          <p>- Benjamin Franklin</p>
        </div>
      </div>

    <div className="flex flex-col sm:flex-row items-start mt-3 px-1 sm:px-0 sm:mt-10 justify-around ">
    {
    //Prikaz samo teksta za naslove projekata
   }
      <div  className="sm:max-w-1/5 sm:px-5 text-left border-t-2 border-l-2 rounded-3xl shadow-2xl p-3 sm:p-10 border-sky-700 
       flex  flex-col justify-between items-center  flex-wrap">
        {projekti.map((projekat,i) => {
          return (
                  <p key={projekat} onClick={() => getData(i)} className=" bottom-0 sm:text-lg sm:px-10 uppercase font-sans tracking-wider w-full text-left  py-2 ">
                    {projekat}
                  </p>
          );
        })}
      </div>

        {//tekst koji opisuje projekat
        }
{isSelected &&
        <div className="sm:w-1/2 mt-3 sm:mt-0 ">
        {<ProjectsDetails selectedProject = {selectedProject} />}
        </div>
}
      </div>
    </>
  );
};

export default Projects;
