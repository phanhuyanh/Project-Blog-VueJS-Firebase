<template>
  <div class="-flex -center-x -center-y -full-width -ful-height par-loader">
    <div class="loader" :style="{ width: w + 'px', height: h + 'px' }"></div>
  </div>
</template>

<script>
export default {
  props: {
    l_width: String,
    l_height: String
  },
  data: () => ({
    w: 200,
    h: 200
  }),
  created() {
    this.w = this.l_width || 100;
    this.h = this.l_height || 100;
  }
};
</script>

<style scoped>
.par-loader {
  padding: 30px 0;
}

.loader {
  position: relative;
  background: linear-gradient(45deg, #0bd2ff, #fff);
  border-radius: 50%;
  animation: rotate360 1s linear infinite;
}

.loader::after {
  content: "";
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  background: #fff;
  border-radius: 50%;
}
@keyframes rotate360 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
