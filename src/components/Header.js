import react, { useState, useEffect } from "react";
import bootstrap from "bootstrap";
import { NavLink } from "react-router-dom"
import logo from "../imagens/logo.png"
import * as helpers from "../helpers/auth-helpers"

export default function Header() {

    const [nomeUsuario, setNomeUsuario] = useState("");
    const [autenticado, setAutenticado] = useState(false);

    useEffect(
        () => {
            if (helpers.isAutenticated()) {
                setNomeUsuario(helpers.getUsuario());
                setAutenticado(true);

            } else if (helpers.isAutenticated()) {
                setAutenticado(false)
            }
        }, []
    );

    return (

        <nav className="navbar navbar-expand-lg container-fluid" style={{ backgroundColor: "#1e1f21" }}>


            <div className="container">

                <NavLink to="/" className="navbar-brand fw-bolder">
                    <img src={logo} style={{ width: "200px" }} className="navbar-brand  text-light text-start"></img>
                </NavLink>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav">

                        {
                            autenticado && (
                                <li className="nav-item">
                                    <NavLink to="cadastrar-empresas" className="nav-link text-light" aria-current="page">Cadastro </NavLink>
                                </li>
                            )
                        }
                        {
                            autenticado && (

                                <li className="nav-item">
                                    <NavLink to="consultar-empresas" className="nav-link text-light" aria-current="page">Consulta </NavLink>
                                </li>
                            )
                        }
                        {
                            !autenticado && (

                                <li className="nav-item">
                                    <NavLink to="register-account" className="nav-link text-light" aria-current="page">Registre-se</NavLink>
                                </li>
                            )
                        }
                    </ul>

                </div>
            </div>
        </nav>
    )
}