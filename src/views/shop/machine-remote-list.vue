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
        thead:['날짜','투입한 금액','투입한 사유'],
        tbody:[
          {
            date:'2020-04-12',
            price:5000,
            description:'현금투입 오작동으로 인한 CS처리'
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