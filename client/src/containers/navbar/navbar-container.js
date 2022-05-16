import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../store/reducers/auth-reducer/auth-reducer";
import Navbar from "../../components/navbar";

const NavbarContainer = () => {
    const dispatch = useDispatch()
    const handlerLogout = () => {
        dispatch(logoutUser())
    }
    // const user_1 = useSelector(getAuthUser)
    // console.log((user_1))

    const user = 'Dima'
    console.log(user)

    return (
        <Navbar user={user} handlerLogout={handlerLogout}/>
    )
}
export default NavbarContainer
