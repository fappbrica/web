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
    <section className="min-area sub-bg" >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down logotipo"
                src="/img/logo2.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
            <h4 className="wow color-font">Nuestra misión principal:</h4>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
              Es la satisfacción de nuestros clientes a través de la implementación de soluciones que aceleren y optimicen la transformación digital de sus empresas.
                </p>
              </Split>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  Brindamos consulta inicial y soporte.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  Trabajamos con algunas de las empresas más exitosas.
                </li>
              </ul>
              <Link href={`/works/works-dark`}>
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
