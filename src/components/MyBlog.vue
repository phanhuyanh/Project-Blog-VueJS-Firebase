<template>
  <div class="my-blog">
    <div class="my-blog-head -flex">
      <search></search>
    </div>
    <template>
      <loader v-if="isLoading"></loader>
      <div class="my-blog-main -grid" v-else>
        <template v-if="listBlogLimit.length">
        <blog-item
          v-for="item in listBlogLimit"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          :timestamp="item.timestamp"
          :id="item.id"
        ></blog-item>
        </template>
        <div v-else>
          <p>Không có blog nào hãy tạo nhiều blog hơn.</p>
          <router-link to="/user-information/add-blog"></router-link>
        </div>
      </div>
    </template>
    <div class="pag" v-if="max_page != 1">
      <div class="navigation">
        <nav class="-flex -full-width -full-height -center-x -center-y">
          <div class="chevron-left cursor-pointer" @click="--page" :style="{'disable': page == 1}">
            <div class="-full-width -full-height -flex">
              <span>
                <i class="fas fa-chevron-left"></i>
              </span>
            </div>
          </div>
          <div class="nav-page -flex">
            <div class="page" v-for="(numPage, index) in createPag" :key="index" :class="{'active': index  == pageCur}" @click="nextPage(index)">
              <div class="-block -text-center -full-width -full-height cursor-pointer">{{ numPage }} </div>
            </div>
            <!--
            <div class="page">
              <div class="-block -text-center -full-width -full-height cursor-pointer">2</div>
            </div>
            <div class="page -block -text-center">...</div>
            <div class="page">
              <div class="-block -text-center -full-width -full-height cursor-pointer">10</div>
            </div>
            -->
          </div>
          <div class="chevron-right cursor-pointer" @click="++page" :style="{'disable': page == max_page}">
            <div class="-full-width -full-height -flex">
              <span>
                <i class="fas fa-chevron-right"></i>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script src="./my_blog.js"></script>

<style scoped>
.my-blog-head {
  justify-content: flex-end;
  padding-bottom: 15px;
  border-bottom: 1px solid #9b9b9b;
}

.my-blog-main {
  padding: 30px 0;
  grid-row-gap: 15px;
}

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

.page.active {
  color: #fff;
}
</style>