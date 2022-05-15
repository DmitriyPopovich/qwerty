import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {checkAuthUser, loginUser, logoutUser, registrationUser} from "../../store/reducers/auth-reducer/auth-reducer";
import {getAuthUser} from "../../store/reducers/auth-reducer/selectors";
import LoginPage from "../../components/test_component";
import AppRouter from "../../router";
import AuthFormContainer from "../auth-form/auth-form-container";
import Navbar from "../../components/navbar";



const Auth = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        if(localStorage.getItem('token')){
            console.log('проверка авторизации при загрузке container')
            dispatch(checkAuthUser())
        }
    },[])

    const auth_user = useSelector(getAuthUser);
    const handlerLogout = () => {
        dispatch(logoutUser())
    }
    const handlerRefresh = () => {
        dispatch(checkAuthUser())
    }

    return auth_user ? (
        <>
            <Navbar user={auth_user} handlerLogout={handlerLogout}/>
            <AppRouter />
            <LoginPage handlerLogout={handlerLogout} handlerRefresh={handlerRefresh}/>
        </>
        ) : (
            <AuthFormContainer />
        );
}

export default Auth