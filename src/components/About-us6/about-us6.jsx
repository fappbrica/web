import React from 'react'
import Link from 'next/link'

const AboutUs6 = () => {
    return (
      <section id="about" className="about-ar section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="img">
                <div
                  className="bg-img bg-fixed hero-bg"
                  style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}
                ></div>
                <div className="exp valign text-center">
                  <div className="full-width">
                    <h2
                      className="bg-img bg-fixed"
                      style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}
                    >
                      25
                    </h2>
                    <p>Años de experiencia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 valign">
              <div className="content">
                <h6 className="sub-title main-color ls10 text-u">Sobre nosotros</h6>
                <h3>Las mejores arquitecturas de diseñadores para ti.</h3>
                <p>
                Somos una empresa sanjuanina que implementa su experiencia en el desarrollo de aplicaciones y sitios web para pequeñas y grandes empresas. 
                </p>

                <Link
                  href={`/about/about-dark`}
                >
                  <a className="butn bord mt-30">
                    <span>Sobre nosotros</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutUs6