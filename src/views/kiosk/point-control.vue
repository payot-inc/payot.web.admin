<template>
  <div class="member-list">
    <OptionBox/>
    <DataTable :data="data" paging="true">
      <template slot="data-button">
        <v-btn outlined @click="$refs.pointModal.open(true)">포인트 지급/차감하기</v-btn>
      </template>
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
          {label:'회원번호', value:'memberNumber'},
          {label:'가입날짜', value:'date'},
          {label:'총 충전금액', value:'totalPoint'},
          {label:'총 사용한 포인트', value:'usePoint'},
          {label:'총 받은 포인트', value:'bonusPoint'},
          {label:'최종 보유포인트', value:'lastPoint'},
          {label:'포인트 지급/차감', value:'button'},
        ],
        tbody:[
          {
            memberNumber:'010-8525-4561',
            date:'2020-02-14',
            totalPoint:8500,
            usePoint:3400,
            bonusPoint:500,
            lastPoint:5600,
          },
          {
            memberNumber:'010-8525-4561',
            date:'2020-02-14',
            totalPoint:8500,
            usePoint:3400,
            bonusPoint:500,
            lastPoint:5600,
          },
        ]
      }
    }
  },
  
}
</script>
