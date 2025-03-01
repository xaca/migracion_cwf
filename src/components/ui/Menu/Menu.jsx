import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../../pages/Home/Home";
import Cine from "../../pages/Cine/Cine";
import Deportes from "../../pages/Deportes/Deportes";
import "./Menu.scss";

function Menu(){
    return(<>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cine" element={<Cine />} />
            <Route path="deportes" element={<Deportes />} />
        </Routes>
    </BrowserRouter>
    </>);
}

export default Menu;