import react from "react";
import bootstrap from "bootstrap";
import CadastroForms from "../forms/CadastroForms";
import imgCadastro from "../imagens/img-cadastro.png";
import logo from "../imagens/logo.png"

const CadastrarEmpresas = () => (

    
        <main style={{ height: "100vh" }}>
            <div className="row justify-content-center d-flex">

                <div className="col-sm-12 col-md-12 col-lg-7  bg-dark">

                    <div className="row justify-content-center d-flex mx-0 ">
                        <a className="col-6" href="/consultar-empresas"> <i className="fas fa-arrow-left text-warning mt-5 fs-2"></i></a>
                        <img src={logo} className=" col-6 logo-cadastro"></img>
                    </div>

                    <div className="row">
                        <h2 className="col-sm-12 col-lg-6 text-light mt-5 px-5 baloo">
                            Informe suas credencias
                        </h2>
                    </div>

                    <div className="row">
                        <span className="col-12 text-light mt-0 p-0 px-5 baloo">
                            Com a Visual Empresarial você consegue ter o melhor controle das suas credencias cadastradas.
                        </span>
                    </div>

                    <div className="row justify-content-center mt-5 px-0 mx-0">
                        <img className="img-cadastro img-responsive col-6" src={imgCadastro}></img>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-5 p-0 container">

                    <div className="card shadow container px-0 bg-light" style={{border:"none"}}>

                        <div className="card-body p-5">
                            <div className="text-start px-5">
                                <h4 className="baloo text-dark col-sm-12 col-lg-12">Preencha as informações abaixo para cadastrar a empresa desejada.</h4>
                            </div>
                            <CadastroForms />
                        </div>

                    </div>

                </div>

            </div>
        </main>
    
)

export default CadastrarEmpresas;