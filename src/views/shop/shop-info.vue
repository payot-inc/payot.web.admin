<template>

    <div class="shop-info">
      <dl class="user-name">
        <dt>
          담당자 성함
        </dt>
        <dd>
          <input type="text">
        </dd>
      </dl>

      <dl class="phone">
        <dt>
          담당자 연락처
        </dt>
        <dd>
          <span><input type="text" value="010"></span>
          <span>-</span>
          <span><input type="text"></span>
          <span>-</span>
          <span><input type="text"></span>          
        </dd>
      </dl>

      <dl class="address">
        <dt>
          매장주소
        </dt>
        <dd>
          <span><input type="text"><v-btn outlined>주소검색</v-btn></span>
          <span><input type="text" placeholder="상세주소 입력"></span>
        </dd>
      </dl>

      <dl class="bank">
        <dt>
          정산계좌 정보
        </dt>
        <dd>
          <span><label>은행명</label> <input type="text"></span>
          <span><label>계좌번호</label><input type="text"></span>
        </dd>
      </dl>

      <dl class="passBtn">
        <dt>
          비밀번호 변경
        </dt>
        <dd>
          <v-btn outlined @click="$refs.password.open(true)">비밀번호 변경</v-btn>
        </dd>
      </dl>
     

      <div class="shop-info-btns">
        <v-btn outlined>변경사항을 저장합니다</v-btn>
      </div>

      <Password ref="password"/>
    </div>

</template>

<script>

import Article from '@/components/articleLayout.vue';
import Password from '@/components/modal/password.vue';

export default {
  components:{
    Article, Password
  },
  data(){
    return{
      switch1:false,
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-info{
  dl{
    display:flex;
    align-items: center;
    border-bottom:1px solid #e2e2e2;
    min-height:70px;

    dt{
      width:150px;
      font-family:'SCDream';font-weight:500;
      font-size:14px;
      margin-right:20px;border-right:1px solid #e2e2e2;
    }
    dd{
      
      display:flex;
      align-items: center;
      flex:1;
      padding:10px 0px;

      span{
        display:flex;align-items: center;margin-right:20px;
        label{margin-right:10px;font-size:14px;color:#888}
      }
      input[type=text]{border:1px solid #c2c2c2;border-radius:5px;height:32px;padding:0 10px;}
    }
  }
  dl.phone{
    span{
      margin-right:10px;
      input[type=text]{width:100px;text-align: center;}
    }
  }

  dl.address{
    dd{
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      span{margin-bottom:10px;}
      span:last-child{margin-bottom:0px;}
      .v-btn{height:32px;margin-left:10px;}
      input[type=text]{width:500px;}
    }
  }

  dl.bank{
    span:last-child{
      input[type=text]{width:350px;}
    }
  }

  dl.passBtn{
    .v-btn{height:32px;}
  }


  .shop-info-btns{
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top:30px;
    
    .v-btn{
      border-radius:5px;
      border:0px;
      background:#292929;
      color:#fff;
    }
    
  }
}
</style>