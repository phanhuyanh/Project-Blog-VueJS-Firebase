<template>
  <div id="home">
        <header-layout></header-layout>
        <about></about>
        <num-scoller></num-scoller>
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
import NumScoller from './NumScroller.vue';

export default {
    components: {
      HeaderLayout,
      About,
      NumScoller,
      Contact,
      CopyRight,
      BackToTop
    }
}
</script>

<style>
</style>