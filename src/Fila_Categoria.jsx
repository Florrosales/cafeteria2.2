import React from 'react';
import Fila_producto from './Fila_producto';
import PropTypes from 'prop-types';


export default function Fila_Categoria({ productos }) {
  const categorias = [...new Set(productos.map(producto => producto.categoria))];
  return (
    <div>
      {categorias.map(categoria => (
        <div key = {categoria} className='categoria'>
          <h2>{categoria}</h2>
          <Fila_producto productos = {productos} categoria={categoria} />
          </div>
       )
      )}
    </div>
  );
}



  Fila_Categoria.propTypes = {
    productos: PropTypes.arrayOf(PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        categoria: PropTypes.string.isRequired
    })).isRequired
  }
