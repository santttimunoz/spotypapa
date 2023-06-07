import { useState, useEffect } from "react"
import { musicService } from "../services/musicService"
export function Music() {

    const [canciones, setCanciones] = useState(null)
    const [cargando, setCargando] = useState(true)
    useEffect(function () {

        musicService().then(function (respuesta) {
            console.log(respuesta)
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

    } else {
        return (
            <>
                <div className="row">
                    {
                        canciones.map(function (cancion) {


                            return (



                                <div className="col-md-2 my-2">
                                    <div className="card" >
                                        <img className="card" src={cancion.album.images[0].url} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title h6">{cancion.name}</h5>
                                            <audio controls src={cancion.preview_url} className="w-100"></audio>
                                        </div>
                                    </div>
                                </div>




                            )

                        })
                    }
                </div>
            </>
        )
    }
}