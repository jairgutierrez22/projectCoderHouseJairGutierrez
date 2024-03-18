import { useCarritoContext } from "../context/CartContext"
import { useCounter } from '../hooks/useCounter.js'
import '../styles/estilos.css'

export const ItemCart = ({ product }) => {
    const { removeItem, updateItem } = useCarritoContext()
    const { count, increment, decrement } = useCounter(product.quantity, product.cantidad_produc, 1)
    return (
        <div className="item_list_st">
            <div className="item_list_st_foto">
                <img src={`../img/${product.url_img_prod}`} alt={`Imagen de ${product.nombre_prod}`} className="item_list_st_foto" />
            </div>
            <div className="item_list_st_nombre">
                <h3 className="item_list_st_nombre">{product.nombre_prod} {product.categoria_prod}</h3>
            </div>
            <div className="flex items-center">
                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={async () => {
                    updateItem(product.id_producto, count - 1)
                    decrement()
                }}>
                    -
                </button>
                <span className="text-xl font-bold">{count}</span>
                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => {
                    updateItem(product.id_producto, count + 1)
                    increment()
                }}>
                    +
                </button>
            </div>
            <div className="ml-4">
                <p className="text-lg font-semibold">Subtotal: ${product.precio_prod * count}</p>
            </div>
            <div className="ml-4">
                <button className="bg-red-500  text-white px4 py-2 rounded" onClick={() => removeItem(product.id_producto)}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}