import React from "react";
import FaqAccordion from "./faqAccordion";

const faqList = [
  {
    title: "¿Cuál es el periodo de suscripción?",
    html: `<p>En Movi ofrecemos los siguientes plazos de suscripción:</p>
    <ul class="list-disc pl-3">
    <li>
    24 meses
    </li>
    <li>
    36 meses
    </li>
    <li>
    48 meses
    </li>
    <li>
    60 meses
    </li></ul>
    <p>
    Sin embargo, recuerda que a partir de los 6 meses tienes la opción de: devolver, cambiar o comprar tu auto.</p>`,
  },
  {
    title: "¿Que incluye la suscripción mensual?",
    html: `<p>La suscripción mensual de Movi incluye lo siguiente:</p>
    <ul class="list-disc pl-3">
    <li>
    Renta del auto
    </li>
    <li>
    Seguro de cobertura amplia
    </li>
    <li>
    Mantenimientos y refacciones preventivas
    </li>
    <li>
    Placas, tenencia y verificación
    </li>
    <li>
    GPS
    </li>
    <li>
    Call center
    </li>
    <li>
    Asistencia Víal
    </li>
    <li>
    Plataforma de administración para que tengas el control de tu suscripción
    </li>
    </ul>`,
  },
  {
    title: "¿Se requiere de pago inicial o enganche?",
    html: `<p>No, en Movi no tienes que realizar ningún pago inicial o enganche para estrenar tu auto. Primero estrenas y luego pagas.</p>`,
  },
  {
    title:
      "¿Se puede utilizar el auto para plataformas de movilidad (Uber, Cabify, Didi, etc.)?",
    html: `<p>Si, tenemos un producto enfocado a conductores de plataforma</p>`,
  },
  {
    title:
      "¿Puedo cambiar, devolver o comprar el auto durante el periodo de suscripción?",
    html: `
    <ul class="pl-3 list-disc">
    <li><p>Si, a partir de los 6 meses de suscripción tienes la opción de cambiar, devolver o comprar el auto.</p></li>
    <li><p>Para conocer el precio de compra tienes que ponerte en contacto con nosotros.</p></li>
    <li><p>Si mantienes tu auto durante 60 meses puedes adquirirlo por tan solo $5,000.00 mxn.</p></li>
    </ul>`,
  },
  {
    title:
      "¿Quién es el responsable de los mantenimientos y servicios de mi auto?",
    html: `Todos los mantenimientos y servicios preventivos ya están cubiertos con tu pago mensual, nosotros te avisaremos cuando esté cercana la fecha de mantenimiento y lo único que tienes que hacer es llevar el auto al taller que te asignemos.`,
  },
];
export default function Faq() {
  return (
    <div className="container font-inter mt-6" id="faq">
      <h2 className="text-24 mb-4">Preguntas frecuentes</h2>
      <div>
        {faqList.map((e) => {
          return <FaqAccordion title={e.title} html={e.html} />;
        })}
      </div>
    </div>
  );
}
