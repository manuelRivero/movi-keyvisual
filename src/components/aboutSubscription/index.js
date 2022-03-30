import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import icon1 from "./../../assets/images/aboutSubscription/step-1.png";
import icon2 from "./../../assets/images/aboutSubscription/step-2.png";
import icon3 from "./../../assets/images/aboutSubscription/step-3.png";
import icon4 from "./../../assets/images/aboutSubscription/step-4.png";

export default function AboutSubscription() {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const imagesControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: "0%",
        transition: {
          duration: 2,
          type: "spring",
        },
      });
      imagesControls.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 2,
          type: "spring",
        },
      });
    } else {
      controls.start({
        opacity: 0,
        x: "-100%",

        transition: { duration: 1, type: "spring" },
      });
      imagesControls.start({
        opacity: 0,
        scale: 0.5,
      });
    }
  }, [inView]);

  return (
    <div id="about" ref={ref} className="container py-6 font-inter mt-section">
      <motion.div animate={controls}>
        <h3 className="text-black text-30 text-center">
          ¿Qué es una suscripción automotriz?
        </h3>
        <p className="text-gray text-center mt-2">
          La suscripción automotriz de Movi consiste en realizar un pago mensual
          que incluye la renta del auto y todos los servicios relacionados al
          mismo, básicamente nosotros nos encargamos de administrar y mantener
          tu auto.
        </p>
        <p className="text-black text-center mt-2 text-24">
          Lo único que tienes que hacer es ponerle gasolina.
        </p>
      </motion.div>
      <motion.div
        animate={imagesControls}
        className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6"
      >
        <div className="">
          <img className="m-auto" src={icon1} />
          <p className="text-gray mt-4 text-center">No hay pago inicial</p>
        </div>
        <div className="">
          <img className="m-auto" src={icon2} />
          <p className="text-gray mt-4 text-center">
            En cualquier momento tienes la opción de comprar, devolver o cambiar
            tu auto..
          </p>
        </div>
        <div className="">
          <img className="m-auto" src={icon3} />
          <p className="text-gray mt-4 text-center">
            No hay ningún costo adicional si decides cambiar de auto.
          </p>
        </div>
        <div className="">
          <img className="m-auto" src={icon4} />
          <p className="text-gray mt-4 text-center">
            Puedes seleccionar el auto que quieras de nuestro catálogo o de
            cualquier otro distribuidor.
          </p>
        </div>
      </motion.div>
      <div>
        <a href="https://h8g8g8sv4pj.typeform.com/movi-app" target={"_blank"} className="hover:shadow-lg transition-all duration-300 py-2 px-4 block w-max mt-6 mx-auto bg-green text-black rounded-xl cursor-pointer">
          ¡Adquiere tu auto ya!
        </a>
      </div>
    </div>
  );
}
