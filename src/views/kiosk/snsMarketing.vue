<template>
  <div class="snsMarketing">
    <h4><span>Step01</span> 필터옵션 선택</h4>
    <div class="filter-option">
      <dl>
        <dt>
           기준날짜
        </dt>
        <dd>
          <span>
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
          </span>
          <span><input type="radio" name="select"> 이전</span>
          <span class="bar">
            |
          </span>
          <span><input type="radio" name="select"> 이후</span>
        </dd>
      </dl>
      <dl>
        <dt>
          대상회원 선택
        </dt>
        <dd>
          <span><input type="radio" name="select2"> 회원 가입일 기준</span>
          <span class="bar">
            |
          </span>
          <span><input type="radio" name="select2"> 회원 이용일 기준</span>
          <span class="bar">
            |
          </span>
          <span><input type="radio" name="select2"> 전체 가입자</span>
        </dd>
      </dl>
      <dl class="priceInput">
        <dt>
          사용금액 구간
        </dt>
        <dd>
          <span>
            <input type="text">
            <label>원</label>
          </span>
          <span>
            이상 사용자
          </span>
        </dd>
      </dl>
    </div>
    
    <h4><span>Step02</span> 이벤트내용 입력</h4>
    <div class="detail-option">
      <dl class="priceInput">
        <dt>이벤트 종류</dt>
        <dd>
          <span><input type="radio" name="select3">문자만 발송</span>
          <span class="bar">
            |
          </span>
          <span><input type="radio" name="select3">문자 + 포인트적립 발송</span>
        </dd>
      </dl>
      <dl class="priceInput">
        <dt>적립금액</dt>
        <dd>
          <span>
            <input type="text">
            <label>원</label>
          </span>
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
    </div>
    
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
      date: new Date().toISOString().substr(0, 10),
      menu: false,
    }
  }
}
</script>

<style lang="scss" scoped>

.snsMarketing{

  h4{
    font-size:16px;font-family:'SCDream';font-weight:500;margin-bottom:15px;
    span{color:#EE2073;font-size:14px;}
  }

  .filter-option{margin-bottom:50px;}

  dl:first-child{border-top:1px solid #292929}
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
        input[type=radio]{width:15px;height:15px;margin-right:5px;}
        input[type=text]{border:1px solid #c2c2c2;height:32px;border-radius:5px;padding:0 5px;padding-right:37px;}
      }

      span.bar{color:#d2d2d2;}
    }
  }

  dl.priceInput{
    dd{
      span{
        position:relative;

        label{position:absolute;right:0px; width:32px;border-left:1px solid #e2e2e2;text-align:center;font-size:12px;color:#888}
      }
    }
  }

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