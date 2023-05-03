import { Link } from "react-router-dom"
export function Menu() {
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-black navbar-dark">
                    <div class="container-fluid ">
                        <Link to="/" class="navbar-brand">Hendrix</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/colaboraciones" class="nav-link" aria-current="page">Colaboraciones</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/integrantes" class="nav-link">Fans</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/tienda" class="nav-link">Tienda</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/historia" class="nav-link" tabindex="-1" >Historia</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}