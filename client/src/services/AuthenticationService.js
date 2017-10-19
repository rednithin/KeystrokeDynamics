import axios from 'axios'

export default {
  login (credentials) {
    return axios.post('api/login', credentials)
  },
  register (credentials) {
    return axios.post('api/register', credentials)
  }
}
