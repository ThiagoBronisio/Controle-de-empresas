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
                <div className="col-sm-6 col-lg-8 px-0">

                    <Controller
                        control={control}
                        name="empresa"
                        defaultValue=""
                        rules={{ validate: textValidation }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (



                                <div className="input-group">
                                    <input
                                        id="empresa"
                                        type="text"
                                        className="form-control"
                                        placeholder="Nome da empresa"
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value} />
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                        >Pesquisar</button>


                                </div>
                            )
                        }
                    />
                    {
                        errors.empresa && <div className="text-danger">
                            {errors.empresa.message}
                        </div>
                    }

                </div>


            </div>

            <div className="row justify-content-center mt-4 baloo">
                <div className="col-sm-12 col-lg-12 mt-2">
                    <div className="card shadow border-4 mb-sm-3" style={{ borderBottom: "none", borderTop: "none", borderRight: "none", borderColor: "#002171" }}>
                        <div className="card-body p-3">

                            <div className="row">
                                <div className="col-12">

                                    <i class="fas fa-university fs-4">
                                        <span className="baloo fw-normal fs-5">
                                            - Valoreal intermediação de negocios LTDA
                                        </span>
                                    </i>

                                    <span type="button" className="primaryMUI fs-4 text-end" style={{marginLeft: "80px"}}>
                                        <i class="fas fa-eye"></i>

                                    </span>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>

            </div>



        </form>
    )
}
