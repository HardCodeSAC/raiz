import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const AppLayout = () => {
    
    return (
        <div id="layout-wrapper">
            <Topbar />
            <Sidebar />
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppLayout