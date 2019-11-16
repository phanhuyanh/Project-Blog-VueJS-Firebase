<template>
  <div id="home">
        <header-layout></header-layout>
        <about></about>
        <contact></contact>
        <copy-right></copy-right>
        <back-to-top></back-to-top>
  </div>
</template>

<script>
import HeaderLayout from "./HeaderLayout.vue";
import About from "./About.vue";
import Contact from './Contact.vue';
import CopyRight from './CopyRight.vue';
import BackToTop from './BackToTop.vue';

export default {
    components: {
      HeaderLayout,
      About,
      Contact,
      CopyRight,
      BackToTop
    }
}
</script>

<style>
</style>