import { useState, useEffect } from "react"
import { musicService } from "../services/musicService"
export function Music() {

    const [canciones, setCanciones] = useState(null)
    const [cargando, setCargando] = useState(true)
    useEffect(function () {

        musicService().then(function (respuesta) {            
            setCanciones(respuesta.tracks)
            setCargando(false)
        })
    }, [])

    if (cargando) {

        //gif o loading
        return (
            <>
            <h1>hola</h1>
            </>
        )
        
    }else{
        return (
            <>
                {
                    canciones.map(function (cancion) {
                        return (
                            
                                <audio controls src={cancion.preview_url}></audio>
                                
                            
                        )
                    })
                }
            </>
        )
    }
}