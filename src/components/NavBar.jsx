import React from "react";
import './App.css'
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";
// import Categorias from "./Categorias.jsx";
import { Categorias } from "./Categorias.jsx";
function NavBar() {

  return (
    <>
        <header className="div_navbar" >
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                <div className="container-fluid d-flex justify-content-center">
                    <Link to="/" className="navbar-brand" style={{marginLeft: 10}}>Tienda Deportiva | Bogotá DC</Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center" >
                            <Categorias></Categorias>
                            <li className="nav-item" style={{marginTop: 10, marginLeft: 800}}>
                                <CartWidget/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default NavBar