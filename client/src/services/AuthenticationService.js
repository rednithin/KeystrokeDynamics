import axios from 'axios'

export default {
  login () {
    return axios.get('auth/linkedin')
  },
  logout () {
    return axios.get('api/logout')
  },
  getUser () {
    return axios.get('api/current_user')
  }
}
