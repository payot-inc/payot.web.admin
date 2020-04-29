<template>
  <div class="calc-list">
    <OptionBox/>
    <DataTable :data="data">
      <template slot="data-button">
        <v-btn outlined @click="$refs.calcModal.calcModalOpen(true)">정산하기</v-btn>
      </template>
    </DataTable>

    <CalcModal ref="calcModal" />
  </div>
</template>

<script>
import DataTable from '@/components/data-table.vue';
import OptionBox from '@/components/optionBox.vue';
import CalcModal from '@/components/modal/calc-modal.vue';



export default {
  components:{
    DataTable, OptionBox, CalcModal, 
  },

  data(){
    return{
      data:{
        thead:[
          {label:'처리날짜', value:'date'},
          {label:'매장명', value:'shopName'},
          {label:'점주명', value:'shopMaster'},
          {label:'은행정보', value:'bankInfo'},
          {label:'정산기간', value:'calcDate'},
          {label:'결제건수', value:'orderNumber'},
          {label:'정산금액', value:'calcPrice'},
          {label:'수수료제외 정산금액', value:'lastPrice'},
          {label:'정산하기', value:'button'},
        ],
        tbody:[
          {
            date:'2020-04-29',
            shopName:'워시쿱 돈암점',
            shopMaster:'홍길동',
            bankInfo:'우리은행 1002-537-353918',
            calcDate:'2020-04-01 ~ 2020-04-15',
            orderNumber:'34',
            calcPrice: 340000,
            lastPrice:45400

          },
        ]
      }
    }
  
}
}
</script>

<style lang="scss" scoped>

.machine-remote-list{

}

</style>