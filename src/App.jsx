import React from 'react'
import './App.css'
import PRODUCTOS from './Productos.js'
import Fila_Categoria from './Fila_Categoria.jsx'

export default function App () {

  return (
    <div className="container">
      <h1>Café Anima</h1>
      <Fila_Categoria productos={PRODUCTOS}/>
    </div>
  )
}