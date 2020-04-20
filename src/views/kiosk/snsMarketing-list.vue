<template>
  <div class="point-plus-list">
    <OptionBox/>
    <DataTable :data="data" paging="true">

    </DataTable>
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
          {label:'발송날짜', value:'date'},
          {label:'발송대상', value:'target'},
          {label:'마케팅내용', value:'description'},
        ],
        tbody:[
          {
            date:'2020-04-17 18:34:23',
            target:'2020년 4월 17일 이전 가입자',
            description: '안녕하세요',
          },
        ],
      }
    }
  },
  
}
</script>
