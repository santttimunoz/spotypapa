import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { Members } from "../Members/Members"
import { Menu } from "../shared/Menu/Menu"
import { Footer } from "../shared/Footer/Footer"

//este componente no retorna jsx
export function Rutas() {
    return (
        <>       
        <Menu /> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/integrantes" element={<Members />} />            
        </Routes>
        <Footer />
        </>
    )
}