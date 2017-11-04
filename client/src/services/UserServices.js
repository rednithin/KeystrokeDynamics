import axios from 'axios'

export default {
  getWall () {
    return axios.get('api/user/getwall')
  },
  createPost (post) {
    return axios.post('api/user/createpost', post)
  },
  getUsers (user) {
    return axios.post('api/user/getusers', user)
  },
  deleteUser (user) {
    return axios.post('api/user/deleteuser', user)
  },
  followUser (obj) {
    return axios.post('api/user/followuser', obj)
  },
  unfollowUser (obj) {
    return axios.post('api/user/unfollowuser', obj)
  },
  getFollowing (obj) {
    console.log('LOLOL')
    return axios.post('api/user/getfollowing', obj)
  },
  reportUser (obj) {
    return axios.post('api/user/reportuser', obj)
  },
  getReports (obj) {
    return axios.post('api/user/getreports', obj)
  },
  getStats () {
    return axios.get('api/user/getstats')
  },
  getFollowingWall (obj) {
    return axios.post('api/user/getfollowingwall', obj)
  }
}
