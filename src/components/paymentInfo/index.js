import React from "react";
import paymentInfoImage from "./../../assets/images/paymentInfo/payment-info.png";

export default function PaymentInfo() {
  return (
    <div className="payment bg-center bg-no-repeat py-3 container grid grid-cols-1 lg:grid-cols-2 lg:bg-payment-pattern items-center gap-x-section">
        <div className="hidden lg:block"></div>
      <div className="transform lg:-translate-y-section max-w-md">
        <h1 className="text-black lg:text-48 text-30 leading-none font-bold">
          Un pago mensual, todo incluido.
        </h1>
        <p className="text-gray mt-2">
          Movi es la manera más fácil de estrenar auto. Realiza un solo pago
          mensual que incluye todo lo relacionado a la administración de tu
          auto.
        </p>
        <a className="text-green cursor-pointer mt-2 block font-bold">
            Conoce más
        </a>
        <img src={paymentInfoImage} className="block md:hidden mt-6"alt="Información de pago" />
      </div>
    </div>
  );
}
