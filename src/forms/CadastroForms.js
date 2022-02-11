import react, { useState } from "react";
import { useForm, Controller } from "react-hook-form"
import { NavLink } from "react-router-dom"
import InputMask from "react-input-mask";
import bootstrap from "bootstrap";
import textValidation from "../validation/text-validation";
import * as services from "../services/empresas-services"
import * as helpers from "../helpers/auth-helpers"
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert"


export default function CadastrarEmpresas() {

    const [mensagemErro, setMensagemErro] = useState("");
    const [mensagemSucesso, setMensagemSucesso] = useState("");

    const {
        control,
        handleSubmit,
        formState: {
            errors
        }, reset
    } = useForm();

    const onSubmit = (data) => {


        services.postEmpresas(data)
            .then(
                result => {
                    setMensagemSucesso(result.message);
                    reset({
                        nomeFantasia: '',
                        razaoSocial: '',
                        cnpj: '',
                        telefone: ''
                    });
                }
            )
            .catch(
                e => {
                    console.log(e.response);
                    setMensagemErro("Erro! Não foi possivel cadastrar a empresa");
                }
            )
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)} className=" container" style={{ paddingTop: "60px", paddingRight: "60px", paddingBottom: "60", paddingLeft: "60px" }} autoComplete="off">

{
                mensagemSucesso && <div className="mb-3"><Alert severity="success" size="normal">
                    {mensagemSucesso}
                </Alert></div>
            }

            {
                mensagemErro && <div className="mb-3"><Alert severity="error" size="normal">
                    {mensagemErro}
                </Alert></div>
            }

            <div className="row justify-content-center d-flex">
                <div className="col-sm-12 col-lg-10 ">
                    <Controller
                        control={control}
                        name="nomeFantasia"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <TextField
                                    id="nomeFantasia"
                                    variant="outlined"
                                    size="small"
                                    label="Nome da empresa"
                                    type="text"
                                    className="mt-3 form-control "
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}>



                                </TextField>
                            )
                        }

                    />
                </div>
            </div>

            <div className="row justify-content-center d-flex">
                <div className="col-sm-12 col-lg-10 ">

                    <Controller
                        control={control}
                        name="razaoSocial"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <TextField
                                    id="razaoSocial"
                                    variant="outlined"
                                    size="small"
                                    label="Razão social"
                                    type="text"
                                    className="mt-4 form-control"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}>



                                </TextField>
                            )
                        }

                    />
                </div>
            </div>

            <div className="row justify-content-center d-flex">
                <div className="col-sm-12 col-lg-10 ">

                    <Controller
                        control={control}
                        name="cnpj"
                        defaultValue=""
                        rules={{ validate: textValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (



                                <InputMask
                                    id="cnpj"
                                    type="text"
                                    defaultValue=""
                                    mask="999.999.999/9999-99"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                >
                                    {() =>
                                        <TextField
                                            id="cnpj"
                                            variant="outlined"
                                            size="small"
                                            label="CNPJ"
                                            className="mt-4 form-control"
                                        />
                                    }
                                </InputMask>
                            )
                        }

                    />
                    {
                        errors.cnpj && <div className="text-danger baloo">
                            {errors.cnpj.message}
                        </div>
                    }
                </div>
            </div>

            <div className="row justify-content-center d-flex">
                <div className="col-sm-12 col-lg-10">

                    <Controller
                        control={control}
                        name="telefone"
                        defaultValue=""
                        rules={{ validate: textValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <InputMask
                                    id="telefone"
                                    type="text"
                                    mask="(99) 99999-9999"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                >
                                    {() =>
                                        <TextField
                                            id="telefone"
                                            variant="outlined"
                                            size="small"
                                            label="Telefone de contato"
                                            className="mt-4 form-control"
                                        />
                                    }

                                </InputMask>

                            )
                        }

                    />
                    {
                        errors.telefone && <div className="text-danger baloo">
                            {errors.telefone.message}
                        </div>
                    }
                </div>
            </div>

            <div className="row">
                <button type="submit" className="btn-cadastro col-sm-12 col-lg-6 mx-auto mt-5 text-light">Cadastrar</button>
            </div>
            <div className="row">
                <NavLink to="/consultar-empresas" className="btn btn-voltar text-dark col-sm-12 col-lg-6 mx-auto mt-3 pd-2"> Consultar Empresas</NavLink>
            </div>
        </form>
    )
}