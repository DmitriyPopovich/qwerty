import {useDispatch, useSelector} from "react-redux";
import {getAuthUser} from "../../store/reducers/auth-reducer/selectors";
import React, {useState} from "react";
import {checkAuthUser, loginUser, logoutUser, registrationUser} from "../../store/reducers/auth-reducer/auth-reducer";
import AuthForm from "../../components/auth-form";


const AuthFormContainer = () => {

    const dispatch = useDispatch()
    const auth_user = useSelector(getAuthUser);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handlerPassword = (e) =>  setPassword(e.target.value)
    const handlerEmail = (e) =>  setEmail(e.target.value)
    const handlerLogin = () => {
        dispatch(loginUser({email, password}))
    }
    const handlerRegistration = () => {
        dispatch(registrationUser({email, password}))
    }
    const handlerLogout = () => {
        dispatch(logoutUser())
    }
    const handlerRefresh = () => {
        dispatch(checkAuthUser())
    }

    // const invalidInputEmail = email ? ' db-invalid-input': 'form-control mt-4'
    const invalidInputEmail = 'form-control mt-4'
    // const invalidInputPassword = password ? ' db-invalid-input': 'form-control mt-4'
    const invalidInputPassword = 'form-control mt-4'


    return  (
        <AuthForm
            handlerEmail={handlerEmail}
            handlerPassword={handlerPassword}
            handlerRegistration={handlerRegistration}
            handlerLogin={handlerLogin}
            invalidInputEmail={invalidInputEmail}
            invalidInputPassword={invalidInputPassword}
            email={email}
            password={password}
        />
    )
}
export default AuthFormContainer