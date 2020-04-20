<template>
 
  <div class="sales-month">
    <OptionBox/>
    <DataTable :data="data" />
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
      data:{
        thead:[
          {label:'날짜',value:'date'},
          {label:'구분',value:'cate'},
          {label:'사용건수',value:'useNumber'},
          {label:'매출금액',value:'price'},
        ],
        tbody:[
          {
            date:'2020년 01월',
            cate:'현금',
            useNumber:354,
            price:1344000,
          },
          {
            date:'2020년 02월',
            cate:'현금',
            useNumber:384,
            price:1248000,
          },
          {
            date:'2020년 03월',
            cate:'현금',
            useNumber:354,
            price:1344000,
          },
          {
            date:'2020년 04월',
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