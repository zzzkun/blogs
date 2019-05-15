import auth from '@/api/auth'

const state={
    user:null,
    isLogin:false
}

const getters ={
    user:state => state.user,
    isLogin:state=> state.isLogin
}

const mutations = {
    setUser(state,payload){
        state.user=payload.user
     },
     setLogin(state,payload){
        state.isLogin=payload.isLogin
     }
}

 const actions ={
    // login({commit},{username, password}){
    //     return auth.HTTPlogin({username, password})
    //     .then(res=>{
    //         commit('setUser',{user:res.data})
    //         commit('setLogin',{isLogin:true})
    //     })
    // },

    // register({commit},{username, password}){
    //     return  auth.HTTPregister({username, password})
    //     .then(res=>{
    //         commit('setUser',{user:res.data})
    //         commit('setLogin',{isLogin:true})
    //     })
    // },
    // logout({ commit }){
    //     return auth.HTTPlogout()
    //     .then(res=>{
    //         commit('setUser',{user: null})
    //         commit('setLogin',{isLogin: false})
    //     })
    // },
    // checkLogin({ commit, state}){
    //     if (state.isLogin) {
    //         return  true
    //     }else(
    //         auth.HTTPgetInfo()
    //        .then(res=>{
    //            commit('setLogin',{isLogin: false})
    //        })
    //     )
    //     if (!res.isLogin) {
    //         return false
    //     }else(
    //         auth.HTTPgetInfo()
    //         .then(res=>{
    //             commit('setUser', { user: res.data })
    //         })
    //     )
    //     return true
    //     }
    login({ commit }, { username, password }) {
        return auth.HTTPlogin({ username, password })
          .then(res => {
            commit('setUser', { user: res.data })
            commit('setLogin', { isLogin: true })
          })
      },
    
      async register({ commit }, { username, password }) {
        let res = await auth.HTTPregister({ username, password })
        commit('setUser', { user: res.data })
        commit('setLogin', { isLogin: true })
        return res.data
      },
    
      async logout({ commit }) {
        await auth.HTTPlogout()
        commit('setUser', { user: null })
        commit('setLogin', { isLogin: false })
      },
    async checkLogin({ commit, state}) {
        if(state.isLogin) return true
        let res = await auth.HTTPgetInfo()
        commit('setLogin', { isLogin: res.isLogin })
        if(!res.isLogin) return false
        commit('setUser', { user: res.data })
        return true
      }
 }


export default{
    state,
    getters,
    mutations,
    actions
}