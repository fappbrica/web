/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Intro3 = () => {
  return (
    <header className="slider-stwo valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="img">
              <img src="/img/slid/002.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <div className="sub-title mb-5">
                <h6>Agencia de consultoría digital</h6>
              </div>
              <h1 className="mb-10 fw-600">Consultoría empresarial única.</h1>
              <p>
                Ayudamos a nuestros clientes a tener éxito mediante la creación
                de identidades de marca, experiencias digitales y materiales
                impresos.
              </p>
              <ul>
                <li>
                  <div>
                    <span className="icon pe-7s-arc">
                      <span className="bord"></span>
                    </span>
                  </div>
                  <div className="cont">
                    <h6>Marca</h6>
                    <p>
                      Es un hecho establecido desde hace tiempo que un lector se
                      distraído.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <span className="icon pe-7s-help2">
                      <span className="bord"></span>
                    </span>
                  </div>
                  <div className="cont">
                    <h6>Marketing</h6>
                    <p>
                      Es un hecho establecido desde hace tiempo que un lector se
                      distraído.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro3;
