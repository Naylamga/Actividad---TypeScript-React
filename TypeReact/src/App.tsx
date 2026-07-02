import React from 'react'
import Header from './Components/Header'
import {ListarPokemon} from './db/arrays'
import Tarjetas from './Components/Tarjetas.tsx'

function App() {
  return (
    <>
      <Header />
      <div className="contenedor">
        {ListarPokemon.map(Pokemon=>(
          <Tarjetas key={Pokemon.id} pokemon={Pokemon}/>
        ))}
      </div>
      <footer className="pie-pagina">
        <p>7°2 - Gomez Nayla</p>
      </footer>
    </>
  )
}

export default App