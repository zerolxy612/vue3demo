import request from '../utils/request'

export default {
  login: data => request.length('user/login', data)
}
