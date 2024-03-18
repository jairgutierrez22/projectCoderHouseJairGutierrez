import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ItemList } from "./ItemList"
// import './App.css'
import '../styles/estilos.css'

function ItemListContainer() {
    const [products, setProducts] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        fetch('../data/products.json')
            .then(response => response.json())
            .then(prods => {
                if (cid) {
                    const productosFiltrados = prods.filter(prod => prod.categoria_prod == cid)
                    setProducts(productosFiltrados)
                } else {
                    setProducts(prods)
                }

            })
            .catch((error) => console.log(error))
    }, [cid])


    return (
        
        <div className="productos-ver">
            <ItemList products={products} plantilla="Item"/>
        </div>
    )
}

export default ItemListContainer;