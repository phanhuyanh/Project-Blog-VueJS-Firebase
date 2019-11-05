<template>
  <div class="navigation">
    <nav class="-flex -full-width -full-height -center-x -center-y">
      <div class="chevron-left">
        <a href="#" class="-full-width -full-height -flex">
          <span>
            <i class="fas fa-chevron-left"></i>
          </span>
        </a>
      </div>
      <div class="nav-page -flex">
        <div class="page active">
          <a href="#" class="-block -text-center -full-width -full-height">1</a>
        </div>
        <div class="page">
          <a href="#" class="-block -text-center -full-width -full-height">2</a>
        </div>
        <div class="page -block -text-center">...</div>
        <div class="page">
          <a href="#" class="-block -text-center -full-width -full-height">10</a>
        </div>
      </div>
      <div class="chevron-right">
        <a href="#" class="-full-width -full-height -flex">
          <span>
            <i class="fas fa-chevron-right"></i>
          </span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navigation {
    padding: 30px 0;
}

nav .chevron-left {
    margin-right: 5px;
}

nav .chevron-right {
   
} 

.nav-page {
    padding: 0px;
}

.nav-page .page {
    width: 23px;
    height: 20px;
    margin-right: 5px;
}


.page.active {
    background: #181818;
}

.page.active a {
    color: #fff;
}
</style>