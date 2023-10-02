import React from "react";
import Link from "next/link";

const Services2 = () => {
  return (
    <section className="services section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Mejores características
              </h6>
              <h3 className="wow color-font">
              Te detallamos que servicios brindamos 
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div className="step-item xcolor">
              <span className="icon pe-7s-phone"></span>
              <h6>Web &amp; App Development</h6>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor modi impedit corporis, magnam sed animi vel odit repellendus!
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div className="step-item xbottom">
              <span className="icon pe-7s-magic-wand"></span>
              <h6>Diseño gráfico</h6>
              <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet voluptatum laudantium ex necessitatibus.
              </p>
            </div>
          </div>
        </div>
        <div className="smore">
          <Link href="/about/about-dark">
            <a>Descubrir más</a>
          </Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="line top left"></div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default Services2;
