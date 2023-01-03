import React from "react";
import Link from "next/link";

const Services6 = () => {
  return (
    <section className="serv-arch">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s2.jpg)" }}
          >
            <h6 className="numb">01</h6>
            <h5>Arquitectura</h5>
            <p>
              Proporcionamos todos los equipos y servicios, etc. y garantizamos un lugar de trabajo seguro.
              seguro del proyecto.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Leer más</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s1.jpg)" }}
          >
            <h6 className="numb">02</h6>
            <h5>Diseño de interiores</h5>
            <p>
              Proporcionamos todos los equipos y servicios, etc. y garantizamos un lugar de trabajo seguro.
              seguro del proyecto.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Leer más</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s3.jpg)" }}
          >
            <h6 className="numb">03</h6>
            <h5>Modelado 3D</h5>
            <p>
              Proporcionamos todos los equipos y servicios, etc. y garantizamos un lugar de trabajo seguro.
              seguro del proyecto.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Leer más</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s4.jpg)" }}
          >
            <h6 className="numb">04</h6>
            <h5>Diseño mobiliario</h5>
            <p>
              Proporcionamos todos los equipos y servicios, etc. y garantizamos un lugar de trabajo seguro.
              seguro del proyecto.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Leer más</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s5.jpg)" }}
          >
            <h6 className="numb">05</h6>
            <h5>Diseño Urbano</h5>
            <p>
              Proporcionamos todos los equipos y servicios, etc. y garantizamos un lugar de trabajo seguro.
              seguro del proyecto.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Leer más</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services6;
