import axios from "axios";
import * as config from "../config/api-config";
import * as helpers from "../helpers/auth-helpers";

export const postEmpresas = (data) => {
    return axios.post(config.getApiUrl() + "/Empresas", data)
        .then(
            response => {
                return response.data;
            }
        )
}

axios.interceptors.request.use(
    config => {
        if (config.url.includes("/Empresas")) {

            var token = helpers.getAccsessToken();
            config.headers['Authorization'] = `Bearer` + token;
        }
        return config;
    },
    error => {
        console.log(error);
    }
)
