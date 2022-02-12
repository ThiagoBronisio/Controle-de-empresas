import react, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { NavLink } from "react-router-dom";
import bootstrap from "bootstrap";
import TextField from "@mui/material/TextField";
import Modal from "react-modal";
import { width } from "@mui/system";

Modal.setAppElement('#root')

export default function ConsultarForms() {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalEdit, setModalEdit] = useState(false)

    function openEdit() {
        setModalEdit(true);
    }

    function closeEdit() {
        setModalEdit(false)
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            height: "235px"
        },
    };

    const customModalEdit = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            height: "330px"
        },
    };

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
        <form onSubmit={handleSubmit(onSubmit)} className="container" autoComplete="off">

            <div className="row justify-content-start mt-5">
                <div className="col-sm-12 col-lg-6">

                    <Controller
                        control={control}
                        name="empresa"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (

                                <TextField

                                    id="email"
                                    label="Nome da empresa"
                                    variant="outlined"
                                    className="form-control baloo mt-3"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />

                </div>


            </div>

            <div style={{ backgroundColor: "#primaryMUI" }}>
                <button type="submit" className="btn btn-primary rounded-pill btnPassword mt-3"> Consultar</button>
            </div>

            <p className=" text-secondary">Deseja cadastrar uma empresa ? <NavLink to="/cadastrar-empresas" className="text-decoration-none primaryMUI"> Clique aqui.</NavLink></p>

            <div className="row justify-content-start  mt-4 ">
                <div className="col-sm-12 col-lg-6 mt-2">
                    <div className="card shadow border-4 mb-sm-3" style={{ borderBottom: "none", borderTop: "none", borderRight: "none", borderColor: "#002171" }}>
                        <div className="card-body p-3">

                            <div className="row">
                                <div className="col-sm-12 col-lg-12">
                                    <div>
                                        <span className="px-1"><i class="fas fa-university fs-3"></i></span>
                                        <span>-</span>

                                        <span className=" fw-nomrla baloo px-2">Valoreal Intermediações De Negócios</span>


                                        <span type="button" onClick={openModal} className="primaryMUI fs-4 position-absolute end-0 px-2" style={{}} >
                                            <i class="fas fa-eye"></i>
                                        </span>

                                        <Modal
                                            isOpen={modalIsOpen}
                                            onRequestClose={closeModal}
                                            style={customStyles}

                                        >
                                            <div className="row">
                                                <div className="col-12 bg-dark">
                                                    <span type="button" className=" text-danger fs-2 position-absolute top-0 end-0 px-4 " onClick={closeModal}><i class="fal fa-times"></i></span>
                                                </div>
                                            </div>


                                            <div className="row justify-content-start">
                                                <div className="col-sm-12 col-lg-12">

                                                    <div className="card shadow border-4 mt-4" style={{ borderBottom: "none", borderTop: "none", borderRight: "none", borderColor: "#002171" }}>
                                                        <div className="card-body">

                                                            <div className="row">
                                                                <div className="col-sm-12 col-lg-12">
                                                                    <div>
                                                                        <p className="baloo fw-normal mb-1"> <strong className="fs-5">Nome da empresa</strong> - Valoreal </p>
                                                                        <p className="baloo fw-normal mb-1"> <strong className="fs-5">Razão Social</strong> - Valoreal Intermediações de Negócios LTDA </p>
                                                                        <p className="baloo fw-normal mb-1"> <strong className="fs-5">CNPJ</strong> - 46.126.396/0001-19 </p>
                                                                        <p className="baloo fw-normal mb-1"> <strong className="fs-5">Telefone</strong> - (21) 96584-6290 </p>
                                                                    </div>
                                                                </div>


                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </Modal>

                                        <div>
                                            <span type="button" onClick={openEdit} className="primaryMUI fs-4 position-absolute top-0 start-0 mt-3" style={{ marginBottom: "10px", marginLeft: "540px" }} >
                                                <i class="fas fa-edit"></i>
                                            </span>



                                            <Modal
                                                isOpen={modalEdit}
                                                onRequestClose={closeEdit}
                                                style={customModalEdit}>
                                                <div className="row container">

                                                    <div className="col-12 bg-dark">
                                                        <p type="button" className=" text-danger fs-2 position-absolute top-0 end-0 px-4 " onClick={closeEdit}><i class="fal fa-times"></i></p>
                                                    </div>

                                                    
                                                        <div className="col-12 mt-4">
                                                            <p className="col-sm-12 col-lg-12"><TextField fullWidth size="small" label="Nome da empresa" variant="outlined" /></p>
                                                            <p className="col-sm-12 col-lg-12"><TextField fullWidth size="small" label="Razão social" variant="outlined" /></p>
                                                            <p className="col-sm-12 col-lg-12"><TextField fullWidth size="small" label="CNPJ" variant="outlined" /></p>
                                                            <p className="col-sm-12 col-lg-12"><TextField fullWidth size="small" label="Telefone" variant="outlined" /></p>
                                                        </div>
                                                    

                                                    <div className="justify-content-center d-flex container">
                                                        <button className="btn btn-primary  col-3"> Editar</button>
                                                        <button className="btn btn-danger  col-3 mx-2" onClick={closeEdit}> Cancelar</button>
                                                    </div>
                                                </div>
                                            </Modal>
                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </form >
    )
}
