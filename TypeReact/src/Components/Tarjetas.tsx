import React from 'react'
import type { Pokemon } from '../db/arrays'

interface TodosPokemon {
    pokemon: Pokemon;
}

function Tarjetas({pokemon}:TodosPokemon) {
  return (
    <>
        <div className="tarjetas">
            <h1>Nombre: {pokemon.Nombre}</h1>
            <img src={pokemon.Imagen} alt="imgProducto"/>
            <h2>Precio: ${pokemon.Precio}</h2>
            <p>Descripcion:{pokemon.Descripcion}</p>
        </div>
    </>
  )
}

export default Tarjetas