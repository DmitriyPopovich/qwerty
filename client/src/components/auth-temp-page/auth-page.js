import React from "react";

const LoginPage = ({handlerLogout,handlerRefresh}) => {
    return(
        <div className='col db-button  mb-3'>
            <button
                onClick={handlerLogout}
                className='btn btn-outline-dark'
            >
                Logout
            </button>
            <div className='row'>
                <div className='col db-button  mb-3'>
                    <button
                        onClick={handlerRefresh}
                        className='btn btn-outline-dark'
                    >
                        Refresh
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage