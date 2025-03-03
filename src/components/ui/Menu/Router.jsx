import { BrowserRouter, Routes, Route,NavLink } from "react-router";
import Deportes from "../../pages/Deportes/Deportes";
import Home from "../../pages/Home/Home";
import Cine from "../../pages/Cine/Cine";
import "./Menu.scss";

function Router(){
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

export default Router;