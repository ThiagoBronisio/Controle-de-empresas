import react from "react";
import bootstrap from "bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ConsultarEmpresas from "../pages/ConsultarEmpresas";
import CadastrarEmpresas from "../pages/CadastrarEmpresas";

const Login = () => (
    <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="consultar-empresas" element={<ConsultarEmpresas/>} />
        <Route path="cadastrar-empresas" element={<CadastrarEmpresas/>} />
        <Route path="dashboard" element={<Dashboard/>} />
    </Routes>
)

export default Login;