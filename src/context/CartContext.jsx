import { useState, createContext, useContext } from "react";

const CarritoContext = createContext() //Creando el contexto (por el momento vacio)

export const useCarritoContext = () => useContext(CarritoContext) //Funcion para consultar mi contexto en otros componentes

export const CarritoProvider = (props) => { //Forma de proveer el contexto, puede recibir props

    const [carrito, setCarrito] = useState([])

    //Buscar Producto
    const isInCart = (id_producto) => {
        return carrito.some(prod => prod.id_producto === id_producto) //V o F, si existe o no el producto en el carrito
    }

    //Agregar producto
    const addItem = (item, cantidad) => {
        if (isInCart(item.id_producto)) {

            const indice = carrito.findIndex(prod => prod.id_producto === item.id_producto)
            const aux = [...carrito]
            aux[indice].quantity = cantidad
            console.log(aux[indice])
            console.log(aux)
            setCarrito(aux)
        } else {
            const newItem = {
                ...item,
                quantity: cantidad
            }

            /*const aux = [...carrito]
            aux.push(newItem)
            setCarrito(aux)*/

            setCarrito([...carrito, newItem]) //Guardo en el carrito el nuevo producto
        }
    }

    //Eliminar producto
    const removeItem = (id_producto) => {
        /*const aux = [...carrito]
        const indice = aux.findIndex(prod => prod.id === id)

        if (indice != -1) {
            setCarrito(aux.splice(indice, 1))
        }*/

        setCarrito(carrito.filter(prod => prod.id_producto !== id_producto))
    }

    //Vaciar carrito
    const emptyCart = () => {
        setCarrito([])
    }

    const updateItem = (id_producto, newQuantity) => {
        const indice = carrito.findIndex(prod => prod.id_producto === id_producto)
        const aux = carrito
        aux[indice].quantity = newQuantity
        setCarrito([...aux])
    }

    //Obtener cantidad de productos
    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    //Obtener precio total del carrito
    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.precio_prod), 0)
    }

    console.log(carrito)
    return (
        <CarritoContext.Provider value={{ carrito, addItem, removeItem, updateItem, emptyCart, getItemQuantity, totalPrice }}>
            {props.children}

        </CarritoContext.Provider>
    )
}