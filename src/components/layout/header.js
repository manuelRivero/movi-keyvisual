import React from "react"
import logo from "./../../assets/images/layout/main-logo.svg"
export default function Header() {
  const goToElement = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return (
    <div className="container flex justify-between py-2 fixed rounded-b-2xl bg-black-shadow top-0 left-0 z-10 left-1/2 transform -translate-x-1/2">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="hidden md:block">
        <ul className="flex font-inter">
          <li>
            <a role="button" onClick={()=>goToElement("about")} className="text-white py-2 px-4 block cursor-pointer hover:text-green">Acerca de</a>
          </li>
          <li>
            <a role="button" onClick={()=>goToElement("features")} className="text-white py-2 px-4 block cursor-pointer hover:text-green">Beneficios</a>
          </li>
          <li>
            <a role="button" onClick={()=>goToElement("how-it-works")} className="text-white py-2 px-4 block cursor-pointer hover:text-green">¿Cómo funciona?</a>
          </li>
          <li>
            <a role="button" className="text-white py-2 px-4 block cursor-pointer hover:text-green">Catálogo</a>
          </li>
          <li>
            <a role="button" onClick={()=>goToElement("faq")} className="text-white py-2 px-4 block cursor-pointer hover:text-green">FAQ</a>
          </li>
          <li>
            <a className="py-2 px-4 block bg-green text-black rounded-xl cursor-pointer">Pide tu auto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
