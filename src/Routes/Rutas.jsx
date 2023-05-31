import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { Members } from "../Members/Members"
import { Menu } from "../shared/Menu/Menu"
import { Footer } from "../shared/Footer/Footer"
import { History } from "../History/History"
import { Colaboraciones } from "../colaboraciones/Colaboraciones"
import { Tienda } from "../Tienda/Tienda"
import { Music } from "../Music/Music"

//este componente no retorna jsx
export function Rutas() {
    return (
        <>       
        <Menu /> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/integrantes" element={<Members />} />  
            <Route path="/historia" element={<History />} />  
            <Route path="/colaboraciones" element={<Colaboraciones />} />   
            <Route path="/tienda" element={<Tienda />} /> 
            <Route path="/musica" element={<Music />} /> 
        </Routes>
        <Footer />
        </>
    )
}