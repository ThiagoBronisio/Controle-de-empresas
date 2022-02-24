import react, { useState, useEffect } from "react";
import { useForm, Controller } from 'react-hook-form';
import { NavLink } from "react-router-dom";
import * as services from "../services/empresas-services"
import Swal from "sweetalert2";
import bootstrap from "bootstrap";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import SaveIcon from '@mui/icons-material/Save';
import Modal from "react-modal";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { borderRadius } from "@mui/system";

Modal.setAppElement('#root')

export default function ConsultarForms() {

    const [mensagem, setMensagemSucesso] = useState("")

    const [empresas, setEmpresa] = useState([])
    const [empresaEdit, setEmpresaEdit] = useState({})

    const [modalEdit, setModalEdit] = useState(false)
    
    function openEdit(data) {
        setModalEdit(true);
        setEmpresaEdit(data);
    }

    function closeEdit() {
        setModalEdit(false)
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
            height: "370px",
            borderRadius: "15px"
        },
    };

    const {
        control,
        handleSubmit,
        formState: {
            errors
        }, reset

    } = useForm();

    const excluir = (idEmpresa) => {
        if (window.confirm("Deseja excluir a empresa selecionada?")) {
            setMensagemSucesso("")

            services.deleteEmpresa(idEmpresa)
                .then(
                    result => {
                        setMensagemSucesso("Empresa excluida com sucesso");
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title:"Sucesso!",
                            text: result.message,
                            showConfirmButton: false,
                            timer: 3000
                          })
                        setEmpresa([]);
                        reset({
                            nomeFantasia: ""
                        })
                        setTimeout(function () {
                            window.location.reload(1);
                        },3000);
                    }
                )
                .catch(
                    e => {
                        console.log(e)
                    }
                )
        }
    }

    const onSubmit = (data) => {


        services.getEmpresaNameFantasy(data.nomeFantasia)
            .then(
                result => {
                    setMensagemSucesso("Foram " + result.length + " empresa(s) encontrada com o nome informado")
                    setEmpresa(result);
                }
            )
            .catch(
                e => {
                    console.log(e)
                }
            )
    }


    const Editar = (data) => {
        console.log("criar put")
        console.log(data);
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)} className="container" autoComplete="off">

            <div className="row justify-content-start mt-5">
                <div className="col-sm-12 col-lg-6">

                    <Controller
                        control={control}
                        name="nomeFantasia"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (

                                <TextField

                                    id="nomeFantasia"
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

            <p className=" text-secondary mb-4">Deseja cadastrar uma empresa ? <NavLink to="/cadastrar-empresas" className="text-decoration-none primaryMUI"> Clique aqui.</NavLink></p>

            {
                mensagem && <div className="col-12 text-start text-secondary mb-2 fs-5 baloo">
                    {mensagem}
                </div>
            }

            {empresas.map(
                function (empresa, i) {
                    return (
                        <div className="row justify-content-start" style={{ marginBottom: "-15px" }}>
                            <div className="col-sm-12 col-lg-6 mt-2 px-0">
                                <div className="card shadow border-4 mb-sm-3" style={{ borderBottom: "none", borderTop: "none", borderRight: "none", borderColor: "#002171" }}>
                                    <div className="card-body p-3">

                                        <div className="row">
                                            <div className="col-sm-12 col-lg-12">
                                                <div>

                                                    <div>
                                                        <span className="px-1"><i class="fas fa-university fs-3"></i></span>
                                                        <span>-</span>
                                                        <span className=" fw-nomrla baloo px-2">{empresa.nomeFantasia}</span>

                                                    </div>

                                                    <div>

                                                        <span type="button" onClick={() => {openEdit(empresa)}} className="primaryMUI fs-4 position-absolute top-0 end-0 mt-3 mx-2">
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

                                                                    <div className="col-12">
                                                                        <div className="card shadow border-5 mt-3" style={{ borderBottom: "none", borderTop: "none", borderRight: "none", borderColor: "#002171" }}>
                                                                            <div className="card-body" style={{ paddingBottom: "2px" }}>
                                                                                <p className="col-sm-12 col-lg-12 mt-1"><TextField fullWidth size="small" label="Nome Fantasia" variant="outlined" value={empresaEdit.nomeFantasia}  /></p>
                                                                                <p className="col-sm-12 col-lg-12"><TextField fullWidth size="small" label='Empresa' variant="outlined" value={empresaEdit.razaoSocial}  /></p>
                                                                                <p className="col-sm-12 col-lg-12"><TextField fullWidth size="small" label='CNPJ' variant="outlined" value={empresaEdit.cnpj}   /></p>
                                                                                <p className="col-sm-12 col-lg-12"><TextField fullWidth size="small" label='Telefone' variant="outlined" value={empresaEdit.telefone} /></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="justify-content-center d-flex container mt-3">
                                                                        <Button type="submit" onClick={() => {Editar(empresaEdit)}} variant="contained" endIcon={<SaveIcon />}>
                                                                            Salvar
                                                                        </Button>
                                                                        <Button variant="contained" color="error" className="mx-2" onClick={closeEdit} >
                                                                            CANCELAR
                                                                        </Button>
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

                            <div className="col-lg-1 p-0 position-absolute start-50 d-none d-lg-block" style={{ marginTop: "20px" }}>
                                <IconButton color="error" aria-label="upload picture" component="span"
                                    onClick={() => { excluir(empresa.idEmpresa) }}>
                                    <DeleteIcon className="fs-2" />
                                </IconButton>
                            </div>

                        </div>
                    )
                }
            )

            }
        </form >
    )
}
