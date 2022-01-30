import react from "react";
import bootstrap from "bootstrap";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ConsultarEmpresas from "../pages/ConsultarEmpresas";
import CadastrarEmpresas from "../pages/CadastrarEmpresas";
import HomePage from "../pages/HomePage";

const Rotas = () => (
    <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="consultar-empresas" element={<ConsultarEmpresas/>} />
        <Route path="cadastrar-empresas" element={<CadastrarEmpresas/>} />
        <Route path="dashboard" element={<Dashboard/>} />
    </Routes>
)

export default Rotas;