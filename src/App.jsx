import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Router from './components/ui/Menu/Router.jsx';
import './css/variables.scss';
import './css/generales.scss';

function App() {
  const [contador, setContador] = useState(0);

  function incrementar(){
    /*const usuario = new Usuario();
    usuario.saludar();*/
    setContador(contador+1);
    return contador;
  }
  
  return(<>
    <Router />
  </>);
}

export default App
