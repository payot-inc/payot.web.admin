<template>
  <div class="machine-remote-list">
    <OptionBox/>
    <DataTable v-bind:data="tableData" />
  </div>
</template>

<script>
import DataTable from '@/components/data-table.vue';
import OptionBox from '@/components/optionBox.vue';

export default {
  components:{
    DataTable, OptionBox
  },

  data(){
    return{
      tableData:{
        tableName:'장비리스트',
        thead:['장비명','종류','규모','MAC주소','등록된 상품수','등록일'],
        tbody:[
          {
            name:'1번 세탁기',
            category:'세탁기',
            storege:'18Kg',
            mac:'68:C6:3A:CA:FC:A5',
            productNumber:10,
            date:'2019-11-24',
          },
          {
            name:'2번 세탁기',
            category:'세탁기',
            storege:'18Kg',
            mac:'68:C6:3A:CA:FC:A5',
            productNumber:10,
            date:'2019-11-24',
          },
          {
            name:'3번 세탁기',
            category:'건조기',
            storege:'18Kg',
            mac:'68:C6:3A:CA:FC:A5',
            productNumber:10,
            date:'2019-11-24',
          },
        ]
      }
    }
  
}
}
</script>

<style lang="scss" scoped>

.machine-remote-list{

}

</style>