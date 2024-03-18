import { Link } from "react-router-dom"
import { useCounter } from "../hooks/useCounter"
import { useCarritoContext } from "../context/CartContext"
import '../styles/estilos.css'
export const ItemDetail = ({ item }) => {
    const { addItem } = useCarritoContext()
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)
    const handleAddToCart = () => {
        addItem(item, count)
    }
    return (

        <div className="item_detail">
            <Link to={'/'}>
                <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-900">Cerrar</button>
            </Link>

            <img className="item_detail_st_foto" src={`../img/${item.url_img_prod}`} alt={`Imagen de ${item.title}`} />
            <div className="text-center">
                <h2 className="text-2x1 font-bold mb-2">{item.nombre_prod}</h2>
                <p className="text-gray-700 mb-2 font-semibold">Descripción: {item.descripcion_prod}</p>
                <p className="text-gray-700 mb-2 font-semibold">Precio: ${item.precio_prod}</p>
                <div className="container mx-auto mt-8">
                    <div className="flex items-center justify-center space-x-4">
                        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={decrement}>
                            -
                        </button>
                        <span className="text-xl font-bold">{count}</span>
                        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={increment}>
                            +
                        </button>
                        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={reset}>
                            Reset
                        </button>
                        <button className="bg-indigo-500 text-white px-4 py-2 rounded" onClick={handleAddToCart}>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}