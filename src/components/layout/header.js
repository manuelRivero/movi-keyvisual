import React, { useEffect, useState } from "react";
import logo from "./../../assets/images/layout/main-logo.svg";
import "./layout.css";

const defaultHeader =
  "header w-full fixed top-0 left-0 z-10 left-1/2 transform -translate-x-1/2";
export default function Header() {
  const [headerActive, setHeaderActive] = useState(false);
  const goToElement = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window) {
        if (window.pageYOffset > 80) {
          setHeaderActive(true);
          console.log("active");
        } else {
          setHeaderActive(false);
          console.log("inactive");
        }
      }
    });
  }, []);
  return (
    <header
      className={[
        defaultHeader,
        headerActive ? "header--active" : "header--inactive",
      ].join(" ")}
    >
      <div className="container flex justify-between py-2 items-center ">
        <div className="logo">
          <img src={logo} alt="Logo" onClick={() => goToElement("hero")} />
        </div>
        <nav className="hidden md:block">
          <ul className="flex font-inter items-center">
            <li>
              <a
                role="button"
                onClick={() => goToElement("features")}
                className="text-white my-2 mx-4 block cursor-pointer hover:text-green"
              >
                Beneficios
              </a>
            </li>
            <li>
              <a
                role="button"
                onClick={() => goToElement("how-it-works")}
                className="text-white my-2 mx-4 block cursor-pointer hover:text-green"
              >
                ¿Cómo funciona?
              </a>
            </li>
            <li>
              <a
                role="button"
                onClick={() => goToElement("about")}
                className="text-white my-2 mx-4 block cursor-pointer hover:text-green"
              >
                Suscripción
              </a>
            </li>
            <li>
              <a
                role="button"
                onClick={() => goToElement("faq")}
                className="text-white my-2 mx-4 block cursor-pointer hover:text-green"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="https://h8g8g8sv4pj.typeform.com/movi-app"
                target={"_blank"}
                className="header-submit hover:shadow-lg transition-all duration-300 my-2 mx-4 py-2 px-4 block bg-green text-black rounded-xl cursor-pointer"
              >
                Pide tu auto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
