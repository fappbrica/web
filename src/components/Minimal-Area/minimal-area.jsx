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
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">Sobre nosostros.</h4>
              <p className="wow txt" data-splitting>
                Nuestra agencia de publicidad creativa se encuentra entre las mejores de la Argentina. 
                Cultivamos ideas inteligentes para empresas emergentes y jugadores experimentados.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span>Nuestra misión
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam mollitia illo accusamus doloribus voluptates!
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span>Nuestras metas
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam mollitia illo accusamus doloribus voluptates!
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Por qué elegirnos?
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam mollitia illo accusamus doloribus voluptates!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
