import react from "react";
import bootstrap from "bootstrap";
import CadastroForms from "../forms/CadastroForms";

const CadastrarEmpresas = () => (
    <div className="row justify-content-center d-flex ">
        <div className="col-6 mt-4">
            <div className="card shadow">
                <div className="card-body">
                    <div className="text-center">
                        <h5>Cadastrar Empresa</h5>
                    </div>
                    <CadastroForms/>
                </div>
            </div>
        </div>
    </div>
)

export default CadastrarEmpresas;