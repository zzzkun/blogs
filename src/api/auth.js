import request from '@/helpers/request'
//  认证相关
const URL ={
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth'
}

 export default {
     HTTPregister({username, password}){
         return request(URL.REGISTER,'POST',{ username, password })
     },
     HTTPlogin({username, password}) {
        return request(URL.LOGIN, 'POST', { username, password })
      },
    
      HTTPlogout() {
        return request(URL.LOGOUT)
      },
    
      HTTPgetInfo() {
        return request(URL.GET_INFO)
      }
 }