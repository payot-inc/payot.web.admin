<template>
  <div class="calc-history">
    <OptionBox/>
    <DataTable :data="data">
      <template slot="data-button">
        <v-btn outlined @click="$refs.userInfo.userInfoModal(true)">상세보기</v-btn>
      </template>
    </DataTable>

    <UserInfo ref="userInfo" />
  </div>
</template>

<script>
import DataTable from '@/components/data-table.vue';
import OptionBox from '@/components/optionBox.vue';
import UserInfo from '@/components/modal/user-info.vue';



export default {
  components:{
    DataTable, OptionBox, UserInfo, 
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
          {label:'정산금액', value:'calcPrice'},
          {label:'비고', value:'etc'},
        ],
        tbody:[
          {
            date:'2020-04-29',
            shopName:'워시쿱 돈암점',
            shopMaster:'홍길동',
            bankInfo:'우리은행 1002-537-353918',
            calcDate:'2020-04-01 ~ 2020-04-15',
            calcPrice: 340000,
            etc:'-'
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