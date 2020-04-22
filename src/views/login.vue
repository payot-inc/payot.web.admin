<template>
  <div class="login">
    <div class="login-box">
      <h2><img src="@/assets/img/logo_b.png"></h2>
      <div class="loginForm">
        <dl>
          <dt>아이디</dt>
          <dd><input type="text"></dd>
        </dl>
        <dl>
          <dt>비밀번호</dt>
          <dd><input type="password"></dd>
        </dl>
        <v-btn outlined @click="$router.push('/')">로그인</v-btn>
      </div>
      <div class="bottom">
        <v-btn text>홈페이지로 돌아가기</v-btn>
      </div>
    </div>
  </div> 
</template>

<script>
import Calendar from '@/components/calendar.vue'
import AlertModal from '@/components/modal/alert.vue'
import MessageModal from '@/components/modal/message.vue';
 
export default {
  components:{
    Calendar, AlertModal, MessageModal
  },
  data(){
    return{
      totalSales:[
        {
          name:'장비현금매출'
        },
        {
          name:'키오스크 충전금액'
        },
        {
          name:'포인플러스'
        },
        {
          name:'데일리세탁'
        },

      ],

      quickBtns:[
        {name:'금액원격투입'},
        {name:'원격투입내역'},
        {name:'장비현황'},
        {name:'키오스크 설정'},
        {name:'이벤트관리'},
        {name:'키오스크 제어'},
        {name:'회원포인트 변경'},
        {name:'SNS마케팅'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  flex:1;
  height:100%;
  background:#292929 url('../assets/img/background_black.png') no-repeat center;
  display:flex;
  justify-content: center;
  align-items: center;
  animation:bg-size 30s ease infinite;

  @keyframes bg-size {
    0%{background-size: 100%;}
    50%{background-size:120%;}
    100%{background-size: 100%;}
  }

  .login-box{background:#fff;
    margin:0 auto;
    width:360px;
    padding:20px;
    border-radius:10px;
    box-shadow:0 0 30px rgba(0,0,0,0.50);

    h2{
      text-align:center;
      img{height:70px;}
      padding:20px 0;
    }

    .loginForm{

      dl{
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom:10px;
        border:1px solid #e2e2e2;
        padding-left:10px;
        border-radius:5px;

        dt{
          width:80px;
          font-size:14px;
          font-family:'SCDream';
          border-right:1px solid #e2e2e2;
        }
        dd{
          flex:1;
          input{height:40px;border-radius:5px;width:100%;outline: none;font-size:14px;
          padding:0 10px;}
        }
      }

      .v-btn{
        width:100%;
        height:40px;
        background:#EE2073;
        color:#fff;
        border:0px;
        font-family:'SCDream'
      }
    }

    .bottom{
      margin-top:20px;
      text-align:center;

      .v-btn{
        font-size:13px;
        letter-spacing: 0;
        font-family:'SCDream';
        font-weight:400;
        color:#888
      }
    }
  }
}
</style>