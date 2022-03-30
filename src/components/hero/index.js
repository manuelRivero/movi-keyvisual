import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import heroCirlces from "./../../assets/images/hero/hero-circles.png";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      console.log("in view");
      controls.start({
        x: "0%",
        opacity: 1,
        transition: {
          duration: 1,
          type: "spring",
          when: "beforeChildren",
          staggerChildren: 1,
        },
      });
    } else {
      controls.start({
        x: "-100%",
        opacity: 0,
        transition: { duration: 1, type: "spring" },
      });
    }
  }, [inView]);

  return (
    <div
      id="hero"
      className="hero container-fluid bg-hero-pattern w-full  bg-center bg-cover font-inter p-section px-0 relative"
    >
      <div className=" container w-full grid grid-cols-1 md:grid-cols-2 h-full items-center">
        <motion.div ref={ref} animate={controls} className="max-w-md">
          <motion.h1
            animate={controls}
            className="text-white lg:text-48 text-30 leading-none font-bold"
          >
            La manera más fácil de estrenar auto
          </motion.h1>
          <motion.p animate={controls} className="text-white mt-2 ">
            La suscripción automotriz más accesible y flexible del mercado, sin
            pago inicial y con opcíon a compra. Obten tu auto en 5 minutos y
            totalmente en línea.
          </motion.p>
          <motion.a
            href="https://h8g8g8sv4pj.typeform.com/movi-app"
            target="_blank"
            animate={controls}
            className="hover:bg-white transition-all duration-300 block mt-2 py-2 px-4 cursor-pointer bg-green w-max rounded-lg text-black"
          >
            Pide tu auto
          </motion.a>
        </motion.div>
        <div>
          <img
            src={heroCirlces}
            className="absolute right-0 bottom-0 transform lg:-translate-x-1/2 "
            alt="detalle"
          />
        </div>
      </div>
    </div>
  );
}
