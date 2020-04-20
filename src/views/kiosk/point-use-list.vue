<template>
  <div class="point-use-list">
    <OptionBox/>
    <DataTable :data="data" paging="true">

    </DataTable>
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
          {label:'사용한장비', value:'machine'},
          {label:'사용한포인트', value:'usePoint'},
          {label:'남은포인트', value:'userPoint'}
        ],
        tbody:[
          {
            date:'2020-04-17 18:34:23',
            memberNumber:'010-8525-4561',
            machine:'1번세탁기',
            usePoint: 10500,
            userPoint: 3500,
          },
        ],
      }
    }
  },
  
}
</script>
