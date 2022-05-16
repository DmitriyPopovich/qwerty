import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {useDispatch, useSelector} from "react-redux";
import {checkAuthUser} from "../../store/reducers/auth-reducer/auth-reducer";
import {getAuth} from "../../store/reducers/auth-reducer/selectors";
import Navbar from "../../components/navbar";
import AppRouter from "../../router";
import AuthFormContainer from "../auth-form/auth-form-container";
import "./app.scss";
import AuthPage from "../../pages/auth-page";

const App = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        if(localStorage.getItem('token')){
            // console.log('проверка авторизации при загрузке container')
            dispatch(checkAuthUser())
        }
    },[])
    const isAuth = useSelector(getAuth);

    return isAuth ? (
        <>
            <Navbar />
            <AppRouter />
        </>
    ) : (
        <AuthPage />
    )
}
export default App
