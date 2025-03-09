function Agenda() {
  return (
    <section id="agenda">
    <h1>Agenda</h1>
    <ul>
      <li className="item">
        <span>[17:30 - 18:00]</span> 
        <span>Networking, participantes</span>
      </li>
      <li className="item">
        <span>[18:00 - 19:00]</span>
        <span>Explorando Angular y React: ¿Cuál elegir?</span>
        <span className="speaker">
          / Axel Williams Sotelo Grajales <br />
          / Juan Felipe Franco Zuluaga
        </span>
      </li>
      <li className="item">
        <span>[19:10 - 19:30]</span> 
        <span>Conversatorio y preguntas</span> 
        <span className="speaker">
          / Panel de invitados
        </span>
      </li>
      <li className="item">
        <span>[19:40 - 20:30]</span> 
        <span>Cierre temporada</span> 
        <span className="speaker">
          / Rifas y regalos
        </span>
      </li>
    </ul>
    </section>
  );
}
export default Agenda;