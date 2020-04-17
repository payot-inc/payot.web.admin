<template>
  <div class="home">
    <v-row>
      <v-col cols="12" xl="9" lg="9">
        <div class="left-view">
          
          <div class="calendar-view">
            <div class="total-row">
              <v-row>
                <v-col cols="12" xl="3" lg="3" md="4" sm="6"  v-for="item in totalSales" :key="item">
                  <dl>
                    <dt>{{item.name}}</dt>
                    <dd>
                      <span>
                        <label>총 건수</label>
                        <strong>414 건</strong>
                      </span>
                      <span>
                        <label>총 결제금액</label>
                        <strong>1,454,000 원</strong>
                      </span>
                    </dd>
                  </dl>
                </v-col>
              </v-row>
            </div>
            
            <Calendar>
              <template slot="mainCalendarDay">
                <dd class="homeDay">
                  <span>
                    <label>장비현금</label>
                    <strong>100,300 원</strong>
                  </span>
                  <span>
                    <label>키오스크</label>
                    <strong>245,000 원</strong>
                  </span>
                  <span>
                    <label>포인플러스</label>
                    <strong>6,300 원</strong>
                  </span>
                  <span>
                    <label>데일리세탁</label>
                    <strong>65,000 원</strong>
                  </span>
                </dd>
              </template>
            </Calendar>
          </div>
        </div> <!-- left -->
      </v-col>
      <v-col cols="12" xl="3" lg="3">
        <div class="right-view">
          <div class="quick-menu">
            <v-row>
              <v-col v-for="btn in quickBtns" :key="btn">
                <v-btn outlined>
                  <div class="quick-btn">
                    <v-icon>mdi-home</v-icon>
                    <span>{{btn.name}}</span>
                  </div>
                </v-btn>
              </v-col>
            </v-row>
          </div>
          <div class="eqUse-view">
            <h4>최근 장비(현금) 이용내역</h4>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <th>날짜</th>
                <th>장비명</th>
                <th>사용금액</th>
              </tr>
              <tr v-for="col in 8" :key="col">
                <td>2019-04-16 12:34:45</td>
                <td>1번 세탁기</td>
                <td>7,500 원</td>
              </tr>
            </table>
          </div>
          <div class="kioskUse-view">
            <h4>최근 키오스크 이용내역</h4>
            <ul>
              <li>
                <div class="cont">
                  <span class="date">
                    <label class="use">사용</label>
                    2019-04-16 08:45:12
                  </span>
                  <span class="phone">010-***7-4561</span>
                </div>
                <span class="price">3,500원</span>
              </li>
              <li v-for="list in 5" :key="list">
                <div class="cont">
                  <span class="date">
                    <label class="chage">충전</label>
                    2019-04-16 08:45:12
                  </span>
                  <span class="phone">010-8525-4561</span>
                </div>
                <span class="price">5,000원</span>
              </li>
            </ul>
          </div>
        </div><!-- right -->
      </v-col>
    </v-row>
  </div> 
</template>

<script>
import Calendar from '@/components/calendar.vue'

export default {
  components:{
    Calendar
  },
  data(){
    return{
      totalSales:[
        {
          name:'장비현금매출'
        },
        {
          name:'키오스크 충전금액'
        },
        {
          name:'포인플러스'
        },
        {
          name:'데일리세탁'
        },

      ],

      quickBtns:[
        {name:'금액원격투입'},
        {name:'원격투입내역'},
        {name:'장비현황'},
        {name:'키오스크 설정'},
        {name:'이벤트관리'},
        {name:'키오스크 제어'},
        {name:'회원포인트 변경'},
        {name:'SNS마케팅'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.home{
  display:flex;

  h4{font-size:16px;font-family:'SCDream';font-weight:500;}

  .left-view{

    .calendar-view{
      background:#fff;
      padding:20px;
      border:1px solid #e2e2e2;
      box-shadow: 0 0 15px rgba(0,0,0,0.07);
      border-top:2px solid #292929;
    }

    .total-row{
      
      margin-bottom:40px;

      
      dl{
        border:1px solid #e2e2e2;
        
        padding:15px;
        background:#fff;
        
        dt{
          font-family:'SCDream';font-size:16px;
          margin-bottom:10px;
          border-bottom:1px solid #e2e2e2;
          padding-bottom:10px;
        }
        dd{
          span{
            display:flex;
            justify-content: space-between;
            align-items: center;
            font-size:14px;
            height:26px;

            label{color:#888}

          }
        }
      }
    }
  }
  .right-view{

    .quick-menu{
      border-top:1px solid #e2e2e2;
      border-left:1px solid #e2e2e2;
      height:auto;
      margin-bottom:20px;

      

      .row{padding:0px;margin:0px}
      .col{padding:0px;margin:0px;width:25%}
 
      .v-btn{
        width:100%;
        height:100px;
        border:0px;
        border-right:1px solid #e2e2e2;
        border-bottom:1px solid #e2e2e2;
        border-radius:0px;
        background:#fff;
        

        .quick-btn{
          text-align:center;
          display:flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .v-icon{font-size:32px;color:#c2c2c2;}
          span{font-size:12px;letter-spacing:-0.6px;margin-top:5px;}
        }
      }
    }

    .eqUse-view{
      margin-bottom:20px;
      background:#fff;
      border:1px solid #e2e2e2;
      padding:15px;
 
      table{
        width:100%;
        margin-top:10px;
        background:#fff;
        text-align:right;
        font-size:14px;
      
        th{
          border-bottom:1px solid #e2e2e2;
          height:40px;
          background:#f8f8f8;
          padding:0 10px;
        }
        td{
          border-bottom:1px solid #e2e2e2;
          height:35px;
          padding:0 10px;
        }
        th:first-child{text-align:left;}
        td:first-child{text-align:left;color:#888}
      }
    }

    .kioskUse-view{
      background:#fff;
      padding:15px;
      border:1px solid #e2e2e2;

      ul{
        border-top:2px solid #292929;
        background:#fff;
        margin-top:10px;

        li{
          border-bottom:1px solid #e2e2e2;
          padding:10px 0;
          font-size:14px;
          position:relative;

          span{display:block;}
          .cont{
            span.date{
              color:#888;
              label{display:inline-block;padding:0 5px;;border-radius:3px;margin-right:5px;font-size:12px;}
              label.use{color:#fff;background:#d22828;}
              label.chage{color:#fff;background:#0085DE}
            }
            span.phone{margin-top:5px;font-size:14px;font-weight:500}
          }
          span.price{
            position:absolute;right:10px;bottom:10px;font-size:16px;font-weight:500
          }
        }

      }
    }

    
  }
}

</style>