import { NavLink } from "react-router-dom";
import Logo from '../assets/img/LogoBarberia.jpg';
import './NavBar.css';

export const NavBar = () => {
    return (
        <header>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-1">
                        <img className="img-fluid logo" src={Logo} />
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <h1 className="titulo">BARBERIA SCISSORS</h1>
                    </div>
                    <div className="col-5">
                        <nav className="navbar bg-body-tertiary">
                            <form className="container justify-content-start">
                                <NavLink to='/' className="btn btn-outline-light me-2" role="button">Home</NavLink>
                                <NavLink to='/servicios' className="btn btn-outline-light me-2" role="button">Servicios</NavLink>
                                <NavLink to='/productos' className="btn btn-outline-light me-2" role="button">Productos</NavLink>
                                <NavLink to='/contacto' className="btn btn-outline-light me-2" role="button">Contacto</NavLink>
                            </form>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
