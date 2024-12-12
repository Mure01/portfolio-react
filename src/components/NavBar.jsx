import { useContext, useState } from "react";
import { Link, UNSAFE_LocationContext, useLocation } from "react-router-dom";
import cv from '/cv.pdf'
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { location } = useContext(UNSAFE_LocationContext);
  return (
    <>
      <nav className="flex bg-white justify-around py-2 border-b-2 border-sky-700 items-center">
        <div className="flex items-center ">
        <a href="/">
          
          <img className="h-16" src="/avatar.png"></img>
          </a>
          <a href="/">

          <h1 className=" text-4xl">
            Portfo<span className="text-sky-700">lio</span>
          </h1>
          </a>
        </div>

        <i
          className={ showMenu ? " hidden" :  "block fa fa-bars sm:hidden"}
          onClick={() => setShowMenu(true)}
        ></i>

  


    {/* NAVBAR ZA VELIKE EKRANE*/}
        <ul
          className=" list-none hidden sm:flex-row sm:flex items-center gap-5 "
        >
          <li
            className={
              location.pathname === "/"
                ? "text-sky-700 border-b-2 border-sky-700 font-semibold"
                : ""
            }
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              location.pathname === "/about"
                ? "text-sky-700 border-b-2 border-sky-700 font-semibold"
                : ""
            }
          >
            <Link to="about"> About </Link>
          </li>
          <li
            className={
              location.pathname === "/projects"
                ? "text-sky-700 border-b-2 border-sky-700 font-semibold"
                : ""
            }
          >
            <Link to="projects"> Projects </Link>
          </li>
          <li
            className={
              location.pathname === "/contact"
                ? "text-sky-700 border-b-2 border-sky-700 font-semibold"
                : ""
            }
          >
            <Link to="contact"> Contacts </Link>
          </li>
        </ul>

        <ul className="hidden sm:flex gap-5 text-xl">
          <li>
          <a href="https://github.com/Mure01" target="_blank">
            <i className="fa fa-github text-sky-700"></i>
          </a>
          </li>
          <li>
            <a download='Muratovic-Belmin-CV' href={cv} className="text-sky-700">CV</a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/belmin-muratovic-89b018209/" target="_blank">
            <i className="fa fa-linkedin text-sky-700"></i>
            </a>
          </li>
        </ul>
      </nav>
        {/* NAVBAR ZA MOBITEL*/}

    <ul
          className=
          { showMenu ?
          " list-none flex-col space-y-5 px-3 pt-3  h-[100%] text-black bg-white w-1/2  absolute right-0" :
           "hidden"
           } >
            <i className="fa fa-close w-full text-right pr-5" onClick={() => setShowMenu(false)}></i>
          <li
            className={
              location.pathname === "/"
                ? "text-sky-700 border-b-2 border-sky-700 font-semibold"
                : ""
            }
          >
            <Link onClick = {() => setShowMenu(false)} to="/">Home</Link>
          </li>
          <li
            className={
              location.pathname === "/about"
                ? "text-sky-700 border-b-2 border-sky-700 font-semibold"
                : ""
            }
          >
            <Link onClick = {() => setShowMenu(false)} to="about"> About </Link>
          </li>
          <li
            className={
              location.pathname === "/projects"
                ? "text-sky-700 border-b-2 border-sky-700 font-semibold"
                : ""
            }
          >
            <Link onClick = {() => setShowMenu(false)} to="projects"> Projects </Link>
          </li>
          <li
            className={
              location.pathname === "/contact"
                ? "text-sky-700 border-b-2 border-sky-700 font-semibold"
                : ""
            }
          >
            <Link onClick = {() => setShowMenu(false)} to="contact"> Contacts </Link>
          </li>

          <li>

          <ul className="flex w-full items-center justify-around pt-5">

          <li>
            <a href="https://github.com/Mure01" target="_blank"> 
            <i className="fa fa-github text-sky-700"></i>
            </a>
          </li>
          <li>
          <a download='Muratovic-Belmin-CV' href={cv} className="text-sky-700">CV</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/belmin-muratovic-89b018209/" target="_blank">
            <i className="fa fa-linkedin text-sky-700"></i>
            </a>
          </li>
          </ul>
          </li>
        </ul>

    </>
  );
};

export default NavBar;
