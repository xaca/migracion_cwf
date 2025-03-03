import { NavLink } from "react-router";

function Menu(){
    return(<>
    <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cine">Cine</NavLink>
        <NavLink to="/deportes">Deportes</NavLink>
    </nav>
    </>);
}
export default Menu;