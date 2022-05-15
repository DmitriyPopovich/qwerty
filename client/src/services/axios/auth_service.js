import {SERVER_HOST} from "../../../config";
import $api from "../../http";
import axios from "axios";

export default class AuthService {
    static async getLogin(email, password){
        // console.log(email, password, '_axios')
        return $api.post('/auth/login', {email, password})
    }
    static async getRegistration(email, password){
        return $api.post('/auth/registration', {email, password})
    };
    static async getLogout(){
        return $api.post('/auth/logout')
    };
    static async getRefresh (){
        return await axios.get(`${SERVER_HOST}/auth/refresh`, {withCredentials: true})
    };
}


