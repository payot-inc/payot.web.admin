<template>
  <div class="shop-info">
    <dl class="service">
      <dt>
        이용중인 서비스
      </dt>
      <dd>
        <span>
          <input type="checkbox" checked>
          <label>매장관리시스템</label>
        </span>
        <span>
          <input type="checkbox" checked>
          <label>키오스크</label>
        </span>
        <span>
          <input type="checkbox">
          <label>포인플러스</label>
        </span>
        <span>
          <input type="checkbox">
          <label>데일리세탁</label>
        </span>
      </dd>
    </dl>
    <dl>
      <dt>매장명</dt>
      <dd>
        <span>
          <input type="text" value="워시쿱 돈암점">
        </span>
      </dd>
    </dl>
    <dl>
      <dt>연락처</dt>
      <dd>
        <span>
          <input type="text" value="010-0000-0000">
        </span>
      </dd>
    </dl>
    <dl class="address">
      <dt>매장주소</dt>
      <dd>
        <span>
          <input type="text" value="부산 금정구 부산대학로 63번길 2">
        </span>
        <span>
          <v-btn outlined @click="$refs.daumPost.addressOpen(true)">검색</v-btn>
        </span>
      </dd>
    </dl>
    <dl class="address2">
      <dt>상세주소</dt>
      <dd>
        <span>
          <input type="text" value="과학기술연구동 201호">
        </span>
      </dd>
    </dl>
    <dl>
      <dt>사업자번호</dt>
      <dd>
        <span>
          <input type="text" value="599-81-00659">
        </span>
      </dd>
    </dl>
    <dl class="bank">
      <dt>계좌정보</dt>
      <dd>
        <span class="bank-name">
          <input type="text" value="우리은행">
        </span>
        <span class="bank-number">
          <input type="text" value="1002-537-353918">
        </span>
      </dd>
    </dl>
    <dl>
      <dt>관리자 아이디</dt>
      <dd>
        <span>
          <input type="text" value="fermintz">
        </span>
        <span>
          <v-btn outlined>중복체크</v-btn>
        </span>
      </dd>
    </dl>
    <dl>
      <dt>관리자 비밀번호</dt>
      <dd>
        <span>
          <input type="text" value="123456789">
        </span>
      </dd>
    </dl>
    <DaumPost ref="daumPost" />
  </div>
</template>

<script>
import DaumPost from '@/components/modal/Address.vue';

export default {
  components:{
    DaumPost
  }
}
</script>

<style lang="scss" scoped>
.shop-info{
  dl{
    display:flex;
    align-items: center;
    border-bottom:1px solid #e2e2e2;
    padding:10px 0;

    dt{
      width:150px;
      font-size:13px;
      font-family:'SCDream';
      border-right:1px solid #e2e2e2;
    }
    dd{
      flex:1;
      display:flex;
      align-content: center;
      justify-content: flex-start;
      padding:0 20px;

      span{
        margin-right:10px;
        display:flex;
        align-items: center;
        justify-content: flex-start;

        input[type=text]{
          border:1px solid #e2e2e2;
          height:35px;
          padding:0 5px;
          min-width:300px;
        }
        
        input[type=checkbox]{
          margin-right:5px;
          width:15px;height:15px;
          vertical-align: middle;
        }

        .v-btn{
          height:35px;
          border:1px solid #494949;
        }
      }

      span:last-child{margin-right:0px;}
    }
  }
  dl:last-child{
    border-bottom:0px;
  }

  dl.service{
    span{
      margin-right:30px;
    }
  }

  dl.address{ 
    dd{
      span{
        width:100%;
        input[type=text]{width:100%;}
      }
    }
    
    
  }

  dl.address2{
    dd{
      span{
        width:100%;
        input[type=text]{width:100%;}
      }
    }
  }

  dl.bank{
    dd{
      span.bank-name{
        input[type=text]{min-width:150px;}
      }
    }
  }
}
</style>