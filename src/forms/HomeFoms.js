import react, { useState } from "react";
import reactDom from "react-dom";
import { useForm, Controller } from "react-hook-form";
import bootstrap from "bootstrap";
import * as authHelpers from "../helpers/auth-helpers"
import * as loginServices from "../services/login-services"
import { NavLink } from "react-router-dom";
import textValidation from "../validation/text-validation";
import TextField from "@mui/material/TextField";


export default function HomeForms() {

    const [mensagemErro, setMensagemErro] = useState("")

    const {
        control,
        handleSubmit,
        formState: {
            errors
        }, reset

    } = useForm();

    const onSubmit = (data) => {

        setMensagemErro("")

        loginServices.postLogin(data)

            .then(
                result => {

                    authHelpers.singIn(result);
                    reset({
                        email: "",
                        senha: ""
                    });
                    window.location.href = "/cadastrar-empresas"
                }
            )
            .catch(
                e => {
                    setMensagemErro("Error")
                    console.log(e)
                }
            )

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="px-4" autoComplete="off">

            {
                mensagemErro && <div className="alert alert-danger text-center p-2">
                    {mensagemErro}, usuário inválido
                </div>
            }


            <div className="row">
                <div className="col-12">
                    <Controller

                        control={control}
                        name="email"
                        defaultValue=""
                        rules={{ validate: textValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (

                                <TextField
                                    fullWidth
                                    id="email"
                                    id="standard-basic"
                                    label="Email"
                                    variant="standard"
                                    size="small"
                                    color="primary"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}>
                                </TextField>
                            )
                        }
                    />
                    {
                        errors.email && <div className="text-danger">
                            {errors.email.message}
                        </div>
                    }
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Controller

                        control={control}
                        name="senha"
                        defaultValue=""
                        rules={{ validate: textValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <TextField
                                    fullWidth
                                    id="senha"
                                    id="standard-basic"
                                    type="password"
                                    label="Senha"
                                    variant="standard"
                                    size="small"
                                    className="mt-4 form-control"
                                    color=""
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}>
                                </TextField>
                            )
                        }
                    />
                    {
                        errors.senha && <div className="text-danger">
                            {errors.senha.message}
                        </div>
                    }
                </div>
            </div>

            <button type="submit" className="btn btn-secondary btn-lg text-dark mt-4 col-12 rounded-0 border-0 text-uppercase fw-bold p-2 bttn" style={{ background: "#eeeeee", fontSize: "16px" }}>
                ENTRAR
            </button>

            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 mt-3 text-center">
                    <NavLink to="esqueci-senha" className=" text-decoration-none border-bottom border-2 border-primary text-dark border-home">Esqueci minha senha</NavLink>
                </div>

                <div className=" col-sm-12 col-md-6 col-lg-6 mt-3 text-center ">
                    <NavLink to="register-account" className=" text-decoration-none border-bottom border-2 border-primary text-dark border-home">Ainda não me cadastrei</NavLink>
                </div>
            </div>

        </form>
    )
}