import react from "react";
import bootstrap from "bootstrap";
import ConsultarForms from "../forms/ConsultarForms";
import Header from "../components/Header"

const ConsultarEmpresas = () => (

    <>
        <div>
            <Header />
        </div>
        <main className="container" style={{marginTop:"64px"}}>
            <div className="row justify-content-start d-flex">
                <div className="col-12">
                    <h3 className="baloo container primaryMUI">CONSULTE A EMPRESA CADASTRADA</h3>
                    <ConsultarForms />
                </div>
            </div>
        </main>

    </>
)

export default ConsultarEmpresas;