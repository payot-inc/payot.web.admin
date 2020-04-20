<template>
  <div class="point-plus-list">
    <OptionBox/>
    <DataTable :data="data" paging="true">

    </DataTable>

    <PointModal ref="pointModal"/>
  </div>
</template>

<script>
import PointModal from '@/components/modal/point.vue';
import DataTable from '@/components/data-table.vue';
import OptionBox from '@/components/optionBox.vue';

export default {
  components:{
    DataTable, OptionBox, PointModal
  },

  data(){
    return{
      data:{
        thead:[
          {label:'날짜', value:'date'},
          {label:'회원번호', value:'memberNumber'},
          {label:'지급한 금액', value:'price'},
          {label:'지급 사유', value:'description'},
        ],
        tbody:[
          {
            date:'2020-04-17 18:34:23',
            memberNumber:'010-8525-4561',
            price:'10,000',
            description: '2번세탁기 오작동으로 인한 충전',
          },
        ],
      }
    }
  },
  
}
</script>
