<template>
  <div class="shop-log">
    <DataTable :data="data">

    </DataTable>
  </div>
</template>

<script>
import DataTable from '@/components/data-table.vue';

export default {
  components:{
    DataTable
  },

  data(){
    return{
      data:{
        thead:[
          {label:'일시', value:'date'},
          {label:'서비스명', value:'serviceName'},
          {label:'장비명', value:'eqName'},
          {label:'MAC', value:'Mac'},
          {label:'투입금액', value:'inputPrice'},
          {label:'결제수단', value:'credit'},
          {label:'결제금액', value:'orderPrice'},
          {label:'요청자', value:'request'},
          
        ],
        tbody:[
          {
            date:'2020-04-12 12:34:12',
            serviceName:'키오스크',
            eqName:'1번세탁기',
            Mac:'3D:FA:13:Q1:D1:C4',
            inputPrice:4000,
            credit:'포인트',
            orderPrice:0,
            request:'키오스크',
          },
          {
            date:'2020-04-12 12:34:12',
            serviceName:'디바이스',
            eqName:'1번세탁기',
            Mac:'3D:FA:13:Q1:D1:C4',
            inputPrice:4000,
            credit:'현금',
            orderPrice:4000,
            request:'매장',
          },
          {
            date:'2020-04-12 12:34:12',
            serviceName:'포인플러스',
            eqName:'1번세탁기',
            Mac:'3D:FA:13:Q1:D1:C4',
            inputPrice:1000,
            credit:'카드',
            orderPrice:997,
            request:'포인플러스',
          },

        ]
      }
    }
  
}
}
</script>
