<template>
  <div id="header">
    <div class="top">
      <div class="logo">
        <a href="/"><img src="@/assets/img/logo_w.png"></a>
        <h2>무인매장 관리시스템</h2>
      </div>
      <div class="gnb">
        <v-btn text>홈페이지</v-btn>
        <v-btn text>비밀번호 변경</v-btn>
        <v-btn text>로그아웃</v-btn>
      </div>
    </div>

    <div class="navigation">

      <v-btn 
        v-for="item in nav" text
        :class="{ active: $route.name === item.name }"
        :key="item.toString()"
        @click="tabChange(item.name, item.label)">
        {{item.label}}
      </v-btn>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      nav:[
        {
          routeName: 'Shop',
          name: 'shop',
          label:'매장관리',
        },
        {
          routeName: 'Kiosk',
          name: 'kiosk',
          label:'키오스크',
        },
        {
          label:'포인플러스',
        },
        {
          label:'데일리세탁',
        },
      ],
      active: true,

    }
  },
  mounted() {
    this.$emit('route-change', 'shop');
  },
  methods:{
    navActive(index){
      this.nav[index].isActive = true;
    },
    tabChange(name, label) {
      this.$emit('route-change', name);
      this.$emit('pageLabel', label);
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
    background:#292929;
    padding:0 20px;
 
    .logo{
      display:flex;
      align-items: center;
      
      a{display:inline-block;margin-right:15px;height:30px;}
      img{height:30px;}
      h2{font-size:18px;color:#fff;font-weight:500;font-family:'SCDream'}
    }

    .gnb{

      .v-btn{
        color:#fff;
        background:#494949;
        margin-left:5px;
        height:20px;
        padding:0 10px;
        font-size:12px;
      }
    }
  }

  .navigation{
    display:flex;
    align-items: center;
    justify-content: flex-start;
    border-top:1.5px solid #D93E97;
    background:#fff;
    
    
    
    .v-btn{
      width:200px;
      height:40px;
      border-radius:0px;
      border-right:1px solid #e2e2e2;
      color:#fff;
      font-family:'SCDream';
      font-weight:400;
      font-size:14px;
      letter-spacing:-0.4px;
      color:#292929
    }

    .v-btn.active{
      background:#D93E97;
      color:#fff;
      
    }
  }
}

</style>

