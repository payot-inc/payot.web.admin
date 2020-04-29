<template>

  <div class="home">

  </div>

</template>

<script>

export default {

  data(){
    return{
      totalSales:[
        {
          name:'총 매출'
        },
        {
          name:'장비현금매출'
        },
        {
          name:'키오스크 충전(현금)'
        },
        {
          name:'키오스크 충전(카드)'
        },
        {
          name:'포인플러스'
        },
        {
          name:'데일리세탁'
        },

      ],
    }
  }
}
</script>

<style lang="scss" scoped>

.home{
  display:flex;
  flex:1;
  flex-direction: column;
  background:#f8f8f8;
  padding:20px;
  border:1px solid #e2e2e2;
}



</style>