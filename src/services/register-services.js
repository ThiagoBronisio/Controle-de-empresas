import axios from "axios";
import * as config from "../config/api-register"

export const postRegister = (data) => {
    return axios.post(config.getApiUrlContatos() + '/Account/Register', data)
        .then(
            response => {
                return response.data;
            }
        )
}