import logo from "../../../assets/img/logo.png";

function Header() {
  return (
    <div className="header">
        <img src={logo} className="logo_principal" alt="Coding with Friends :)" />
    </div>
  );
}
export default Header;