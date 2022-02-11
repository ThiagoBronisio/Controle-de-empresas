import react from "react";
import PasswordForms from "../forms/PasswordForms";
import Header from "../components/Header";

const PasswordPage = () => (
    <>  
        <Header/>
        <main className="container">
            <div className="row justify-content-start passwordResponse">
                <div className="col-12">
                    <h2 className="primaryMUI baloo mb-4">Esqueceu ou não tem uma senha?</h2>
                </div>
                <p className="text-secondary mb-3">Informe seu e-mail cadastrado que te enviaremos um link para você criar uma nova senha.</p>
                <PasswordForms />
            </div>
        </main>
    </>
)

export default PasswordPage;