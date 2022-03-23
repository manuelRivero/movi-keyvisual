import React from "react";
import logo from "./../../assets/images/layout/main-logo.svg";
import social1 from "./../../assets/images/layout/social-1.png";
import social2 from "./../../assets/images/layout/social-2.png";
import social3 from "./../../assets/images/layout/social-3.png";
import social4 from "./../../assets/images/layout/social-4.png";
import cirlces from "./../../assets/images/layout/gray-circles.png";
import image from "./../../assets/images/layout/footer-image.png";

export default function Footer() {
  return (
    <div className="relative">
      <img
        src={cirlces}
        alt="redes sociales"
        className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/3"
      />

      <div
        style={{
          clipPath: "polygon(0 17%, 100% 0%, 100% 100%, 0% 100%)",
        }}
        className="bg-blue-dark py-section font-inter relative"
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <img src={logo} alt="logo" />
            <div className="mt-6 flex justify-between social-row">
              <img src={social1} alt="redes sociales" />
              <img src={social2} alt="redes sociales" />
              <img src={social3} alt="redes sociales" />
              <img src={social4} alt="redes sociales" />
            </div>
            <ul className="text-white mt-6">
              <li className="hover:text-green mt-4 cursor-pointer">
                <a>Catálogo</a>
              </li>
              <li className="hover:text-green mt-4 cursor-pointer">
                <a>¿Cómo funciona?</a>
              </li>
              <li className="hover:text-green mt-4 cursor-pointer">
                <a>Acerca de</a>
              </li>
              <li className="hover:text-green mt-4 cursor-pointer">
                <a>Beneficios</a>
              </li>
              <li className="hover:text-green mt-4 cursor-pointer">
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <div>
              <img src={image} alt="footer image" />
          </div>
        </div>
      </div>
    </div>
  );
}
