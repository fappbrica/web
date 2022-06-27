/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea2 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Sueño. Innovar. Implementar.</h4>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Nuestra agencia de publicidad creativa está clasificada entre las mejores de los EE. UU.
                  Cultivamos ideas inteligentes para empresas emergentes y jugadores experimentados.
                  Al adherirnos a los estándares de la industria, creamos algunos impresionantes
                  portafolios La marca de la empresa se redefine.
                </p>
              </Split>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  Brindamos consulta inicial y soporte gratuitos.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  Trabajamos con algunas de las empresas más exitosas.
                </li>
              </ul>
              <Link href={`/about/about-dark`}>
                <a
                  className="butn bord curve mt-40 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <span>Descubrir</span>
                </a>
              </Link>

              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;
