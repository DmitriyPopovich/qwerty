import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../store/reducers/auth-reducer/auth-reducer";
import Navbar from "../../components/navbar";
import {getUser} from "../../store/reducers/auth-reducer/selectors/selectors";

const NavbarContainer = () => {
    const dispatch = useDispatch()
    const handlerLogout = () => {
        dispatch(logoutUser())
    }
    const {email} = useSelector(getUser)

    return (
        <Navbar user={email} handlerLogout={handlerLogout}/>
    )
}
export default NavbarContainer
