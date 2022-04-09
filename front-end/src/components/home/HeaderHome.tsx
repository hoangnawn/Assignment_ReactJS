import React from 'react'
import { Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { isAuthenticate } from '../../utils/auth';

type Props = {}

const HeaderHome = (props: Props) => {
    const auth = isAuthenticate()
    return (
        <div>
            <header className="section-header">
                <section className="header-main border-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-4">
                                Phone Shop
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <form action="#" className="search">
                                    <div className="input-group w-100">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="submit">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="widgets-wrap float-md-right">
                                    <div className="widget-header  mr-3">
                                        <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart"></i></a>
                                        <span className="badge badge-pill badge-danger notify">0</span>
                                    </div>
                                    <div className="widget-header icontext">
                                        <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-user"></i></a>
                                        <div className="text">
                                            <span className="text-muted">Welcome!</span>
                                            {auth && (
                                                <div>
                                                    {auth.user.name} <br />
                                                </div>

                                            )}
                                            {!auth && (
                                                <div>
                                                    <NavLink to="/signin">Sign in</NavLink> |
                                                    <NavLink to="/signup"> Register</NavLink>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="main_nav">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link" to="/">Trang chủ</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sản phẩm</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Tin tức</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderHome