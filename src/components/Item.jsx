import { Link } from "react-router-dom"
import '../styles/estilos.css'

export const Item = ({ product }) => {
    return (

        <Link className="producto_id" to={`/product/${product.id_producto}`}>
            <div className="productos-container">
                <div className="productos-grid">

                    <div className="producto-card" >
                        <img className="fotos_img" src={`../img/${product.url_img_prod}`} alt={`Imagen de ${product.nombre_prod}`} />
                        <h2 className="nombre">{product.nombre_prod}</h2>
                        <p className="descripcion">{product.descripcion_prod}</p>
                        <p className="valor">Precio: ${product.precio_prod}</p>
                        {product.descuento_prod && <p className="descuento">¡Descuento disponible!</p>}
                        <p className="categoria">Categoría: {product.categoria_prod}</p>
                        <p className="cantidad">Disponibles: {product.cantidad_produc}</p>
                    </div>

                </div>
            </div>


            
        </Link>

    )
}