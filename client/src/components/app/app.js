import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AuthContainer from "../../containers/auth-container";
import "./app.scss";
import {useDispatch, useSelector} from "react-redux";
import {checkAuthUser} from "../../store/reducers/auth-reducer/auth-reducer";
import {getAuth} from "../../store/reducers/auth-reducer/selectors";
import Navbar from "../navbar";
import AppRouter from "../../router";
import AuthFormContainer from "../../containers/auth-form-container/auth-form-container";
import TestComponent from "../test_component";


const App = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        if(localStorage.getItem('token')){
            console.log('проверка авторизации при загрузке container')
            dispatch(checkAuthUser())
        }
    },[])
    const isAuth = useSelector(getAuth);

    return isAuth ? (
        <>
            <Navbar />
            <AppRouter />
            <TestComponent />
        </>
    ) : (
        <AuthFormContainer />
    );
};
export default App
