<template>
  <v-dialog
    v-model="state"
    width="900px"
  >
    <div class="userInfo-modal">
      <div class="modalTitle">
        <h4><span>010-8525-4561 님,</span> 이용내역</h4>
        <p>아래서 원하시는 메뉴를 선택 후 진행해주세요</p>
      </div>

      <div class="modalCont">

        <div class="user-total">
          <dl>
            <dt>총 결제금액</dt>
            <dd>114,000원</dd>
          </dl>
          <dl>
            <dt>총 보너스포인트</dt>
            <dd>11,400P</dd>
          </dl>
          <dl>
            <dt>총 사용포인트</dt>
            <dd>56,300P</dd>
          </dl>
        </div>

        <DataTable :data="data" paging="true">
          <template slot="data-useButton" slot-scope="{ data }">
            <v-btn outlined @click="$refs.userInfo.open(true)">이용내역 보기</v-btn>
          </template>
        </DataTable>
      </div>

      <div class="btns">
        <v-btn outlined class="ok" @click="open(false)">
          닫기
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import OptionBox from '@/components/optionBox.vue';
import DataTable from '@/components/data-table.vue';

export default {
  components:{
    OptionBox, DataTable
  },
  data(){
    return{
      state:false,
      number:0,

      data:{
        thead:[
          {label:'날짜', value:'date'},
          {label:'충전', value:'charge'},
          {label:'차감', value:'deduction'},
          {label:'적립', value:'point'},
        ],
        tbody:[
          {
            date:'2019-12-24 14:51:12',
            charge:'10000',
            deduction:'0',
            point:'250',
          },
          {
            date:'2019-12-24 14:51:12',
            charge:'0',
            deduction:'5000',
            point:'50'
          },
          {
            date:'2019-12-24 14:51:12',
            charge:'10000',
            deduction:'0',
            point:'250',
          },
          {
            date:'2019-12-24 14:51:12',
            charge:'0',
            deduction:'5000',
            point:'50'
          },
          {
            date:'2019-12-24 14:51:12',
            charge:'0',
            deduction:'5000',
            point:'50'
          },
        ]
      }
    }
  },
  methods:{
    open(value){
      this.state = value;
    }
  }
}
</script>

<style lang="scss" scoped>

.userInfo-modal{
  background:#fff;

.modalTitle{
    display:flex;
    flex-direction: column;
    justify-content: center;
    border-bottom:1px dashed #e2e2e2;
    padding:0 20px;
    height:80px;
    
    h4{
      font-size:18px;font-family:'SCDream';font-weight:500;
      span{color:#EE2073;}
    }
    p{margin-top:5px;font-size:14px;color:#888;padding:0px;margin-bottom:0px;}
  }

  .modalCont{
    padding:20px;

    .user-total{
      
      border:1px solid #e2e2e2;
      border-top:1px solid #EE2073;
      display:flex;
      margin-bottom:30px;

      dl{
        flex:1;
        border-right:1px solid #e2e2e2;
        text-align:center;
        dt{font-size:13px;font-family:'SCDream';padding:10px;border-bottom:1px dashed #e2e2e2;background:#F6F1F3}
        dd{font-size:18px;padding:10px;font-family:'SCDream';font-weight:500;}
      }
      dl:last-child{border-right:0px;}
    }

    table{
      width:100%;font-size:14px;
      margin-bottom:20px;
      border-top:1px solid #292929;

      th{height:40px;border-bottom:1px solid #EE2073}
      td{height:50px;border-bottom:1px solid #e2e2e2;text-align:center;padding:0 10px;width:25%;}
      td:last-child{font-weight:bold;color:#EE2073}
      td:first-child{border-right:1px solid #e2e2e2;}
      tr:nth-child(2n) td{background:#f8f8f8;}
    }
    
  } 

  .btns{
    padding:0 20px;
    height:60px;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    text-align:right;
    border-top:1px solid #e2e2e2;

    .v-btn{
      margin-left:10px;
      border:1px solid #c2c2c2;
      letter-spacing: 0px;
    }
    .v-btn.ok{
      border:1px solid #EE2073;
      color:#EE2073
    }
  }
}



</style>