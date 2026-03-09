import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Titulo from './componentes/Titulo'
import Aluno from './componentes/Aluno'
import Texto from './componentes/Texto'
import Botao from './componentes/Botao'

import './App.css'

function App() {
  return (
    <div>
      <Titulo/>
      <Aluno/>
      <input type="text" onChanfe={Texto}/>
      <button onClick={Botao}>
        Mostar Mensagem
      </button>
    </div>
  )
}

export default App
