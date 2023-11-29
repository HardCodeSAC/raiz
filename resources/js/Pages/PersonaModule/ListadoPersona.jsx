import React, { useState } from 'react';
import Cabecera from '../TopBar';
import Sidebar from '../Sidebar';

export default function ListadoPersona({ Persona }) {

    return (
        <div>
            <Sidebar />
            <Cabecera />
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
                                        <li className="breadcrumb-item"><a href="/ListadoPersona">Listado Persona</a></li>
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
                                </div>
                                <div className="form-group">
                                    <hr />
                                    <div className="card-body table-border-style">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Codigo
                                                        </th>
                                                        <th>
                                                            Tipo de Documento
                                                        </th>
                                                        <th>
                                                            Identificador
                                                        </th>
                                                        <th>
                                                            Nombres
                                                        </th>
                                                        <th>
                                                            Apellidos
                                                        </th>
                                                        <th>
                                                            Estado
                                                        </th>
                                                        <th>
                                                            Acciones
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            00001
                                                        </td>
                                                        <td>
                                                            DNI
                                                        </td>
                                                        <td>
                                                            72385497
                                                        </td>
                                                        <td>
                                                            Bryan Walter
                                                        </td>
                                                        <td>
                                                            Mejia Manzanares
                                                        </td>
                                                        <td>
                                                            <div><label class="badge badge-light-success">Activo</label></div>
                                                        </td>
                                                        <td>
                                                            <a href="/persona"><i class="icon feather icon-edit f-16 text-success"></i></a>
                                                            <a href="#!"><i class="feather icon-trash-2 ml-3 f-16 text-danger"></i></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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