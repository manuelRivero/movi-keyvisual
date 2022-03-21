import React from "react";
import paymentInfoImage from "./../../assets/images/paymentInfo/payment-info.png";

export default function PaymentInfo() {
  return (
    <div className="payment bg-center bg-no-repeat py-3 container grid grid-cols-2 bg-payment-pattern items-center gap-x-section">
        <div></div>
      <div className="transform -translate-y-section max-w-md">
        <h1 className="text-black text-48 leading-none font-bold">
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
      </div>
    </div>
  );
}
