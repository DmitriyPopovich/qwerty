import axios from 'axios'
import {SERVER_HOST} from "../../config";

const $api = axios.create({
    withCredentials: true,
    baseURL: SERVER_HOST
})

$api.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})
$api.interceptors.response.use((config)=>{
    return config
}, async (error)=>{
    const originalResponse = error.config
    if(error.response.status === 401 && error.config && !originalResponse._isRetry){
        originalResponse._isRetry = true
        try{
            const response = await axios.get(`${SERVER_HOST}/auth/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            return $api.request(originalResponse)
        }catch (e){
            console.log('NO AUTH USER!!')
        }
    }
    throw error
})


export default $api