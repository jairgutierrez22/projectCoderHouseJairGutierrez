import React, { Component } from 'react';
import './App.css'
import datos from '../assets/json/accesorios_productos.json'; // Importar el archivo JSON

class MiComponent extends Component {
  render() {
    return (
    //   <div>
    //     <h1>Productos</h1>
    //     <ul>
    //       {datos.map((producto, index) => (
    //         <li key={index}>
    //           <h2>{producto.nombre_prod}</h2>
    //           <p>{producto.descripcion_prod}</p>
    //           <p>Valor: {producto.precio_prod}</p>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    <div className="productos-container">
        <h1 className="titulo">Nuestros Productos</h1>
        <div className="productos-grid">
          {datos.map((producto, index) => (
            <div className="producto-card" key={index}>
              <img className="imagen" src={producto.url_img_prod} alt={producto.nombre_prod} />
              <h2 className="nombre">{producto.nombre_prod}</h2>
              <p className="descripcion">{producto.descripcion_prod}</p>
              <p className="valor">Valor: ${producto.precio_prod}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MiComponent;
