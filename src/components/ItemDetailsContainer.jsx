import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"
// import './App.css'
export const ItemDetailsContainer = () => {
    const [item, setItem] = useState([])
    const { pid } = useParams()

    // useEffect(() => {
    //     fetch('../assets/json/accesorios_productos.json')
    //         .then(response => response.json())
    //         .then(productos => {
    //             const prod = productos.find(producto => producto.id_producto == pid)
    //             if (prod)
    //                 setItem(prod)
    //         })
    // }, [])
    // useEffect(() => {
    //     fetch('../data/productos.json')
    //         .then(response => response.json())
    //         .then(prods => {
    //             if (pid) {
    //                 const productosFiltrados = prods.filter(prod => prod.category == pid)
    //                 setItem(productosFiltrados)
    //             } else {
    //                 setItem(prods)
    //             }

    //         })
    //         .catch((error) => console.log(error))
    // }, [pid])

    // return (
    //     <div className="">
    //         <ItemDetail item={item} />
    //     </div>
    // )
    useEffect(() => {
        fetch('../data/products.json')
            .then(response => response.json())
            .then(productos => {
                const prod = productos.find(producto => producto.id_producto == pid)
                if (prod)
                    setItem(prod)
            })
    }, [])
    return (
        <div className="fixed  top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <ItemDetail item={item} />
        </div>
    )
}