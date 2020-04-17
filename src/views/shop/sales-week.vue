<template>
  <div class="sales-week">
    <OptionBox/>
    <DataTable v-bind:data="tableData" :paging="false"/>
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
        thead:['요일','결제구분','사용건수','매출금액'],
        tbody:[
          {
            data:'월요일',
            category:'현금',
            useNumber:354,
            salesNumber:1344000,
          },
          {
            data:'화요일',
            category:'현금',
            useNumber:384,
            salesNumber:1248000,
          },
          {
            data:'수요일',
            category:'현금',
            useNumber:384,
            salesNumber:1248000,
          },
          {
            data:'목요일',
            category:'현금',
            useNumber:354,
            salesNumber:1344000,
          },
          {
            data:'금요일',
            category:'현금',
            useNumber:384,
            salesNumber:1248000,
          },
          {
            data:'토요일',
            category:'현금',
            useNumber:384,
            salesNumber:1248000,
          },
          {
            data:'일요일',
            category:'현금',
            useNumber:384,
            salesNumber:1248000,
          },
          
        ]
      }
    }
  },
  
}
</script>
