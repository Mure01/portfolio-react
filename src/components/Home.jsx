import { useEffect } from "react";

const Home = () => {
  return (
    <>
      <div className=" absolute top-0 -z-10 w-[100vw] min-h-[100vh] bg-[url('/pozadina.jpg')] bg-center  bg-cover bg-no-repeat ">
        <div className="text-white text-2xl sm:text-4xl flex-col flex space-y-5 px-3 box-border pt-[50%] sm:pl-[10%] sm:pt-[15%]">
          <p>Hello, my name is</p>
          <h1 className=" text-4xl sm:text-6xl font-bold">BELMIN MURATOVIĆ</h1>
          <p>
            I'm a junior full-stack developer from Bosnia. I build websites{" "}
            <br></br> and web applications
          </p>
        </div>

        <button className="text-white mt-10 sm:mt-12 uppercase text-xl ml-[10%] py-3 px-5 rounded-md bg-sky-700 w-fit">
          Contact me
        </button>
      </div>
    </>
  );
};

export default Home;
