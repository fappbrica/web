/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SwiperCore, {
  Navigation,
  Pagination,
  Parallax,
  EffectFade,
} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { thumparallax } from "../../../common/thumparallax";
import removeSlashFromPagination from "../../../common/removeSlashpagination";

SwiperCore.use([Navigation, Pagination, Parallax, EffectFade]);

const Blogs4 = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
      thumparallax();
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <section className="blog-crv sub-bg">
      <h2 style={{ display: "none" }}>&nbsp;</h2>
      <div className="stories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 no-padding">
              {!load ? (
                <Swiper
                  speed={800}
                  effect="fade"
                  spaceBetween={0}
                  loop={true}
                  parallax={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  pagination={{
                    type: "fraction",
                    clickable: true,
                    el: paginationRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.params.pagination.el = paginationRef.current;
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].childNodes[0].setAttribute(
                          "data-swiper-parallax",
                          0.75 * swiper.width
                        );
                      }

                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      swiper.params.pagination.el = paginationRef.current;

                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();

                      swiper.pagination.destroy();
                      swiper.pagination.init();
                      swiper.pagination.update();
                    });
                  }}
                  className="swiper-wrapper swiper-container swiper-img"
                  slidesPerView={1}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : null}
            </div>
            <div className="col-lg-6 no-padding valign">
              {!load ? (
                <Swiper
                  speed={800}
                  spaceBetween={0}
                  loop={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  pagination={{
                    type: "fraction",
                    clickable: true,
                    el: paginationRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.params.pagination.el = paginationRef.current;
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].childNodes[0].setAttribute(
                          "data-swiper-parallax",
                          0.75 * swiper.width
                        );
                      }

                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      swiper.params.pagination.el = paginationRef.current;

                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();

                      swiper.pagination.destroy();
                      swiper.pagination.init();
                      swiper.pagination.update();
                    });
                  }}
                  className="swiper-wrapper swiper-container swiper-content"
                  slidesPerView={1}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className="content">
                        <div className="tags">
                          <Link href="/blog/blog-dark">Tendencias</Link>
                        </div>
                        <div className="info">
                          <Link href="/blog/blog-dark">
                            <a>
                              <i className="far fa-clock"></i>
                              06 Agosto 2022
                            </a>
                          </Link>
                          <a href="#0">by Alex Morgan</a>
                        </div>
                        <div className="title">
                          <h4>
                            <Link href="/blog-details/blog-details-dark">
                              Crea el estilo de vida que realmente deseas en este mundo
                            </Link>
                          </h4>
                        </div>
                        <div className="text">
                          <p>
                          El éxito no es un accidente. Es un trabajo duro,
                          perseverancia, aprendizaje, estudio, sacrificio y lo más
                          de todo, amor por lo que haces.
                          </p>
                        </div>
                        <div className="more">
                          <Link href={`/blog-details/blog-details-dark`}>
                          Leer más
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className="content">
                        <div className="tags">
                          <Link href="/blog/blog-dark">Tendencias</Link>
                        </div>
                        <div className="info">
                          <Link href="/blog/blog-dark">
                            <a>
                              <i className="far fa-clock"></i>
                              06 Agosto 2022
                            </a>
                          </Link>
                          <a href="#0">by Alex Morgan</a>
                        </div>
                        <div className="title">
                          <h4>
                            <Link href="/blog-details/blog-details-dark">
                              <a>Lista de los mejores proyectos de inversión</a>
                            </Link>
                          </h4>
                        </div>
                        <div className="text">
                          <p>
                            El éxito no es un accidente. Es un trabajo duro,
                            perseverancia, aprendizaje, estudio, sacrificio y lo más
                            de todo, amor por lo que haces.
                          </p>
                        </div>
                        <div className="more">
                          <Link href={`/blog-details/blog-details-dark`}>
                          Leer más
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className="content">
                        <div className="tags">
                          <Link href="/blog/blog-dark">Tendencias</Link>
                        </div>
                        <div className="info">
                          <Link href="/blog/blog-dark">
                            <a>
                              <i className="far fa-clock"></i>
                              06 Agosto 2022
                            </a>
                          </Link>
                          <a href="#0">by Alex Morgan</a>
                        </div>
                        <div className="title">
                          <h4>
                            <Link href="/blog-details/blog-details-dark">
                              Crea el estilo de vida que realmente deseas en este mundo
                            </Link>
                          </h4>
                        </div>
                        <div className="text">
                          <p>
                          El éxito no es un accidente. Es un trabajo duro,
                          perseverancia, aprendizaje, estudio, sacrificio y lo más
                          de todo, amor por lo que haces.
                          </p>
                        </div>
                        <div className="more">
                          <Link href={`/blog-details/blog-details-dark`}>
                          Leer más
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : null}
            </div>
          </div>

          <div className="controls">
            <div
              ref={navigationNextRef}
              className="swiper-button-next swiper-nav-ctrl next-ctrl"
            >
              <i className="fas fa-caret-up"></i>
            </div>
            <div
              ref={navigationPrevRef}
              className="swiper-button-prev swiper-nav-ctrl prev-ctrl"
            >
              <i className="fas fa-caret-down"></i>
            </div>
            <div className="swiper-pagination" ref={paginationRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs4;
