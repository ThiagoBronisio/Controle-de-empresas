import axios from "axios";
import * as config from "../config/config-account"


export const postLogin = (data) => {
    return axios.post(config.getApiUrlAccount() + "/Account/Login", data)
        .then(
            response => {
                return response.data
            }
        )
}

export const postRegister = (data) => {
    return axios.post(config.getApiUrlAccount() + "/Account/Register", data)
        .then(
            response => {
                return response.data
            }
        )
}

export const postPassword = (data) => {
    return axios.post(config.getApiUrlAccount() + "/Account/PasswordRecover", data)
        .then(
            response => {
                return response.data
            }
        )
}