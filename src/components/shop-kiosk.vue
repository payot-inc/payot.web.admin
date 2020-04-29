<template>
  <div class="shop-kisok">
    <v-row>
      <v-col cols="4" v-for="item in buttons" :key="item">
        <dl>
          <dt>
            <v-icon>{{item.icon}}</v-icon>
            <span class="item-title"> 
              <strong>{{item.name}}</strong>
              <label>{{item.description}}</label>
            </span>
          </dt>
          <dd>
            <v-btn outlined>
              실행하기
            </v-btn>
          </dd>
        </dl>
      </v-col>
    </v-row>
  </div>
</template>

<script>


export default {

  data(){
    return{
      buttons:[
        {
          icon:'mdi-play',
          name:'키오스크 작동',
          description:'키오스크의 판매를 재개합니다'
        },
        {
          icon:'mdi-stop',
          name:'키오스크 정지',
          description:'키오스크의 판매를 중지합니다'
        },
        {
          icon:'mdi-replay',
          name:'키오스크 프로그램 재실행',
          description:'키오스크의 프로그램을 종료 후 재실행합니다'
        },
        {
          icon:'mdi-cog',
          name:'키오스크 윈도우 재부팅',
          description:'키오스크의 윈도우를 재부팅합니다'
        },

      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.shop-kisok{
  dl{
    border:1px solid #e2e2e2;
    dt{
      display:flex;
      align-items: center;
      padding:10px;

      .v-icon{
        width:56px;
        height:56px;
        background:#f2f2f2;
        border-radius:5px;
      }
      .item-title{
        fleX:1;
        padding:0 10px;
        strong{display:block;font-size:16px;font-weight:500;font-family:'SCDream'}
        label{display:block;font-size:12px;margin-top:4px;color:#888}
      }

    }
    dd{
      border-top:1px dashed #e2e2e2;
      padding:10px;
      background:#f2f2f2;
      text-align:right;
      .v-btn{border:0px;width:100px;height:36px;background:#494949;color:#fff;font-size:13px;letter-spacing: 0px;}
    }
  }
}

</style>
