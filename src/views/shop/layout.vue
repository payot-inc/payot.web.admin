<template>
  <Article>
    <router-view />
  </Article>
</template>

<script>

import Article from '@/components/articleLayout.vue';

export default {
  components:{
    Article,
  },
}
</script>
