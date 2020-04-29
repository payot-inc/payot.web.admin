<template>
  <v-dialog
    v-model="state"
    width="540px"
  >
    <div class="eq-add">
      <div class="modalTitle">
        <h4><span>장비</span>등록</h4>
        <p>아래 정보를 입력해주세요</p>
      </div>

      <div class="modalCont">
        <dl>
          <dt>장비명</dt>
          <dd>
            <span>
              <input type="text">
            </span>
          </dd>
        </dl>
        <dl>
          <dt>장비제조사</dt>
          <dd>
            <span>
              <input type="text">
            </span>
          </dd>
        </dl>
        <dl>
          <dt>장비종류</dt>
          <dd>
            <span>
              <input type="text">
            </span>
          </dd>
        </dl>
        <dl>
          <dt>용량</dt>
          <dd>
            <span>
              <input type="text">
            </span>
          </dd>
        </dl>
        <dl>
          <dt>MAC주소</dt>
          <dd>
            <span>
              <input type="text">
            </span>
          </dd>
        </dl>
        <dl>
          <dt>QR코드</dt>
          <dd>
            <span>
              <input type="text">
            </span>
          </dd>
        </dl>
      </div>
      <div class="btns">
        <v-btn outlined @click="EqAddOpen(false)">
          취소
        </v-btn>
        <v-btn outlined class="ok" @click="EqAddOpen(false)">
          완료
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
    EqAddOpen(value){
      this.state = value;
    }
  }
}
</script>

<style lang="scss" scoped>

.eq-add{
  background:#fff;

  .modalTitle{
    display:flex;
    flex-direction: column;
    justify-content: center;
    border-bottom:1px dashed #e2e2e2;
    padding:0 15px;

    h4{
      font-size:18px;font-family:'SCDream';font-weight:500;
      span{color:#EE2073;}
    }
    p{margin-top:5px;font-size:14px;color:#888;margin-bottom:0px;}

    height:80px;
  }

  .modalCont{
    padding:15px;

    dl{
      margin-bottom:15px;
      dt{font-size:14px;margin-bottom:5px;font-family:'SCDream'}
      dd{
        textarea{height:80px;width:100%;max-width:100%;max-height:150px;border:1px solid #c2c2c2;border-radius:5px;padding:5px;font-size:14px;}
        input{border:1px solid #c2c2c2;width:100%;height:36px;border-radius:5px;padding:0 5px;font-size:14px;}

        
      }
    }
    .itemInfo{
      margin-top:-15px;
      dd{position:relative;}
      span{position:absolute;right:0px;line-height:36px;font-size:14px;color:#888;width:36px;border-left:1px solid #e2e2e2;text-align:center;}
      input{text-align:right;padding-right:41px;}
    }
    .option{
      display:flex;
      align-items: center;

      input{width:20px;height:20px;vertical-align: middle;}
      label{margin-left:10px;font-size:14px;font-family:'SCDream'}
    }
  }

 
  .btns{
    text-align:right;
    background:#f8f8f8;
    padding:15px;

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