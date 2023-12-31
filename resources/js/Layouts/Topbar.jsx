import React, { useState } from 'react';

const Topbar = () => {
	return (
		<header className="pc-header">
			<div className="header-wrapper">
				<div className="mr-auto pc-mob-drp">
					<ul className="list-unstyled">
						<li className="dropdown pc-h-item">
							<a className="pc-head-link active dropdown-toggle arrow-none mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
								Level
							</a>
							<div className="dropdown-menu pc-h-dropdown">
								<a href="#!" className="dropdown-item">
									<i data-feather="user"></i>
									<span>My Account</span>
								</a>
								<div className="pc-level-menu">
									<a href="#!" className="dropdown-item">
										<i data-feather="menu"></i>
										<span className="float-right"><i data-feather="chevron-right" className="mr-0"></i></span>
										<span>Level2.1</span>
									</a>
									<div className="dropdown-menu pc-h-dropdown">
										<a href="#!" className="dropdown-item">
											<i className="fas fa-circle"></i>
											<span>My Account</span>
										</a>
										<a href="#!" className="dropdown-item">
											<i className="fas fa-circle"></i>
											<span>Settings</span>
										</a>
										<a href="#!" className="dropdown-item">
											<i className="fas fa-circle"></i>
											<span>Support</span>
										</a>
										<a href="#!" className="dropdown-item">
											<i className="fas fa-circle"></i>
											<span>Lock Screen</span>
										</a>
										<a href="#!" className="dropdown-item">
											<i className="fas fa-circle"></i>
											<span>Logout</span>
										</a>
									</div>
								</div>
								<a href="#!" className="dropdown-item">
									<i data-feather="settings"></i>
									<span>Settings</span>
								</a>
								<a href="#!" className="dropdown-item">
									<i data-feather="life-buoy"></i>
									<span>Support</span>
								</a>
								<a href="#!" className="dropdown-item">
									<i data-feather="lock"></i>
									<span>Lock Screen</span>
								</a>
								<a href="#!" className="dropdown-item">
									<i data-feather="power"></i>
									<span>Logout</span>
								</a>
							</div>
						</li>
					</ul>
				</div>
				<div className="ml-auto">
					<ul className="list-unstyled">
						<li className="dropdown pc-h-item">
							<a className="pc-head-link dropdown-toggle arrow-none mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
								<i data-feather="search"></i>
							</a>
							<div className="dropdown-menu dropdown-menu-right pc-h-dropdown drp-search">
								<form className="px-3">
									<div className="form-group mb-0 d-flex align-items-center">
										<i data-feather="search"></i>
									</div>
								</form>
							</div>
						</li>
						<li className="dropdown pc-h-item">
							<a className="pc-head-link dropdown-toggle arrow-none mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
								<span>
									<span className="user-name">Joseph William</span>
									<span className="user-desc">Administrator</span>
								</span>
							</a>
							<div className="dropdown-menu dropdown-menu-right pc-h-dropdown">
								<div className=" dropdown-header">
									<h6 className="text-overflow m-0">Welcome !</h6>
								</div>
								<a href="#!" className="dropdown-item">
									<i data-feather="user"></i>
									<span>My Account</span>
								</a>
								<a href="#!" className="dropdown-item">
									<i data-feather="settings"></i>
									<span>Settings</span>
								</a>
								<a href="#!" className="dropdown-item">
									<i data-feather="life-buoy"></i>
									<span>Support</span>
								</a>
								<a href="#!" className="dropdown-item">
									<i data-feather="lock"></i>
									<span>Lock Screen</span>
								</a>
								<a href="#!" className="dropdown-item">
									<i data-feather="power"></i>
									<span>Logout</span>
								</a>
							</div>
						</li>
					</ul>
				</div>

			</div>
		</header>

	)
}

export default Topbar