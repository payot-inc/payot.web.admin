<template>
  <div class="snsMarketing">
    <h4><span>Step01</span> 회원 설정</h4>
    <div class="filter-option">
      <dl class="member-number">
        <dt>
          대상회원
        </dt>
        <dd>
          <span>
            <b>245</b>명
          </span>
        </dd>
      </dl>
      <dl>
        <dt>
          대상회원 설정
        </dt>
        <dd>
          <span><input type="radio" name="select2" value="all" checked v-model="picked"> 전체 가입자</span>
          <span class="bar">
            |
          </span>
          <span><input type="radio" name="select2" value="befor" v-model="picked"> 회원 가입일 기준</span>
          <span class="bar">
            |
          </span>
          <span><input type="radio" name="select2" value="after" v-model="picked"> 회원 이용일 기준</span>
        </dd>
      </dl>
      <dl v-if="picked !== 'all'">
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
          <span><input type="radio" name="select3" checked value="massage" v-model="picked2">문자만 발송</span>
          <span class="bar">
            |
          </span>
          <span><input type="radio" name="select3" value="point" v-model="picked2">문자 + 포인트적립 발송</span>
        </dd>
      </dl>
      <dl class="priceInput" v-if="picked2 === 'point'">
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

    
    <div class="last-price">
      <h5>최종금액</h5>
      <span>
        <strong>12,500</strong>원
      </span>
    </div>

    
    <div class="sandBtns">
      <v-btn outlined>이벤트 진행하기</v-btn>
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
      picked:'',
      picked2:'',
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

  dl.member-number{
    dd{
      span{
        display:flex;
        align-items: flex-end;

        b{
          color:#EE2073;
          font-size:26px;
          font-family:'SCDream';
          line-height:32px;
          margin-right:5px;
        }
      }
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

  .last-price{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top:30px;
    background:#FFF3F3;
    font-family:'SCDream';
    font-weight:500;
    padding:15px;

    h5{font-weight:400;font-size:14px;}
    strong{font-size:26px;margin-right:5px;color:#EE2073}
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
      height:40px;
      letter-spacing: 0px;
      font-family:'SCDream';
      font-weight:400;
    }
  }
}

</style>