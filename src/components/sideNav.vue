<template>
  <div id="sideNav">
    <div class="sideTitle">
      <v-icon>mdi-{{pageIcon}}</v-icon>
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
  props: ['group','pageLabel','pageIcon'],
  
  data(){
    return{
      params: {
        shop: [
          {
            label: '매장관리',
            name: 'shop',
            active: true,
            child: [
              {
                label: '매장리스트',
                name: 'shop-list',
              },
              {
                label: '매장등록',
                name: 'shop-add',
              },

            ]
          },
          {
            label: '회원관리',
            name: 'member',
            active: true,
            child: [
              {
                label: '회원리스트',
                name: 'member-list',
              },
            ]
          },
          {
            label: '매장 정산관리',
            name: 'calc',
            active: false,
            child: [
              {
                label: '정산내역',
                name: 'calc-history',
              },
              {
                label: '정산하기',
                name: 'calc-list',
              },
            ]
          },
        ],
        
        poin:[
          {
            label: '매출관리',
            name: '',
            active: true,
            child: [
              {
                label: '실시간 매출내역',
                name: 'poin-sales',
              },
              {
                label: '일자별 매출내역',
                name: 'poin-sales-days',
              },
              {
                label: '정산내역',
                name: 'poin-calc',
              },
            ]
          },
        ],

        daily:[
          {
            label: '매출관리',
            name: '',
            active: true,
            child: [
              {
                label: '실시간 매출내역',
                name: 'daily-sales',
              },
            ]
          },
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
  min-width:200px;
  background:#343241;
  border-right:1px solid #494949;

  .sideTitle{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:140px;
    background:rgba(0,0,0,0.15);

    .v-icon{font-size:50px;color:#fff}
    span{
      font-family:'SCDream';
      font-size:18px;
      font-weight:500;
      margin-top:5px;
      color:#fff;
    }

  }

  .sideMenu{

    padding:20px 0;

    dl{
      margin-bottom:20px;
      padding-bottom:20px;
      border-bottom:1px solid rgba(0,0,0,0.3);
      

      dt{
        font-size:15px;
        font-family:'SCDream';
        padding-left:10px;
        color:#fff;
      }

      dd{
        margin-top:10px;

        .v-list{
          padding:0px;
          border-radius:0px;
          background:none;
        }
        .v-list-item{
          font-size:13px;
          min-height:30px;
          padding-left:15px;
          letter-spacing:-0.6px;

          span{
            color:rgba(255,255,255,0.7);
            font-family:'SCDream'
          }
        }
        .v-list-item:hover{
          span{color:#fff}
        }
      }
    }

    dl:last-child{border-bottom:0px;}
  }
  
}

</style>