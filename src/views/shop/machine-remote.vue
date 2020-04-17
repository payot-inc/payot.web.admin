<template>
  <div class="machine-remote">
    <v-row>
      <v-col cols="3" v-for="item in 10" :key="item">
        <div class="machineItem">
          <span class="name">1번 세탁기</span>
          <span class="option">
            <label>장비종류</label>
            <strong>세탁기</strong>
          </span>
          <span class="option">
            <label>장비옵션</label>
            <strong>18Kg</strong>
          </span>
          <v-btn outlined @click="$refs.coinModal.open(true)">장비원격 금액투입</v-btn>
        </div>
      </v-col>
    </v-row>

    <CoinModal ref="coinModal"/>
  </div>
</template>

<script>
import CoinModal from '@/components/modal/coin.vue'

export default {
  components:{
    CoinModal,
  }
}
</script>

<style lang="scss" scoped>
.machine-remote{
  .machineItem{
    border:1px solid #d2d2d2;
    border-radius:5px;
    background:#fff;
    min-height:120px;
    padding:15px;
    text-align:center;

    span{
      display:flex;
      justify-content: space-between;
      align-items: center;
    }

    span.name{
      font-size:16px;
      font-family:'SCDream';
      border-bottom:1px dashed #d2d2d2;
      padding-bottom:10px;
      margin-bottom:10px;
    }

    span.option{
      font-size:14px;
      height:26px;

      label{color:#888}
      strong{font-weight:500;}
    }    

    .v-btn{
      width:100%;
      height:32px;
      margin-top:15px;
      border:1px solid #EE2073;
      border-radius:16px;
      background:#fff;
      letter-spacing: 0px;
      color:#EE2073;
    }
  }
}
</style>