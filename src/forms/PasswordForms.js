import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form"
import bootstrap from "bootstrap";
import textValidation from "../validation/text-validation";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom"
import * as accountServices from "../services/account-services"
import Alert from "@mui/material/Alert"

export default function PasswordForms() {

    const [mensagemErro, setMensagemErro] = useState("")
    const [mensagemSucesso, setMensagemSucesso] = useState("")

    const {
        control,
        handleSubmit,
        formState: {
            errors
        }, reset
    } = useForm();

    const onSubmit = (data) => {

        accountServices.postPassword(data)
            .then(
                result => {

                    setMensagemSucesso(result.mensagem);
                    reset({
                        email: ""
                    });
                }
            )

            .catch(
                e => {
                    switch (e.response.status) {
                        case 422:
                            setMensagemErro("O email fornecido não está cadastrado no sistema")
                            break;

                        case 500:
                            setMensagemErro("Erro, tente mais tarde")
                            break;

                        default:
                            setMensagemErro("Erro, tente novamente")
                    }
                }
            )


    }

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="container" autoComplete="off">

            {
                mensagemSucesso &&
                <div className="row justify-content-center mt-3 mb-3">
                    <div className="col-sm-12 col-lg-8"><Alert severity="success">
                        {mensagemSucesso}
                    </Alert>

                    </div>
                </div>
            }

            {
                mensagemErro &&

                <div className="row justify-content-center mt-3 mb-3">
                    <div className="col-sm-12 col-lg-12"><Alert severity="error">
                        {mensagemErro}
                    </Alert>

                    </div>
                </div>
            }

            <div className="row justify-content-start">
                <div className="col-12">
                    <Controller

                        control={control}
                        name="email"
                        defaultValue=""
                        rules={{ validate: textValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <TextField

                                    id="email"
                                    label="Informe seu email"
                                    variant="outlined"
                                    className="form-control baloo mt-3"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                            
                    />
                    {
                        errors.email && <div className="text-danger baloo">
                            {errors.email.message}
                        </div>
                    }
                </div>
            </div>

            <p className="fst-italic text-secondary mt-4" style={{ fontSize: "13px" }}>Este site é protegido pelo reCAPTCHA e aplica a <a href="#" className="text-decoration-none primaryMUI">Política de Privacidade</a> e <a href="#" className="text-decoration-none primaryMUI" >Termos de Serviço do Google</a>.</p>

            <div style={{ backgroundColor: "#primaryMUI" }}>
                <button type="submit" className="btn btn-primary rounded-pill btnPassword mt-2"> Enviar</button>
            </div>

            <hr />

            <p className="mt-4 baloo text-secondary" style={{ fontSize: "17px" }}>Ainda não tem conta? <NavLink to="/register-account" className="text-decoration-none primaryMUI"> Crie seu cadastro</NavLink></p>
        </form>
    )
}