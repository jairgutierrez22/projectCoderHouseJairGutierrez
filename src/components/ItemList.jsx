import { Item } from "./Item"
import { ItemCart } from "./ItemCart"
export const ItemList = ({ products,plantilla }) => {
    return (
        <> 
            
            {
                /* {products.map(prod => <Item product={prod} />)} */
                plantilla === 'Item'
                    ?
                    products.map(prod => <Item key={prod.id_producto} product={prod} />)
                    :
                    products.map(prod => <ItemCart key={prod.id_producto} product={prod} />)
            }
        </>

    )
}