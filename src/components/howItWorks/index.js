import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import step1 from "./../../assets/images/howItWorks/step-1.png";
import step2 from "./../../assets/images/howItWorks/step-2.png";
import step3 from "./../../assets/images/howItWorks/step-3.png";

export default function HowItsWorks() {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const controlsText = useAnimation();
  const controlsimages = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: "0%",
        transition: {
          duration: 2,
          type: "spring",
          when: "beforeChildren",
          staggerChildren: 1,
        },
      });
      controlsText.start({
        opacity: 1,
        x: "0%",
        transition: {
          duration: 2,
          type: "spring",
        },
      });
      controlsimages.start({
        opacity: 1,
        y: "0%",
        scale: 1,
        transition: {
          duration: 2,
          type: "spring",
        },
      });
    } else {
      controls.start({
        opacity: 0,
        y: "20%",

        transition: { duration: 1, type: "spring" },
      });
      controlsText.start({
        opacity: 0,
        x: "-100%",
        transition: {
          duration: 2,
          type: "spring",
        },
      });
      controlsimages.start({
        opacity: 0,
        scale: 0.5,
        y: "-100%",
        transition: {
          duration: 2,
          type: "spring",
        },
      });
    }
  }, [inView]);

  return (
    <div className="relative" id="how-it-works">
      <motion.div
        ref={ref}
        animate={controls}
        className="container bg-green p-6 pb-section font-inter howItWorks mt-section"
      >
        <motion.div animate={controlsText} className="max-w-md">
          <h1 className="text-black lg:text-48 text-30 leading-none font-bold">
            ¿Cómo funciona?
          </h1>
          <p className="text-gray mt-2">
            Gracias a nuestos sistemas de tecnología, ciencia de datos y
            administración de flota, hemos creado la suscripción automotriz más
            accesible y flexible del mercado
          </p>
        </motion.div>
      </motion.div>
      <motion.div animate={controlsimages}>
        <div
          className="bottom-0 grid grid-cols-1 lg:grid-cols-3 mt-6 lg:absolute lg:left-1/2 max-w-6xl w-full transform lg:-translate-x-1/2"
          style={{ gap: "70px" }}
        >
          <div className="bg-white p-4 flex relative shadow-2xl max-w-md mb-6 mx-auto">
            <div className="flex-shrink-0" style={{ flexBasis: " 100px" }}>
              <p className="text-gray-light text-bold text-64">1</p>
              <img
                src={step1}
                className=" w-1/3 lg:w-2/4 absolute transform -translate-x-1/2"
                alt="paso 1"
              />
            </div>
            <div>
              <p className="font-bold text-black text-14">Selecciona tu auto</p>
              <p className="text-gray mt-2">
                Selecciona el auto de tu preferenica dentro de nuestro catálogo
                con más de 150 opciones.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 flex relative shadow-2xl max-w-md mb-6 mx-auto">
            <div className="flex-shrink-0" style={{ flexBasis: " 100px" }}>
              <p className="text-gray-light text-bold text-64">2</p>
              <img
                src={step2}
                className=" w-1/3 absolute transform -translate-x-1/2"
                alt="paso 2"
              />
            </div>
            <div>
              <p className="font-bold text-black text-14">Registráte</p>
              <p className="text-gray mt-2">
                Realiza tu proceso de suscripción en 3 sencillos pasos:
              </p>
              <ul className="list-disc text-12">
                <li className="text-gray">Validación de identidad</li>
                <li className="text-gray">Consulta de buró de crédito</li>
                <li className="text-gray">Comprobación de ingresos</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-4 flex relative shadow-2xl max-w-md mb-6 mx-auto">
            <div className="flex-shrink-0" style={{ flexBasis: " 100px" }}>
              <p className="text-gray-light text-bold text-64">3</p>
              <img
                src={step3}
                className=" w-2/4 absolute transform -translate-x-1/2"
                alt="paso 3"
              />
            </div>
            <div>
              <p className="font-bold text-black text-14">Recibe tu auto</p>
              <p className="text-gray mt-2">
                Acepta la oferta, firma el contrato y estrena el auto de tus
                sueños desde la puerta de tu hogar.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
