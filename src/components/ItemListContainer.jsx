import React from 'react';

function ItemListContainer(props) {
    return (
        <div>
            <a className="nav-link active" aria-current="page" href="#"style={{width: 300, marginLeft: 50}}>{props.mensaje}</a>
        </div>
    );
}

export default ItemListContainer;