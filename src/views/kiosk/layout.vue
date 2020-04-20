<template>
  <div id="contents">
    <Article>
      <router-view />
    </Article>
  </div>
</template>

<script>

import Article from '@/components/articleLayout.vue';

export default {
  components:{
    Article,
  },
}
</script>
