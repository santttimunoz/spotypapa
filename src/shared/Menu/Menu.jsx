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
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/colaboraciones" className="nav-link" aria-current="page">Colaboraciones</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/integrantes" className="nav-link">Fans</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/tienda" className="nav-link">Tienda</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/historia" className="nav-link"  >Historia</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/musica" className="nav-link"  >Music</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}