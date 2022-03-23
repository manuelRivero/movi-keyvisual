import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import paymentInfoImage from "./../../assets/images/paymentInfo/payment-info.png";

export default function PaymentInfo() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      console.log("in view");
      controls.start({
        opacity: 1,
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
        transition: { duration: 1, type: "spring" },
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className="payment bg-center bg-no-repeat py-3 container grid grid-cols-1 lg:grid-cols-2 lg:bg-payment-pattern items-center gap-x-section">
        <div className="hidden lg:block"></div>
      <motion.div animate={controls} className="transform lg:-translate-y-section max-w-md">
        <motion.h1 className="text-black lg:text-48 text-30 leading-none font-bold">
          Un pago mensual, todo incluido.
        </motion.h1>
        <motion.p className="text-gray mt-2">
          Movi es la manera más fácil de estrenar auto. Realiza un solo pago
          mensual que incluye todo lo relacionado a la administración de tu
          auto.
        </motion.p>
        <motion.a className="text-green cursor-pointer mt-2 block font-bold">
            Conoce más
        </motion.a>
        <img src={paymentInfoImage} className="block md:hidden mt-6"alt="Información de pago" />
      </motion.div>
    </div>
  );
}
