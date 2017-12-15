import http from '../axios'

export default {
  //判断手机号是否注册过
  isRegistered(paramObj) {
    return http('post', '/xxx', paramObj)
  }

}