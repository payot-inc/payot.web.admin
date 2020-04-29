<template>
  <div id="header">
    <div class="top">
      <div class="logo">
        <a href="/"><img src="@/assets/img/logo_b.png"></a>
        <h2>페이오티 관리시스템</h2>
      </div>
      <div class="gnb">
        <v-btn text>홈페이지</v-btn>
        <v-btn text @click="$refs.password.open(true)">비밀번호 변경</v-btn>
        <v-btn text @click="$router.push('login')">로그아웃</v-btn>
      </div>
    </div>

    <div class="navigation">

      <v-btn 
        v-for="item in nav"
        :class="{ active: $route.name === item.name }"
        :key="item.toString()"
        @click="tabChange(item.name, item.label, item.icon)"
        text
      >
        {{item.label}}
      </v-btn>

    </div>

    <Password ref="password"/>
  </div>
</template>

<script>

import Password from '@/components/modal/password.vue';

export default {
  components:{
    Password
  },
  data() {
    return{
      nav:[
        {
          routeName: 'Shop',
          name: 'shop',
          label:'매장서비스',
          icon:'home-city-outline'
        },
      ],
      active: true,

    }
  },
  mounted() {
    this.$emit('route-change', 'shop');
  },
  
  methods:{
     tabChange(name, label, icon) {
      this.$emit('route-change', name);
      this.$emit('pageLabel', label);
      this.$emit('pageIcon', icon);
      this.$router.push({name:name})
    }
  }
}
</script>

<style lang="scss" scoped>

#header{
  position:relative;
  z-index:99;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);

  .top{
    display:flex;
    justify-content: space-between;
    align-items:center;
    height:50px;
    background:#fff;
    padding:0 20px;
 
    .logo{
      display:flex;
      align-items: center;
      
      a{display:inline-block;margin-right:15px;height:30px;}
      img{height:30px;}
      h2{font-size:18px;color:#494949;font-weight:500;font-family:'SCDream'}
    }

    .gnb{
      .v-btn{
        color:#292929;
        background:#e2e2e2;
        margin-left:5px;
        height:20px;
        padding:0 10px;
        font-size:13px;
        font-family:'SCDream';
        font-weight:400;
        letter-spacing:-0.4px;
      }
      .v-btn:hover{
        color:#3D3782
      }
    }
  }

  .navigation{
    display:flex;
    align-items: center;
    justify-content: flex-start;
    background:#3D3782;;
    
    .v-btn{
      width:200px;
      height:40px;
      border-radius:0px;
     
      color:#fff;
      font-family:'SCDream';
      font-weight:400;
      font-size:14px;
      letter-spacing:-0.4px;
    }

    .v-btn.active{
      background:#D93E97;
      color:#fff;
      
    }
  }
}

</style>

