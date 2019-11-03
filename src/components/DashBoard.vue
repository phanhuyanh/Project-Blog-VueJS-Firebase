<template>
  <div id="dashboard" class="-flex">
      <list-category></list-category>
      <router-view></router-view>
  </div>
</template>

<script>
import ListCategory from './ListCategory.vue';

export default {
    data: () => ({
        index: 0
    }),
    components: {
        ListCategory
    },
}
</script>

<style scoped>

#dashboard {
    height: 100vh;
}


</style>