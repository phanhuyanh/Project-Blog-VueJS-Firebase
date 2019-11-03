<template>
  <div id="page-blog">
      <header-layout></header-layout>
      <list-blog></list-blog>
      <contact></contact>
      <copy-right></copy-right>
  </div>
</template>

<script>
import HeaderLayout from './HeaderLayout.vue';
import Contact from './Contact.vue';
import CopyRight from './CopyRight.vue';
import ListBlog from './ListBlog.vue';

export default {
    components: {
        HeaderLayout,
        Contact,
        CopyRight,
        ListBlog
    }
}
</script>

<style scoped>
@import url('../../public/css/main.css');
@import url('../../public/css/layout.css');

#page-blog #list-blog{
    padding: 120px 0 50px 0;
}
</style>