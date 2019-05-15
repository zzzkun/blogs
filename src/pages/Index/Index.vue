<template>
  <div id="index">
    <section class="blog-posts">
      <router-link class="item" v-for="(item, index) in blogs" :key="index" :to="`/detail/${item.id}`">
        <figure class="avatar">
           <router-link :to="{path:`/user/${item.user&&item.user.id}`}">
          <img :src="item.user && item.user.avatar" :alt="item.user && item.user.username">
          </router-link>
          <figcaption><router-link :to="{path:`/user/${item.user&&item.user.id}`}">
            {{ item.user && item.user.username}}
             </router-link>
            </figcaption> 
        </figure>
        <h3>{{item.title}} <span> {{friendlyDate(item.createdAt)}}</span></h3> 
        <p>{{item.description}}</p>
      </router-link>
    </section>
    <section class="pagination">
       <el-pagination 
    layout="prev, pager, next"
    :total="total"
    :current-page="currentPage4"
    @current-change="handleCurrentChange">
  </el-pagination>
    </section>
  </div>
</template>

<script src="./Index.js"></script>

<style scoped  src="./Index.css"></style>
