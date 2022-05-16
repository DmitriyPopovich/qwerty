import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {useDispatch, useSelector} from "react-redux";
import {checkAuthUser} from "../../store/reducers/auth-reducer/auth-reducer";
import {getAuth} from "../../store/reducers/auth-reducer/selectors";
import AppRouter from "../../router";
import AuthPage from "../../pages/auth-page";
import NavbarContainer from "../navbar/navbar-container";
import "./app.scss";


const App = () => {
    console.log('app')
    const dispatch = useDispatch()
    useEffect(()=>{
        if(localStorage.getItem('token')){
            // console.log('проверка авторизации при загрузке container')
            dispatch(checkAuthUser())
        }
    },[])
    const isAuth = useSelector(getAuth);
    // console.log(isAuth)

    return isAuth ? (
        <>
            <NavbarContainer />
            <AppRouter />
        </>
    ) : (
        <AuthPage />
    )
}
export default App
