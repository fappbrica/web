import React from "react";
import handleAccordion from "../../common/handleAccordion";

const Faq = () => {
  //   $(".accordion").on("click", ".title", function () {
  //     $(this).next().slideDown();
  //     $(".accordion-info").not($(this).next()).slideUp();
  //   });

  //   $(".accordion").on("click", ".item", function () {
  //     $(this).addClass("active").siblings().removeClass("active");
  //   });

  return (
    <section className="app-faq section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="content md-mb50">
              <h6 className="stit mb-30">
                <span className="left"></span> Preguntas frecuentes
              </h6>
              <h2 className="mb-30">
              ¿Tiene alguna pregunta sobre Minds? Preguntas frecuentes
              </h2>
              <p>
                Sed perspiciatis unde omnis natus error sit voluptatem accus
                doloremque laudantium totarem aperiam eaqupsa quae abillo
                inventore veritatis quasi architecto
              </p>
              <a href="#0" className="butn-bord-red rounded buton mt-30">
                <span>Obtenga 7 días de prueba gratis</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="content">
              <div className="accordion shadwo">
                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                    Todo lo que quieres saber sobre la creación ?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p>
                    Pero debo explicarte cómo nació toda esta idea errónea que denuncia el placer
                      placer y alabando el dolor nació y te daré
                      completo el sistema y expondré las verdaderas enseñanzas de
                      el gran explorador
                    </p>
                  </div>
                </div>

                <div
                  className="item active mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                    Los marcos resuelven y sin ellos ?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info active">
                    <p>
                    Pero debo explicarte cómo nació toda esta idea errónea que denuncia el placer
                      placer y alabando el dolor nació y te daré
                      completo el sistema y expondré las verdaderas enseñanzas de
                      el gran explorador
                    </p>
                  </div>
                </div>

                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Introducción a las capas en cascada de CSS ?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p>
                    Pero debo explicarte cómo nació toda esta idea errónea que denuncia el placer
                      placer y alabando el dolor nació y te daré
                      completo el sistema y expondré las verdaderas enseñanzas de
                      el gran explorador
                    </p>
                  </div>
                </div>

                <div
                  className="item"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Guía para el diseño de sitios web con mejores enlaces ?
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p>
                    Pero debo explicarte cómo nació toda esta idea errónea que denuncia el placer
                      placer y alabando el dolor nació y te daré
                      completo el sistema y expondré las verdaderas enseñanzas de
                      el gran explorador
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
