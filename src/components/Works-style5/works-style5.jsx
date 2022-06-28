/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle5 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio po-arch section-padding pb-70" id="po-arch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Proyectos
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter custom-font wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                Todos
              </span>
              <span data-filter=".brand">Interior</span>
              <span data-filter=".web">Arquitectura</span>
              <span data-filter=".graphic">Residencial</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/1.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>CASA BUGANVILLA</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Archivo</Link>,
                  <Link href="/works/works-dark">Interior</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/2.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>El concepto</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Archivo</Link>,
                  <Link href="/works/works-dark">Interior</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/5.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Casa privada</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Archivo</Link>,
                  <Link href="/works/works-dark">Interior</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/3.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Casa flotante Messinia</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Archivo</Link>,
                  <Link href="/works/works-dark">Interior</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/4.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>EN EL PINAR</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Archivo</Link>,
                  <Link href="/works/works-dark">Interior</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/6.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>VILLAS EN SOCHI</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Archivo</Link>,
                  <Link href="/works/works-dark">Interior</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle5;
