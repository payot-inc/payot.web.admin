<template>
  <v-app>
    <CustomLayout>
      <router-view />
    </CustomLayout>
  </v-app>
</template>

<script>
import CustomLayout from '@/components/layout.vue'

export default {
  name: 'App',

  components: {
    CustomLayout
  },

  data: () => ({
    //
  }),
};
</script>
