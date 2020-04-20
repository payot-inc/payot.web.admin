<template>
  <div class="dataTable">
    <div class="tableTop">
      <h4>목록 <span>(2)</span></h4>
      <v-btn outlined>
        <v-icon>mdi-microsoft-excel</v-icon>
        <label>엑셀출력</label>
      </v-btn>
    </div>
    <table cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th v-for="head in data.thead" :key="head.value">{{ head.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cell, cellIndex) in data.tbody" :key="cellIndex">
          <td v-for="value in dataKeys" :key="value">
            <slot :name="`data-${value}`" :data="cell[value]">{{ cell[value] }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="paging" v-if="paging">
      <v-pagination
      color="#EE2073"
      v-model="page"
      :length="5"
      ></v-pagination>
    </div>
  </div>
</template>

<script>


export default {
  props:{
    data: Array,
    paging: Boolean,
  },
  data(){
    return{
      page:1,
    }
  },
  computed: {
    dataKeys() {
      return this.data.thead.map(({ value }) => value);
    }
  }
}
</script>

<style lang="scss" scoped>
  .dataTable{
    .tableTop{
      display:flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom:15px;

      h4{
        font-family:'SCDream';font-weight:500;color:#494949;
        span{color:#d22828}
      }

      .v-btn{
          height:32px;
          border-radius:5px;
          border:1px solid #139B3B;
          .v-icon{font-size:22px;color:#139B3B}
          label{letter-spacing: 0px;margin-left:10px;color:#139B3B}
      }
    }

    
    table{width:100%;margin:0px;padding:0px;border-top:1px solid #494949;}
    thead{background:#f8f8f8;}
    th{border-bottom:1px solid #c2c2c2;height:40px;font-family:'SCDream';font-weight:400;font-size:13px;}
    td{
      border-bottom:1px solid #e2e2e2;
      text-align:center;
      padding:5px 10px;
      font-size:14px;color:#494949;
      border-right:1px solid #e2e2e2;
      height:40px;


      .v-btn{
        height:26px;
        padding:0 10px;
        font-size:12px;
        letter-spacing:0px;
        color:#EE2073;
        border:1px solid #EE2073;
      }
      
    }
    th:first-child{border-right:1px solid #292929;}
    td:first-child{border-right:1px solid #292929;}
    td:last-child{border-right:0px;}

    .paging{margin-top:30px;}
 }

  
</style>