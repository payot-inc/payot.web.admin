<template>
  <div class="snsMarketing">
    <dl>
      <dt>
        기준날짜선택
      </dt>
      <dd>
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
            :first-day-of-week="1"
            @input="menu = false"

          />
        </v-menu>
      </dd>
    </dl>
    <dl>
      <dt>
        대상회원 선택
      </dt>
      <dd>
        <span><input type="radio" name="select"> 기준날짜 이전 가입자</span>
        <span>
          |
        </span>
        <span><input type="radio" name="select"> 기준날짜 이후 가입자</span>
        <span>
          |
        </span>
        <span><input type="radio" name="select"> 전체 가입자</span>
        
      </dd>
    </dl>
    <dl>
      <dt>
        발송내용입력
      </dt>
      <dd>
        <textarea placeholder="발송내용을 입력해주세요"></textarea>
      </dd>
    </dl>
    <div class="sandBtns">
      <v-btn outlined>발송완료</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      radioGroup: 1,
      target:[
        '기준날짜 이전 가입자 대상','기준날짜 이후 가입자 대상'
      ],
      date: new Date().toISOString().substr(0, 10),
      menu: false,
    }
  }
}
</script>

<style lang="scss" scoped>

.snsMarketing{
  border-top:1px solid #292929;

  dl{border-bottom:1px solid #e2e2e2;
    display:flex;
    font-size:14px;
    dt{
      width:150px;background:#f8f8f8;
      display:flex;
      align-items: center;
      padding-left:15px;
      font-family:'SCDream'
    }
    dd{
      flex:1;
      display:flex;
      align-items: center;
      padding:15px;
  
      textarea{
        height:200px;
        min-height:200px;
        max-height:300px;
        width:100%;
        min-width:100%;
        max-width:100%;
        border:1px solid #c2c2c2;
        border-radius:5px;
        padding:10px;
      }

      span{
        display:flex;align-items: center;;margin-right:20px;
        input[type="radio"]{width:15px;height:15px;margin-right:5px;}
      }
    }
  }
  
  .targetSelect{
    .v-btn{margin-right:5px;border:1px solid #c2c2c2;letter-spacing:0;}
    .v-btn.active{border:1px solid #EE2073;color:#EE2073}
  }

  .v-input--selection-controls{margin-top:0px;padding:0px;}

  .sandBtns{
    text-align: center;
    margin-top:30px;

    .v-btn{
      background:#292929;
      color:#fff;
      border:0px;
      border-radius:5px;
      width:200px;
    }
  }
}

</style>