import React from "react";
import './App.css'
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

function NavBar() {

  return (
    <>
        <header className="div_navbar" >
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                <div className="container-fluid d-flex justify-content-center">
                    <a className="navbar-brand" href="#">Tienda Deportiva | Bogotá DC</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center" >
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Ropa</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Descuentos</a>
                                </li>
                                <li>
                                    <ItemListContainer mensaje="Registrado por Jair Gutiérrez" />
                                </li>
                                <li className="nav-item" style={{marginTop: 10,marginLeft: 1000}}>
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