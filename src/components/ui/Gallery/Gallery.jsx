import listaDeFotos from "../../data/fotos.js";
import Image from "./Image.jsx";
import './Gallery.scss';

function Gallery() {
  let galeria = listaDeFotos();
  return (
    <div id="images-wrapper">
      {
        galeria.map((foto,index)=>{
          return <Image src={foto} key={index} />
        })
      }
    </div>
  );
}
export default Gallery;