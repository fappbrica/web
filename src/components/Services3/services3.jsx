import React from 'react';
import Link from 'next/link';
import cardMouseEffect from '../../common/cardMouseEffect';

const Services3 = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll('.feat .items'));
  }, []);
  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Mejores servicios
              </h6>
              <h3 className="wow color-font">
                Ayudamos a crear estrategias, diseño y desarrollo.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-monitor"></i>
              </span>
              <h5>Diseño Web</h5>
              <p>
                Diseñamos tu página web a medida, ajustándonos a tus necesidades
                y garantizando su adaptabilidad a cualquier dispositivo.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-bolt-outline"></i>
              </span>
              <h5>Mantenimiento</h5>
              <p>
                Aplicaremos acciones preventivas y correctivas para lograr que
                tu página web se conserve atractiva y funcional, corrigiendo
                errores y mejorando la usabilidad de la misma.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-cube"></i>
              </span>
              <h5>Trabajo duro</h5>
              <p>
              Amamos trabajar porque nos gustan los desafíos y adoramos lo que hacemos.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          {/*<div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>Concepto de Arte</h5>
              <p>
              Implementación y despliegue de nueva infraestructura de red, incluida la consolidación.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Services3;
