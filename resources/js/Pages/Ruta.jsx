import React, { useState } from 'react';
import Cabecera from './TopBar';
import Test from './Test';
const Ruta = () => {
    return (
        <div className="page-header">
            <div className="page-block">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="page-header-title">
                            <h5 className="m-b-10">Dashboard sale</h5>
                        </div>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item">Dashboard sale</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ruta