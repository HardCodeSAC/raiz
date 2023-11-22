import React, { useState } from 'react';

const Login = () => {
    return (
        <div className="auth-wrapper">
            <div className="auth-content">
                <div className="card">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12">
                            <div className="card-body">
                                <img src="assets/images/logo-dark.svg" alt="" className="img-fluid mb-4"/>
                                <h4 className="mb-3 f-w-400">Signin</h4>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i data-feather="mail"></i></span>
                                    </div>
                                    <input type="email" className="form-control" placeholder="Email address"/>
                                </div>
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i data-feather="lock"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="form-group text-left mt-2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input input-primary" id="customCheckdefh2"/>
                                        <label className="custom-control-label" htmlFor="customCheckdefh2">Save credentials</label>
                                    </div>
                                </div>
                                <button className="btn btn-block btn-primary mb-4">Signin</button>
                                <p className="mb-0 text-muted">Don’t have an account? <a href="auth-signup.html" className="f-w-400">Signup</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login