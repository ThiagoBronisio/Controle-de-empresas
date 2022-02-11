import react from "react";
import { NavLink } from "react-router-dom"
import bootstrap from "bootstrap";
import CadastroForms from "../forms/CadastroForms";
import imgCadastro from "../imagens/img-cadastro.png";
import logo from "../imagens/logo.png"
import * as authHelpers from "../helpers/auth-helpers"

export default function CadastrarEmpresas() {


    const sairPage = () => {
        if(window.confirm('Deseja sair do sistema?')){
            authHelpers.removerAccsessToken();
            window.location.href="/";
        }
    }

    return (
    <>
        <div className="he-100 w-100">
            <div className="row justify-content-center d-flex m-0 ">

                <div className="col-sm-12 col-md-12 col-lg-7 bg-dark">

                    <div className="row justify-content-center d-flex " style={{marginTop:"50px", marginBottom:"30px"}}>
                        <NavLink to="/consultar-empresas" className="col-sm-6 col-lg-6"> <i className="fas fa-arrow-left fs-3 text-warning mt-4"></i></NavLink>
                        <img src={logo} className=" col-sm-6 col-lg-6 logo-cadastro"></img>
                    </div>

                    <div className="row justify-content-center d-flex text-center mb-2 ">
                        <h3 className="col-sm-12 col-lg-12 text-light mt-lg-5 baloo">
                            Informe suas credencias
                        </h3>
                     
                        <h6 className="col-sm-12 col-lg-12 text-light baloo">
                            Com a Visual Empresarial você consegue ter o melhor controle das suas credencias cadastradas.
                        </h6>
                    </div>

                    <div className="row justify-content-center d-flex pt-4 d-none d-lg-block text-center" style={{margin: "60px"}}>
                        <img style={{marginBottom:"100px"}} className="img-cadastro img-responsive col-12" src={imgCadastro}></img>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-5 px-0">

                    <div className=" px-0 bg-light he-100 w-100" style={{paddingTop: "50px"}}>

                            <div className="text-start px-5">
                                <p className="col-sm-12 col-lg-12 container baloo">Deseja sair da conta ? <a href="#" onClick={ () => sairPage() }>Clique aqui</a></p></div>
                            <div className="text-start px-5 ">
                                <h5 className="baloo text-dark col-sm-12 col-lg-12 container">Preencha as informações abaixo para cadastrar a empresa desejada.</h5>
                            </div>
                            <CadastroForms />
                    </div>

                </div>

            </div>
        </div>
        
        </>
    )
}
