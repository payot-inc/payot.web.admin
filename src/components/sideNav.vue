<template>
  <div id="sideNav">
    <div class="sideTitle">
      <v-icon>mdi-store</v-icon>
      <span>{{pageLabel}}</span>
    </div>

    <div class="sideMenu">
      <dl v-for="items in params[group]" :key="items">
        <dt>{{items.label}}</dt>
        <dd>
          <v-list>
            <v-list-item 
              link 
              v-for="item in items.child" 
              :key="item"
              @click="pageChange(item.name, item.label)"
            >
              <span>{{item.label}}</span>
            </v-list-item>
          </v-list>
        </dd>
      </dl>
    </div>  
  </div>
</template>

<script>
export default {
  props: ['group','pageLabel'],
  data(){
    return{
      params: {
        shop: [
          {
            label: '장비 매출분석',
            name: 'sales',
            active: true,
            child: [
              {
                label: '일별 매출현황',
                name: 'sales-days',
              },
              {
                label: '시간별 매출현황',
                name: 'sales-times',
              },
              {
                label: '요일별 매출현황',
                name: 'sales-week',
              },
              {
                label: '월별 매출현황',
                name: 'sales-month',
              },
            ]
          },
          {
            label: '장비제어',
            name: 'machine',
            active: false,
            child: [
              {
                label: '금액 원격투입',
                name: 'machine-remote',
              },
              {
                label: '원격투입내역',
                name: 'machine-remote-list',
              },
              {
                label: '장비현황',
                name: 'machine-list',
              },
            ]
          },
        ],
        kiosk:[
          {
            label: '키오스크 설정',
            name: '',
            active: true,
            child: [
              {
                label: '키오스크 설정변경',
                name: 'kiosk-option',
              },
              {
                label: '상품등록 및 관리',
                name: 'kiosk-product',
              },
              {
                label: '이벤트관리',
                name: 'kiosk-event',
              },
              {
                label: '키오스크 제어',
                name: 'kiosk-control',
              },
            ]
          },
          {
            label: '키오스크 회원관리',
            name: '',
            active: true,
            child: [
              {
                label: '회원목록',
                name: 'member-list',
              },
              {
                label: '포인트 지급/차감',
                name: 'point-control',
              },
              {
                label: '포인트 지급내역',
                name: '',
              },
              {
                label: '포인트 차감내역',
                name: '',
              },
              {
                label: 'SNS마케팅',
                name: '',
              },
            ]
          },
          {
            label: '키오스크 이용내역',
            name: '',
            active: true,
            child: [
              {
                label: '포인트 적립내역',
                name: '',
              },
              {
                label: '포인트 이용내역',
                name: '',
              },
            ]
          },
        ],
        poinPlus:[

        ]
      },
    }
  },
  methods:{
    pageChange(name, lable){
       this.$router.push({name:name});
    }
  }
}
</script>


<style lang="scss" scoped>

#sideNav{
  min-width:220px;
  background:#fff;
  border-right:1px solid #e2e2e2;

  .sideTitle{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom:1px solid #e2e2e2;
    height:140px;

    .v-icon{font-size:50px;color:#d2d2d2;color:#D93E97}
    span{font-family:'SCDream';font-size:18px;font-weight:500;}

  }

  .sideMenu{

    padding:20px 0;

    dl{
      margin-bottom:20px;
      padding-bottom:20px;
      border-bottom:1px solid #e2e2e2;

      dt{
        font-size:15px;
        font-family:'SCDream';
        padding-left:10px;
      }

      dd{
        margin-top:10px;

        .v-list{padding:0px;}
        .v-list-item{
          font-size:13px;
          min-height:28px;
          padding-left:15px;

          letter-spacing:-0.6px;

          span{color:#797979}
          span:hover{color:#D93E97}
        }
      }
    }

    dl:last-child{border-bottom:0px;}
  }
  
}

</style>