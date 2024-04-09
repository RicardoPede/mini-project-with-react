import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h1>Aplicación de Administración</h1>
            <hr/>
            <div className="links">
                <NavLink to="/" className="link">Lista</NavLink>
                <NavLink to="/add" className="link">Agregar</NavLink>
            </div>
        </header>
    );
}

export default Header
