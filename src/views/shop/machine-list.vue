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
          {label:'장비명', value:'name'},
          {label:'종류', value:'cate'},
          {label:'규모', value:'storege'},
          {label:'MAC주소', value:'mac'},
          {label:'등록된상품수', value:'product'},
          {label:'등록일', value:'date'},
        ],
        tbody:[
          {
            name:'1번 세탁기',
            cate:'세탁기',
            storege:'18Kg',
            mac:'68:C6:3A:CA:FC:A5',
            product:10,
            date:'2019-11-24',
          },
          {
            name:'2번 세탁기',
            cate:'세탁기',
            storege:'18Kg',
            mac:'68:C6:3A:CA:FC:A5',
            product:10,
            date:'2019-11-24',
          },
          {
            name:'3번 세탁기',
            cate:'건조기',
            storege:'18Kg',
            mac:'68:C6:3A:CA:FC:A5',
            product:10,
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