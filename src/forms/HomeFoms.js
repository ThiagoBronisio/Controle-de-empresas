import react, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import bootstrap from "bootstrap";

export default function HomeForms() {

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
        <form onSubmit={handleSubmit(onSubmit)} className="px-4" autoComplete="off">

            <div className="row">
                <div className="col-12">
                    <label className="label-home">Login</label>
                    <Controller

                        control={control}
                        name="login"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    id="name"
                                    type="text"
                                    className="form-control border-0 border-bottom border-2 border-dark rounded-0 input-home"
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
                <div className="col-12">
                    <label className="mt-3 ">Senha</label>
                    <Controller

                        control={control}
                        name="senha"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    id="senha"
                                    type="password"
                                    className="form-control border-0 border-bottom border-2 border-dark rounded-0 input-home"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }

                    />
                </div>
            </div>
            
            <button type="submit" className="btn btn-secondary btn-lg text-dark mt-4 col-12 rounded-0 border-0 text-uppercase fw-bold p-3 bttn" style={{background:"#eeeeee", fontSize: "16px"}}>
                        ENTRAR
            </button>

            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                        <p className="m-0 mt-4 text-start baloo" style={{borderBottom:"2px solid #ffc709", width:"185px", fontSize:"19px"}}>Esqueceu sua senha ?</p>
                </div>
                <div className=" col-sm-12 col-md-6 col-lg-6 ">
                        <p className="m-0 mt-4 text-end baloo " style={{borderBottom:"2px solid #ffc709", width:"200px", fontSize:"19px"}}>Ainda não me cadastrei</p>
                </div>
            </div>

        </form>
    )
}