import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Slider from './components/ui/Slider/Slider.jsx'
import Usuario from './Usuario.js';

function App() {
  const [contador, setContador] = useState(0);

  function incrementar(){
    /*const usuario = new Usuario();
    usuario.saludar();*/
    setContador(contador+1);
    return contador;
  }
  
  return(<>
  <Slider id_slider={"slider_1"} />
  <Slider id_slider={"slider_2"} /> 
  </>);
}

export default App
