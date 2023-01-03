import React from "react";

const Progress = () => {
  return (
    <section className="app-process section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Proceso de trabajo
                <span className="right"></span>
              </h6>
              <h2> 3 pasos para cumplir con los proyectos</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item text-center md-mb50">
              <span className="icon pe-7s-cloud-download"></span>
              <h5>Descargar Apps</h5>
              <span className="step-number">Paso 01</span>
              <p>
                Sorem ipsum dolor sit amet consectetur adipiscing elit seddo
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item text-center md-mb50">
              <span className="icon pe-7s-user"></span>
              <h5>Crear una cuenta</h5>
              <span className="step-number">Paso 02</span>
              <p>
                Sorem ipsum dolor sit amet consectetur adipiscing elit seddo
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item text-center">
              <span className="icon pe-7s-phone"></span>
              <h5>Resultados</h5>
              <span className="step-number">Paso 03</span>
              <p>
                Sorem ipsum dolor sit amet consectetur adipiscing elit seddo
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
