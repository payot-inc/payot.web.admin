<template>
  <div class="member-list">
    <OptionBox/>
    <DataTable :data="data" paging="true">
      <template slot="data-useButton" slot-scope="{ data }">
        <v-btn outlined @click="$refs.userInfo.open(true)">이용내역 보기</v-btn>
        <v-btn outlined @click="$refs.pointModal.open(true)">포인트 지급/차감</v-btn>
      </template>
    </DataTable>

    <UserInfo ref="userInfo"/>
    <PointModal ref="pointModal"/>
  </div>
</template>

<script>
import PointModal from '@/components/modal/point.vue';
import DataTable from '@/components/data-table.vue';
import OptionBox from '@/components/optionBox.vue';
import UserInfo from '@/components/modal/user-info.vue';

export default {
  components:{
    DataTable, OptionBox, UserInfo, PointModal
  },

  data(){
    return{
      toggle:'no',
      data:{
        thead:[
            { label: '회원번호', value: 'memberNumber' },
            { label: '가입날짜', value: 'date' },
            { label: '총 결제금액', value:'totalPrice'},
            { label: '총 충전포인트', value:'totalPoint'},
            { label: '총 보너스포인트', value: 'bonusPoint'},
            { label: '총 차감포인트', value:'minusPoint'},
            { label: '남은 포인트', value: 'userPoint' },
            { label: '버튼', value: 'useButton' },
          ],
        tbody:[
          {
            memberNumber:'010-8525-4561',
            date:'2020-02-14',
            totalPrice:34500+'원',
            totalPoint:34500+'P',
            bonusPoint:500+'P',
            minusPoint:4500+'P',
            userPoint:850+'P',
            buttons: null,
          },
          {
            checkbox:null,
            memberNumber:'010-8525-4561',
            date:'2020-02-14',
            totalPrice:34500+'원',
            totalPoint:34500+'P',
            bonusPoint:500+'P',
            minusPoint:4500+'P',
            userPoint:850+'P',
            buttons: null,
          },

        ]
      }
    }
  },
  
}
</script>
