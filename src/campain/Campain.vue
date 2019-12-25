<template>
  <div id="campain">
      <div class="campain-header -layout-h">
          <div class="campain-navbar">
              <ul class="-layout-h">
                  <li><a href="#">Design</a></li>
                  <li><router-link :to="{path: 'campain/target'}">Targeting</router-link></li>
                  <li><a href="#">Notifications</a></li>
                  <li><a href="#">Integrations</a></li>
              </ul>
          </div>
      </div>
      <div class="campain-body">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@font-face {
    font-family: Manrope;
    src: url("../../public/font-family/Manrope-Regular.otf") format("opentype");
}
@import url('../../public/css/common.css');

#campain {
    font-family: Manrope, sans-serif;
    font-size: 14px;
    color: var(--bg-campain-header);
}

.campain-header {
    background: var(--bg-campain-header);
    min-height: 72px;
}

.campain-body {
    max-width: 960px;
    margin: 60px auto;
}
</style>