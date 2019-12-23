<template>
  <div class="modal modal-img -flex -flex-direction-col">
    <div class="modal-head">
      <div class="download-icon modal-icon">
        <i class="fas fa-download"></i>
      </div>
      <div class="close-icon modal-icon">
        <i class="fas fa-times"></i>
      </div>
    </div>
    <div class="modal-body">
      <img src="https://www.w3schools.com/howto/img_snow.jpg">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.modal-img {
  background: #333;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10000;
  opacity: .96;
}

.modal-head {
  display: flex;
  justify-content: flex-end;
  padding: 30px;
}
.modal-icon {
  margin-left: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-icon i{
  font-size: 2rem;
  color: #fff;
}

.modal-body {
  height: 100%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-body img {
  width: 70%;
  height: 70%;

}

</style>