import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const slike = [
    { link: "/evidencijaProjekata.png", alt: "Evidencija projekata" },
    { link: "/vremenskaPrognoza.png", alt: "Vremenska prognoza" },
    { link: "/idealNamjestaj.png", alt: "Ideal namjestaj" },
  ];

  return (
    <>
      <div className="py-10 flex-col flex justify-center items-center text-center space-y-5 border-b-[1px] w-11/12 sm:w-3/5 m-auto border-sky-700">
        <h1 className="text-4xl">My Works</h1>
        <div className="text-2xl space-y-3 font-extralight">
          <p>“You can do anything you set your mind to.”</p>
          <p>- Benjamin Franklin</p>
        </div>
      </div>

      <div className="flex m-auto flex-col sm:flex-row justify-between items-end sm:mt-20 flex-wrap">
        {slike.map((slika) => {
          return (
            <div className="relative sm:w-1/3 box-border p-3">
              <Link key={slika.link} to={`/projectDetails${slika.link}`}>
                <img
                  src={slika.link}
                  alt={slika.alt}
                  className=""
                  height={500}
                ></img>
                <div className="mt-2 bg-sky-700 text-center uppercase text-xl py-2">
                  <p className=" bottom-0 w-full py-2 z-10 bg-sky-700 opacity-1 text-white ">
                    {slika.alt}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
