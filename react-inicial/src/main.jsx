import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' //importa o necessario para rodar o projeto
import Bicicletas from './pages/Bicicletas.jsx'

createRoot(document.getElementById('root')).render( //modifica o root e renderiza a aplicação
  <React.StrictMode>
    {/* <App />   */}
  <Bicicletas/> 
  </React.StrictMode>,
) //carrega arquivo app.jsx 
   





