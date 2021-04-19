import axios from 'axios'

const instance = axios.create({
    baseURL: "https://medica-ecom.herokuapp.com/"
})

export default instance