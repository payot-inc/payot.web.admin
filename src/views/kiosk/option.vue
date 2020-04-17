<template>

    <div class="kiosk-option">
      <dl>
        <dt>
          <strong>메인 공지사항</strong>
          <span>키오스크 메인화면의 공지사항을 변경할 수 있습니다</span>
        </dt>
        <dd>
          <v-text-field placeholder="공지사항을 입력해주세요(50자 제한)" counter height="40px">
          </v-text-field>
        </dd>
      </dl>
      <dl>
        <dt>
          <strong>회원 비밀번호 사용유무</strong>
          <span>키오스크 사용시 회원들이 비밀번호 기능을 사용할 수 있도록 설정할 수 있습니다</span>
        </dt>
        <dd>
          <v-switch
            inset
            v-model="switch1"
            :label="switch1 ? '사용함' : '사용안함'"
          ></v-switch>
        </dd>
      </dl>
      <dl>
        <dt>
          <strong>키오스크 상품선택 방법</strong>
          <span>상품선택 방법을 다르게 선택할 수 있습니다</span>
        </dt>
        <dd>
          <v-radio-group v-model="radios" :mandatory="true" row>
            <div class="radioSelect">
              <span><img src="@/assets/img/kiosk-product-option1.png"></span>
              <v-radio label="금액을 사용하고싶은 만큼 직접 투입하는 방식" value="radio-1"></v-radio>
            </div>
            <div class="radioSelect">
              <span><img src="@/assets/img/kiosk-product-option2.png"></span>
              <v-radio label="금액을 미리 등록해두고 상품을 선택하는 방식" value="radio-2"></v-radio>
            </div>
          </v-radio-group>
        </dd>
      </dl>

      <div class="kioskOption-btns">
        <v-btn outlined>변경사항을 저장합니다</v-btn>
      </div>
    </div>

</template>

<script>

import Article from '@/components/articleLayout.vue';

export default {
  components:{
    Article,
  },
  data(){
    return{
      switch1:false,
    }
  }
}
</script>

<style lang="scss" scoped>
.kiosk-option{
  dl{
    margin-bottom:10px;
    border:1px solid #e2e2e2;
    padding:30px;

    dt{
      margin-bottom:20px;

      strong{display:block;font-family:'SCDream';font-weight:500;}
      span{display:block;color:#888;margin-top:5px;}
    }
  }

  .v-text-field{margin:0px;padding:0px;}

  .radioSelect{

    width:240px;
    margin-right:30px;

    span{
      display:block;
      margin-bottom:20px;
      padding:0px;

      img{width:100%;height:auto;border:1px solid #e2e2e2;}
    }
  }

  .kioskOption-btns{
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