<template>
  <div class="member-list">
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
          {label:'매장명', value:'shopName'},
          {label:'회원번호', value:'userNumber'},
          {label:'남은 포인트', value:'userPoint'},
          {label:'가입일자', value:'joinDate'},
          {label:'회원 상세정보', value:'button'}
        ],
        tbody:[
          {
            shopName:'워시쿱 돈암점',
            userNumber:'010-8525-4561',
            userPoint:13000,
            joinDate:'2020-04-20'
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