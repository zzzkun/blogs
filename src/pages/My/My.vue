<!-- 我的 -->
<template>
  <div id="my">
    <section class="user-info">
      <img :src="user&&user.avatar" :alt="user&&user.username" class="avatar">
      <h3>{{user&&user.username}}</h3>
    </section>
    <section>
      <router-link class="item" v-for="(item, index) in blogs" :key="index" :to="`/detail/${item.id}`">
        <div class="date">
        <span class="day">{{splitDate(item.createdAt).date}}</span>
          <span class="month">{{splitDate(item.createdAt).month}}月</span>
          <span class="year">{{splitDate(item.createdAt).year}}</span>
        </div>
        <h3>{{item.title}}</h3>
        <p>{{item.description}}</p>
        <div class="actions">
          <router-link :to="`/edit/${item.id}`">编辑</router-link>
          <a href="#" @click.prevent="onDelete(item.id)">删除</a>
        </div>
      </router-link>


    </section>
     <section class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        @current-change="onPageChange">
      </el-pagination>
    </section>
  </div>
</template>

<script src="./My.js"></script>

<style src="./My.css" ></style>
