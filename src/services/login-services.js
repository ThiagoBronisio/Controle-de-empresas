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