import react from "react";
import logo from "../imagens/logo.png"
import { NavLink } from "react-router-dom";
import RegisterForms from "../forms/RegisterForms";


const RegisterPage = () => (

        <div className="row he-100 w-100 baloo m-0" autoComplete="off">

                <div className="col col-lg-5 bg-dark">
                        <div className=" col-12">
                              <NavLink to="/">< i className="fas fa-arrow-left text-warning fs-3 mt-5 mx-5 mx-sm-5"> </i></NavLink>
                        </div>
                        <h1 className="text-center text-light mt-register">Bem vindo(a)</h1>
                        <h4 className="text-center text-light">Para se manter conectado conosco, faça login com suas informações pessoais</h4>
                        <div className="text-center mt-3 mt-lg-5 mb-3">
                                <NavLink to="/" className="btn btn-outline-warning bttn-register"> ACESSAR CONTA <i className="fas fa-arrow-right text-warning register px-2"></i></NavLink>
                        </div>

                </div>

                <div className="col-sm-12 col-lg-7">
                        <h1 className="text-center mt-5 baloo">Registre-se</h1>
                        <div className="row">
                                <div className="col-12 text-center mt-2">
                                        <span><i className="fab fa-facebook-f icon mx-2 text-secondary"></i></span>
                                        <span><i className="fab fa-linkedin-in icon text-secondary"></i></span>
                                        <span><i className="fab fa-google-plus-g icon mx-2 text-secondary"></i></span>
                                </div>
                        </div>
                        <h3 className="text-center baloo mt-3">Ou use seu e-mail para cadastro</h3>
                        <RegisterForms />
                </div>

        </div>
)

export default RegisterPage;