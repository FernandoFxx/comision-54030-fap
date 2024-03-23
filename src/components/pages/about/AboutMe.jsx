import React from "react";
import { FaHeart } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="flex items-center flex-col justify-center about dark:bg-gray-900">
      <div className="mx-5 text-center text-white">
        <h1 className="text-2xl whitespace-nowrap my-5 font-bold flex justify-center">
          Ropa Yadiis <FaHeart />
        </h1>
        <span>Es una tienda personalizada para mi novia Yadira.</span>
        <br />
        <br />
        <span className="text-justify">
          Hecha con el proposito de hacer su tienda online de venta de ropa.
          <br />Y asi poder lograr la meta de tener su negocio propio creando su
          pagina con la cual tenga el objetivo de impulsar sus ventas y obtenga clientela de confianza.
        </span>
        <br />
        <br />
        <span className=" flex justify-center font-semibold flex-col dark:text-white">
          Con mucho amor y las mejores vibras... <br /> <span className="text-red-600 flex flex-wrap justify-center font-bold my-5">Te amo. <FaHeart /></span> 
        </span>
        <br />
        <br />
        <span className="dark:text-white text-1xl">Att. Ferxx</span>
      </div>
    </div>
  );
};

export default AboutMe;
