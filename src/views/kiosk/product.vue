<template>
  <!-- <Article> -->
    <div class="kiosk-product">
      <dl class="eqSelect">
        <dt>
          <span>step 01</span>
          <strong>장비선택</strong>
        </dt>
        <dd>
          <v-list>
            <v-list-item-group v-model="eqList" color="indigo">
              <v-list-item 
                link v-for="(item, i) in 10" 
                :key="i"
              >
                {{item}}번 세탁기 18Kg
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </dd>
      </dl>
      <dl class="eqProductList">
        <dt>
          <span>step 02</span>
          <strong>장비 상품목록</strong>
        </dt>
        <dd>
          <p class="textGuide">
            1번세탁기를 선택하셨습니다
          </p>
          
          <v-row>
            <v-col cols="12" v-for="item in 10" :key="item">
              <div class="productItem">
                <span class="name">
                  <label>일반세탁</label>
                  <v-btn outlined>
                    <v-icon>mdi-home</v-icon>
                  </v-btn>
                </span>
                <span>
                  <label>동작시간</label>
                  <strong>27분</strong>
                </span>
                <span>
                  <label>상품가격</label>
                  <strong>7000</strong>
                </span>
              </div>
            </v-col>
          </v-row>
        </dd>
      </dl>
    </div>
  <!-- </Article> -->
</template>

<script>

import Article from '@/components/articleLayout.vue';

export default {
  components:{
    Article,
  },
  data(){
    return{
      eqList:1
    }
  }
}
</script>

<style lang="scss" scoped>

.kiosk-product{
  display:flex;

  dl{

    dt{
      span{display:block;color:#888}
      strong{display:block;font-size:18px;font-family: 'SCDream';font-weight:500}
    }
    dd{margin-top:20px;border-top:1px solid #e2e2e2;}
  }

  .eqSelect{
    border-right:1px solid #292929;
    min-width:240px;

    .v-list{
      padding:0px;
      .v-list-item{border-bottom:1px solid #e2e2e2;font-size:14px;font-family:'SCDream'}
      .v-list-item:last-child{border-bottom:0px;}
    }
  }
  .eqProductList{
    flex:1;
    dt{padding:0 30px;}
    dd{
      padding:20px;

      p.textGuide{background:#f2f2f2;padding:5px;}

      .productItem{
        border:1px solid #e2e2e2;
        padding:20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.05);
        
        span{
          display:flex;
          justify-content: space-between;
          align-items: center;
          font-size:14px;
          height:26px;

          label{color:#888}

        }

        span.name{
          margin-bottom:5px;
          label {font-size:16px;font-Weight:500;font-family:'SCDream';color:#292929;}
        }
      }
    }
  }
}

</style>