import axios from 'axios'

export default {
  userLogin (credentials) {
    return axios.post('api/user/login', credentials)
  },
  adminLogin (credentials) {
    return axios.post('api/admin/login', credentials)
  },
  adminRegister (admin) {
    return axios.post('api/admin/register', admin)
  },
  userRegister (user) {
    return axios.post('api/user/register', user)
  }
}
