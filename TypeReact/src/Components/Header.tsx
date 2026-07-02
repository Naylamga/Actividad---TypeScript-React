import React from 'react'
import './layouts.css'
import Logo from '../assets/Logo/logo.png'
import Intermedio from '../assets/Intermedio/inter.png'

function Header() {
  return (
    <>
        <header className="encabezado">
            <img src={Logo} alt="Logo" title='LogoTipo'/>
            <nav className="menu">
                <a href="">Nosotros</a>
                <a href="">Galeria</a>
                <a href="">Productos</a>
                <a href="" className='btnContactos'>Contacto</a>
            </nav>
        </header>
        <div className="intermedio">
            <img src={Intermedio} alt="" />
        </div>
    </>
  )
}

export default Header