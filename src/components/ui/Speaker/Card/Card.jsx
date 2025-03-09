import linkedin_logo from "../../../../assets/img/linkedin.svg";
import instagram_logo from "../../../../assets/img/instagram.svg";
import github_logo from "../../../../assets/img/github.svg";
import website_logo from "../../../../assets/img/website.svg";

//TODO: Explicar que un componente puede tener componentes relacionados
function SocialMedia({ speaker }) {
    let logos = [linkedin_logo, instagram_logo, github_logo, website_logo];
    let handles = speaker.handles;
    return (
        <div className="redes vertical_escritorio">
        {handles.map((handles, index) => {
            return (
                <a className="enlace" href={handles.url} target="_blank">
                    <img src={logos[handles.id]} width="16" />
                </a>
            );
        })}
      </div>
    );
}
//TODO:Explicar que un componente puede retornar null para indicar empty
function IsAlumni({speaker}){
    if(speaker.is_alumni){
        return (
            <p className="egreso vertical_escritorio">
              Año de egreso
              <span className="fecha">{speaker.graduation_year}</span>
            </p>
        );
    }
    return null;
}
function Card({ speaker }) {
  return (
    <div className="tarjeta_speaker">
        <div className="avatar">
            <img src={speaker.avatar} alt="avatar" />
        </div>
        <span className="nombre_tarjeta vertical_escritorio">
        {speaker.name}
        </span>
        <IsAlumni speaker={speaker} />
        <p className="descripcion vertical_escritorio"> 
          {speaker.description}
        </p>
        <SocialMedia speaker={speaker} />
      </div>
  );
}
export default Card;

/*
<div class="tarjeta_speaker">
        <div class="avatar speaker_2"></div>
        <p class="nombre_tarjeta vertical_escritorio">Juan Felipe Franco Zuluaga</p>
        <p class="egreso vertical_escritorio">Año de egreso <span class="fecha">2020</span></p>
        <p class="descripcion vertical_escritorio">
          Desarrollador de software con 2 años de experiencia especializado en soluciones web, enfoque en frontend. Con conocimiento en librerías como react (librería principal). Conocimientos en javascript y typescript, backend con nodejs y next.js. Actualmente aprendiendo Flutter, para ampliar los conocimientos en el desarrollo de aplicaciones móviles. Capaz de trabajar de manera individual o con un equipo.
        </p>
        <div class="redes vertical_escritorio">
          <a class="enlace" href="https://www.linkedin.com/in/juan-felipe-franco-zuluaga-226ab9158" target="_blank">
            <img src="img/linkedin.svg" width="16" >
          </a>
        </div>
*/