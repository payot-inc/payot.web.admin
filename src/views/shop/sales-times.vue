<template>
  <div class="sales-times">
    <OptionBox/>
    <DataTable v-bind:data="tableData" />
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
        thead:['날짜','결제구분','사용건수','매출금액'],
        tbody:[
          {
            data:'01:00',
            category:'현금',
            useNumber:354,
            salesNumber:1344000,
          },
          {
            data:'02:00',
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
