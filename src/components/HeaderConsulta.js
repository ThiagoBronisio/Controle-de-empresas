import React from "react"
import { NavLink } from "react-router-dom"
import * as helpers from "../helpers/auth-helpers"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../imagens/logo.png"


export default function HeaderConsulta() {


    const sairPage = () => {
        if (window.confirm("Deseja sair do sistema ?")) {
            helpers.removerAccsessToken();
            window.location.href = "/";
        } else {
            window.location.href = "#"
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="bgHeaderConsulta">
                <Toolbar className="container">
                    <IconButton
                        className="px-4"
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" textAlign="center" sx={{ flexGrow: 1 }}>
                        <img src={Logo} style={{width:"180px"}}></img>
                    </Typography>
                    <a href="#" className="text-decoration-none">
                        <Button variant="contained" color="error" className="baloo" size="small" onClick={() => sairPage()}>
                            Sair da conta
                        </Button>
                    </a>
                </Toolbar>
            </AppBar>
        </Box>
    );
}