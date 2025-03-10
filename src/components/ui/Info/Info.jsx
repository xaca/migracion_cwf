function Info({info})
{
    return (<>
    <section id="info">
      <h1>Información sobre el evento</h1>
      <p className="fecha">
        <span>Fecha:</span> {info.date}</p>
      <br />
      <p>
        El evento se realizará en el campus laureles de la Universidad Pontificia Bolivariana de Medellín (clic  <a href="https://www.upb.edu.co/es/universidad/nuestro-campus/campus-medellin/laureles/como-llegar" target="_blank">aquí</a>  para ver como llegar).
      </p><br />
      <p className="fecha">
        <span>Lugar:</span> {info.venue}
      </p><br />
      <p className="fecha">
        <span>Hora:</span> {info.time}
      </p><br />
      <span className="mensaje_importante">
        * Traer documento de identidad para poder ingresar a la universidad.
      </span>
    </section>
    </>);
}
export default Info;