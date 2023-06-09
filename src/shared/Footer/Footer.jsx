import { Link } from "react-router-dom"
export function Footer(){
    return(
        <>
        <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">&copy; 2023 Hendrix </p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <i className="bi bi-music-note-beamed fs-2"></i>
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
      <li className="nav-item"><Link to="/integrantes" className="nav-link px-2 text-muted">Fans</Link></li>
      <li className="nav-item"><Link to="" className="nav-link px-2 text-muted">Tienda</Link></li>
      <li className="nav-item"><Link to="" className="nav-link px-2 text-muted">Musica</Link></li>      
    </ul>
  </footer>
</div>
        </>
    )
}