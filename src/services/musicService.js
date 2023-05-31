export async function musicService(){
   //no olvidar instalar thunder client(extension de visual studio)
    
    //consumir apis con js
    //definir URL y EP(endPoint = nombre unico) del servicio
    const IDARTIST = "776Uo845nYHJpNaStv1Ds4"
    const URL = `https://api.spotify.com/v1/artists/${IDARTIST}/top-tracks?market=US`

    const TOKEN = "Bearer BQBU5J8ccroPZ2PjyAxac2gWaaO-4kwGJ8dwQo9dNqRyXmAc--H0KJWUAm7H3R2_msZtOoXxpSFTYaRsPRMTTBjAm8flrJzEHjnWG_i1e6SMCPO0BvQ"

    //configurar la peticion
    let peticion = {
        method: "GET",
        headers: {
            "Authorization":TOKEN
        }
    }

    //utilizar la promesa fetchc para ir al back y consumir el API
    let repuesta = await fetch(URL,peticion)
    let canciones = await repuesta.json()

    return canciones
}