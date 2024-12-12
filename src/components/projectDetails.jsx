import React from "react";
import { Link, useParams } from "react-router-dom";
const ProjectDetails = () => {
  const projekti = [
    {
      id: "evidencijaProjekata.png",
      alt: "Evidencija projekata",
      link: "https://evidencija-projekata-7916.onrender.com",
      opis: "Evidencija projekata je fakultetski projekat koji sam radio iz predmeta Odabrana poglavlja informacionih tehnologija. Koristio sam Node.js, Express.js, MongoDB te jos dodatnih biblioteka za dodatne funkcionalnosti. Projekat mozete pregledat na linku ispod, a za prijavu i pojasnjenje funkcionalnosti kontaktirajte me! ",
    },
    {
      id: "vremenskaPrognoza.png",
      alt: "Vremenska prognoza",
      link: "https://vprognoza.netlify.app",
      opis: "Moj prvi projekat kreiran uz pomoc React-a. Vremenska prognoza je aplikacija koja koristi API OpenWeatherMap i prikaziva podatke ovisnosti o pretrazi grada. Mozete je testirati  i koristiti na linku ispod.",
    },
    {
      id: "idealNamjestaj.png",
      alt: "Ideal namjestaj",
      link: "https://nextjs-shop-sage.vercel.app",
      opis: "Ideal namjestaj je web aplikacija koju sam kreirao uz pomoc Next.js i koja koristi CMS za lakse dodavanje novih proizvoda. Kreirana je u svrhu prikaza odredjenom klijentu i sticanja novih znanja iz novih tehnologija. Posjetiti mozete na sljedecem linku.",
    },
  ];
  const { id } = useParams();
  const projekat = projekti.find((p) => p.id == id);
  console.log(projekat);
  return (
    <>
      <h1 className="text-sky-700 text-3xl text-center pt-8 uppercase">
        Detalji projekta
      </h1>
      <div className=" px-10 flex flex-col sm:flex-row items-center h-[70vh] text-white">
        <img src={"/" + projekat.id} className="sm:w-1/2 h-fit sm:p-5"></img>
        <div className="flex flex-col space-y-4 p-3 sm:p-10  bg-sky-700 rounded-b-xl sm:rounded-bl-none sm:rounded-r-xl">
          <h1 className="text-3xl text-center py-5">{projekat.alt}</h1>

          <p>{projekat.opis}</p>
          <p>
            Link:{" "}
            <Link to={projekat.link} target="_blank">
              {projekat.alt}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
