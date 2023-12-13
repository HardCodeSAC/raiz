import React, { useEffect, useState } from 'react';
import AppLayout from "@/Layouts/AppLayout";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function ListadoPersona() {
    const [personas, setPersonas] = useState([])

    useEffect( () => {
        getAllPersonas()
    }, [])

    const getAllPersonas = async () => {

        $.ajax({
            url: '/entidad_persona/resultados',
            type: 'GET',
            success: function (data) {
                
                setPersonas(data.Entidad);
                console.log("AAA");
                //personas = JSON.parse(data.Entidad);
                console.log(personas);
            },
            error: function (error) {
                var errors = error.responseJSON;
                console.log(errors);
                Swal.fire({
                    title: 'Error',
                    text: errors,
                    type: 'error',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        });
    }
    return (
        <div>
            <AppLayout />
            <div className="pc-container">
                <div className="pcoded-content">
                    <div className="page-header">
                        <div className="page-block">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="page-header-title">
                                        <h5 className="m-b-10">Listado de Persona</h5>
                                    </div>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/entidad_persona">Listado Persona</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='card col-sm-12'>
                            <div className='card-header'>
                                <h5>LISTADO DE PERSONAS REGISTRADAS</h5>

                            </div>
                            <div className='card-body'>
                                <div className="form-group">

                                    <hr />
                                    <h5>BUSCANDOR</h5>
                                    <Container maxWidth="xs">                                    
                                        <Button href="/entidad_persona/crear" variant="contained">Crear Persona</Button>
                                    </Container>
                                    
                                    
                                </div>
                                <div className="form-group">
                                    <hr />
                                    <h5>LISTADO DE PERSONAS REGISTRADAS</h5>
                                    <hr />
                                    <div className="table-border-style table-hover table-responsive">
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Codigo</TableCell>
                                                        <TableCell align="right">Tipo de Documento</TableCell>
                                                        <TableCell align="right">Identificador</TableCell>
                                                        <TableCell align="right">Nombres</TableCell>
                                                        <TableCell align="right">Apellidos</TableCell>
                                                        <TableCell align="right">Estado</TableCell>
                                                        <TableCell align="right">Acciones</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {personas.map((persona ) => (
                                                        <TableRow
                                                            key={persona.id}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {persona.id}
                                                            </TableCell>
                                                            <TableCell align="right">{persona.tipo_doc}</TableCell>
                                                            <TableCell align="right">{persona.identificador}</TableCell>
                                                            <TableCell align="right">{persona.primer_nombre} {persona.segundo_nombre}</TableCell>
                                                            <TableCell align="right">{persona.apellido_paterno} {persona.apellido_materno}</TableCell>
                                                            <TableCell align="right" ><label class="badge badge-light-success">{persona.estado}</label></TableCell>
                                                            <TableCell align="right">
                                                            <ButtonGroup variant="text" aria-label="text button group">
                                                                <Button href=""><i class="icon feather icon-eye f-16  text-success"></i></Button>
                                                                <Button href=""><i class="icon feather icon-edit f-16  text-warning"></i></Button>
                                                                <Button href=""><i class="feather icon-trash-2 f-16 text-danger"></i></Button>
                                                            </ButtonGroup>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}