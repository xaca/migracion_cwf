import Card from "./Card/Card";

function Speaker({ speaker }) {
  return (
    <section id="speakers">
    <h1>Biografías</h1>
    <section>
      <Card speaker={speaker} />
    </section>
  </section>
  );
}

export default Speaker;