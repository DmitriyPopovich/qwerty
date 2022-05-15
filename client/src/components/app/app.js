import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppRouter from "../../router";
import Navbar from "../navbar/navbar";
import withAuth from "../../hoc/with-auth";
import "./app.scss";
import {useDispatch} from "react-redux";
import {checkAuthUser} from "../../store/reducers/auth-reducer/auth-reducer";

const App = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        if(localStorage.getItem('token')){
            dispatch(checkAuthUser)
        }
    },[])

  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};
export default App
