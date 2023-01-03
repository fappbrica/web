/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { Link as ScrollLink } from "react-scroll";

const BlogDetails = ({ theme }) => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/blog/single.jpg" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">
                      Prioridades que aparecerán en cualquier mes en particular.
                      </h4>
                      <div className="spacial">
                        <p>
                        Nunca jamás pienses en rendirte. Ganadores nunca se rinden y los que se rinden nunca ganan. Saca todas las palabras negativas de tu diccionario mental y concéntrate en las soluciones con la mayor convicción y paciencia. La batalla nunca se pierde hasta que abandonas tu visión.
                        </p>
                      </div>
                      <p>
                      el componente principal de un entorno saludable para la autoestima es que necesita ser nutritivo. El componente principal de un entorno saludable para la autoestima es que necesita ser nutritivo. El componente principal de un entorno saludable para la autoestima El componente principal debe ser nutritivo Debe brindar calidez incondicional. El componente principal de un entorno saludable para la autoestima El componente principal debe ser nutritivo Debe proporcionar incondicional
                      </p>

                      <h6>- Todos tenemos la intención de planificar el futuro.</h6>

                      <p>
                      Todos tenemos la intención de planificar con anticipación, pero con demasiada frecuencia dejamos que las minucias del día a día se interpongan en la elaboración de un calendario para el año. Claro, no se puede saber cada detalle para anticipar. Diablos, no puedes saber la mitad de las prioridades que aparecerán en un mes en particular. Pero puede planificar la estacionalidad general, las horas punta y los eventos.
                      </p>

                      <ul>
                        <li>
                          <span>01</span> Entero en volutpat libero.
                        </li>
                        <li>
                          <span>02</span> Vivamus entero en volutpat libero
                        </li>
                        <li>
                          <span>03</span> prioridades que aparecerán en cualquier mes en particular.
                        </li>
                        <li>
                          <span>04</span> Todos tenemos la intención de planificar con anticipación.
                        </li>
                        <li>
                          <span>05</span> El componente principal de un entorno saludable para la autoestima.
                        </li>
                      </ul>

                      <div className="quotes text-center">
                        <p>
                          Nunca jamás pienses en rendirte. Ganadores nunca se rinden y los que se rinden nunca ganan. Saca todas las palabras negativas de tu diccionario mental y concéntrate en las soluciones con la mayor convicción y paciencia. La batalla nunca se pierde hasta que abandonas tu visión.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/blog/2.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/blog/3.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <p>
                        Todos tenemos la intención de planificar con anticipación, pero con demasiada frecuencia dejamos que las minucias del día a día se interpongan en la elaboración de un calendario para el año. Claro, no se puede saber cada detalle para anticipar. Diablos, no puedes saber la mitad de las prioridades que aparecerán en un mes en particular. Pero puede planificar la estacionalidad general, las horas punta y los eventos.
                      </p>
                      <div className="share-info">
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                        <div className="tags">
                          <a href="#0">Web</a>,<a href="#0">Bosque temático</a>,
                          <a href="#0">Temas Componentes</a>
                        </div>
                      </div>
                    </div>
                    <div className="author">
                      <div className="author-img">
                        <img src="/img/blog/01.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          <span>author :</span> Jorden Griffin
                        </h6>
                        <p>
                          el componente principal de un entorno saludable para la autoestima es que necesita ser nutritivo. El componente principal de un ambiente saludable.
                        </p>
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <span>
                  <a href="#0">Publicación anterior</a>
                </span>
                <span className="icon">
                  <Link href={`/blog/blog-dark`}>
                    <a>
                      <i className="fas fa-th-large"></i>
                    </a>
                  </Link>
                </span>
                <span className="text-right">
                  <a href="#0">Publicación siguiente</a>
                </span>
              </div>

              <div className="comments-area">
                <h5>Comentarios: </h5>
                <div className="item">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <ScrollLink
                        to="comment-form"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        Repetición <i className="fas fa-reply"></i>
                      </ScrollLink>
                    </span>
                    <p>
                      el componente principal de un entorno saludable para la autoestima es que necesita ser nutritivo. El componente principal de un ambiente saludable.
                    </p>
                  </div>
                </div>
                <div className="item relped">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <ScrollLink
                        to="comment-form"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        Repetición <i className="fas fa-reply"></i>
                      </ScrollLink>
                    </span>
                    <p>
                      el componente principal de un entorno saludable para la autoestima es que necesita ser nutritivo. El componente principal de un ambiente saludable.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <ScrollLink
                        to="comment-form"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        Repetición <i className="fas fa-reply"></i>
                      </ScrollLink>
                    </span>
                    <p>
                      el componente principal de un entorno saludable para la autoestima es que necesita ser nutritivo. El componente principal de un ambiente saludable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="comment-form" id="comment-form">
                <h5>Agregar comentario :</h5>
                <div className="form">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      comment: "",
                    }}
                    onSubmit={async (values) => {
                      await sendMessage(500);
                      alert(JSON.stringify(values, null, 2));
                      // Reset the values
                      values.name = "";
                      values.email = "";
                      values.comment = "";
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <Field
                                as="textarea"
                                placeholder="Escriba su comentario"
                                name="comment"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="text"
                                placeholder="Escriba su nombre"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="email"
                                validate={validateEmail}
                                placeholder="Escriba su correo electrónico"
                                name="email"
                              />
                              {errors.email && touched.email && (
                                <div>{errors.email}</div>
                              )}
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group text-center">
                              <button
                                type="submit"
                                className={`nb butn ${
                                  theme
                                    ? theme === "light"
                                      ? "dark"
                                      : ""
                                    : "light"
                                } curve full-width`}
                              >
                                Comentar
                              </button>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
