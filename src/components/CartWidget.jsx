import React from "react";

import { useCarritoContext } from "../context/CartContext"
import { Link } from "react-router-dom"
const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    return (
        // <div>
        //     <li  className="nav-item">
        //         <span style={{color: "blueviolet", fontWeight: "bold"}}>5</span>
        //         
        //     </li>
        // </div>
        
        <li className="text-white">
            <Link to={'/cart'}>
                <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                    <a><i className="fas fa-shopping-cart"></i></a>
                    <span>{getItemQuantity()}</span>
                </button>
            </Link>
        </li>
    );
};

export default CartWidget;