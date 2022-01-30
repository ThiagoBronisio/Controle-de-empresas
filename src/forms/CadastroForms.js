import react, { useState } from "react";
import { useForm, Controller } from "react-hook-form"
import InputMask from "react-input-mask";
import bootstrap from "bootstrap";

export default function CadastrarEmpresas() {

    const {
        control,
        handleSubmit,
        formState: {
            errors
        }, reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="container" style={{ paddingTop: "60px", paddingRight: "48px", paddingBottom: "48x", paddingLeft: "48px" }} autoComplete="off">

            <div className="row">
                <div className="col-sm-12 col-lg-12">
                    <label className="labell ">Nome da empresa</label>
                    <Controller
                        control={control}
                        name="nomeEmpresa"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    id="nomeEmpresa"
                                    type="text"
                                    className="form-control inputt-cadastro mb-2"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }

                    />
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 col-lg-12">
                    <label className="labell">Razão social</label>

                    <Controller
                        control={control}
                        name="razaoEmpresa"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    id="razaoEmpresa"
                                    type="text"
                                    className="form-control inputt-cadastro mb-2"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }

                    />
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 col-lg-12">
                    <label className="labell">CNPJ</label>

                    <Controller
                        control={control}
                        name="cnpj"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <InputMask
                                    id="cnpj"
                                    type="text"
                                    defaultValue=""
                                    mask="999.999.999/9999-99"
                                    className="form-control inputt-cadastro mb-2"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }

                    />
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 col-lg-12">
                    <label className="labell">Numero de telefone</label>

                    <Controller
                        control={control}
                        name="telfone"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <InputMask
                                    id="telefone"
                                    type="text"
                                    mask="(99) 99999-9999"
                                    className="form-control inputt-cadastro baloo"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }

                    />
                </div>
            </div>

            <div className="row">
                <button type="submit" className="btn-cadastro mt-4 col-6 mx-auto mt-5">Cadastrar</button>
            </div>
            <div className="row">
                <a href="/consultar-empresas" className="btn btn-voltar text-dark mt-2 col-6 mx-auto mt-3 "> Voltar</a>
            </div>
        </form>
    )
}