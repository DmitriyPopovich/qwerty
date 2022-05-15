import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkAuthUser, logoutUser} from "../store/reducers/auth-reducer/auth-reducer";
import {getAuthUser} from "../store/reducers/auth-reducer/selectors";


const withAuth_OLD = (View) => {

    const dispatch = useDispatch()
    useEffect(()=>{
        if(localStorage.getItem('token')){
            // console.log('проверка авторизации при загрузке')
            dispatch(checkAuthUser())
        }
    },[])
    const auth_user = useSelector(getAuthUser);
    console.log('with-auth')
    return <View auth={auth_user}/>


}
export default withAuth_OLD