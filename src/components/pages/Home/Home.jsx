
import Slider from "../../ui/Slider/Slider";
import Gallery from "../../ui/Gallery/Gallery";
import "./Home.scss";

function Home(){
    return(<>
        <Slider id_slider={"slider_1"} />
        <Gallery />
    </>);
}

export default Home;