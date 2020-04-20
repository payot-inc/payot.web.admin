<template>
  <v-dialog
    v-model="state"
    width="640px"
  >
    <div class="eventAddModal">
      <div class="modalTitle">
        <h4>이벤트 추가하기</h4>
        <p>아래 메뉴에서 이벤트 상세내용을 설정해주세요</p>
      </div>
      <div class="modalCont">

        <dl class="weekSelect">
          <dt>
            적용요일 선택
          </dt>
          <dd>
            <span v-for="item in weekName" :key="item" :class="{active:radio === item}">
              <input type="radio" :value="item" v-model="radio" name="weekSelect">
              <strong >{{item}}</strong>
            </span>
          </dd>
        </dl>

        <dl class="timeSelect">
          <dt>적용시간 선택</dt>
          <dd>
            <span>
              <v-menu
                ref="menu"
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="0"
                :return-value.sync="time"
                transition="scale-transition"
                background-color="#fff"
                offset-y
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-model="time"
                    v-on="on"
                    text
                  >
                    {{times}}
                  </v-btn>
                </template>
                <v-time-picker
                  v-if="menu2"
                  v-model="times"
                  @click:minute="$refs.menu.save(time)"
                  landscape
                />
              </v-menu>
            </span>
            <span>부터</span>
            <span>
              <v-menu
                ref="menu3"
                v-model="menu4"
                :close-on-content-click="false"
                :nudge-right="0"
                :return-value.sync="time"
                transition="scale-transition"
                background-color="#fff"
                offset-y
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-model="time"
                    v-on="on"
                    text
                  >
                    {{times2}}
                  </v-btn>
                </template>
                <v-time-picker
                  v-if="menu4"
                  v-model="times2"
                  @click:minute="$refs.menu3.save(time)"
                  landscape
                />
              </v-menu>
            </span>
            <span>까지</span>
          </dd>
        </dl>

        <dl class="pointTable">
          <dt>적립률 입력</dt>
          <dd>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <th>금액구간</th>
                <th>현금적립률</th>
                <th>카드적립률</th>
              </tr>
              <tr v-for="item in 5" :key="item">
                <td>{{item}}0,000원 이상</td>
                <td><input type="text"> %</td>
                <td><input type="text"> %</td>
              </tr>
            </table>
          </dd>
        </dl>

      </div>

      <div class="btns">
        <v-btn outlined @click="open(false)">
          취소
        </v-btn>
        <v-btn outlined class="ok" @click="open(false)">
          완료
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import moment from 'moment';

export default {
  data(){
    return{
      state:true,
      number:0,
      times : '0:00',
      times2:'0:00',
      menu: false,
      menu2: false,
      menu3:false,
      menu4:false,
      weekName:['월','화','수','목','금','토','일'],
      radio:'',
    }
  },
  methods:{
    open(value){
      this.state = value;
    }, 
  }
}
</script>

<style lang="scss" scoped>

.eventAddModal{
  background:#fff;
  padding:20px;

  .modalTitle{
    border-bottom:1px dashed #e2e2e2;
    margin-bottom:20px;

    h4{
      font-size:18px;font-family:'SCDream';font-weight:500;
      span{color:#EE2073;}
    }
    p{margin-top:5px;font-size:14px;color:#888}
  }

  .modalCont{
    margin-bottom:20px;

    dl{margin-bottom:30px;}
    dt{font-family:'SCDream';font-size:14px;margin-bottom:10px;}

    dl.weekSelect{
      dd{
        display:flex;
        align-items: center;
        
        span{
          display:flex;
          flex-direction: row;
          align-items: center;
          margin-right:10px;
          background:#fff;
          border:1px solid #e2e2e2;
          border-radius:5px;

          input[type=radio]:not(old){
            margin:0;padding:0;opacity:0;width:50px;height:30px;
          }
          strong{margin-left:-50px;width:50px;height:30px;display:flex;align-items: center;justify-content: center;}
          input:hover{cursor: pointer;}
        }
        span:hover{
          background:#f8f8f8;
        }

        span.active{
          border:1px solid #EE2073;
          strong{color:#EE2073}
        }
       
      }
    }

    dl.timeSelect{
      span{
        margin-right:10px;font-size:14px;

        .v-btn{background:#fff;border:1px solid #c2c2c2;background:#FFF3F3;}
      }
      
    }
  }

  .pointTable{
    table{
      width:100%;
      text-align:center;
      border-top:1px solid #292929;
    }
    th{
      border-bottom:1px solid #e2e2e2;
      padding:10px;
      background:#f8f8f8;
      font-weight:normal;
      font-size:12px;
    }
    td{
      padding:10px;
      font-size:14px;
      border-bottom:1px solid #e2e2e2;
      input{border:1px solid #c2c2c2;width:40px;border-radius:5px;padding:0 5px;text-align:center}
    }
  }

  
  .btns{
    text-align:right;

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