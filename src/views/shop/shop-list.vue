<template>
  <div class="shop-list">
    <OptionBox/>
    <DataTable :data="data">
      <template slot="data-button">
        <v-btn outlined @click="$refs.shopDetail.DetailOpen(true)">상세보기</v-btn>
      </template>
    </DataTable>

    <ShopDetail ref="shopDetail" />
  </div>
</template>

<script>
import DataTable from '@/components/data-table.vue';
import OptionBox from '@/components/optionBox.vue';
import ShopDetail from '@/components/modal/shop-detail.vue';



export default {
  components:{
    DataTable, OptionBox, ShopDetail, 
  },

  data(){
    return{
      data:{
        thead:[
          {label:'매장명', value:'shopName'},
          {label:'점주명', value:'adminName'},
          {label:'연락처', value:'phone'},
          {label:'매장주소', value:'shopAddress'},
          {label:'등록일자', value:'pushDate'},
          {label:'등록된 장비수', value:'eqNumber'},
          {label:'상세보기', value:'button'},
        ],
        tbody:[
          {
            shopName:'워시쿱 돈암점',
            adminName:'김창국',
            phone:'010-3472-3272',
            shopAddress:'부산시 금정구 부산대학로 63번길 2 과학기술연구동 201호',
            pushDate:'2020-03-04',
            eqNumber:12,
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