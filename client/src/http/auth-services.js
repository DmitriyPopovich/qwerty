import {SERVER_HOST} from "../../config";

class AuthService {

    _postOptions = (data=false) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify(data);
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            credentials: 'include'
        };
        if(data) requestOptions.body = raw
        return requestOptions
    }
    _getOptions = () => {
        const requestOptions = {
            method: 'GET',
            credentials: 'include'
        };
        return requestOptions
    }

    getLogin = async (payload) => {
        const options = this._postOptions(payload)
        const res = await fetch(`${SERVER_HOST}/auth/login`, options);
        return await res.json()
    };
    getRegistration = async (payload) => {
        const options = this._postOptions(payload)
        const res = await fetch(`${SERVER_HOST}/auth/registration`, options);
        return await res.json()
    };
    getLogout = async () => {
        const options = this._postOptions()
        const res = await fetch(`${SERVER_HOST}/auth/logout`, options);
        return await res.json()
    };
    getRefresh = async () => {
        const options = this._getOptions()
        const res = await fetch(`${SERVER_HOST}/auth/refresh`, options);
        return await res.json()
    };

}
export default  new AuthService()

