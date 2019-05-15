<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1>This Blog</h1>
      <p>共享博客</p>
      <div class="btns">
         <el-button ><router-link to="/login">立即登录</router-link></el-button>
         <el-button><router-link to="/register">注册账号</router-link></el-button> 
      </div> 
    </template>
    <template v-if="isLogin">
      <h1><router-link to="/">This Blog</router-link></h1>
      <router-link to="/create"> <i class="edit el-icon-plus"></i></router-link>
     
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        <ul>
          <li><router-link to="/my">我的</router-link></li>
          <li><a href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>
      <!-- <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">           -->
    </template>
  </header>
</template>

<script>
  import auth from '@/api/auth'
  window.auth = auth
  import {mapActions,mapGetters} from 'vuex' 
  export default {
    data() {
      return {
       
      }
    },
    computed:{
    ...mapGetters([
       'isLogin',
        'user'
    ])
    },
     created() {
      this.checkLogin()
    },
    methods:{
    ...mapActions([
      'checkLogin',
      'logout'
    ]),
    onLogout() {
        this.logout()
        window.location.reload();
      }
    }
  }
</script>


<style >

header.no-login {
  padding: 0 12% 30px 12%;
  display: grid;
  justify-items: center;
   background: #060606;
}
header.no-login h1 {
  color: #fff;
  font-size: 40px;
  margin: 60px 0 0 0;
  /* text-transform: uppercase; */
}
header.no-login p {
  margin: 15px 0 0 0;
  color: #fff;
}
header.no-login .btns {
  margin-top: 20px;
}
header.no-login button {
  margin: 20px 5px 0;
}


header.login {
  display: flex;
  align-items: center;
  background: #060606;
}
header.login h1 {
  margin: 0;
  padding: 0;
  font-size: 40px;
  /* text-transform: uppercase; */
  flex: 1;
}
header.login h1 a {
  color: #fff;
}
header.login .edit {
  color: #fff;
  font-size: 30px;
}
header.login .avatar {
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-left: 15px;
}
header.login .user {
  position: relative;
  z-index: 2;
}
header.login .user ul {
  display: none;
  position: absolute;
  right: 0;
  list-style: none;
  border: 1px solid #eaeaea;
  margin: 0;
  padding: 0;
  background-color: #fff;
}
header.login .user ul a {
  text-decoration: none;
  color: #333;
  font-size: 12px;
  display: block;
  padding: 5px 10px;
}
header.login .user ul a:hover {
  background-color: #eaeaea;
}
header.login .user:hover ul {
  display: block;
}

</style>