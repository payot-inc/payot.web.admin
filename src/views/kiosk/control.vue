<template>
  <div class="kiosk-control">
    <v-row>
      <v-col cols="3">
        <dl class="control-item">
          <dt>
            <div class="icon">
              <v-icon>mdi-play</v-icon>
            </div>
            <div class="name">
              <strong>키오스크 작동</strong>
              <span>키오스크의 판매를 재개합니다</span>
            </div>
          </dt>
          <dd>
            <v-btn outlined>실행하기</v-btn>
          </dd>
        </dl>
      </v-col>
      <v-col cols="3">
        <dl class="control-item">
          <dt>
            <div class="icon">
              <v-icon>mdi-stop</v-icon>
            </div>
            <div class="name">
              <strong>키오스크 정지</strong>
              <span>키오스크의 판매를 중지합니다</span>
            </div>
          </dt>
          <dd>
            <v-btn outlined>실행하기</v-btn>
          </dd>
        </dl>
      </v-col>
      <v-col cols="3">
        <dl class="control-item">
          <dt>
            <div class="icon">
              <v-icon>mdi-monitor</v-icon>
            </div>
            <div class="name">
              <strong>키오스크 프로그램 재실행</strong>
              <span>키오스크 프로그램을 재실행 합니다</span>
            </div>
          </dt>
          <dd>
            <v-btn outlined>실행하기</v-btn>
          </dd>
        </dl>
      </v-col>
      <v-col cols="3">
        <dl class="control-item">
          <dt>
            <div class="icon">
              <v-icon>mdi-lock-reset</v-icon>
            </div>
            <div class="name">
              <strong>키오스크 재부팅</strong>
              <span>키오스크의 전원을 완전히 종료 후 다시 켜집니다</span>
            </div>
          </dt>
          <dd>
            <v-btn outlined>실행하기</v-btn>
          </dd>
        </dl>
      </v-col>
      
    </v-row>
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
      eqList:1
    }
  }
}
</script>

<style lang="scss" scoped>

.kiosk-control{
  .control-item{
    border-radius:5px;
    overflow:hidden;
    border:1px solid #c2c2c2;

    dt{
      display:flex;
      align-items: center;
      border-radius:5px 5px 0 0;
      border-bottom:0px;
      min-height:100px;
      padding:15px;

      .icon{
        display:flex;
        align-items: center;
        justify-content: center;
        width:50px;
        height:50px;
        background:#f2f2f2;
        border-radius:50%;
        margin-right:15px;
      }
      .name{
        flex:1;
        
        strong{display:block;font-size:16px;font-family:'SCDream';font-weight:500}
        span{display:block;font-size:14px;color:#888;margin-top:4px;}
      }
    }
    dd{
      padding:15px 10px;
      border-top:1px dashed #c2c2c2;
      background:#f8f8f8;
      .v-btn{
        border:0px;
        width:100%;
        border-top:1px solid #e2e2e2;
        background:#292929;
        color:#fff;
        border-radius:5px;
        height:45px;
        font-size:14px;font-family:'SCDream';font-weight:400;
        }
    }
  }
}

</style>