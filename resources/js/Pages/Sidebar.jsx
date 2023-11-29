import React, { useState } from 'react';
import Ruta from './Ruta';
import Cabecera from './TopBar';
import Test from './Test';

const Sidebar = () => {
    
    return (
        <div>
            <nav className="pc-sidebar">
                <div className="navbar-wrapper">
                    <div className="m-header">
                    </div>
                    <div className="navbar-content">
                        <ul className="pc-navbar">
                            <li className="pc-item pc-caption">
                                <label>Navigation</label>
                            </li>
                            <li className="pc-item">
                                <a href="" className="pc-link "><span className="pc-micon"><i data-feather="home"></i></span><span className="pc-mtext">Dashboard</span></a>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>Elements</label>
                                <span>UI Components</span>
                            </li>
                            <li className="pc-item pc-hasmenu">
                                <a href="" className="pc-link "><span className="pc-micon"><i data-feather="box"></i></span><span className="pc-mtext">Components</span><span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                                <ul className="pc-submenu">
                                    <li className="pc-item"><a className="pc-link" href="">Alert</a></li>
                                    <li className="pc-item"><a className="pc-link" href="">Button</a></li>
                                    <li className="pc-item"><a className="pc-link" href="">Badges</a></li>
                                    <li className="pc-item"><a className="pc-link" href="">Breadcrumb & paggination</a></li>
                                    <li className="pc-item"><a className="pc-link" href="">Cards</a></li>
                                    <li className="pc-item"><a className="pc-link" href="">Collapse</a></li>
                                    <li className="pc-item"><a className="pc-link" href="">Carousel</a></li>
                                    <li className="pc-item"><a className="pc-link" href="">Progress</a></li>
                                    <li className="pc-item"><a className="pc-link" href="">Modal</a></li>
                                    <li className="pc-item"><a className="pc-link" href="">Tabs & pills</a></li>
                                    <li className="pc-item"><a className="pc-link" href="">Typography</a></li>
                                </ul>
                            </li>
                            <li className="pc-item">
                                <a href="" className="pc-link "><span className="pc-micon"><i data-feather="feather"></i></span><span className="pc-mtext">Icons</span></a>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>Forms</label>
                                <span>40+ Ready to Use From plugins</span>
                            </li>
                            <li className="pc-item pc-hasmenu">
                                <a href="" className="pc-link "><span className="pc-micon"><i data-feather="layout"></i></span><span className="pc-mtext">Forms Elements</span><span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                                <ul className="pc-submenu">
                                    <li className="pc-item"><a className="pc-link" href="">Form Basic</a></li>
                                    <li className="pc-item"><a className="pc-link" href="">Form Options</a></li>
                                    <li className="pc-item"><a className="pc-link" href="">Input Groups</a></li>
                                    <li className="pc-item"><a className="pc-link" href="">Checkbox</a></li>
                                    <li className="pc-item"><a className="pc-link" href="">Radio</a></li>
                                </ul>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>table</label>
                                <span>Advance Datatable Integrated</span>
                            </li>
                            <li className="pc-item">
                                <a href="" className="pc-link "><span className="pc-micon"><i data-feather="grid"></i></span><span className="pc-mtext">Bootstrap table</span></a>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>Chart & Maps</label>
                                <span>Tones of readymade charts</span>
                            </li>
                            <li className="pc-item">
                                <a href="" className="pc-link "><span className="pc-micon"><i data-feather="pie-chart"></i></span><span className="pc-mtext">Chart</span></a>
                            </li>
                            <li className="pc-item">
                                <a href="" className="pc-link "><span className="pc-micon"><i data-feather="map"></i></span><span className="pc-mtext">Maps</span></a>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>Pages</label>
                                <span>15+ Redymade Pages</span>
                            </li>
                            <li className="pc-item pc-hasmenu">
                                <a href="" className="pc-link"><span className="pc-micon"><i data-feather="lock"></i></span><span className="pc-mtext">Authentication</span><span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                                <ul className="pc-submenu">
                                    <li className="pc-item"><a className="pc-link" href="" target="_blank">Sign up</a></li>
                                    <li className="pc-item"><a className="pc-link" href="" target="_blank">Sign in</a></li>
                                </ul>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>Other</label>
                                <span>Extra more things</span>
                            </li>
                            <li className="pc-item pc-hasmenu">
                                <a href="" className="pc-link"><span className="pc-micon"><i data-feather="menu"></i></span><span className="pc-mtext">Menu levels</span><span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                                <ul className="pc-submenu">
                                    <li className="pc-item"><a className="pc-link" href="">Menu Level 2.1</a>
                                    </li>
                                    <li className="pc-item pc-hasmenu">
                                        <a href="" className="pc-link">Menu level 2.2<span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                                        <ul className="pc-submenu">
                                            <li className="pc-item"><a className="pc-link" href="">Menu level 3.1</a></li>
                                            <li className="pc-item"><a className="pc-link" href="">Menu level 3.2</a></li>
                                        </ul>
                                    </li>
                                    <li className="pc-item pc-hasmenu">
                                        <a href="" className="pc-link">Menu level 2.3<span className="pc-arrow"><i data-feather="chevron-right"></i></span></a>
                                        <ul className="pc-submenu">
                                            <li className="pc-item"><a className="pc-link" href="">Menu level 3.1</a></li>
                                            <li className="pc-item"><a className="pc-link" href="">Menu level 3.2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="pc-item"><a href="" className="pc-link "><span className="pc-micon"><i data-feather="sidebar"></i></span><span className="pc-mtext">Sample page</span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Sidebar