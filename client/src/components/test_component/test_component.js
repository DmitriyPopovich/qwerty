import React from "react";
import {checkAuthUser, logoutUser} from "../../store/reducers/auth-reducer/auth-reducer";
import {useDispatch} from "react-redux";

const TestComponent = () => {
    const dispatch = useDispatch()
    const handlerLogout = () => {
        dispatch(logoutUser())
    }
    const handlerRefresh = () => {
        dispatch(checkAuthUser())
    }
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

export default TestComponent