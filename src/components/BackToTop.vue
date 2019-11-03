<template>
  <div class="back-to-top" @click="scollToTop()">
      <div class="-flex -center-x -center-y -full-width -full-height">
          <span><i class="fas fa-arrow-up"></i></span>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        scollToTop() {
            window.scroll(0, 0)
        }
    }
}
</script>

<style scoped>

.back-to-top {
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 10;
    background: #00a0ec;
    border-radius: 5px;
    cursor: pointer;
}

</style>