import React from "react";
import heroCirlces from "./../../assets/images/hero/hero-circles.png";

export default function Hero() {
  return (
    <div className="hero container-fluid bg-hero-pattern w-full  bg-center bg-cover font-inter p-section px-0 relative">
      <div className=" container w-full grid grid-cols-1 md:grid-cols-2 h-full items-center">
        <div className="max-w-md">
          <h1 className="text-white lg:text-48 text-30 leading-none font-bold">La manera más fácil de estrenar auto</h1>
          <p className="text-white mt-2 ">
            La suscripción automotriz más accesible y flexible del mercado, sin
            pago inicial y con opcíon a compra. Obten tu auto en 5 minutos y
            totalmente en línea.
          </p>
          <a className="block mt-2 py-2 px-4 cursor-pointer bg-green w-max rounded-lg text-black">
          Pide tu auto
          </a>
        </div>
        <div>
            <img src={heroCirlces} className="absolute right-0 bottom-0 transform lg:-translate-x-1/2 " alt="detalle" />
        </div>
      </div>
    </div>
  );
}
