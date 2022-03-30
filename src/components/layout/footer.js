import React, { useEffect } from "react";
import logo from "./../../assets/images/layout/main-logo.svg";
import social1 from "./../../assets/images/layout/social-1.png";
import social2 from "./../../assets/images/layout/social-2.png";
import social3 from "./../../assets/images/layout/social-3.png";
import social4 from "./../../assets/images/layout/social-4.png";
import cirlces from "./../../assets/images/layout/gray-circles.png";
import image from "./../../assets/images/layout/footer-image.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  const goToElement = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  };

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
    <div className="relative">
      <img
        src={cirlces}
        alt="redes sociales"
        className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/3"
      />

      <div
        style={{
          clipPath: "polygon(0 17%, 100% 0%, 100% 100%, 0% 100%)",
        }}
        className="bg-blue-dark py-section font-inter relative"
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <img src={logo} alt="logo" onClick={() => goToElement("hero")} />
            <div className="mt-6 flex gap-2 social-row">
              <a
                href="https://www.linkedin.com/company/movisubscription"
                target={"_blank"}
              >
                <img src={social1} alt="redes sociales" />
              </a>
              <a
                href="https://instagram.com/movisubscription?utm_medium=copy_link"
                target={"_blank"}
              >
                <img src={social4} alt="redes sociales" />
              </a>
            </div>
            <ul className="text-white mt-6">
              <li className="hover:text-green mt-4 cursor-pointer">
                <a role="button" onClick={() => goToElement("features")}>
                  Beneficios
                </a>
              </li>
              <li className="hover:text-green mt-4 cursor-pointer">
                <a role="button" onClick={() => goToElement("how-it-works")}>
                  ¿Cómo funciona?
                </a>
              </li>
              <li className="hover:text-green mt-4 cursor-pointer">
                <a role="button" onClick={() => goToElement("about")}>
                  Suscripción
                </a>
              </li>
              <li
                role="button"
                onClick={() => goToElement("faq")}
                className="hover:text-green mt-4 cursor-pointer"
              >
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <div id="footer">
            <motion.div ref={ref} animate={controls} className="max-w-md">
              <motion.h1
                animate={controls}
                className="text-white lg:text-48 text-30 leading-none font-bold"
              >
                La manera más fácil de estrenar auto
              </motion.h1>
              <motion.p animate={controls} className="text-white mt-2 ">
                La suscripción automotriz más accesible y flexible del mercado,
                sin pago inicial y con opcíon a compra. Obten tu auto en 5
                minutos y totalmente en línea.
              </motion.p>
              <motion.a
                animate={controls}
                className="hover:bg-white hover:text-green transition-all duration-300 block mt-2 py-2 px-4 cursor-pointer bg-green w-max rounded-lg text-black"
              >
                <a
                  target={"_blank"}
                  href="https://h8g8g8sv4pj.typeform.com/movi-app"
                >
                  Pide tu auto{" "}
                </a>
              </motion.a>
            </motion.div>
            <img src={image} alt="footer image" />
          </div>
        </div>
      </div>
    </div>
  );
}
