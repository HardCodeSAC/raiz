import React, { useState } from 'react';

export default function Register({ vara }) {
// const Register = () => {
    return (
        <div className="auth-wrapper">
            <div className="auth-content">
                <div className="card">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12">
                            <div className="card-body">
                                <img src="assets/images/logo-dark.svg" alt="" className="img-fluid mb-4"/>
                                <h4 className="mb-3 f-w-400">{vara}</h4>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i data-feather="user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Username"/>
                                </div>
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
                                        <label className="custom-control-label" htmlFor="customCheckdefh2">Send me the <a href="#!"> Newsletter</a> weekly.</label>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-block mb-4">Sign up</button>
                                <p className="mb-2">Already have an account? <a href="auth-signin.html" className="f-w-400">Signin</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}