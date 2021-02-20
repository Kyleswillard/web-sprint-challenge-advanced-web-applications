import axios from 'axios'

const axioWithAuth = () => {
 const token = localStorage.getItem('token')

 return axios.create({
   baseURL: 'http//localhost:5000',
   headers:{
    authorization: token
 }})
}

export default axioWithAuth;