<template>
  <div class="sales-times">
    <OptionBox/>
    <DataTable :data="data">

    </DataTable>
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
      data:{
        thead:[
          {label:'시간', value:'time'},
          {label:'구분', value:'cate'},
          {label:'사용건수', value:'useNumber'},
          {label:'매출금액', value:'price'},
        ],
        tbody:[
          {
            time:'01:00',
            cate:'현금',
            useNumber:354,
            price:1344000,
          },
          {
            time:'02:00',
            cate:'현금',
            useNumber:384,
            price:1248000,
          }
        ]
      }
    }
  },
  
}
</script>
