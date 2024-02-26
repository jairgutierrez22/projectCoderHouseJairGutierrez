import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"
import './App.css'
export const ItemDetailsContainer = () => {
    const [item, setItem] = useState([])
    const { pid } = useParams()

    useEffect(() => {
        fetch('../assets/json/accesorios_productos.json')
            .then(response => response.json())
            .then(productos => {
                const prod = productos.find(producto => producto.id_producto == pid)
                if (prod)
                    setItem(prod)
            })
    }, [])
    return (
        <div className="">
            <ItemDetail item={item} />
        </div>
    )
}