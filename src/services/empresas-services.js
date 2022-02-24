import axios from "axios";
import * as config from "../config/config-empresa"
import * as helpers from "../helpers/auth-helpers"

export const postEmpresa = (data) => {
    return axios.post(config.getApiUrlEmpresa() + "/Empresas", data)
        .then(
            response => {
                return response.data
            }
        )
}

export const putEmpresa = (data) => {
    return axios.put(config.getApiUrlEmpresa() + "/Empresas", data)
        .then(
            response => {
                return response.data;
            }
        )
}

export const getAllEmpresas = () => {
    return axios.get(config.getApiUrlEmpresa() + "/Empresas")
        .then(
            response => {
                return response.data
            }
        )
}

export const getEmpresaById = (idEmpresa) => {
    return axios.get(config.getApiUrlEmpresa() + "/Empresas", idEmpresa)
        .then(
            response => {
                return response.data;
            }
        )
}

export const deleteEmpresa = (idEmpresa) => {
    return axios.delete(config.getApiUrlEmpresa() + "/Empresas/" + idEmpresa)
        .then(
            response => {
                return response.data
            }
        )
}


export const getEmpresaNameFantasy = (nomeFantasia) => {
    return axios.get(config.getApiUrlEmpresa() + "/Empresas/Consultar/" + nomeFantasia )
        .then(
            response => {
                return response.data;
            }
        )
}

axios.interceptors.request.use(
    config => {
        if(config.url.includes('/api/Empresas')){

            const token = helpers.getAccsessToken();
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        console.log(error)
    }

)