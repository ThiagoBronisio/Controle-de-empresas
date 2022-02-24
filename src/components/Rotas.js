import react from "react";
import bootstrap from "bootstrap";
import { Routes, Route } from "react-router-dom";

import ConsultarEmpresas from "../pages/ConsultarEmpresas";
import CadastrarEmpresas from "../pages/CadastrarEmpresas";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import PasswordPage from "../pages/PasswordPage";

const Rotas = () => (
    <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="consultar-empresas" element={<ConsultarEmpresas/>} />
        <Route path="cadastrar-empresas" element={<CadastrarEmpresas/>} />
        <Route path="register-account" element={<RegisterPage/>} />
        <Route path="esqueci-senha" element={<PasswordPage/>} />
    </Routes>
)

export default Rotas;