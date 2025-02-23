//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />,
)

/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/

/*StrictMode hace que los componentes se rendericen dos veces en la fase de desarrollo por lo que se comenta para evitarlo*/
