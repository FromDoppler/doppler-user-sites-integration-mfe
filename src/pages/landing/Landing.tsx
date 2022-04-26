import {
  LandingContainer,
  LandingBreadcrumb,
  LandingContent,
  LandingIconImg,
  LandingRightDiagramImg,
} from "./styled-components/Landing.styled";

const Landing = () => {
  return (
    <>
      <LandingContainer className="dp-container" aria-label="LandingContainer">
        <div className="dp-rowflex">
          <div className="col-sm-12 col-md-8 col-lg-6 m-b-12">
            <LandingBreadcrumb className="breadcrumb">
              {/*Todo: replace with Link Router*/}
              <a href="/control-panel">Panel de Control</a>
              &nbsp;&nbsp;&gt;&nbsp;&nbsp;Seguimiento en Sitio y Notificaciones
              Push
            </LandingBreadcrumb>
            <LandingIconImg />
            <div className="entry-content">
              <h2>
                Activa Seguimiento en Sitio y Notificaciones Push. ¡Haz crecer
                tu negocio!
              </h2>
              <hr className="dp-separator"></hr>
              <LandingContent>
                <p>
                  Con <strong>Seguimiento en Sitio</strong> podrás conocer la
                  actividad de tus visitantes y enviarles contenidos acordes a
                  sus intereses y necesidades. ¡Así crecerán las chances de
                  concretar ventas!
                </p>
                <p>
                  Configurando <strong>Notificaciones Push</strong> te aseguras
                  de que las alertas lleguen a Contactos 100% reales que se
                  suscriben con solo un clic. Son muy útiles para aumentar el
                  tráfico a tu Web, ya que se visualizan en distintos
                  dispositivos aunque las personas no estén navegando en tu
                  Sitio.
                </p>
              </LandingContent>
              {/*Todo: replace with Link Router*/}
              <button
                type="button"
                className="dp-button button-medium primary-green"
              >
                Comenzar
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-6 m-b-12">
            <LandingRightDiagramImg />
          </div>
        </div>
      </LandingContainer>
    </>
  );
};
export default Landing;
