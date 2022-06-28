/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from '../../data/app.json'

const FooterArch = () => {
  return (
    <footer className="sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contáctanos:</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Dirección</h6>
                    <p>Gral. Mariano Acha Sur 356, San Juan</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Envíanos un correo electrónico:</h6>
                    <p>support@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Llámenos</h6>
                    <p>+54 2645968696</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Noticias recientes</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <img src="/img/blog/1.jpg" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>
                    La guía definitiva de puesta en marcha para hacer su diario de WordPress
                    </p>
                    <span className="date main-color">14 sep 2022</span>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <img src="/img/blog/2.jpg" alt="" />
                  </div>
                  <div className="sm-post">
                    <p>
                    La guía definitiva de puesta en marcha para hacer su diario de WordPress
                    </p>
                    <span className="date main-color">14 sep 2022</span>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Escriba su correo electrónico" />
                    <span className="subs pe-7s-paper-plane back-color"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2022, Vie Template. Made with passion by
                  <a href="#0" className="main-color">
                    ThemesCamp
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArch;
