<template>

  <div class="home">
    <div class="total-row">
      <v-row>
        <v-col cols="12" xl="2" lg="4" md="4" sm="6"  v-for="(item, index) in totalSales" :key="index">
          <dl :class="'total-item-'+index">
            <dt>{{item.name}}</dt>
            <dd>
              <span class="number">
                <label>총 건수</label>
                <strong>414 건</strong>
              </span>
              <span class="price">
                <label>총 결제금액</label>
                <strong>1,454,000 원</strong>
              </span>
            </dd>
          </dl>
        </v-col>
      </v-row>
    </div>
    <div class="calendar-outline">

    <Calendar>
      <template slot="mainCalendarDay">
        <dd class="homeDay">
          <span>
            <label>장비현금</label>
            <strong>100,300 원</strong>
          </span>
          <span>
            <label>키오스크(현금)</label>
            <strong>34,000 원</strong>
          </span>
          <span>
            <label>키오스크(카드)</label>
            <strong>78,000 원</strong>
          </span>
          <span>
            <label>포인플러스</label>
            <strong>6,300 원</strong>
          </span>
          <span>
            <label>데일리세탁</label>
            <strong>65,000 원</strong>
          </span>
        </dd>
      </template>
    </Calendar>

    </div>

    <AlertModal />
    <MessageModal />
  </div>

</template>

<script>
import Calendar from '@/components/calendar.vue'
import AlertModal from '@/components/modal/alert.vue'
import MessageModal from '@/components/modal/message.vue';
 
export default {
  components:{
    Calendar, AlertModal, MessageModal
  },
  data(){
    return{
      totalSales:[
        {
          name:'총 매출'
        },
        {
          name:'장비현금매출'
        },
        {
          name:'키오스크 충전(현금)'
        },
        {
          name:'키오스크 충전(카드)'
        },
        {
          name:'포인플러스'
        },
        {
          name:'데일리세탁'
        },

      ],
    }
  }
}
</script>

<style lang="scss" scoped>

.home{
  display:flex;
  flex:1;
  flex-direction: column;
  background:#f8f8f8;
  padding:20px;
  border:1px solid #e2e2e2;

  h4{font-size:16px;font-family:'SCDream';font-weight:500;}

  .calendar-outline{
    padding:20px;
    border:1px solid #e2e2e2;
    box-shadow: 0 0 20px rgba(0,0,0,0.05);
    background:#fff;
  }

  .total-row{
    display:flex;
    margin-bottom:20px;

    .total-item-0{
      border:1px solid #EE2073;
      dt{color:#EE2073}
      dd{
        span.price{color:#EE2073}
      }
    }
    
    dl{
      border:1px solid #e2e2e2;
      box-shadow: 0 0 20px rgba(0,0,0,0.05);
      padding:15px;
      background:#fff;
      
      dt{
        font-family:'SCDream';font-size:16px;
        margin-bottom:10px;
        border-bottom:1px solid #e2e2e2;
        padding-bottom:10px;
      }

      dd{
        span{
          display:flex;
          justify-content: space-between;
          align-items: center;
          font-size:14px;
          height:26px;

          label{color:#888}

        }
      }
    }
  }
}



</style>