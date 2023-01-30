
import axios from 'axios'
const URL = process.env.REACT_APP_URL_SERVER

export const publicRequest = axios.create({
    baseURL : URL
})