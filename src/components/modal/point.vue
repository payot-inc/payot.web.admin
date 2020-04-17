<template>
  <v-dialog
    v-model="state"
    width="420px"
  >
    <div class="pointModal">
      <div class="modalTitle">
        <h4><span>010-8525-4561 님,</span> 포인트 지급/차감</h4>
        <p>아래서 원하시는 메뉴를 선택 후 진행해주세요</p>
      </div>

      <div class="selectBtns">
        <v-radio-group v-model="radios" :mandatory="true" row>
          <div class="radioSelect">
            <v-radio label="포인트지급" value="radio-1" color="#EE2073"></v-radio>
          </div>
          <div class="radioSelect">
            <v-radio label="포인트차감" value="radio-2" color="#EE2073"></v-radio>
          </div>
        </v-radio-group>
      </div>

      <div class="priceView">
        <div class="inputBox">
          <label>금액입력</label>
          <input type="text" placeholder="금액을 입력해주세요" v-model="number">
        </div>
        <v-btn outlined @click="number += 500">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn outlined @click="number > 0 ? number -= 500 : 0">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </div>
      
      <textarea placeholder="사유를 입력해주세요">

      </textarea>
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

  .selectBtns{
    .v-radio{
      font-family:'SCDream';
      font-weight:500;
    }
  }

  .priceView{
    display:flex;
    height:40px;
    margin-bottom:20px;

    .inputBox{
      position:relative;
      width:100%;

      label{position:absolute;left:10px;bottom:10px;font-size:12px;color:#888}
      input{height:40px;border:1px solid #c2c2c2;width:100%;margin-right:10px;padding:0 10px;text-align:right;border-radius:5px;color:#EE2073}
    }
    
    .v-icon{font-size:18px;}
    .v-btn{margin-left:5px;height:40px;min-width:40px;width:40px;border:1px solid #c2c2c2;}
  }

  textarea{
    margin-bottom:20px;
    width:100%;
    min-width:100%;
    border:1px solid #c2c2c2;
    height:120px;
    min-height:120px;
    max-height:300px;
    padding:10px;
    border-radius:5px;
    font-size:12px;
  }

  .btns{
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