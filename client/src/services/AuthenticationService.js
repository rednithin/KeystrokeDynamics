import axios from 'axios'

export default {
  userLogin (credentials) {
    return axios.post('api/user/login', credentials)
  },
  adminLogin (credentials) {
    return axios.post('api/admin/login', credentials)
  },
  userRegister (credentials) {
    return axios.post('api/user/register', credentials)
  }
}
