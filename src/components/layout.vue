<template>
  <div id="wrap">
    <Header 
      @route-change="navigation = $event" 
      @pageLabel="pageLabel = $event"  
      @pageIcon="pageIcon = $event"

      v-if="!['login'].includes($route.name)"
    />
    <div id="container">
      <SideNav 
        :group="navigation"
        :pageLabel="pageLabel" 
        :pageIcon="pageIcon"
        v-if="!['home','login'].includes($route.name)"  
      />

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
      pageLabel:'장비관리',
      pageIcon:'home',
    }
  }
  
}
</script>