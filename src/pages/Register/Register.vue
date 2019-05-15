<!-- 注册 -->
<template>
  <div id="register">
    <h4>用户名</h4>
    <input v-model="username" placeholder="用户名">

    <h4>密码</h4>
    <input v-model="password" type="password" placeholder="密码" @keyup.enter="Register">

    <el-button style="margin-top: 30px;" size="medium"  @click="Register">立即注册</el-button>
    <p class="notice">已有账号？<router-link to="/login">立即登录</router-link></p>
  </div>
</template>

<script src="./Register.js"></script>

<style src="../Login/Login.css" ></style>
