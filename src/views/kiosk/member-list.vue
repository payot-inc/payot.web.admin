<template>
  <div class="member-list">
    <OptionBox/>
    <DataTable :data="data" paging="true">
      <template slot="data-useButton" slot-scope="{ data }">
        <v-btn outlined @click="$refs.userInfo.open(true)">이용내역 보기</v-btn>
      </template>
    </DataTable>

    <UserInfo ref="userInfo"/>
  </div>
</template>

<script>

import DataTable from '@/components/data-table.vue';
import OptionBox from '@/components/optionBox.vue';
import UserInfo from '@/components/modal/user-info.vue';

export default {
  components:{
    DataTable, OptionBox, UserInfo
  },

  data(){
    return{
      data:{
        thead:[
            { label: '회원번호', value: 'memberNumber' },
            { label: '가입날짜', value: 'date' },
            { label: '남은포인트', value: 'userPoint' },
            { label: '이용내역', value: 'useButton' },
          ],
        tbody:[
          {
            memberNumber:'010-8525-4561',
            date:'2020-02-14',
            userPoint:8500,
            buttons: null,
          },
          {
            memberNumber:'010-8525-4561',
            date:'2020-02-14',
            userPoint:8500,
            buttons: null,
          },
        ]
      }
    }
  },
  
}
</script>
