import react, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import bootstrap from "bootstrap";
import * as authHelpers from "../helpers/auth-helpers"
import * as registerServices from "../services/register-services"
import textValidation from "../validation/text-validation";
import TextField from "@mui/material/TextField";


export default function RegisterForms() {

    const [mensagemSucesso, setMensagemSucesso] = useState("")
    const [mensagemErro, setMensagemErro] = useState("")


    const {
        control,
        handleSubmit,
        formState: {
            errors
        }, reset
    } = useForm()

    const onSubmit = (data) => {
        setMensagemSucesso("")
        setMensagemErro("")

        registerServices.postRegister(data)
            .then(
                result => {
                    setMensagemSucesso(result.message)
                    reset({
                        nome: '',
                        email: '',
                        senha: '',
                        senhaConfirmacao: ''
                    })
                }
            )
            .catch(
                e => {
                    setMensagemErro("Erro, tente novamente")
                    console.log(e)
                }
            )

    }

    return (

        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            
            {
                mensagemSucesso && <div className="alert alert-success">
                    {mensagemSucesso}
                </div>
            }

            {
                mensagemErro && <div className="alert alert-danger">
                    {mensagemErro}
                </div>
            }
                    



            <div className="row mt-4 m-0 justify-content-center d-flex ">
                <label className="mb-1 text-center">Preencha os campos abaixo</label>
                <div className="col-sm-12 col-lg-6" >

                    <Controller

                        control={control}
                        name="nome"
                        defaultValue=""
                        rules={{ validate: textValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (

                                <TextField
                                    id="nome"
                                    variant="outlined"
                                    size="small"
                                    label="Nome completo"
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

            <div className="row mt-3 m-0 justify-content-center d-flex">
                <div className="col-sm-12 col-lg-6">

                    <Controller

                        control={control}
                        name="email"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (

                                <TextField
                                    id="email"
                                    id="outlined-basic"
                                    type="text"
                                    label="Email"
                                    variant="outlined"
                                    size="small"
                                    className="mt-2 form-control"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}>
                                </TextField>
                            )
                        }
                    />
                </div>
            </div>

            <div className="row mt-3 m-0 justify-content-center d-flex">
                <div className="col-sm-12 col-lg-6 ">

                    <Controller

                        control={control}
                        name="senha"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <TextField
                                    id="senha"
                                    id="outlined-basic"
                                    type="password"
                                    label="Senha"
                                    variant="outlined"
                                    size="small"
                                    className="mt-2 form-control"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}>
                                </TextField>
                            )
                        }
                    />
                </div>
            </div>

            <div className="row mt-3 m-0 justify-content-center d-flex">
                <div className="col-sm-12 col-lg-6">

                    <Controller

                        control={control}
                        name="senhaConfirmacao"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <TextField
                                    id="senhaConfirmacao"
                                    id="outlined-basic"
                                    type="password"
                                    label="Confirme sua senha"
                                    variant="outlined"
                                    size="small"
                                    className="mt-2 form-control"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}>
                                </TextField>
                            )
                        }

                    />
                </div>
            </div>

            <div className="text-center">
                <button type="submit" className="btn-cadastro text-light col-sm-12 col-lg-3 mt-4"> Criar conta</button>
            </div>


        </form>

    )
}