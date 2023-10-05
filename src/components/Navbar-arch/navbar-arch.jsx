/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Link } from "react-scroll";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const NavbarArch = ({ navbarRef, theme }) => {
  
  return (
    <nav className="navbar navbar-expand-lg" ref={navbarRef}>
      <div className="container">
        <a className="logo" href="/">
          {theme ? (
            theme === "themeL" ? (
              <img src={appData.darkLogo} alt="logo" />
            ) : (
              <img src={appData.lightLogo} alt="logo"  style={"with: 20px"}/>
            )
          ) : (
            <img src={appData.lightLogo} alt="logo" />
          )}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={handleMobileDropdown}
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                data-scroll-nav="0"
              >
                Inicio
              </span>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href={`/homepage/home1-dark`}
                >
                  Página principal
                </a>
                <a
                  className="dropdown-item"
                  href={`/homepage/home2-dark`}
                >
                  Agencia creativa
                </a>
                <a
                  className="dropdown-item"
                  href={`/homepage/home5-dark`}
                >
                  Agencia digital
                </a>
                <a
                  className="dropdown-item"
                  href={`/homepage/home4-dark`}
                >
                  Seccion de negocios
                </a>
                <a
                  className="dropdown-item"
                  href={`/homepage/home3-dark`}
                >
                  Empresas
                </a>
                <a
                  className="dropdown-item"
                  href={`/homepage/home6-dark`}
                >
                  Agencia moderna
                </a>
                <a
                  className="dropdown-item"
                  href={`/homepage/home7-dark`}
                >
                  Freelancer
                </a>
                <a
                  className="dropdown-item"
                  href={`/homepage/home8-dark`}
                >
                  Arquitectura
                </a>
              </div>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Somos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="po-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Nuestros proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="team-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Equipo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="testimonials-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Testimonios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarArch;
