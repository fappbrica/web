/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Blogs2 = () => {
  return (
    <section className="blog-list section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="head md-mb50">
              <h6 className="back-color">Obtenga las últimas noticias</h6>
              <h3>Estás son nuestras noticias de tendencia.</h3>
              <p>
              Brindamos servicios y finanzas para empresas emergentes.
              </p>
              <Link href="/blog/blog-dark">
                <a>
                  <span>MÁS PUBLICACIONES DE BLOG</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog/1.jpg" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark">
                      <a className="date">
                        <span>
                          <i>06</i> Agosto
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="/blog/blog-dark">
                      <a className="tag">
                        <span>WordPress</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                       Como combinar colores sólidos con muebles sencillos
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".5s">
              <div className="img valign">
                <img src="/img/blog/2.jpg" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark">
                      <a className="date">
                        <span>
                          <i>06</i> Agosto
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="/blog/blog-dark">
                      <a className="tag">
                        <span>WordPress</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                      Como combinar colores sólidos con muebles sencillos
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog/3.jpg" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark">
                      <a className="date">
                        <span>
                          <i>06</i> Agosto
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="/blog/blog-dark">
                      <a className="tag">
                        <span>WordPress</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                      Como combinar colores sólidos con muebles sencillos
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs2;
