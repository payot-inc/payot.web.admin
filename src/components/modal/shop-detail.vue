<template>
  <v-dialog
    v-model="state"
    width="1300px"
  >
    <div class="pointModal">
      <div class="modalTitle">
        <h4><span>워시쿱 돈암점</span> 상세보기</h4>
      </div>
      <div class="modalCont">
        <div class="date-history">
          <dl>
            <dt>최초등록일</dt>
            <dd>2020-04-02</dd>
          </dl>
          <dl>
            <dt>최근수정일</dt>
            <dd>2020-04-20</dd>
          </dl>
        </div>
        <div class="total-info">
          <dl>
            <dt>등록된 장비수</dt>
            <dd>12개</dd>
          </dl>
          <dl>
            <dt>매장회원 수</dt>
            <dd>181명</dd>
          </dl>
          <dl>
            <dt>월 매출평균</dt>
            <dd>2,453,000원</dd>
          </dl>
          <dl>
            <dt>일 매출평균</dt>
            <dd>57,000원</dd>
          </dl>
        </div>

        <div class="tab-head">
          <span 
            v-ripple 
            :class="tabSelect === 'radio-'+index ? 'active' : ''"
            v-for="(item, index) in tabs" :key="index"
          >
            <input type="radio" v-model="tabSelect" :value="'radio-'+index">
            <label>{{item.name}}</label>
          </span>
        </div>
        <div class="tab-cont">
          <ShopInfo v-show="tabSelect === 'radio-0'"/>
          <ShopEqList v-show="tabSelect === 'radio-1'"/>
          <ShopOrderList v-show="tabSelect === 'radio-2'"/>
          <ShopKiosk v-show="tabSelect === 'radio-3'" />
          <ShopLog v-show="tabSelect === 'radio-4'"/>
          
        </div>
      </div>
      <div class="btns">
        <v-btn outlined class="ok" @click="DetailOpen(false)">
          수정완료 / 닫기
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import ShopInfo from '@/components/shop-info.vue';
import ShopEqList from '@/components/shop-eq-list.vue';
import ShopOrderList from '@/components/shop-order-list.vue';
import ShopLog from '@/components/shop-log.vue';
import ShopKiosk from '@/components/shop-kiosk.vue';

export default {
  components:{
    ShopInfo, ShopEqList, ShopOrderList ,ShopLog, ShopKiosk
  },
  data(){
    return{
      state:false,
      number:0,
      tabSelect:'radio-0',

      tabs:[
        {
          name:'매장정보',
        },
        {
          name:'장비관리',
        },
        {
          name:'장비투입현황',
        },
        {
          name:'키오스크 제어',
        },
        {
          name:'로그분석',
        },
        
      ]
    }
  },
  methods:{
    DetailOpen(value){
      this.state = value;
    }
  }
}
</script>

<style lang="scss" scoped>

.pointModal{
  background:#fff;
  padding:0 30px;

  .modalTitle{
    display:flex;
    align-items: center;
    border-bottom:1px dashed #e2e2e2;
    height:60px;
    margin-bottom:20px;

    h4{
      font-size:18px;font-family:'SCDream';font-weight:500;
      span{color:#EE2073;}
    }
    p{margin-top:5px;font-size:14px;color:#888}
  }

  .modalCont{

    .date-history{
      display:flex;
      margin-bottom:15px;
      dl{
        display:flex;
        margin-right:30px;
        dt{margin-right:10px;color:#888}
      }
    }

    .total-info{
      display:flex;
      align-items: center;
      margin-bottom:30px;
      border:1px solid #e2e2e2;
      
      dl{
        flex:1;
        text-align:center;
        border-right:1px solid #e2e2e2;

        dt{
          display:flex;
          justify-content: center;
          align-items: center;
          border-bottom:1px dashed #e2e2e2;
          height:40px;
          font-family:'SCDream';
          font-size:14px;
          background:#f8f8f8;
        }
        dd{
          display:flex;
          align-items: center;
          justify-content: center;
          min-height:60px;
          font-size:18px;
        }
      }
      dl:last-child{
        border-right:0px;
      }
    }

    .tab-head{
      
      display:flex;
      align-items: center;
      border-bottom:1px solid #EE2073;

      span{
        display:flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-bottom:0px;
        border-right:0px;
        background:#f2f2f2;
        border-right:1px solid #e2e2e2;

        input[type="radio"]{
          opacity:0;
          width:150px;
          height:40px;
          position:absolute;
        }
        label{
          display:flex;
          align-items: center;
          justify-content: center;
          width:150px;
          height:40px;
          font-size:14px;
          font-family:'SCDream'
        }
      }

      span.active{
        label{color:#fff;background: #EE2073;}
      }

      span:last-child{
        border-right:0px;
      }
    }

    .tab-cont{
      padding:20px 0;
      min-height:500px;
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