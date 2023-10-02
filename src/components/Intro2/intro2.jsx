/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Intro2 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <div className="sub-title mb-5">
                <h6>Empresa de Software</h6>
              </div>
              <h1 className="mb-10 fw-600">Bienvenidos</h1>
              <p>
              Somos una empresa sanjuanina que implementa su experiencia en el desarrollo de aplicaciones y sitios web para pequeñas y grandes empresas.
              </p>
              <Link
                href={`/about/about-dark`}
              >
                <a className="butn bord curve mt-30">
                  <span>Sobre nosotros</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="img/logo2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro2