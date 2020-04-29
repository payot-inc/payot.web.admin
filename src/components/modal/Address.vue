<template>
  <v-dialog
    v-model="state"
    width="500px"
  >
    <div class="daumPost">
      <vue-daum-postcode @complete="onSelectAddress($event)" class="daumPostBox" />
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      state:false,
    }
  },
  methods: {
    addressOpen(value){
      this.state = value;
    },
    onSelectAddress(event) {
      console.log(event);
      this.$emit('on:select', event);
      this.state = false;
    }
  }
}
</script>

<style lang="scss" scoped>

.daumPost{
  background:#fff;
  .daumPostBox{width:100%;;height:600px;max-height:700px;}
}

</style>