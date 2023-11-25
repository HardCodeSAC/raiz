import React, { useState } from 'react';

import Test from './Test';
const Dashboard = () => {
    return (
        <div className="pc-container">
            <div className="pcoded-content">
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
                <Test />
            </div>
            
        </div>
    )
}

export default Dashboard