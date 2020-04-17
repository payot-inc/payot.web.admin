<template>
  <div class="member-list">
    <OptionBox/>
    <DataTable v-bind:data="tableData" paging="true" button="true"/>
  </div>
</template>

<script>

import DataTable from '@/components/data-table.vue';
import OptionBox from '@/components/optionBox.vue';

export default {
  components:{
    DataTable, OptionBox
  },

  data(){
    return{
      tableData:{
        thead:['회원번호','가입날짜','(+) 총 충전금액','(-) 사용한 포인트','(+) 받은 포인트','(=) 최종 보유포인트','포인트 지급/차감'],
        tbody:[
          {
            memberNumber:'010-8525-4561',
            date:'2020-02-14',
            totalPoint:8500,
            usePoint:3400,
            bonusPoint:500,
            lastPoint:5600,
          },
          {
            memberNumber:'010-8525-4561',
            date:'2020-02-14',
            totalPoint:8500,
            usePoint:3400,
            bonusPoint:500,
            lastPoint:5600,
          },
        ]
      }
    }
  },
  
}
</script>
