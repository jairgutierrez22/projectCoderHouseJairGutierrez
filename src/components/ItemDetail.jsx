import { Link } from "react-router-dom"
import './App.css'
export const ItemDetail = ({ item }) => {
    return (

        <div className="bg-white p-8 rounded-lg max-w-md">
            <Link to={'/'}>
                <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-900">Cerrar</button>
            </Link>

            {/* <img className="w-full h-64 object-cover mb-6" src={`../img/${item.img}`} alt={`Imagen de ${item.title}`} /> */}
            <div className="text-center">
                <h2 className="text-2x1 font-bold mb-2">{item.nombre_prod}</h2>
                <p className="text-gray-700 mb-2 font-semibold">Descripción: {item.descripcion_prod}</p>
                <p className="text-gray-700 mb-2 font-semibold">Precio: ${item.precio_prod}</p>
            </div>
        </div>


    )
}