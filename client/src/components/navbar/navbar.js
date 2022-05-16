import React from 'react'
import {NavLink} from "react-router-dom"
import './navbar.scss'


const Navbar = ({user, handlerLogout}) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid db-navbar">
                    <div className="navbar-brand ms-2 db-brand">APP</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                            <li className="nav-item">
                                <NavLink
                                    to={'/'}
                                    activeclassname={"active"}
                                    className="nav-link "
                                    aria-current="page"
                                    type={'button'}
                                >
                                    {user && 'Posts'}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeclassname={"active"}
                                    to={'/post'}
                                    className="nav-link"
                                    type={'button'}
                                >
                                    {user && ' New posts'}
                                </NavLink>
                            </li>
                            <li className="nav-item" style={{marginTop: '1px'}}>
                                <div className="dropdown">
                                    <a className="btn dropdown-toggle" id="dropdownMenuButton1"
                                       data-bs-toggle="dropdown" aria-expanded="false"
                                    >
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                type='button'
                                                onClick={handlerLogout}
                                            >
                                                Log out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar
