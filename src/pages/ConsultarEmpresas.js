import react from "react";
import bootstrap from "bootstrap";
import ConsultarForms from "../forms/ConsultarForms";

const ConsultarEmpresas = () => (

    <>
    <div className="row justify-content-center d-flex ">
        <div className="col-6 mt-4">
            <div className="card shadow">
                <div className="card-body">
                    <div className="text-center">
                        <h5>Consultar Empresas</h5>
                    </div>
                    <ConsultarForms />
                </div>
            </div>
        </div>
    </div>
    </>
)

export default ConsultarEmpresas;