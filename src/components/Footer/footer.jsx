/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import appData from '../../data/app.json';

const Footer = ({ hideBGCOLOR }) => {

  const dateUpdate = new Date().getFullYear();
  
  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contáctanos: </h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>Av. Sarmiento 2553 (e) , San Juan - Argentina</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>torresmatiasangel@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Llámenos</h6>
                    <p>+54 2644035669</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
            <div className="title">
                <h5>Nuestras redes:</h5>
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
              <br />
              <div className="title">
                <h5>Subscribite</h5>
              </div>
              <ul>
              <li>
                  <div className="subscribe">
                    <input
                      type="text"
                      placeholder="Escriba su correo electrónico"
                    />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
              </li>
              {/*<li>
                <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/blog/1.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                */}
                {/* <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                          La guía definitiva de puesta en marcha para hacer su
                          diario de WordPress.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">14 sep 2022</span>
                      </a>
                    </Link>
                    </div>
                </li>*/}
                  {/*<li>
             
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/blog/2.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  */} 
               {/*<div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                          La guía definitiva de puesta en marcha para hacer su
                          diario de WordPress.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">14 sep 2022</span>
                      </a>
                    </Link>
                  </div>
                  </li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="copy-right">
                <p>© {dateUpdate}, todos los derechos reservados a Fappbrica.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
