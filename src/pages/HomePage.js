import react from "react";
import bootstrap from "bootstrap";
import HomeForms from "../forms/HomeFoms";
import Header from "../components/Header";

const HomePage = () => (
    <>
        <Header/>
        <div className="row justify-content-center d-flex bg-main m-0">
            <div className="col-sm-1 col-lg-6 " style={{ width: "550px" }}>
                <div className="card shadow mt-3 rounded-0 p-3" style={{ marginBottom: "50px" }}>
                    <div className="card-body px-2 p-3">
                        <div className="text-start px-4">
                            <span style={{ fontWeight: "bold", fontSize: "13px" }}> <i style={{ fontSize: "20px", marginRight: "10px" }} class="fas fa-shield-alt"></i> AMBIENTE SEGURO</span>
                            <p className="mt-3" style={{ fontSize: "1.8em", fontWeight: "300" }}>Informe seu usuario:</p>
                        </div>
                        <HomeForms />
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div className="">
                <h3 style={{marginTop:"65px"}} className="text-center baloo">Ambiente Empresarial </h3>
            </div>

            <div className="row justify-content-center container d-flex" style={{ marginLeft: "auto", marginRight:"auto" }}>


                <div className="col-sm-12 col-md-6 col-lg-4 mx-5">
                    <div className="card text-secondary shadow mt-5">
                        <div className="card-body">

                            <div className="text-center px-4 mt-3 fw-bold">
                                <span><i style={{ fontSize: "70px" }} className="fas fa-building text-dark"></i> <i style={{ fontSize: "20px" }} className="fas fa-search text-secondary"></i></span>
                                <p className="mt-3 font-monospace fs-5">CONSULTE A EMPRESA DESEJADA</p>
                            </div>

                            <hr/>

                            <div>
                                <p className="text-center text-dark baloo">Lorem Ipsum is dummy text. It is something used to fill a layout gap when you have no idea what 
                                the content will be. ... It is a standard, because they have no idea what the content will be, and
                                because they do not understand their customer. This is particularly egregious when used in a business
                                or in-house setting </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 mx-5">
                    <div className="card text-secondary shadow mt-5">
                        <div className="card-body">

                            <div className="text-center px-4 mt-3 fw-bold">
                                <span><i style={{ fontSize: "70px" }} className="fas fa-building text-dark"></i> <i style={{ fontSize: "20px" }} className="fas fa-plus text-secondary"></i></span>
                                <p className="mt-3 font-monospace fs-5">CADASTRO DE EMPRESAS</p>
                            </div>

                            <hr className="fs-3"/>

                            <div>
                                <p className="text-center text-dark baloo">Lorem Ipsum is dummy text. It is something used to fill a layout gap when you have no idea what 
                                the content will be. ... It is a standard, because they have no idea what the content will be, and
                                because they do not understand their customer. This is particularly egregious when used in a business
                                or in-house setting </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            <footer className="bg-dark text-center shadow border-rounded mb-0 mt-5  text-light">
                <p className="p-1 mb-0">?? 2022 Thiago Bronisio</p>
            </footer>

        </section>
    </>
)


export default HomePage;