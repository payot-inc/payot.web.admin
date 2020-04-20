<template>
  <div id="wrap">
    <Header @route-change="navigation = $event" @pageLabel= "pageLabel = $event" v-if="!['login'].includes($route.name)"/>
    <div id="container">
      <SideNav :group="navigation" :pageLabel ="pageLabel" v-if="!['home','login'].includes($route.name)"/>

      <slot />
    
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import SideNav from '@/components/sideNav.vue';

export default {
  components:{
    Header, SideNav
  },
  data() {
    return {
      navigation: 'shop',
      pageLabel: '매장관리'
    }
  }
  
}
</script>