/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
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
            <div className="content pt-0">
              <h4 className="wow color-font">Sobre nosotros.</h4>
              <p className="wow txt" data-splitting>
              Somos una empresa sanjuanina que implementa su experiencia en el desarrollo de aplicaciones y sitios web para pequeñas y grandes empresas. 
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span>Nuestra misión
                  </h6>
                  <p>
                  Centrarnos en la calidad y excelencia en la atención a las demandas.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span>Nuestras metas
                  </h6>
                  <p>
                  Dedicamos nuestros esfuerzos diarios a mejorar constantemente en cada detalle que se requiera.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Por qué elegirnos?
                  </h6>
                  <p> Siempre buscamos las mejores alternativas para resolver de manera responsable e innovadora los problemas de nuestros clientes.
                  </p>
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
