import react, { useState } from "react";
import { useForm, Controller } from "react-hook-form"
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
        
        <form onSubmit={handleSubmit(onSubmit)} className="container">

            <div className="row">
                <div className="col-6">
                    <label>Modelo da empresa</label>
                    <Controller
                        control={control}
                        name="nomeEmpresa"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    id="nomeEmpresa"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nome da Empresa"
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
                <div className="col-6">
                    <label>Razão Social</label>
                    
                    <Controller
                        control={control}
                        name="razaoEmpresa"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    id="razaoEmpresa"
                                    type="text"
                                    className="form-control"
                                    placeholder="Ex: Empresa Modelo LTDA RJ"
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
                <div className="col-6">
                    <label>CNPJ</label>

                    <Controller
                        control={control}
                        name="cnpj"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    id="cnpj"
                                    type="number"
                                    className="form-control"
                                    placeholder="Ex : 00.000.000/0000-00"
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
                <div className="col-6">
                    <label>Numero de telefone</label>

                    <Controller
                        control={control}
                        name="telfone"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    id="telefone"
                                    type="number"
                                    className="form-control"
                                    placeholder="Ex: (21) 99999-9999"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }

                    />
                </div>
            </div>
            
            <button type="submit" className="btn btn-primary m-2">Cadastrar</button>

            <a href="/consultar-empresas" className="btn btn-secondary"> voltar</a>

        </form>
    )
}