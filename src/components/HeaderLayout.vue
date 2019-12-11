<template>
  <div id="header">
    <div class="container">
      <div class="main-header -flex -full-width -full-height">
        <logo></logo>
        <div class="right">
          <menu-layout></menu-layout>
          <profile></profile>
          <log-in></log-in>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import MenuLayout from "./MenuLayout.vue";
import Profile from "./Profile.vue";
import LogIn from "./LogIn.vue";

export default {
  components: {
    Logo,
    MenuLayout,
    Profile,
    LogIn
  }
};
</script>

<style>
div#home {
  background: #181818;
}

.right {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 15px;
  align-items: center;
}

div#header {
  color: #fff;
  background: #181818;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
.main-header {
  justify-content: space-between;
}
</style>
