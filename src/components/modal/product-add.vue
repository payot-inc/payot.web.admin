<template>
  <v-dialog
    v-model="state"
    width="540px"
  >
    <div class="pointModal">
      <div class="modalTitle">
        <h4><span>1번 세탁기</span> 상품추가</h4>
        <p>아래 정보를 입력해주세요</p>
      </div>

      <div class="modalCont">
        
        <dl>
          <dt>상품명</dt>
          <dd><input type="text" placeholder="상품명을 입력해주세요"></dd>
        </dl>
        <dl>
          <dt>상품설명</dt>
          <dd>
            <textarea placeholder="상품에 대한 간략한 설명을 입력해주세요"></textarea>
          </dd>
        </dl>
        <div class="itemInfo">
          <v-row>
            <v-col>
              <dl>
                <dt>동작시간</dt>
                <dd>
                  <input type="text">
                  <span>분</span>
                </dd>
              </dl>
            </v-col>
            <v-col>
              <dl>
                <dt>상품가격</dt>
                <dd>
                  <input type="text">
                  <span>원</span>
                </dd>
              </dl>
            </v-col>
          </v-row>
        </div>      
      </div>
      <v-divider class="mt-5 mb-5"></v-divider>
      <div class="btns">
        <v-btn outlined @click="open(false)">
          취소
        </v-btn>
        <v-btn outlined class="ok" @click="open(false)">
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
      state:true,
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

.pointModal{
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
    margin-top:30px;
    text-align:right;

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