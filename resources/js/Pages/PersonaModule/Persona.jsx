import React, { useState } from 'react';
import AppLayout from "@/Layouts/AppLayout";

export default function Persona({ Persona }) {

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
                                        <li className="breadcrumb-item"><a href="/ListadoPersona">Listado Persona</a></li>
                                        <li className="breadcrumb-item">Editar Persona</li>
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
                                <form>
                                    <div className="form-group">
                                        <h5>DATOS PERSONALES</h5>
                                        <hr />
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label for="exampleInputEmail1">Tipo de Identificador</label>
                                                    <select className="form-control" id="tipoIdentificador">
                                                        <option value="">Selecciona tipo identificador</option>
                                                        <option value="dni" selected >DNI</option>
                                                        <option value="ce">Carnet Extranjeria</option>
                                                        <option value="pasaporte">Pasaporte</option>
                                                        <option value="rut">RUT</option>
                                                        <option value="otro">Otro</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <label for="exampleInputEmail1">Identificador</label>
                                                    <input type="text" className="form-control" id="identificador" placeholder="Ingrese su DNI" value={Persona.Identificador} />
                                                    <small id="emailHelp" className="form-text text-muted">El Identificador es unico para cada persona</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Nombre de la persona</label>
                                            <div className="row">

                                                <div className="col-md-6">
                                                    <input type="text" className="form-control" id="nombres" aria-describedby="emailHelp" placeholder="Ingrese su nombre" value={Persona.Nombre} />
                                                    <small id="emailHelp" className="form-text text-muted">Ingrese su primer nombre</small>
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" className="form-control" id="nombres" aria-describedby="emailHelp" placeholder="Ingrese su nombre" value={Persona.SegundoNombre} />
                                                    <small id="emailHelp" className="form-text text-muted">Ingrese su primer nombre</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Apellidos de la persona</label>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input type="text" className="form-control" id="apellidos" aria-describedby="emailHelp" placeholder="Ingrese su apellido paterno" value={Persona.ApellidoPaterno} />
                                                    <small id="emailHelp" className="form-text text-muted">Ingrese su apellido paterno</small>
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" className="form-control" id="apellidos" aria-describedby="emailHelp" placeholder="Ingrese su apellido materno" value={Persona.ApellidoMaterno} />
                                                    <small id="emailHelp" className="form-text text-muted">Ingrese su apellido materno</small>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}