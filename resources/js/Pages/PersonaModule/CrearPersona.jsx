import React, { useState } from 'react';
import AppLayout from "@/Layouts/AppLayout";
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {
    Container,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    FormGroup,
    FormControlLabel,
    Button,
} from '@mui/material';


export default function CrearPersona() {
    
    const guardarPersona = async () => {
        let formData = new FormData(document.getElementById('bank-form'));
        formData.append('_token', $('#primer_nombre').val());
        $.ajax({
            url: '/entidad_persona/guardar',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                //$('#RegistroExitoso').modal('show');
                // swal alert

                Swal.fire({
                    title: 'El registro fue generado con éxito.',
                    text: 'Es momento de comenzar a trabajar.',
                    type: 'success',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });

                //$("#bank-form #name").val('');
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
    
    const [datosPersona, setDatosPersona] = useState({
        primer_nombre: '',
        segundo_nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        identificador: '',
        tipo_doc: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar acciones con los datos
        console.log('Datos enviados:', datosPersona);
    };
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
                                        <h5 className="m-b-10">Persona</h5>
                                    </div>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/entidad_persona">Listado Persona</a></li>
                                        <li className="breadcrumb-item">Crear Persona</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='card col-sm-12'>
                            <div className='card-header'>
                                <h5>FORMULARIO PARA NUEVA PERSONA</h5>
                            </div>
                            <div className='card-body'>
                                <Container maxWidth="100%">
                                    <h5>DATOS PERSONALES</h5>
                                    <form onSubmit={handleSubmit}>
                                        <Grid container spacing={2}>
                                            
                                            <Grid item xs={6}>
                                                <FormControl fullWidth variant="outlined" margin="normal">
                                                    <InputLabel>Tipo de Identificador</InputLabel>
                                                    <Select
                                                        label="Tipo de Identificador"
                                                        name="tipo_doc"
                                                        value={datosPersona.tipo_doc}
                                                    >
                                                        <MenuItem value="DNI">DNI</MenuItem>
                                                        <MenuItem value="CE">Carnet Extranjeria</MenuItem>
                                                        <MenuItem value="PASAPORTE">Pasaporte</MenuItem>
                                                        <MenuItem value="RUT">RUT</MenuItem>
                                                        <MenuItem value="OTRO">Otro</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                        label="Identificador"
                                                        variant="outlined"
                                                        fullWidth
                                                        margin="normal"
                                                        name="identificador"
                                                        value={datosPersona.identificador}
                                                        
                                                    />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    label="Primer Nombre"
                                                    variant="outlined"
                                                    fullWidth
                                                    margin="normal"
                                                    name="primer_nombre"
                                                    id="primer_nombre"
                                                    value={datosPersona.primer_nombre}
                                                    
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    label="Segundo Nombre"
                                                    variant="outlined"
                                                    fullWidth
                                                    margin="normal"
                                                    name="segundo_nombre"
                                                    
                                                    value={datosPersona.segundo_nombre}
                                                    
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    label="Apellido Paterno"
                                                    variant="outlined"
                                                    fullWidth
                                                    margin="normal"
                                                    name="apellido_paterno"
                                                    value={datosPersona.apellido_paterno}
                                                    
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    label="Apellido Materno"
                                                    variant="outlined"
                                                    fullWidth
                                                    margin="normal"
                                                    name="apellido_materno"
                                                    
                                                    value={datosPersona.apellido_materno}
                                                    
                                                />
                                            </Grid>

                                        </Grid>
                                        <Button type="submit" variant="contained" color="primary">
                                            Guardar
                                        </Button>
                                    </form>
                                </Container>

                                    <div className="form-group">
                                        <h5>CONTACTOS TELEFONICOS</h5>
                                        <hr />
                                        <div className="card-body table-border-style">
                                            <div className="table-responsive">
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                N°
                                                            </th>
                                                            <th>
                                                                Numero Telefono
                                                            </th>
                                                            <th>
                                                                Estado
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                1
                                                            </td>
                                                            <td>
                                                                993275833
                                                            </td>
                                                            <td>
                                                                ACTIVO
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <h5>DIRECCIONES</h5>
                                        <hr />
                                        <div className="card-body table-border-style">
                                            <div className="table-responsive">
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                N°
                                                            </th>
                                                            <th>
                                                                Pais
                                                            </th>
                                                            <th>
                                                                Provincia
                                                            </th>
                                                            <th>
                                                                Ciudad
                                                            </th>
                                                            <th>
                                                                Direccion
                                                            </th>
                                                            <th>
                                                                Estado
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                1
                                                            </td>
                                                            <td>
                                                                PERU
                                                            </td>
                                                            <td>
                                                                AREQUIPA
                                                            </td>
                                                            <td>
                                                                AREQUIPA
                                                            </td>
                                                            <td>
                                                                Urb. Villa Jabiru D-14
                                                            </td>
                                                            <td>
                                                                ACTIVO
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                1
                                                            </td>
                                                            <td>
                                                                PERU
                                                            </td>
                                                            <td>
                                                                AREQUIPA
                                                            </td>
                                                            <td>
                                                                PIURA
                                                            </td>
                                                            <td>
                                                                Ciudad de Dios Lote 05
                                                            </td>
                                                            <td>
                                                                INACTIVO
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row align-content-md-end">
                                            <div className="col-md-1">
                                                <button type="button" className="btn btn-shadow btn-danger">Atras</button>
                                            </div>
                                            <div className="col-md-1">
                                                <button type="button" className="btn btn-shadow btn-primary">Guardar</button>
                                            </div>
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