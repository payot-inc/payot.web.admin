<template>
 
  <div class="poin-sales">
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
          {label:'사용장비',value:'machine'},
          {label:'투입금액',value:'price'},
        ],
        tbody:[
          {
            date:'2020-04-20 12:34:12',
            machine:'1번 세탁기',
            price:5500,
          },
        ],
      }
    }
  },
  
}
</script>