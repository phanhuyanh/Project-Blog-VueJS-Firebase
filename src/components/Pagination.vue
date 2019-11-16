<template>
  <div class="navigation">
    <nav class="-flex -full-width -full-height -center-x -center-y">
      <div class="chevron-left" :class="{'pointer-event' : $route.params.id < 2}">
        <router-link :to="'/blog/page/' + (+$route.params.id - 1)" class="-full-width -full-height -flex">
          <span>
            <i class="fas fa-chevron-left"></i>
          </span>
        </router-link>
      </div>
      <div class="nav-page -flex">
        <div class="page" v-for="(item, index) in createPag" :key="index" :class="{'active': $route.params.id == index + 1}">
          <router-link :to="'/blog/page/' + (index + 1)" class="-block -text-center -full-width -full-height">{{ item }}</router-link>
        </div>
      </div>
      <div class="chevron-right" :class="{'pointer-event' : Math.ceil(listBlog.length / limit) == $route.params.id}">
        <router-link :to="'/blog/page/' + (+$route.params.id + 1)" class="-full-width -full-height -flex">
          <span>
            <i class="fas fa-chevron-right"></i>
          </span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script src="./pagination.js"></script>

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

.page a {
  color: #181818;
}

.page.active {
    background: #181818;
}

.page.active a {
    color: #fff;
}
</style>