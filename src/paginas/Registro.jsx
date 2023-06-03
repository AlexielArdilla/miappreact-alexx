import React from "react";


function Registro() {

    return (
        <>
            <h1>Regístrate</h1>
            <div className="registro">
                <form action="#" method="GET">
                    <label>
                        Nombre:
                    </label><br />
                    <input type="text" name="name" required placeholder="Nombre"/><br />
                    <label>
                        Email:
                    </label><br />
                    <input type="email" name="email" required placeholder="email"/><br />
                    <label>
                        Password:
                    </label><br />
                    <input type="password" name="password" placeholder="password" required />
                    <br />
                    <button type="submit" value="Submit" id="botonComprar">Enviar</button><br />
                </form>
            </div>
        </>
    );
}

export default Registro;