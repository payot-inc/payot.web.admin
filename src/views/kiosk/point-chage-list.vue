<template>
  <div class="point-chage-list">
    <OptionBox/>
    <DataTable :data="data" paging="true">

    </DataTable>

    <PointModal ref="pointModal"/>
  </div>
</template>

<script>
import DataTable from '@/components/data-table.vue';
import OptionBox from '@/components/optionBox.vue';

export default {
  components:{
    DataTable, OptionBox,
  },

  data(){
    return{
      data:{
        thead:[
          {label:'날짜', value:'date'},
          {label:'회원번호', value:'memberNumber'},
          {label:'결제방법', value:'credit'},
          {label:'충전금액', value:'price'},
          {label:'추가적립포인트', value:'point'},
          {label:'남은포인트', value:'userPoint'},
        ],
        tbody:[
          {
            date:'2020-04-17 18:34:23',
            memberNumber:'010-8525-4561',
            credit:'카드',
            price:10000,
            point:500,
            userPoint: 10500,
          },
        ],
      }
    }
  },
  
}
</script>
