<template>

  <div class="sales-days">
    <div class="kiosk-total-sales">
      <dl class="total">
        <dt>총 충전/사용</dt>
        <dd>
          <span>
            <label>충전포인트</label>
            <strong>745,000P</strong>
          </span>
          <span>
            <label>사용포인트</label>
            <strong>1,304,000P</strong>
          </span>
        </dd>
      </dl>
      <dl>
        <dt>최대 충전</dt>
        <dd>
          <span>
            <label>건수</label>
            <strong>15건</strong>
          </span>
          <span>
            <label>충전포인트</label>
            <strong>234,000P</strong>
          </span>
          <span class="date">
            2020-04-04
          </span>
        </dd>
      </dl>
      <dl>
        <dt>최소 충전</dt>
        <dd>
          <span>
            <label>건수</label>
            <strong>4건</strong>
          </span>
          <span>
            <label>충전포인트</label>
            <strong>25,000P</strong>
          </span>
          <span class="date">
            2020-04-12
          </span>
        </dd>
      </dl>
      <dl>
        <dt>최대 사용</dt>
         <dd>
          <span>
            <label>건수</label>
            <strong>32건</strong>
          </span>
          <span>
            <label>충전포인트</label>
            <strong>455,000P</strong>
          </span>
          <span class="date">
            2020-04-24
          </span>
        </dd>
      </dl>
      <dl>
        <dt>최소 사용</dt>
        <dd>
          <span>
            <label>건수</label>
            <strong>3건</strong>
          </span>
          <span>
            <label>충전포인트</label>
            <strong>55,000P</strong>
          </span>
          <span class="date">
            2020-04-30
          </span>
        </dd>
      </dl>
    </div>

    <Calendar>
      <template slot="kiosk-sales">
        <dd>
          <span>
            <label>충전(카드)</label>
            <strong>
              75,000
            </strong>
          </span>
          <span>
            <label>충전(현금)</label>
            <strong>
              48,000
            </strong>
          </span>
          
          <span class="pointer">
            <label>사용</label>
            <strong>
              134,000P 
            </strong>
          </span>
        </dd>
      </template>
    </Calendar>
  </div>

</template>

<script>

import Article from '@/components/articleLayout.vue';
import DataTable from '@/components/data-table.vue';
import Calendar from '@/components/calendar.vue';


export default {
  components:{
    Article, Calendar
},

  
  
}
</script>


<style lang="scss" scoped>

.kiosk-total-sales{
  display:flex;
  justify-content: space-around;
  border:1px solid #e2e2e2;
  margin-bottom:40px;
  border-top:1px solid #292929;

  dl{
    flex:1;
    text-align:center;
    border-right:1px solid #e2e2e2;

    dt{
      background:#f2f2f2;
      height:40px;
      display:flex;
      align-items: center;
      justify-content: center;
    }
    dd{
      display:flex;
      flex-direction: column;
      justify-content: center;
      padding:10px;
      min-height:130px;

      span{
        display:flex;
        justify-content:space-between;
        align-items: center;
        font-size:14px;
        height:30px;

        label{color:#888}
      }

      span.date{
        display:flex;
        align-items: center;
        justify-content: center;
        margin-top:10px;
        padding-top:10px;
        border-top:1px dashed #e2e2e2;
        color:#888
      }
    }
  }
  dl.total{
    
    dt{background:#FFF3F3;}
    dd{
      span{
        strong{color:#EE2073}
      }
    }
  }


  dl:last-child{border-right:0px;}
}

</style>