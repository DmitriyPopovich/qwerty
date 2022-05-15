import React from "react";
import './auth-container.scss'

const AuthForm = (props) => {
    const {handlerEmail, handlerPassword, invalidInputEmail, invalidInputPassword, email, password,
        handlerLogin, handlerRegistration} = props
    return(
        <div className='container-fluid   db-container' style={{width: '400px'}}>
            <div className='row db-main-row'>
                <form>
                    <div className='row'>
                        <div className='col  text-white text-center mt-3'>
                            <h3>Log In</h3>
                            <p>Make registration if you dont have an account</p>
                            <hr/>
                            <div className='text-warning'>

                            </div>
                            <input
                                onChange={handlerEmail}
                                className={invalidInputEmail}
                                type="text"
                                placeholder="name"
                                value={email}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <input
                                onChange={handlerPassword}
                                className={invalidInputPassword}
                                type="text"
                                placeholder="password"
                                value={password}
                            />
                        </div>
                    </div>
                </form>
                <div className='row'>
                    <div className='col db-button mt-3 mb-3'>
                        <button
                            onClick={handlerLogin}
                            className='btn btn-outline-dark '
                        >
                            Log in
                        </button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col db-button  mb-3'>
                        <button
                            onClick={handlerRegistration}
                            className='btn btn-outline-dark'
                        >
                            Registration
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AuthForm