import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import icon1 from "./../../assets/images/features/icon-1.svg";
import icon2 from "./../../assets/images/features/icon-2.svg";
import icon3 from "./../../assets/images/features/icon-3.svg";
import icon4 from "./../../assets/images/features/icon-4.svg";
import icon5 from "./../../assets/images/features/icon-5.svg";
import icon6 from "./../../assets/images/features/icon-6.svg";

export default function Features() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: "0%",
        transition: {
          duration: 2,
          type: "spring",
          when: "beforeChildren",
          staggerChildren: 1,
        },
      });
    } else {
      controls.start({
        opacity: 0,
        x: "-100%",

        transition: { duration: 1, type: "spring" },
      });
    }
  }, [inView]);

  const goToElement = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <div
      ref={ref}
      id="features"
      className="container grid grid-cols-1 lg:grid-cols-2 gap-6 font-inter"
    >
      <div className="transform lg:translate-y-section">
        <motion.div animate={controls} className="mb-6 lg:mb-section">
          <img src={icon1} alt="feature" />
          <h2 className="text-black lg:text-48 text-30 font-bold">Seguro</h2>
          <p className="text-gray">
            Todos nuestros autos incluyen seguro de cobertura amplia durante
            todo el plazo de tu suscripción para que siempre estés tranquilo.
          </p>
          <a onClick={()=>goToElement("footer")}className="text-green cursor-pointer mt-2 block font-bold">
            Conoce más
          </a>
        </motion.div>
        <motion.div animate={controls} className="mb-6 lg:mb-section">
          <img src={icon2} alt="feature" />
          <h2 className="text-black lg:text-48 text-30 font-bold">GPS</h2>
          <p className="text-gray">
            Todos nuestros vehículos cuentan con GPS para que puedas tener la
            ubicación en tiempo real, así como definir geocercas para limitar
            las zonas donde puede circular tu auto.
          </p>
          <a onClick={()=>goToElement("footer")}className="text-green cursor-pointer mt-2 block font-bold">
            Conoce más
          </a>
        </motion.div>
        <motion.div animate={controls} className="mb-6 lg:mb-section">
          <img src={icon3} alt="feature" />
          <h2 className="text-black lg:text-48 text-30 font-bold">
            Asistencia télefonica
          </h2>
          <p className="text-gray">
            Contamos con un call center para atención telefónica 24/7 los 365
            días del año donde puedes: agengar citas de servicio, dar
            seguimiento a siniestros, entro muchas otras solicitudes.
          </p>
          <a onClick={()=>goToElement("footer")}className="text-green cursor-pointer mt-2 block font-bold">
            Conoce más
          </a>
        </motion.div>
      </div>
      <div className="">
        <motion.div animate={controls} className="mb-6 lg:mb-section">
          <img src={icon4} alt="feature" />
          <h2 className="text-black text-black lg:text-48 text-30 font-bold">
            Entrega a domicilio
          </h2>
          <p className="text-gray">
            Entregamos el auto que seleccionaste hasta la puerta de tu casa en
            tiempo récord. Si prefieres también puedes recogerlo en la agencia
            automotriz.
          </p>
          <a onClick={()=>goToElement("footer")}className="text-green cursor-pointer mt-2 block font-bold">
            Conoce más
          </a>
        </motion.div>
        <motion.div animate={controls} className="mb-6 lg:mb-section">
          <img src={icon5} alt="feature" />
          <h2 className="text-black text-black lg:text-48 text-30 font-bold">
            Placas y tenencia{" "}
          </h2>
          <p className="text-gray">
            Nosotros nos encargamos de tramitar el tipo de placas que requieras,
            así como hacer los pagos de tenencias y verificación durante todo el
            plazo de tu suscripción.
          </p>
          <a onClick={()=>goToElement("footer")}className="text-green cursor-pointer mt-2 block font-bold">
            Conoce más
          </a>
        </motion.div>
        <motion.div animate={controls} className="mb-6 lg:mb-section">
          <img src={icon6} alt="feature" />
          <h2 className="text-black text-black lg:text-48 text-30 font-bold">
            Mantenimientos
          </h2>
          <p className="text-gray">
            Nuestra suscripción incluye todos los gastos por mantenimiento
            preventivos durante el plazo de tu suscripción, simplemente tienes
            que llevar tu auto al taller sin pagar absolutamente nada.
          </p>
          <a onClick={()=>goToElement("footer")}className="text-green cursor-pointer mt-2 block font-bold">
            Conoce más
          </a>
        </motion.div>
      </div>
    </div>
  );
}
