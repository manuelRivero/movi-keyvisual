import React from "react";
import icon1 from "./../../assets/images/aboutSubscription/step-1.png";
import icon2 from "./../../assets/images/aboutSubscription/step-2.png";
import icon3 from "./../../assets/images/aboutSubscription/step-3.png";
import icon4 from "./../../assets/images/aboutSubscription/step-4.png";

export default function AboutSubscription() {
  return (
    <div className="container py-6 font-inter mt-6">
      <h3 className="text-black text-30 text-center">
        ¿Qué es una suscripción automotriz?
      </h3>
      <p className="text-gray text-center mt-2">
        La suscripción automotriz de Movi consiste en realizar un pago mensual
        que incluye la renta del auto y todos los servicios relacionados al
        mismo, básicamente nosotros nos encargamos de administrar y mantener tu
        auto.
      </p>
      <p className="text-black text-center mt-2 text-24">
        Lo único que tienes que hacer es ponerle gasolina.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
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
      </div>
    </div>
  );
}
