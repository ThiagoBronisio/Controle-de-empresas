import axios from "axios";
import * as config from "../config/api-register"

export const postLogin = (data) => {
    return axios.post(config.getApiUrlContatos() + "/Account/Login", data)
        .then(
            response => {
                return response.data;
            }
        )
}

export const postRegister = (data) => {
    return axios.post(config.getApiUrlContatos() + '/Account/Register', data)
        .then(
            response => {
                return response.data;
            }
        )
}

export const postPassword = (data) => {
    return axios.post(config.getApiUrlContatos() + '/Account/PasswordRecover', data)
        .then(
            response =>{
                return response.data;
            }
        )
}