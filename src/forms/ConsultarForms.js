import react, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import bootstrap from "bootstrap";
import textValidation from "../validation/text-validation";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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

            <div className="row justify-content-center mt-5">
                <div className="col-sm-6 col-lg-5 px-0">

                    <Controller
                        control={control}
                        name="empresa"
                        defaultValue=""
                        rules={{ validate: textValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (

                                <TextField 
                                    fullWidth
                                    id="empresa"
                                    type="text"
                                    id="outlined-basic" 
                                    size="small"
                                    className="form-control "
                                    label="Nome da empresa" 
                                    variant="outlined" 
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}/>
                            )
                        }
                    />
                    {
                        errors.empresa && <div className="text-danger">
                            {errors.empresa.message}
                        </div>
                    }

                </div>

                <div className="col-sm-6  col-lg-1 text-start">
                    <Button variant="contained" size="large"><i className="fas fa-search fs-5"></i></Button>
                </div>

            </div>

            <div className="row justify-content-start mt-5 baloo">
                <div className="col-sm-12 col-lg-4">
                    <div className="card shadow border-4 mb-sm-3" style={{ borderBottom: "none", borderTop: "none", borderRight: "none", borderColor: "#42a5f5" }}>
                        <div className="card-body">
                            <h4 className="text-center mb-4">EMPRESA</h4>
                            <p> <span className="fs-5">Nome da empresa: </span>Visual Empresarial</p>
                            <p> <span className="fs-5">Razão social: </span> Empresa Modelo LTDA RJ</p>
                            <p> <span className="fs-5">CNPJ: </span> 28.364.665/0001-01</p>
                            <p> <span className="fs-5">Telefone: </span> (21) 99999-9999</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-lg-4">
                    <div className="card shadow border-4 mb-sm-3" style={{ borderBottom: "none", borderTop: "none", borderRight: "none", borderColor: "#42a5f5" }}>
                        <div className="card-body">
                            <h4 className="text-center mb-4">EMPRESA</h4>
                            <p> <span className="fs-5">Nome da empresa: </span> Visual Empresarial</p>
                            <p> <span className="fs-5">Razão social: </span> Empresa Modelo LTDA RJ</p>
                            <p> <span className="fs-5">CNPJ: </span> 28.364.665/0001-01</p>
                            <p> <span className="fs-5">Telefone: </span> (21) 99999-9999</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-lg-4">
                    <div className="card shadow border-4 mb-sm-3" style={{ borderBottom: "none", borderTop: "none", borderRight: "none", borderColor: "#42a5f5" }}>
                        <div className="card-body">
                            <h4 className="text-center mb-4">EMPRESA</h4>
                            <p> <span className="fs-5">Nome da empresa: </span> Visual Empresarial</p>
                            <p> <span className="fs-5">Razão social: </span> Empresa Modelo LTDA RJ</p>
                            <p> <span className="fs-5">CNPJ: </span> 28.364.665/0001-01</p>
                            <p> <span className="fs-5">Telefone: </span> (21) 99999-9999</p>
                        </div>
                    </div>
                </div>
            </div>



        </form>
    )
}
