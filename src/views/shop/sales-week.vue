<template>
  <div class="sales-week">
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
          {label:'요일', value:'weekName'},
          {label:'구분', value:'cate'},
          {label:'사용건수', value:'useNumber'},
          {label:'매출금액', value:'price'},
        ],
        tbody:[
          {
            weekName:'월요일',
            cate:'현금',
            useNumber:354,
            price:1344000,
          },
          {
            weekName:'화요일',
            cate:'현금',
            useNumber:384,
            price:1248000,
          },
          {
            weekName:'수요일',
            cate:'현금',
            useNumber:384,
            price:1248000,
          },
          {
            weekName:'목요일',
            cate:'현금',
            useNumber:354,
            price:1344000,
          },
          {
            weekName:'금요일',
            cate:'현금',
            useNumber:384,
            price:1248000,
          },
          {
            weekName:'토요일',
            cate:'현금',
            useNumber:384,
            price:1248000,
          },
          {
            weekName:'일요일',
            cate:'현금',
            useNumber:384,
            price:1248000,
          },
          
        ]
      }
    }
  },
  
}
</script>
