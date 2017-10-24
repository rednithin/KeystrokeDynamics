import axios from 'axios'

export default {
  getWall () {
    return axios.get('api/user/getwall')
  },
  createPost (post) {
    return axios.post('api/user/createpost', post)
  },
  getUsers (username) {
    return axios.post('api/user/getusers', username)
  }
}
