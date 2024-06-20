import React from 'react';
import PropTypes from 'prop-types';

export default function  Fila_producto({ productos, categoria }) {

    return (
        <div>
            <ul>
                {productos.filter(producto => producto.categoria === categoria).map (producto => (
                    <li key ={producto.nombre}>
                        <p>
                          <b>{producto.nombre}:</b>  
                          precio: {producto.precio}, stock {producto.stock}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

    Fila_producto.propTypes = {
        productos: PropTypes.arrayOf(PropTypes.shape({
            nombre: PropTypes.string.isRequired,
            precio: PropTypes.number.isRequired,
            stock: PropTypes.number.isRequired,
            categoria: PropTypes.string.isRequired
        })).isRequired,
        categoria: PropTypes.string.isRequired
    };
        

