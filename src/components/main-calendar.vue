<template>
  <div class="custom-calendar">
    <div class="calendar-head">
      <div class="year-control">
        <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="0"
            transition="scale-transition"
            background-color="#fff"
            offset-y
          >
          <template v-slot:activator="{ on }">
            <v-btn
              v-model="date"
              v-on="on"
              text
            >
              {{date}}
            </v-btn>
          </template>
          <v-date-picker
            v-model="date"
            @input="menu = false" 
            locale="ko-kr" 
            type="month"
          />
        </v-menu>
      </div>

      <div class="total">
        <span>
          <label>총 결제건수</label>
          <strong>134 건</strong>
        </span>
        <span>
          <label>총 결제금액</label>
          <strong>1,850,300 원</strong>
        </span>
      </div>
    </div>
    
    <div class="calendar-view">
      <div class="day-label">
        <span v-for="item in week" :key="item">
          {{item}}
        </span>
      </div>
      <div class="week" v-for="(items, index) in 5" :key="index">
        <dl class="day" v-for="(item, index) in week" :key="index">
          <dt>{{index}}</dt>
          <dd>
            <span>
              <label>결제건수</label>
              <strong>
                18
              </strong>
            </span>
            <span class="pointer">
              <label>결제금액</label>
              <strong>
                134000
              </strong>
            </span>
          </dd>
        </dl>
      </div>
    </div>
  </div> <!-- custom-calendar -->
</template>

<script>
export default {
  data(){
    return{
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      week:['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
    }
  },
}
</script>

<style lang="scss" scoped>

.custom-calendar{

  .calendar-head{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:20px;

    .v-btn{
      background:#fff;
      border:0px;
      font-size:18px;
      border-radius:10px;
      width:200px;
      height:40px;
      border-radius:20px;
    }


    .total{
      display:flex;

      span{
        display:flex;
        border-radius:5px;
        justify-content: space-between;
        align-items: center;
        border:1px solid #e2e2e2;
        margin-left:10px;
        padding:0 10px;
        height:40px;

        label{font-size:13px;width:100px;}
        strong{flex:1;}
      }

    }

  }

  

  .calendar-view{
    border:1px solid #e2e2e2;
    background:#fff;

    .day-label{
      display:flex;
      align-items: center;
      background:#f8f8f8;

      span{
        flex:1;
        display:flex;
        align-items: center;
        justify-content: center;
        text-align:center;
        font-family:'SCDream';
        font-weight:500;
        font-size:14px;
        height:40px;
        border-right:1px solid #e2e2e2;
      }

      span:first-child{
        background:#fbf6f6;
      }
      span:last-child{
        background:#f8f9fd;
        border-right:0px;
      }
    }

    .week{
      display:flex;
      
      .day{
        flex:1;
        border-right:1px solid #e2e2e2;
        border-bottom:1px solid #e2e2e2;
        padding:10px;

        dt{
          text-align:left;
          height:35px;
          line-height:35px;
          font-family:'SCDream';
          font-size:13px;
          font-weight:500;
          border-bottom:1px dashed #e2e2e2;

        }
        dd{
          min-height:100px;
          padding:10px 0;
          

          span{
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            font-size:12px;
            font-family:'gulim';
            margin-bottom:5px;
            
            label{letter-spacing:-0.7px;color:#797979}
          }

          span.pointer{
            strong{color:#EE2073}
          }

        }
      }

      dl:first-child{
        dt{color:#d22828}
      }

      dl:last-child{
        border-right:0px;
        dt{color:#0085DE}
      }
    }
  }
}

</style>