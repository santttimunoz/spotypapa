export async function musicService(){
   //no olvidar instalar thunder client(extension de visual studio)
    
    //consumir apis con js
    //definir URL y EP(endPoint = nombre unico) del servicio
    const IDARTIST = "776Uo845nYHJpNaStv1Ds4"
    const URL = `https://api.spotify.com/v1/artists/${IDARTIST}/top-tracks?market=US`
    const URI ="https://accounts.spotify.com/api/token"

    //este token espira y es obsoleto
    const TOKEN = "Bearer BQB08dkrmn9qNV2hJAA1CVgV9OU3MZZ30CtoQf0W4-nCeYk35SPBkjaM5tZR7wHjutRAQMr9R4sbTZOIS7ro1v96jV50SWcj1Uc6g7kTEuzREYG6BJA"

    
    let refreshToken = {
        method: "POST",
        body:{
            grant_type: "client_credentials",
            client_id: "5938fd7d0e5f4d889ba4db749d5780ad",
            client_secret: "63d8eca3cf88416ca881b4f92588b05b"
        }
    }
//configurar la peticion
    let peticion = {
        method: "GET",
        headers: {
            "Authorization":refreshToken
        }
    }


    //utilizar la promesa fetchc para ir al back y consumir el API
    let repuesta = await fetch(URL,peticion)
    let canciones = await repuesta.json()

    return canciones
}