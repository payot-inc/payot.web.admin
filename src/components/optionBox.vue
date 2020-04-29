<template>
  <div class="optionBox">
    <div class="boxTitle">
      검색옵션
    </div>
    <div class="boxCont">
      <dl class="date">
        <dt>기간</dt>
        <dd>
          <ul>
            <li class="dateSelect">
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                :nudge-right="0"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    outlined
                    v-model="date"
                    readonly
                    v-on="on"
                    hide-details
                  />
                </template>
                <v-date-picker v-model="date" @input="menu = false"  locale="ko-kr"/>
              </v-menu>
            </li>
            <li class="dateSelect">
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                :nudge-right="0"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    outlined
                    v-model="date"
                    readonly
                    v-on="on"
                    hide-details
                  />
                </template>
                <v-date-picker v-model="date" @input="menu = false" />
              </v-menu>
            </li>
            <li class="dateQuick">
              <v-btn text>1주일</v-btn>
              <v-btn text>1개월</v-btn>
              <v-btn text>3개월</v-btn>
            </li>
            <li>
              <v-btn text>검색</v-btn>
            </li>
          </ul>           
        </dd>
      </dl>
      <dl class="keyword">
        <dt>매장명 검색</dt>
        <dd>
          <ul>
            <li class="textInput">
                <v-text-field outlined hide-details></v-text-field>
            </li>
            <li>
              <v-btn text>검색</v-btn>
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="keyword">
        <dt>회원번호 검색</dt>
        <dd>
          <ul>
            <li class="textInput">
                <v-text-field outlined hide-details></v-text-field>
            </li>
            <li>
              <v-btn text>검색</v-btn>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.optionBox{
  margin-bottom:50px;

  .boxTitle{
    border-bottom:1px solid #494949;
    padding-bottom:10px;
    font-family:'SCDream';
    font-weight:500;
  }

  .boxCont{
    dl{
      display:flex;
      align-items: center;
      border-bottom:1px solid #e2e2e2;

      dt{
        display:flex;
        align-items: center;
        width:150px;
        background:#f8f8f8;
        padding-left:15px;
        font-size:14px;
        height:40px;
        font-family:'SCDream';
        font-weight:400;
      }
      dd{
        flex:1;
        display:flex;
        align-items: center;
        justify-content: flex-start;
        padding:0 15px;

        ul{
          display:flex;
          align-items: center;
          justify-content: flex-start;

          li{margin-right:10px;}
        }
      }
    }
  }

  .date{
    .dateSelect{width:130px;}
    .v-input{flex:none;}
    .v-btn{height:26px;background:#292929;color:#fff;}

    .dateQuick{
      display:flex;
      align-items: center;

      .v-btn{background:#fff;border:1px solid #c2c2c2;color:#292929;margin-right:5px;}
      .v-btn:last-child{margin-right:0px;}
    }
  }

  .keyword{
    .v-input__slot{width:200px;}
    .v-text-field--outlined > .v-input__control > .v-input__slot{width:200px;}
    .v-btn{height:26px;background:#292929;color:#fff;}
  }
}
</style>