<template>
  <div class="machine-remote-list">
    <OptionBox/>
    <DataTable :data="data" />
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
      data:{
        thead:[
          {label:'날짜',value:'date'},
          {label:'투입한장비',value:'eqName'},
          {label:'투입한금액',value:'inPrice'},
          {label:'투입한사유',value:'description'},
        ],
        tbody:[
          {
            date:'2020-04-12',
            eqName:'1번 세탁기',
            inPrice:5000,
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