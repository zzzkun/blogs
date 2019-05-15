<template>
  <div id="app">
     <Header id="header"></Header>    
    <main id="main">
      <router-view/>   
    </main>  
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  created(){
    console.log(this.$route.path);
  }
}
</script>

<style>

#app {
   display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header header header"
                       ".      main  ."
                       "footer footer footer";
}
#app #header {
  grid-area: header;
  padding-left: 12%;
  padding-right: 12%;
}
#app #main {
  grid-area: main;
}
#app #footer {
  grid-area: footer;
  padding-left: 12%;
  padding-right: 12%;
}




@media (max-width: 768px) {
  #app {
    grid-template-columns: 10px auto 10px;
  }
  #app #header,
  #app #footer {
    padding-left: 10px;
    padding-right: 10px;
  }
}
body {
  font: 14px/1.6 Arial,"Microsoft YaHei","黑体","宋体",sans-serif;
  color: #333;
  margin: 0;
}

html, body, #app {
  height: 100%;
}


a {
  text-decoration: none;
  color: #333;
}

.pagination {
  display: grid;
  justify-items: center;
  margin-bottom: 30px;
}


.el-button {
  color: rgb(0, 153, 0);
  border: 1px solid rgba(0, 153, 51, 0.6);
  background: #fff;
  border-radius: 4px;  
}

.el-button.el-button--medium{
  font-size: 13px;
  padding: 0 8px;
  font-weight: normal;
  line-height: 28px;
}




input {
  line-height: 40px;
  border: 1px solid #eaeaea;
  padding: 0 10px;
  border-radius: 4px;
  outline: none;
}
input:focus {
  border-color:rgba(0, 153, 51, 0.6);
}

.el-input.is-active .el-input__inner, .el-input__inner:focus, .el-textarea__inner:focus {
  border-color: rgba(0, 153, 51, 0.6);
}


</style>
