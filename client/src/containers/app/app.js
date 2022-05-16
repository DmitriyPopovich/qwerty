import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {useDispatch, useSelector} from "react-redux";
import {checkAuthUser} from "../../store/reducers/auth-reducer/auth-reducer";
import {getAuth} from "../../store/reducers/auth-reducer/selectors";
import AuthPage from "../../pages/auth-page";
import MainPage from "../../pages/main-page";
import "./app.scss";

const App = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        if(localStorage.getItem('token')){
            dispatch(checkAuthUser())
        }
    },[])
    const isAuth = useSelector(getAuth);

    return isAuth ? (
        <MainPage />
    ) : (
        <AuthPage />
    )
}
export default App
