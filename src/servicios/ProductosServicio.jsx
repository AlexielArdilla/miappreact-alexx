
export function getAllProductos(){

    let id= "iPhone";

    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${id}`).then(res=>res.json());
}
