<template>
  <!-- <Article> -->
    <div class="kiosk-product">
      <dl class="eqSelect">
        <dt>
          <div class="list-title">
            <span>step 01</span>
            <strong>장비선택</strong>
          </div>
        </dt>
        <dd>
          <v-list>
            <v-list-item-group v-model="eqList" color="indigo">
              <v-list-item 
                link v-for="(item, i) in 8" 
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
          <div class="list-title">
            <span>step 02</span>
            <strong>장비 상품목록</strong>
          </div>
          <v-btn outlined @click="$refs.productAdd.open(true)">상품등록하기</v-btn>
        </dt>
        <dd>
          <p class="textGuide">
            <b>1번 세탁기</b>를 선택하셨습니다
          </p>

          <ul class="product-list">
            <li v-for="item in 8" :key="item">
              <div class="list-icon">
                <v-btn outlined>
                  <v-icon>mdi-drag-horizontal-variant</v-icon>
                </v-btn>
              </div>
              <div class="list-item-cont">
                <h5>표준빨래</h5>
                <div class="item-info">
                  <span>
                    <label>동작시간</label>
                    <strong>40분</strong>
                  </span>
                  <span>
                    <label>상품가격</label>
                    <strong>5,000원</strong>
                  </span>
                </div>
              </div>
              <div class="btns">
                <v-btn outlined>수정</v-btn>
                <v-btn outlined>복사</v-btn>
                <v-btn outlined>판매중지</v-btn>
                <v-btn outlined>삭제</v-btn>
              </div>
            </li>
          </ul>

        </dd>
      </dl>
      <ProductAdd ref="productAdd" />
    </div>
  <!-- </Article> -->
</template>

<script>

import Article from '@/components/articleLayout.vue';
import ProductAdd from '@/components/modal/product-add.vue';

export default {
  components:{
    Article, ProductAdd
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
      display:flex;
      align-items: center;
      justify-content: space-between;

      .list-title{
        span{display:block;color:#888}
        strong{display:block;font-size:18px;font-family: 'SCDream';font-weight:500}
      }
      .v-btn{
        background:#292929;color:#fff;
        border:0px;border-radius:5px;
      }
    }
    dd{margin-top:20px;border-top:1px solid #e2e2e2;}
  }

  .eqSelect{
    border-right:1px solid #292929;
    min-width:260px;

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

      p.textGuide{
        font-family:'SCDream';
        background:#f2f2f2;padding:15px;
        font-weight:400;
        b{color:#EE2073;font-weight:500}
      }

      .product-list{
        li{
          border:1px solid #e2e2e2;
          padding:15px 0;
          box-shadow: 0 0 10px rgba(0,0,0,0.05);
          display:flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom:15px;

          .list-icon{
            display:flex;
            align-items: center;
            justify-content: center;
            width:90px;

            .v-btn{
              border:0px;
              width:60px;height:60px;
              border-radius:50%;
              overflow: hidden;
            }
          }

          .list-item-cont{
            flex:1;
            border-left:1px solid #e2e2e2;
            padding-left:20px;
            h5{font-size:18px;font-family:'SCDream';font-weight:500;}

            .item-info{
              margin-top:10px;

              span{
                margin-right:20px;
                padding-right:20px;
                border-right:1px solid #e2e2e2;
                label{margin-right:10px;font-size:14px;color:#888}
                strong{color:#EE2073}
              }

              span:last-child{border-right:0px;}
            }
          }
          
          .btns{
            margin-right:20px;
            
            .v-btn{
              margin-left:10px;
              border:1px solid #292929;
              border-radius:5px;
              letter-spacing: 0px;
              height:30px;
            }
          }
        }
      }
    }
  }
}

</style>