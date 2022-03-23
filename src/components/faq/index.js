import React from 'react'
import FaqAccordion from './faqAccordion'

export default function Faq() {
  return (
    <div className='container font-inter mt-6'>
      <h2 className='text-24 mb-4'>
      Preguntas frecuentes
      </h2>
    <div>
        <FaqAccordion title={"¿Cuál es el periodo de suscripción?"} />
        <FaqAccordion title={"¿Que incluye la suscripción mensual?"} />
        <FaqAccordion title={"¿Se requiere pago inicial o enganche?"}/>
        <FaqAccordion title={"¿Se puede utilizar el auto para plataformas de movilidad?"}/>
        <FaqAccordion title={"¿Puedo cambiar de auto durante el periodo de suscripción?"}/>
        <FaqAccordion title={"¿Puedo devolver el auto durante el periodo de suscripción?"}/>
        <FaqAccordion title={"¿Quien es el responsable de los mantenimientos y servicios de mi auto?"}/>
    </div>
    </div>
  )
}
