<template>
 
  <div class="sales-month">
    <OptionBox/>
    <DataTable :data="data" paging="true"/>
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
          {label:'사용장비',value:'machine'},
          {label:'투입금액',value:'price'},
        ],
        tbody:[
          {
            date:'2020-04-20 15:34:12',
            machine:'1번 세탁기',
            price:5500,
          },
          {
            date:'2020-04-20 12:34:12',
            machine:'2번 세탁기',
            price:4500,
          },
          {
            date:'2020-04-20 08:34:12',
            machine:'1번 세탁기',
            price:5500,
          },
          {
            date:'2020-04-19 18:34:12',
            machine:'4번 세탁기',
            price:6500,
          },
          {
            date:'2020-04-29 16:34:12',
            machine:'2번 세탁기',
            price:5500,
          },
          {
            date:'2020-04-19 13:34:12',
            machine:'1번 세탁기',
            price:5500,
          },
          {
            date:'2020-04-19 12:34:12',
            machine:'4번 세탁기',
            price:7500,
          },
        ],
      }
    }
  },
  
}
</script>