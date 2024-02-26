
import { Link } from "react-router-dom"
export const Categorias = () => {
    return (
        <>
            <li className="text-white">
                <Link to={'/categoria_prod/Descuentos'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <span>Descuentos</span>
                    </button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/categoria_prod/Ropa'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <span>Ropa</span>
                    </button>
                </Link>

            </li>
        </>
    )
}