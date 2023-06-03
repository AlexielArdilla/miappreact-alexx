import React, { useState } from "react";


function Producto({id,imagen,nombre, precio }) {

    const [comprar, setComprar] = useState("");

    const handleComprar = (e) =>{
        setComprar("Compró el producto!!!")
    }

    return (
        <div className="contenerdorProducto">
            <img src={imagen} alt="Imagen producto" /><br />
            <div className="nombreYPrecio">
            <h2>{nombre}</h2>
            <h3>AR${precio}</h3>
            </div><br />
            <div>{comprar}</div>
            <button id="botonComprar" onClick={handleComprar}>Comprar</button>
        </div>
    )
}

export default Producto;