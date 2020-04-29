<template>
  <div class="shop-eq-list">
    <DataTable :data="data">
      <template slot="data-button">
        <v-btn outlined @click="$refs.productList.productList(true)">상품관리</v-btn>
        <v-btn outlined @click="$refs.eqRemote.eqRemoteOpen(true)">원격투입</v-btn>
        <v-btn outlined>수정</v-btn>
        <v-btn outlined>삭제</v-btn>
      </template>
    </DataTable>
    <div class="table-bottom">
      <v-btn outlined @click="$refs.eqAdd.EqAddOpen(true)">
        <v-icon>mdi-plus</v-icon>
        <span>장비등록</span>
      </v-btn>
    </div>

    <ProductList ref="productList"/>
    <EqAdd ref="eqAdd"/>
    <EqRemote ref="eqRemote" />
  </div>
</template>

<script>
import DataTable from '@/components/data-table.vue';
import ProductList from '@/components/modal/product-list.vue';
import EqAdd from '@/components/modal/eq-add.vue';
import EqRemote from '@/components/modal/coin.vue';

export default {
  components:{
    DataTable, ProductList, EqAdd, EqRemote
  },

  data(){
    return{
      data:{
        thead:[
          {label:'장비명', value:'eqName'},
          {label:'등록일', value:'eqAddDate'},
          {label:'장비구분', value:'eqCate'},
          {label:'등록된 상품수', value:'productNumber'},
          {label:'MAC주소', value:'mac'},
          {label:'연결상태', value:'eqState'},
          {label:'관리', value:'button'}
        ],
        tbody:[
          {
            eqName:'인버터 세탁기 1번 입니다 요요요용으으으으입니다',
            eqAddDate:'2020-04-02',
            eqCate:'세탁기',
            productNumber:10,
            mac:'3A:45:D2:56:A2:C2',
            eqState:'상태 양호'
          },
          {
            eqName:'인버터 세탁기 2번',
            eqAddDate:'2020-04-02',
            eqCate:'세탁기',
            productNumber:8,
            mac:'3A:45:D2:56:A2:C2',
            eqState:'상태 양호'
          },
        ]
      }
    }
  
}
}
</script>

<style lang="scss" scoped>
.shop-eq-list{
  .table-bottom{
    margin-top:15px;
    text-align:right;
    .v-icon{
      font-size:18px;
      margin-right:5px;
    }
  }
}
</style>