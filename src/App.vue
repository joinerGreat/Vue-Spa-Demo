<template>
  <div id="app">
    <loginPage v-on:showState="changeState" v-if="loginShow" :fromParent="fromParent"></loginPage>
    <div class="web-content" v-if="webShow">
      <phHeader :headerUserName="headerUserName"></phHeader>
      <div class="ph-content">
        <router-view></router-view>
      </div>
      <phFooter></phFooter>
    </div>    
  </div>
</template>
<script>
import phHeader from './components/PH-Header.vue'
import phFooter from './components/PH-Footer.vue'
import loginPage from './components/login.vue'
export default {
  name: 'app',
  data () {
    return {
      loginShow: true,
      webShow: false,
      fromParent:'——来自父组件',
      headerUserName: '用户名'
    }
  },
  components:{
    phHeader,
    phFooter,
    loginPage
  },
  methods:{
    changeState:function(data){
      console.log(data)
      if(data[0] === false){
        console.log('执行')
        this.webShow = true;//显示web应用内容
        this.loginShow = false;//隐藏login组件
        this.headerUserName = data[1];//赋值headerUserName
      }
    }
  }
}
</script>

<style>
#app {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 1520px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: auto;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.web-content{
  width: 100%;
  height: 100%;
}
.ph-content{
  width: 100%;
  height: 85%;
}
.ph-header{
    width: 100%;
    height: 70px;
  }
  .ph-header .layui-nav{
    background-color: #40C5CC;
  }
  .ph-header .layui-nav a{
    color: #fff;
  }
  .ph-header .layui-nav .ph-title,.ph-header .layui-nav .ph-user{
    margin-left: 0!important;
  }
  .ph-header .layui-nav .ph-title a{
    padding-left: 0!important;
    font-size: 16px!important;
  }
  .ph-header .layui-nav .ph-user a{
    padding-left: 0!important;
  } 
  .ph-header .layui-nav .link-page-title:hover{
    background-color: #16979E;
  }
</style>
