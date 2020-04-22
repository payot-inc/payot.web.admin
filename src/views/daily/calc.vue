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
          {label:'처리날짜',value:'date'},
          {label:'결제대상일시',value:'period'},
          {label:'결제건수', value:'number'},
          {label:'총결제금액',value:'price'},
          {label:'실지급액', value:'price2'},
          {label:'비고',value:'etc'},
        ],
        tbody:[
          {
            date:'2020-04-20 12:34:12',
            period:'2020-04-01 ~ 2020-04-15',
            number:341,
            price:1345000,
            price2:1153000,
            etc:'결제완료'
          },
          {
            date:'2020-04-20 12:34:12',
            period:'2020-04-01 ~ 2020-04-15',
            number:341,
            price:1345000,
            price2:1153000,
            etc:'결제완료'
          },
        ],
      }
    }
  },
  
}
</script>