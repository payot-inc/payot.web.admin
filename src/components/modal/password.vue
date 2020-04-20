<template>
  <v-dialog
    v-model="state"
    width="420px"
  >
    <div class="password-modal">
      <div class="modalTitle">
        <h4><span>비밀번호</span> 변경</h4>
        <p>새로 사용할 비밀번호를 입력해주세요</p>
      </div>

      
      <div class="modalCont">
        <dl>
          <dt>비밀번호 입력</dt>
          <dd>
            <input type="text">
          </dd>
        </dl>
        <dl>
          <dt>새 비밀번호 입력</dt>
          <dd><input type="text"></dd>
        </dl>
        <dl>
          <dt>새 비밀번호 확인</dt>
          <dd><input type="text"></dd>
        </dl>
      </div>

      <div class="btns">
        <v-btn outlined @click="open(false)">
          취소
        </v-btn>
        <v-btn outlined class="ok" @click="open(false)">
          변경완료
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      state:false,
      number:0,
    }
  },
  methods:{
    open(value){
      this.state = value;
    }
  }
}
</script>

<style lang="scss" scoped>

.password-modal{
  background:#fff;
  padding:20px;

  .modalTitle{
    border-bottom:1px dashed #e2e2e2;
    margin-bottom:20px;

    h4{
      font-size:18px;font-family:'SCDream';font-weight:500;
      span{color:#EE2073;}
    }
    p{margin-top:5px;font-size:14px;color:#888}
  }

  .modalCont{
    dl{
      display:flex;
      align-items: center;
      justify-content: space-between;
      min-height:50px;
      border-bottom:1px solid #e2e2e2;


      dt{
        font-size:14px;
        font-weight:500;
        font-family:'SCDream'
      }

      dd{
        padding:10px 0;
        input[type=text]{
          border:1px solid #c2c2c2;
          height:32px;
          border-radius:5px;
          padding:0 10px;
        }
      }
    }

    dl:last-child{border-bottom:0px;}
  }

  .btns{
    text-align:right;
    margin-top:30px;

    .v-btn{
      margin-left:10px;
      border:1px solid #c2c2c2;
      letter-spacing: 0px;
    }
    .v-btn.ok{
      border:1px solid #EE2073;
      color:#EE2073
    }
  }
}

</style>