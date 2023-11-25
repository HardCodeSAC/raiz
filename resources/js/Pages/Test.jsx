import React, { useState } from 'react';

const Test = () => {
    
    return (
        <div className="row">
        <div className="col-xl-6 col-md-12">
            <div className="card flat-card">
                <div className="row-table">
                    <div className="col-sm-6 card-body br">
                        <div className="row">
                            <div className="col-sm-4">
                                <i className="icon feather icon-users text-primary mb-1 d-block"></i>
                            </div>
                            <div className="col-sm-8 text-md-center">
                                <h5>1000</h5>
                                <span>Customers</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 d-none d-md-table-cell d-lg-table-cell d-xl-table-cell card-body br">
                        <div className="row">
                            <div className="col-sm-4">
                                <i className="icon feather icon-globe text-primary mb-1 d-block"></i>
                            </div>
                            <div className="col-sm-8 text-md-center">
                                <h5>$1252</h5>
                                <span>Revenue</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 card-body">
                        <div className="row">
                            <div className="col-sm-4">
                                <i className="icon feather icon-trending-up text-primary mb-1 d-block"></i>
                            </div>
                            <div className="col-sm-8 text-md-center">
                                <h5>600</h5>
                                <span>Growth</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-table">
                    <div className="col-sm-6 card-body br">
                        <div className="row">
                            <div className="col-sm-4">
                                <i className="icon feather icon-rotate-ccw text-primary mb-1 d-block"></i>
                            </div>
                            <div className="col-sm-8 text-md-center">
                                <h5>3550</h5>
                                <span>Returns</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 d-none d-md-table-cell d-lg-table-cell d-xl-table-cell card-body br">
                        <div className="row">
                            <div className="col-sm-4">
                                <i className="icon feather icon-download text-primary mb-1 d-block"></i>
                            </div>
                            <div className="col-sm-8 text-md-center">
                                <h5>3550</h5>
                                <span>Downloads</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 card-body">
                        <div className="row">
                            <div className="col-sm-4">
                                <i className="icon feather icon-shopping-cart text-primary mb-1 d-blockz"></i>
                            </div>
                            <div className="col-sm-8 text-md-center">
                                <h5>100%</h5>
                                <span>Order</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card support-bar overflow-hidden">
                        <div className="card-body pb-0">
                            <h2 className="m-0">53.94%</h2>
                            <span className="text-primary">Conversion Rate</span>
                            <p className="mb-3 mt-3">Number of conversions divided by the total visitors. </p>
                        </div>
                        <div id="support-chart"></div>
                        <div className="card-footer border-0 bg-primary text-white background-pattern-white">
                            <div className="row text-center">
                                <div className="col">
                                    <h4 className="m-0 text-white">10</h4>
                                    <span>2018</span>
                                </div>
                                <div className="col">
                                    <h4 className="m-0 text-white">15</h4>
                                    <span>2017</span>
                                </div>
                                <div className="col">
                                    <h4 className="m-0 text-white">13</h4>
                                    <span>2016</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card support-bar overflow-hidden">
                        <div className="card-body pb-0">
                            <h2 className="m-0">1432</h2>
                            <span className="text-primary">Order delivered</span>
                            <p className="mb-3 mt-3">Total number of order delivered in this month.</p>
                        </div>
                        <div className="card-footer border-0">
                            <div className="row text-center">
                                <div className="col">
                                    <h4 className="m-0">130</h4>
                                    <span>May</span>
                                </div>
                                <div className="col">
                                    <h4 className="m-0">251</h4>
                                    <span>June</span>
                                </div>
                                <div className="col">
                                    <h4 className="m-0 ">235</h4>
                                    <span>July</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-6 col-md-12">
            <div className="card">
                <div className="card-header">
                    <h5>Department wise monthly sales report</h5>
                </div>
                <div className="card-body">
                    <div className="row pb-2">
                        <div className="col-auto m-b-10">
                            <h3 className="mb-1">$21,356.46</h3>
                            <span>Total Sales</span>
                        </div>
                        <div className="col-auto m-b-10">
                            <h3 className="mb-1">$1935.6</h3>
                            <span>Average</span>
                        </div>
                    </div>
                    <div id="account-chart"></div>
                </div>
            </div>
        </div>
        <div className="col-xl-6 col-md-12">
            <div className="card">
                <div className="card-body">
                    <h6>Customer Satisfaction</h6>
                    <span>It takes continuous effort to maintain high customer satisfaction levels Internal and external.</span>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col">
                            <div id="satisfaction-chart"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card table-card">
                <div className="card-header">
                    <h5>New Products</h5>
                </div>
                <div className="pro-scroll">
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover m-b-0">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Image</th>
                                        <th>Status</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>HeadPhone</td>
                                        <td>
                                            <div><label className="badge badge-light-warning">Pending</label></div>
                                        </td>
                                        <td>$10</td>
                                        <td><a href="#!"><i className="icon feather icon-edit f-16  text-success"></i></a><a href="#!"><i className="feather icon-trash-2 ml-3 f-16 text-danger"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>Iphone 6</td>
                                        <td>
                                            <div><label className="badge badge-light-danger">Cancel</label></div>
                                        </td>
                                        <td>$20</td>
                                        <td><a href="#!"><i className="icon feather icon-edit f-16  text-success"></i></a><a href="#!"><i className="feather icon-trash-2 ml-3 f-16 text-danger"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>Jacket</td>
                                        <td>
                                            <div><label className="badge badge-light-success">Success</label></div>
                                        </td>
                                        <td>$35</td>
                                        <td><a href="#!"><i className="icon feather icon-edit f-16 text-success"></i></a><a href="#!"><i className="feather icon-trash-2 ml-3 f-16 text-danger"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>Sofa</td>
                                        <td>
                                            <div><label className="badge badge-light-danger">Cancel</label></div>
                                        </td>
                                        <td>$85</td>
                                        <td><a href="#!"><i className="icon feather icon-edit f-16 text-success"></i></a><a href="#!"><i className="feather icon-trash-2 ml-3 f-16 text-danger"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>Iphone 6</td>
                                        <td>
                                            <div><label className="badge badge-light-success">Success</label></div>
                                        </td>
                                        <td>$20</td>
                                        <td><a href="#!"><i className="icon feather icon-edit f-16 text-success"></i></a><a href="#!"><i className="feather icon-trash-2 ml-3 f-16 text-danger"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>HeadPhone</td>
                                        <td>
                                            <div><label className="badge badge-light-warning">Pending</label></div>
                                        </td>
                                        <td>$50</td>
                                        <td><a href="#!"><i className="icon feather icon-edit f-16 text-success"></i></a><a href="#!"><i className="feather icon-trash-2 ml-3 f-16 text-danger"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td>Iphone 6</td>
                                        <td>
                                            <div><label className="badge badge-light-danger">Cancel</label></div>
                                        </td>
                                        <td>$30</td>
                                        <td><a href="#!"><i className="icon feather icon-edit f-16 text-success"></i></a><a href="#!"><i className="feather icon-trash-2 ml-3 f-16 text-danger"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-6 col-md-12">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card prod-p-card background-pattern">
                        <div className="card-body">
                            <div className="row align-items-center m-b-0">
                                <div className="col">
                                    <h6 className="m-b-5">Total Profit</h6>
                                    <h3 className="m-b-0">$1,783</h3>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-money-bill-alt text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card prod-p-card bg-primary background-pattern-white">
                        <div className="card-body">
                            <div className="row align-items-center m-b-0">
                                <div className="col">
                                    <h6 className="m-b-5 text-white">Total Orders</h6>
                                    <h3 className="m-b-0 text-white">15,830</h3>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-database text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card prod-p-card bg-primary background-pattern-white">
                        <div className="card-body">
                            <div className="row align-items-center m-b-0">
                                <div className="col">
                                    <h6 className="m-b-5 text-white">Average Price</h6>
                                    <h3 className="m-b-0 text-white">$6,780</h3>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card prod-p-card background-pattern">
                        <div className="card-body">
                            <div className="row align-items-center m-b-0">
                                <div className="col">
                                    <h6 className="m-b-5">Product Sold</h6>
                                    <h3 className="m-b-0">6,784</h3>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-tags text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card feed-card">
                <div className="card-header">
                    <h5>Feeds</h5>
                </div>
                <div className="feed-scroll">
                    <div className="card-body">
                        <div className="row m-b-25 align-items-center">
                            <div className="col-auto p-r-0">
                                <i data-feather="bell" className="badge-light-primary feed-icon"></i>
                            </div>
                            <div className="col">
                                <a href="#!">
                                    <h6 className="m-b-5">You have 3 pending tasks. <span className="text-muted float-right f-14">Just Now</span></h6>
                                </a>
                            </div>
                        </div>
                        <div className="row m-b-25 align-items-center">
                            <div className="col-auto p-r-0">
                                <i data-feather="shopping-cart" className="badge-light-danger feed-icon"></i>
                            </div>
                            <div className="col">
                                <a href="#!">
                                    <h6 className="m-b-5">New order received <span className="text-muted float-right f-14">30 min ago</span></h6>
                                </a>
                            </div>
                        </div>
                        <div className="row m-b-25 align-items-center">
                            <div className="col-auto p-r-0">
                                <i data-feather="file-text" className="badge-light-success feed-icon"></i>
                            </div>
                            <div className="col">
                                <a href="#!">
                                    <h6 className="m-b-5">You have 3 pending tasks. <span className="text-muted float-right f-14">Just Now</span></h6>
                                </a>
                            </div>
                        </div>
                        <div className="row m-b-25 align-items-center">
                            <div className="col-auto p-r-0">
                                <i data-feather="bell" className="badge-light-primary feed-icon"></i>
                            </div>
                            <div className="col">
                                <a href="#!">
                                    <h6 className="m-b-5">You have 4 tasks Done. <span className="text-muted float-right f-14">1 hours ago</span></h6>
                                </a>
                            </div>
                        </div>
                        <div className="row m-b-25 align-items-center">
                            <div className="col-auto p-r-0">
                                <i data-feather="file-text" className="badge-light-success feed-icon"></i>
                            </div>
                            <div className="col">
                                <a href="#!">
                                    <h6 className="m-b-5">You have 2 pending tasks. <span className="text-muted float-right f-14">Just Now</span></h6>
                                </a>
                            </div>
                        </div>
                        <div className="row m-b-25 align-items-center">
                            <div className="col-auto p-r-0">
                                <i data-feather="shopping-cart" className="badge-light-danger feed-icon"></i>
                            </div>
                            <div className="col">
                                <a href="#!">
                                    <h6 className="m-b-5">New order received <span className="text-muted float-right f-14">4 hours ago</span></h6>
                                </a>
                            </div>
                        </div>
                        <div className="row m-b-25 align-items-center">
                            <div className="col-auto p-r-0">
                                <i data-feather="shopping-cart" className="badge-light-danger feed-icon"></i>
                            </div>
                            <div className="col">
                                <a href="#!">
                                    <h6 className="m-b-5">New order Done <span className="text-muted float-right f-14">Just Now</span></h6>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Test