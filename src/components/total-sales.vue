<template>
  <div class="total-sales">
    <dl class="total">
      <dt>총 매출금액</dt>
      <dd>
        <span class="number">137건</span>
        <span class="price">1,358,000원</span>
      </dd>
    </dl>
    <dl>
      <dt>최소매출</dt>
      <dd>
        <span class="number">12건</span>
        <span class="price">248,000원</span>
        <span class="date">2020-04-14</span>
      </dd>
    </dl>
    <dl>
      <dt>최대매출</dt>
      <dd>
        <span class="number">34건</span>
        <span class="price">427,000원</span>
        <span class="date">2020-04-14</span>
      </dd>
    </dl>
  </div>
</template>

<style lang="scss" scoped>

.total-sales{
  display:flex;
  justify-content: space-around;
  border:1px solid #e2e2e2;
  margin-bottom:40px;
  border-top:1px solid #292929;

  dl{
    flex:1;
    text-align:center;
    border-right:1px solid #e2e2e2;

    dt{
      background:#f2f2f2;
      height:40px;
      display:flex;
      align-items: center;
      justify-content: center;
    }
    dd{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding:10px;
      min-height:100px;

      span{display:block;margin-bottom:4px;}
      span.number{font-size:14px;}
      span.price{font-size:18px;font-weight:500;font-family:'SCDream'}
      span.date{font-size:12px;color:#888}
    }
  }
  dl.total{
    
    dt{background:#FFF3F3;}
    dd{
      span.price{color:#EE2073}
    }
  }


  dl:last-child{border-right:0px;}
}

</style>