import React from "react";

const CartWidget = () => {
    return (
        <div>
            <li  className="nav-item">
                <span style={{color: "blueviolet", fontWeight: "bold"}}>5</span>
                <i className="fas fa-shopping-cart"></i>
            </li>
        </div>
    );
};

export default CartWidget;