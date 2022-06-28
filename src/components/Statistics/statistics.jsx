import React from "react";

const Statistics = ({ LightTheme }) => {
  return (
    <section className="serv-block section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="content md-mb50">
              <h6 className="stit mb-30">
                <span className="left"></span> Estadísticas de la empresa
              </h6>
              <h2 className="mb-30">
              Somos una agencia profesional y tenemos muchos logros en materia de bienes
              </h2>
              <div className="app-sta">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="item mb-30">
                      <span className="icon pe-7s-user"></span>
                      <h3>756+</h3>
                      <p>Clientes satisfechos</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="item mb-30">
                      <span className="icon pe-7s-umbrella"></span>
                      <h3>38+</h3>
                      <p>Años de experiencia</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="item">
                      <span className="icon pe-7s-global"></span>
                      <h3>5k+</h3>
                      <p>Clientes Globales</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="item">
                      <span className="icon pe-7s-anchor"></span>
                      <h3>47+</h3>
                      <p>Miembro experto del equipo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="serv-img">
              <img
                src={
                  LightTheme
                    ? "/img/mobile-app/app-img/light/s2.png"
                    : "/img/mobile-app/app-img/s2.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
