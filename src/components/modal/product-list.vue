<template>
  <v-dialog
    v-model="state"
    width="900px"
  >
    <div class="product-detail">
      <div class="modalTitle">
        <h4><span>인버터 세탁기 1번</span> 상품관리</h4>
        <v-btn outlined @click="$refs.productAdd.productAdd(true)">
          <v-icon>mdi-plus</v-icon>
          <span>상품추가</span>
        </v-btn>
      </div>
      <div class="modalCont">
        <div class="no-data">
          등록된 자료가 없습니다
        </div>
        <ul class="product-list">
          <li v-for="item in 10" :key="item">
            <v-btn outlined>
              <v-icon>mdi-menu</v-icon>
            </v-btn>
            <dl class="name">
              <dt>표준세탁</dt>
              <dd>일반적인 세탁방법입니다</dd>
            </dl>
            <dl class="option">
              <dt>동작시간</dt>
              <dd>50분</dd>
            </dl>
            <dl class="option">
              <dt>상품가격</dt>
              <dd>5,000원</dd>
            </dl>
            <v-btn outlined>
              삭제
            </v-btn>
          </li>
        </ul>
      </div>
      <div class="btns">
        <v-btn outlined class="ok" @click="productList(false)">
          닫기
        </v-btn>
      </div>
    </div>

    <ProductAdd ref="productAdd"/>
  </v-dialog>
</template>

<script>
import ProductAdd from '@/components/modal/product-add.vue';

export default {
  components:{
    ProductAdd,
  },
  data(){
    return{
      state:false,
      number:0,
    }
  },
  methods:{
    productList(value){
      this.state = value;
    }
  }
}
</script>

<style lang="scss" scoped>

.product-detail{
  background:#fff;
  padding:0 30px;

  .modalTitle{
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-bottom:1px dashed #e2e2e2;
    height:60px;

    h4{
      font-size:18px;font-family:'SCDream';font-weight:500;
      span{color:#EE2073;}
    }
    p{margin-top:5px;font-size:14px;color:#888}

    .v-btn{
      height:32px;
      letter-spacing:0px;

      .v-icon{font-size:18px}
    }
  }

  .modalCont{
    padding:20px 0;

    .no-data{
      display:flex;
      align-items: center;
      justify-content: center;
      height:90px;
      background:#f2f2f2;
      font-size:16px;
      font-family:'SCDream';
      color:#888;
    }

    .product-list{
      li{
        border:1px solid #e2e2e2;
        display:flex;
        align-items: center;
        margin-bottom:10px;
        
        .v-btn{
          border-radius:0px;
          width:80px;
          height:80px;
          border:0px;
        }
        dl.name{
          flex:1;
          text-align:left;
          

          dt{font-size:16px;font-weight:500;font-family:'SCDream'}
          dd{margin-top:4px;color:#888}
        }
        dl.option{
          width:100px;text-align:center;
          border-right:1px solid #e2e2e2;
          dt{font-size:12px;color:#888}
          dd{margin-top:4px;font-size:14px;font-family:'SCDream';letter-spacing:0.4px;font-weight:500}
        }
        dl.option:last-child{border-right:0px;}
      }
    }
  }

 
  .btns{
    padding:15px 0;
    text-align:right;
    border-top:1px dashed #e2e2e2;

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