
import { BrowserRouter, Routes, Route } from "react-router";
import Gallery from "../../ui/Gallery/Gallery";
import Slider from "../../ui/Slider/Slider";
import Header from "../../ui/Header/Header";
import Footer from "../../ui/Footer/Footer";
import Menu from "../../ui/Menu/Menu";
import "./Home.scss";

function Home(){
    return(<>
        <BrowserRouter>
            <Header />
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cine" element={<Cine />} />
                <Route path="deportes" element={<Deportes />} />
            </Routes>
            <Slider id_slider={"slider_1"} />
            <Gallery />
            <Footer />
        </BrowserRouter>
    </>);
}

export default Home;