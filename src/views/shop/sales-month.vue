<template>
 
  <div class="sales-month">
    <OptionBox/>
    <DataTable v-bind:data="tableData" />
  </div>

</template>

<script>

import Article from '@/components/articleLayout.vue';
import DataTable from '@/components/data-table.vue';
import OptionBox from '@/components/optionBox.vue';

export default {
  components:{
    Article, DataTable, OptionBox
  },

  data(){
    return{
      tableData:{
        thead:['날짜','결제구분','사용건수','매출금액'],
        tbody:[
          {
            data:'2020년 01월',
            category:'현금',
            useNumber:354,
            salesNumber:1344000,
          },
          {
            data:'2020년 02월',
            category:'현금',
            useNumber:384,
            salesNumber:1248000,
          },
          {
            data:'2020년 03월',
            category:'현금',
            useNumber:354,
            salesNumber:1344000,
          },
          {
            data:'2020년 04월',
            category:'현금',
            useNumber:384,
            salesNumber:1248000,
          }
        ]
      }
    }
  },
  
}
</script>