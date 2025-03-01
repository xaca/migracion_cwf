import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Home from './components/pages/Home/Home.jsx';
import Header from "./components/ui/Header/Header";
import Menu from "./components/ui/Menu/Menu";
import Footer from "./components/ui/Footer/Footer";
import './css/generales.scss';

function App() {
  const [contador, setContador] = useState(0);
  function incrementar(){
    setContador(contador+1);
    return contador;
  }
  return(<>
    <Header />
    <Menu />
    <Home />
    <Footer />
  </>);
}

export default App
