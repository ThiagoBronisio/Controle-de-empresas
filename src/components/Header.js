import react from "react";
import bootstrap from "bootstrap";
import { NavLink } from "react-router-dom"
import logo from "../imagens/logo.png"

export default function Header() {
    return (
    
        <nav className="navbar navbar-expand-lg menu" style={{backgroundColor: "#1e1f21"}}>
            <div className="container-fluid container fw-bolder">

                <img src={logo} style={{width:"200px", marginRight:"700px", marginLeft:"100px"}} className="navbar-brand container text-light text-start"></img>
                
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link text-light" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="Dashboard" className="nav-link text-light">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="cadastrar-empresas" className="nav-link text-light">Cadastro </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="consultar-empresas" className="nav-link text-light">Consulta </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}