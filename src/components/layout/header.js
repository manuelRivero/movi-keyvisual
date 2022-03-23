import React from "react"
import logo from "./../../assets/images/layout/main-logo.svg"
export default function Header() {
  return (
    <div className="container flex justify-between py-2 absolute top-0 left-0 z-10 left-1/2 transform -translate-x-1/2">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="hidden md:block">
        <ul className="flex font-inter">
          <li>
            <a className="text-white py-2 px-4 block cursor-pointer hover:text-green">Acerca de</a>
          </li>
          <li>
            <a className="text-white py-2 px-4 block cursor-pointer hover:text-green">Beneficios</a>
          </li>
          <li>
            <a className="text-white py-2 px-4 block cursor-pointer hover:text-green">¿Cómo funciona?</a>
          </li>
          <li>
            <a className="text-white py-2 px-4 block cursor-pointer hover:text-green">Catálogo</a>
          </li>
          <li>
            <a className="text-white py-2 px-4 block cursor-pointer hover:text-green">FAQ</a>
          </li>
          <li>
            <a className="py-2 px-4 block bg-green text-black rounded-xl cursor-pointer">Pide tu auto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
