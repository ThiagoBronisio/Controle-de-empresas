import react, { useState, useEffect } from "react";
import bootstrap from "bootstrap";
import { NavLink } from "react-router-dom"
import logo from "../imagens/logo.png"
import * as helpers from "../helpers/auth-helpers"
import Button from "@mui/material/Button"


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

    const sairPage = () => {
        if (window.confirm("Deseja sair do sistema ?")) {
            helpers.removerAccsessToken();
            window.location.href = "/";
        } else {
            window.location.href = "#"
        }
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 container-fluid ">


            <div className="container ">

                { !autenticado && (
                    <NavLink to="/" className="navbar-brand fw-bolder">
                        <img src={logo} style={{ width: "200px" }} className="navbar-brand  text-light text-start p-0"></img>
                    </NavLink>
                )
                }
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav">

                        {
                            autenticado && (
                                <li className="nav-item">
                                    <NavLink to="/cadastrar-empresas" className="nav-link text-light" aria-current="page">Cadastro </NavLink>
                                </li>
                            )
                            
                        }

                        {
                            autenticado && (

                                <li className="nav-item">
                                    <NavLink to="/consultar-empresas" className="nav-link text-light" aria-current="page">Consulta </NavLink>
                                </li>
                            )
                        }

                        {
                            autenticado && (
                                <li className="nav-item">

                                    <a href="#" className="text-decoration-none">
                                        <Button variant="outlined" color="error" onClick={() => sairPage()}>
                                            Encerrar sessão
                                        </Button>
                                    </a>


                                </li>
                            )

                        }

                        {
                            !autenticado && (

                                <li className="nav-item">
                                    <NavLink to="/register-account" className="nav-link text-light " aria-current="page">Registre-se</NavLink>
                                </li>
                            )
                        }

                    </ul>

                </div>
            </div>
        </nav >
    )
}