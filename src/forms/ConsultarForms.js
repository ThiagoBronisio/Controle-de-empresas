import react, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import bootstrap from "bootstrap";

export default function ConsultarForms() {

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
                    
                    <Controller
                        control={control}
                        name="empresa"
                        defaultValue=""
                        render={
                            ({ field: {onChange, onBlur, value} }) => (
                                <input
                                    id="empresa"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nome da empresa"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }  
                    />
                </div>
            </div>
            
            <div className="row justify-content-center d-flex">
                <div className="col-4">
                    <div className="card-shadow">
                        <div className="card-body bg-secondary">
                            <h5>Empresa modelo LTDA</h5>
                            <p>Razão Social: Empresa Modelo LTDA RJ</p>
                            <p>CNPJ: 28.364.665/0001-01</p>
                            <p>Telefone: (21) 99999-9999</p>
                        </div>
                    </div>
                </div>

            </div>

        </form>
    )
}
