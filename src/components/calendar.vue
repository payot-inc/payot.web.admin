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
        <slot name="total" />
      </div>
    </div>
    
    <div class="calendar-view">
      <div class="day-label">
        <span v-for="item in week" :key="item">
          {{item}}
        </span>
      </div>
      <div class="week" v-for="(week, weekIndex) in printCalenderCell" :key="weekIndex">
        <dl class="day" v-for="day in week" :key="day">
          <dt :class="{active: day.isToday}">
            <span>
              {{ day.printDay }}
            </span>
          </dt>
          <slot name="dayCell" :day="day" />
          <slot name="mainCalendarDay" />
        </dl>
      </div>
    </div>
  </div> <!-- custom-calendar -->
</template>

<script>
import moment from 'moment';
import { chunk } from 'lodash';

export default {
  data(){
    return{
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      week:['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
    };
  },
  computed: {
    // 달의 총 일수 구하기
    daysInMonth() {
      return moment(this.date).daysInMonth();
    },
    // 달의 시작요일 구하기
    startWeekDay() {
      return moment(this.date).startOf('month').weekday();
    },
    // 달의 총 주의 개수 구하기
    totalWeekCount() {
      return Math.ceil((this.startWeekDay + this.daysInMonth) / 7);
    },
    // [31, 1, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, ..., 30, 1, 2]
    printCalenderCell() {
      return chunk(new Array(this.totalWeekCount * 7).fill(null).map((_, index) => {
        const printDays = moment(this.date).startOf('month').add('day', -this.startWeekDay).add('day', index)
        return {
          printDay:printDays.clone().date(),
          format:printDays.clone().format('YYYY-MM-DD'),
          isToday: moment().format('YYYY-MM-DD') === printDays.clone().format('YYYY-MM-DD'),
        }
      }), 7);
    }
  },
  methods: {

  }
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
          display:flex;
          align-items: center;
          height:35px;
          font-family:'SCDream';
          font-size:13px;
          font-weight:500;
          border-bottom:1px dashed #e2e2e2;
        }

        dt.active{
          span{
            display:inline-block;
            background:#D3CEF3;
            height:28px;
            line-height:28px;
            width:28px;
            text-align:center;
            border-radius:50%;
            color:#2816A7;
          }
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

        dd.homeDay{
          span{
            font-size:11px;
            font-family:'dotum';

            strong{color:#595959}
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