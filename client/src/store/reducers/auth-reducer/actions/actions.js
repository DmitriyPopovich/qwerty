import AuthService from "../../../../services/axios/auth-services";
import {setAuth, setUser} from "../auth-reducer";


const _setAuthUser = (data, dispatch) => {
    localStorage.setItem('token', data.accessToken)
    dispatch(setUser(data.user))
    dispatch(setAuth(true))
}
const _unsetAuthUser = (dispatch) => {
    localStorage.removeItem('token')
    dispatch(setUser(false))
    dispatch(setUser(false))
}


export const loginAction = async ({email, password}, { rejectWithValue, dispatch }) => {
    try {
        console.log('login.....')
        const {data} = await AuthService.getLogin(email, password)
        _setAuthUser(data, dispatch)
    } catch (err) {
        console.log(err)
        return rejectWithValue(err.data.message);//TODO check !!
    }
}
export const registrationAction = async ({email, password}, { rejectWithValue, dispatch }) => {
    try {
        const {data} = await AuthService.getRegistration(email, password)
        _setAuthUser(data, dispatch)
    } catch (err) {
        console.log(err)
        return rejectWithValue(err.data.message);
    }
}
export const logoutAction = async (_, { rejectWithValue, dispatch }) => {
    try {
        const {data} = await AuthService.getLogout()
        console.log(data)
        _unsetAuthUser(dispatch)
    } catch (err) {
        console.log(err)
        return rejectWithValue(err.data.message);
    }
}
export const checkAuthUserAction = async (_, { rejectWithValue, dispatch }) => {
    try {
        const {data} = await AuthService.getRefresh()
        _setAuthUser(data, dispatch)
    } catch (err) {
        console.log(err)
        return rejectWithValue(err.data.message);
    }
}
