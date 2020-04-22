<template>

  <div class="sales-days">
    <TotalSales />

    <Calendar>
      <template slot="total">
        <span>
          <label>총 결제건수</label>
          <strong>134 건</strong>
        </span>
        <span>
          <label>총 결제금액</label>
          <strong>1,850,300 원</strong>
        </span>
      </template>
      <template slot="dayCell">
        <dd>
          <span>
            <label>결제건수</label>
            <strong>
              21건
            </strong>
          </span>
          <span class="pointer">
            <label>결제금액</label>
            <strong>
              134000
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
import TotalSales from '@/components/total-sales.vue';

export default {
  components:{
    Article, Calendar, TotalSales
  },

  
  
}
</script>