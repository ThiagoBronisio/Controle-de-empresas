import react from "react";
import bootstrap from "bootstrap";
import ConsultarForms from "../forms/ConsultarForms";
import Header from "../components/Header"

const ConsultarEmpresas = () => (

    <>
        <div>
            <Header/>
        </div>
        <body className="mt-5 container">
            <div className="row justify-content-center d-flex">
                <div className="col-sm-12 col-lg-12 mt-4">
                    <div className="card shadow ">
                        <div className="card-body">
                            <div className="text-center">
                                <h3 className="baloo">CONSULTE A EMPRESA CADASTRADA</h3>
                            </div>
                            <ConsultarForms />
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </>
)

export default ConsultarEmpresas;