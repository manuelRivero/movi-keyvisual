import React from "react";
import icon1 from "./../../assets/images/features/icon-1.svg";
import icon2 from "./../../assets/images/features/icon-2.svg";
import icon3 from "./../../assets/images/features/icon-3.svg";
import icon4 from "./../../assets/images/features/icon-4.svg";
import icon5 from "./../../assets/images/features/icon-5.svg";
import icon6 from "./../../assets/images/features/icon-6.svg";

export default function Features() {
  return (
    <div className="container grid grid-cols-2 gap-6 font-inter">
      <div className="transform translate-y-section">
        <div className="mb-section">
          <img src={icon1} alt="feature" />
          <h2 className="text-black text-48 font-bold">Seguro</h2>
          <p className="text-gray">
            Todos nuestros autos incluyen seguro de cobertura amplia durante
            todo el plazo de tu suscripción para que siempre estés tranquilo.
          </p>
          <a className="text-green cursor-pointer mt-2 block font-bold">
            Conoce más
          </a>
        </div>
        <div className="mb-section">
          <img src={icon2} alt="feature" />
          <h2 className="text-black text-48 font-bold">GPS</h2>
          <p className="text-gray">
            Todos nuestros vehículos cuentan con GPS para que puedas tener la
            ubicación en tiempo real, así como definir geocercas para limitar
            las zonas donde puede circular tu auto.
          </p>
          <a className="text-green cursor-pointer mt-2 block font-bold">
            Conoce más
          </a>
        </div>
        <div className="mb-section">
          <img src={icon3} alt="feature" />
          <h2 className="text-black text-48 font-bold">
            Asistencia télefonica
          </h2>
          <p className="text-gray">
            Contamos con un call center para atención telefónica 24/7 los 365
            días del año donde puedes: agengar citas de servicio, dar
            seguimiento a siniestros, entro muchas otras solicitudes.
          </p>
          <a className="text-green cursor-pointer mt-2 block font-bold">
            Conoce más
          </a>
        </div>
      </div>
      <div className="">
        <div className="mb-section">
          <img src={icon4} alt="feature" />
          <h2 className="text-black text-black text-48 font-bold">
            Entrega a domicilio
          </h2>
          <p className="text-gray">
            Entregamos el auto que seleccionaste hasta la puerta de tu casa en
            tiempo récord. Si prefieres también puedes recogerlo en la agencia
            automotriz.
          </p>
          <a className="text-green cursor-pointer mt-2 block font-bold">
            Conoce más
          </a>
        </div>
        <div className="mb-section">
          <img src={icon5} alt="feature" />
          <h2 className="text-black text-black text-48 font-bold">
            Placas y tenencia{" "}
          </h2>
          <p className="text-gray">
            Nosotros nos encargamos de tramitar el tipo de placas que requieras,
            así como hacer los pagos de tenencias y verificación durante todo el
            plazo de tu suscripción.
          </p>
          <a className="text-green cursor-pointer mt-2 block font-bold">
            Conoce más
          </a>
        </div>
        <div className="mb-section">
          <img src={icon6} alt="feature" />
          <h2 className="text-black text-black text-48 font-bold">Mantenimientos</h2>
          <p className="text-gray">
            Nuestra suscripción incluye todos los gastos por mantenimiento
            preventivos durante el plazo de tu suscripción, simplemente tienes
            que llevar tu auto al taller sin pagar absolutamente nada.
          </p>
          <a className="text-green cursor-pointer mt-2 block font-bold">
            Conoce más
          </a>
        </div>
      </div>
    </div>
  );
}
