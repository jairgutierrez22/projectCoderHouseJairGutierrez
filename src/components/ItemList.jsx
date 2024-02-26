import { Item } from "./Item"
import './App.css'
export const ItemList = ({ products }) => {
    return (
        <>
        
            
            {products.map(prod => <Item product={prod} />)}
        </>

    )
}